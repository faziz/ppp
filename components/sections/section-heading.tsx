import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  number: string;
  title: string;
  className?: string;
}

export function SectionHeading({ number, title, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 flex items-center gap-4", className)}>
      <h2 className="flex items-baseline gap-3 text-2xl font-bold tracking-tight sm:text-3xl">
        <span className="font-mono text-base text-muted-foreground">{number}.</span>
        {title}
      </h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}
