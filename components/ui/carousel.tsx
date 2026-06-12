"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type CarouselImage = {
  src: string;
  alt: string;
};

type CarouselProps = {
  images: CarouselImage[];
  className?: string;
  aspect?: "video" | "square" | "wide";
  sizes?: string;
};

const aspectClass: Record<NonNullable<CarouselProps["aspect"]>, string> = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[16/10]",
};

export function Carousel({
  images,
  className,
  aspect = "video",
  sizes = "(min-width: 768px) 50vw, 100vw",
}: CarouselProps) {
  const scrollerRef = React.useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null);

  const scrollToIndex = React.useCallback((index: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const target = scroller.children[index] as HTMLElement | undefined;
    if (!target) return;
    scroller.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
  }, []);

  const handleScroll = React.useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const { scrollLeft, clientWidth } = scroller;
    const index = Math.round(scrollLeft / clientWidth);
    setActiveIndex(Math.max(0, Math.min(images.length - 1, index)));
  }, [images.length]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollToIndex(Math.min(images.length - 1, activeIndex + 1));
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollToIndex(Math.max(0, activeIndex - 1));
    }
  };

  if (images.length === 0) return null;

  const showControls = images.length > 1;

  return (
    <>
      <div
        className={cn("group/carousel relative overflow-hidden rounded-lg border bg-muted", className)}
        role="region"
        aria-roledescription="carousel"
        aria-label="Project screenshots"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <div
          ref={scrollerRef}
          onScroll={handleScroll}
          className="flex h-full snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setLightboxIndex(index)}
              aria-label={`Expand image: ${image.alt}`}
              className={cn(
                "group/slide relative w-full shrink-0 cursor-zoom-in snap-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset",
                aspectClass[aspect],
              )}
              aria-roledescription="slide"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={sizes}
                className="object-cover transition-transform duration-300 group-hover/slide:scale-[1.02]"
              />
            </button>
          ))}
        </div>

        {showControls && (
          <>
            <button
              type="button"
              onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              aria-label="Previous slide"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/70 p-1.5 text-foreground opacity-0 backdrop-blur transition-opacity hover:bg-background disabled:cursor-not-allowed disabled:opacity-0 group-hover/carousel:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollToIndex(Math.min(images.length - 1, activeIndex + 1))}
              disabled={activeIndex === images.length - 1}
              aria-label="Next slide"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/70 p-1.5 text-foreground opacity-0 backdrop-blur transition-opacity hover:bg-background disabled:cursor-not-allowed disabled:opacity-0 group-hover/carousel:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <ChevronRight className="h-4 w-4" />
            </button>

            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-background/60 px-2 py-1 backdrop-blur">
              {images.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => scrollToIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === activeIndex}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    index === activeIndex
                      ? "w-4 bg-foreground"
                      : "w-1.5 bg-foreground/40 hover:bg-foreground/70",
                  )}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}

type LightboxProps = {
  images: CarouselImage[];
  startIndex: number;
  onClose: () => void;
};

function Lightbox({ images, startIndex, onClose }: LightboxProps) {
  const [index, setIndex] = React.useState(startIndex);
  const [zoomed, setZoomed] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    setZoomed(false);
  }, [index]);

  React.useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowRight") {
        setIndex((i) => Math.min(images.length - 1, i + 1));
      } else if (event.key === "ArrowLeft") {
        setIndex((i) => Math.max(0, i - 1));
      }
    };
    window.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [images.length, onClose]);

  if (!mounted) return null;

  const image = images[index];
  const showNav = images.length > 1;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8 animate-in fade-in"
    >
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onClose();
        }}
        aria-label="Close"
        className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <X className="h-5 w-5" />
      </button>

      {showNav && (
        <>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setIndex((i) => Math.max(0, i - 1));
            }}
            disabled={index === 0}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-4"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setIndex((i) => Math.min(images.length - 1, i + 1));
            }}
            disabled={index === images.length - 1}
            aria-label="Next image"
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-4"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      <div
        onClick={(event) => event.stopPropagation()}
        className={cn(
          "relative flex h-full w-full items-center justify-center",
          zoomed ? "overflow-auto" : "overflow-hidden",
        )}
      >
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            setZoomed((z) => !z);
          }}
          aria-label={zoomed ? "Zoom out" : "Zoom in"}
          className={cn(
            "relative max-h-full max-w-full transition-transform duration-200",
            zoomed ? "cursor-zoom-out" : "cursor-zoom-in",
          )}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={1920}
            height={1080}
            sizes="100vw"
            priority
            className={cn(
              "h-auto w-auto select-none object-contain",
              zoomed
                ? "max-h-none max-w-none scale-[2] origin-center"
                : "max-h-[85vh] max-w-[90vw]",
            )}
          />
        </button>
      </div>

      {showNav && (
        <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 font-mono text-xs text-white backdrop-blur">
          {index + 1} / {images.length}
        </div>
      )}
    </div>,
    document.body,
  );
}
