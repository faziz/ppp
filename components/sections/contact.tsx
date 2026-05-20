import { Mail } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { TelegramIcon } from "@/components/icons";
import { siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Contact() {
  return (
    <section id="contact" className="container py-24 scroll-mt-16">
      <SectionHeading number="05" title="Get in touch" />
      <div className="mx-auto max-w-2xl space-y-6 text-center">
        <h3 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          Let&apos;s build amazing business together.
        </h3>
        <p className="text-balance text-muted-foreground leading-relaxed">
          I&apos;m looking for business partners to build amazing software business together in America.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href={`mailto:${siteConfig.email}`}
            className={cn(buttonVariants({ size: "lg" }))}
          >
            <Mail className="h-4 w-4" />
            {siteConfig.email}
          </a>
          <a
            href={siteConfig.socials.telegram}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ size: "icon", variant: "outline" }))}
            aria-label="Telegram"
          >
            <TelegramIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
      <footer className="mt-24 border-t border-border pt-8 text-center font-mono text-xs text-muted-foreground">
        Built with Next.js & Tailwind · © {new Date().getFullYear()} {siteConfig.name}
      </footer>
    </section>
  );
}
