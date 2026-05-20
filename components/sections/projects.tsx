import { ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel } from "@/components/ui/carousel";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="container py-24 scroll-mt-16">
      <SectionHeading number="02" title="Selected work" />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="group flex flex-col overflow-hidden hover:border-foreground/20 hover:shadow-md"
          >
            {project.images && project.images.length > 0 && (
              <Carousel
                images={project.images}
                aspect="video"
                className="rounded-none border-0 border-b"
              />
            )}
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1.5">
                  <p className="font-mono text-xs text-muted-foreground">
                    {project.year}
                  </p>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </div>
                <div className="flex shrink-0 items-center gap-1">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} repository`}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} link`}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col justify-between gap-4">
              <CardDescription className="leading-relaxed">
                {project.description}
              </CardDescription>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="font-mono">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
