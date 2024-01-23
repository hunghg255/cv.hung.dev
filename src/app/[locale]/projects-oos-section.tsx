import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { useResumeData } from "@/data/use-resume-data";
import { useTranslations } from "next-intl";

export const ProjectsOOSSection = () => {
  const t = useTranslations();
  const resumeData = useResumeData();

  return (
    <Section className="scroll-mb-16">
      <h2 className="text-xl font-bold">{t("sections.projects_oos")}</h2>
      <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
        {resumeData.projectsOOS.map((project) => {
          return (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.techStack}
              link={"link" in project ? project.link.href : undefined}
            />
          );
        })}
      </div>

      <Button className="mx-auto h-8 px-10" variant="outline" size="icon" asChild>
        <a href={"https://web-totals.vercel.app/tools"} target="_blank">
          See More
        </a>
      </Button>
    </Section>
  );
};
