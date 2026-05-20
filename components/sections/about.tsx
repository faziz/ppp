import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/sections/section-heading";
import { skills, siteConfig } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="container py-24 scroll-mt-16">
      <SectionHeading number="01" title="About" />
      <div className="grid gap-12 md:grid-cols-3">
        <div className="space-y-4 text-muted-foreground md:col-span-2">
          <p>
            I&apos;m a senior software engineer based in {siteConfig.location.toLowerCase()}.
            I&apos;ve spent the last eight years working at the boundary between
            product and platform — building the tools, services, and abstractions
            that let other engineers move quickly without breaking things.
          </p>
          <p>
            My favorite work sits where systems design meets developer experience:
            making complex things feel simple. I care about correctness, observability,
            and the long tail of failure modes that don&apos;t show up in the happy path.
          </p>
          <p>
            Recently, I&apos;ve been focused on distributed systems, real-time
            collaboration, and the boring-but-important work of making infrastructure
            quietly reliable.
          </p>
          <p className="pt-2 text-foreground">
            Some of the technologies I work with:
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="font-mono">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square w-full max-w-xs overflow-hidden rounded-xl border bg-gradient-to-br from-muted to-secondary p-1">
            <div className="relative h-full w-full overflow-hidden rounded-lg bg-card">
              <Image
                src="/portrait.jpg"
                alt={`Portrait of ${siteConfig.name}`}
                fill
                priority
                sizes="(min-width: 768px) 20rem, 80vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
