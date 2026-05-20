import Link from "next/link";
import { ArrowDown, Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { TelegramIcon } from "@/components/icons";
import { siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="container relative flex min-h-[88vh] flex-col justify-center py-24">
      <div className="max-w-3xl space-y-6 animate-fade-up">
        <p className="font-mono text-sm text-muted-foreground">
          Hi, my name is
        </p>
        <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          {siteConfig.name}.
        </h1>
        <h2 className="text-balance text-3xl font-bold tracking-tight text-muted-foreground sm:text-4xl md:text-5xl">
          I build systems that scale.
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {siteConfig.description} Currently focused on developer platforms,
          distributed systems, and the boring infrastructure that makes
          teams ship faster.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link href="#projects" className={cn(buttonVariants({ size: "lg" }))}>
            View my work
            <ArrowDown className="h-4 w-4" />
          </Link>
          <Link
            href={`mailto:${siteConfig.email}`}
            className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
          >
            <Mail className="h-4 w-4" />
            Get in touch
          </Link>
          <div className="ml-2 flex items-center gap-1">
            <a
              href={siteConfig.socials.telegram}
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
              className={cn(buttonVariants({ size: "icon", variant: "ghost" }))}
            >
              <TelegramIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
