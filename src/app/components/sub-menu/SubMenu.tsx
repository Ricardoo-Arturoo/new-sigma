import React, { useEffect, useRef, useState } from "react";

export type SubMenuItem = {
  key: string;
  label: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
};

type SubMenuProps = {
  /** Trigger content shown in the nav (e.g. text, button, icon) */
  title?: React.ReactNode;
  /** Optional: provide a custom trigger instead of `title` */
  children?: React.ReactNode;
  /** Items to render inside the submenu */
  items: SubMenuItem[];
  /** Delay in ms before closing after mouse leave or blur */
  closeDelayMs?: number;
  /** Minimum width of the submenu in px */
  minWidth?: number;
  /** Additional classes for the root <li> */
  className?: string;
  /** aria-label for the submenu */
  ariaLabel?: string;
};

export default function SubMenu({
  title,
  children,
  items,
  closeDelayMs = 150,
  minWidth = 140,
  className = "",
  ariaLabel = "submenu",
}: SubMenuProps) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const rootRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  function openNow() {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setOpen(true);
  }

  function closeWithDelay() {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setOpen(false);
      timeoutRef.current = null;
    }, closeDelayMs);
  }

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  const trigger = children ?? <span>{title ?? "Menu ▸"}</span>;

  return (
    <li
      ref={rootRef}
      className={`relative px-4 py-2 ${className}`}
      onMouseEnter={openNow}
      onMouseLeave={closeWithDelay}
      onFocus={openNow}
      onBlur={closeWithDelay}
    >
      <div className="flex items-center select-none ">{trigger}</div>

      <div
        className={
          "absolute left-full top-0 bg-blue-400  shadow-md z-20 transition-opacity duration-200 " +
          (open ? "opacity-100 visible pointer-events-auto " : "opacity-0 invisible pointer-events-none ")
        }
        style={{ minWidth }}
        role="menu"
        aria-label={ariaLabel}
      >
        <ul className="py-1 divide-y divide-blue-300 ">
          {items.map((item) => (
            <li
              key={item.key}
              className={`px-4 py-2 hover:bg-blue-500 hover:underline cursor-pointer  ${item.className ?? ""}`}
              role="menuitem"
              tabIndex={0}
              onClick={(e) => {
                item.onClick?.(e);
                setOpen(false);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  item.onClick?.(e as unknown as React.MouseEvent);
                  setOpen(false);
                }
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}