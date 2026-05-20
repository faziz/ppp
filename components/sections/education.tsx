import { GraduationCap, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="container py-24 scroll-mt-16">
      <SectionHeading number="04" title="Education" />
      <ol className="relative space-y-12 border-l border-border pl-8 md:pl-12">
        {education.map((entry) => (
          <li key={`${entry.school}-${entry.period}`} className="relative">
            <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-foreground md:-left-[calc(3rem+5px)]" />
            <p className="font-mono text-xs text-muted-foreground">
              {entry.period}
            </p>
            <h3 className="mt-1 text-xl font-semibold">
              {entry.school}
            </h3>
            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <GraduationCap className="h-4 w-4" />
                {entry.degree} in {entry.field}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {entry.location}
              </span>
            </div>
            {entry.description && (
              <p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed">
                {entry.description}
              </p>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
