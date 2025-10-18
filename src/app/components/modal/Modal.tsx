'use client';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  ariaLabel?: string;
};

export default function Modal({ open, onClose, children, ariaLabel = 'Modal' }: ModalProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    previouslyFocused.current = document.activeElement as HTMLElement | null;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab') {
        const focusable = overlayRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable || focusable.length === 0) {
          e.preventDefault();
          return;
        }
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', handleKey);

    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      const first = overlayRef.current?.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      first?.focus();
    }, 0);
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = original;
      previouslyFocused.current?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  const modalNode = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      aria-modal="true"
      role="dialog"
      aria-label={ariaLabel}
    >
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onMouseDown={(e) => {
          if (e.target === overlayRef.current) onClose();
        }}
      />
      <div className="relative z-10 max-w-lg w-120 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mx-4">
        {children}
        <button
          onClick={onClose}
          className=" cursor-pointer absolute top-3 right-3 text-gray-600 hover:text-green-600 dark:text-gray-300"
          aria-label="Cerrar modal"
        >
          ✕
        </button>
      </div>
    </div>
  );

  return createPortal(modalNode, document.body);
}