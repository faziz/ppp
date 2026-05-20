import { SectionHeading } from "@/components/sections/section-heading";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="container py-24 scroll-mt-16">
      <SectionHeading number="03" title="Experience" />
      <ol className="relative space-y-12 border-l border-border pl-8 md:pl-12">
        {experience.map((entry) => (
          <li key={`${entry.company}-${entry.period}`} className="relative">
            <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-foreground md:-left-[calc(3rem+5px)]" />
            <p className="font-mono text-xs text-muted-foreground">
              {entry.period}
            </p>
            <h3 className="mt-1 text-xl font-semibold">
              {entry.role}{" "}
              <span className="text-muted-foreground">· {entry.company}</span>
            </h3>
            <p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed">
              {entry.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {entry.stack.map((tech) => (
                <Badge key={tech} variant="secondary" className="font-mono">
                  {tech}
                </Badge>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
