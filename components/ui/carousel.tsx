"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
          <div
            key={image.src}
            className={cn("relative w-full shrink-0 snap-start", aspectClass[aspect])}
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${images.length}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={sizes}
              className="object-cover"
            />
          </div>
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
  );
}
