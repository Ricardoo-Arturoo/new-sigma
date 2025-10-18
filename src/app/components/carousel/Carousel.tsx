"use client" 
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Slide = {
  src: string; 
  alt?: string;
  caption?: string;
};

type Props = {
  slides: Slide[];
  className?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number; 
};

export const Carousel: React.FC<Props> = ({
  slides,
  className = "",
  autoPlay = true,
  autoPlayInterval = 4000,
}) => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slidesCount = slides.length;
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!autoPlay || isPaused || slidesCount <= 1) return;
    window.clearTimeout(timerRef.current ?? undefined);
    timerRef.current = window.setTimeout(
      () => setIndex((i) => (i + 1) % slidesCount),
      autoPlayInterval
    );
    return () => window.clearTimeout(timerRef.current ?? undefined);
  }, [index, autoPlay, isPaused, autoPlayInterval, slidesCount]);

  useEffect(() => {
    return () => window.clearTimeout(timerRef.current ?? undefined);
  }, []);

  useEffect(() => {
    if (slidesCount <= 1) return;
    const next = slides[(index + 1) % slidesCount];
    if (!next?.src) return;
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = next.src;
    document.head.appendChild(link);
    return () => {
      try {
        document.head.removeChild(link);
      } catch {}
    };
  }, [index, slides, slidesCount]);

  const goPrev = () => setIndex((i) => (i - 1 + slidesCount) % slidesCount);
  const goNext = () => setIndex((i) => (i + 1) % slidesCount);
  const goTo = (i: number) => setIndex(((i % slidesCount) + slidesCount) % slidesCount);

  if (slidesCount === 0) return null;

  return (
    <div
      className={`max-w-4xl mx-auto mt-5 mb-5 ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative overflow-hidden rounded-lg">
        <div className="relative h-64 sm:h-80 md:h-96">
          {slides.map((s, i) => {
            const visible = i === index;
            return (
              <div
                key={i}
                aria-hidden={!visible}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  visible ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <div className="w-full h-full relative">
                  <Image
                    src={s.src}
                    alt={s.alt ?? `Slide ${i + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
                    priority={visible}                    
                    className="object-cover"
                  />
                </div>

                {s.caption && (
                  <div className="absolute left-4 bottom-10 bg-blue-500/70 text-white text-sm px-4 py-4 rounded">
                    {s.caption}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Controls */}
        {slidesCount > 1 && (
          <>
            <button
              onClick={goPrev}
              aria-label="Previous slide"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 hover:bg-green-600/70 cursor-pointer focus:outline-none"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={goNext}
              aria-label="Next slide"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 hover:bg-green-600/70 cursor-pointer focus:outline-none"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2 bg-black/20 rounded-full px-3 py-1 items-center">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i === index ? "bg-green-500/50" : "bg-white/50 hover:bg-green-400/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Carousel;