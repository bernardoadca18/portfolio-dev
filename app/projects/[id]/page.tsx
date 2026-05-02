import { Metadata } from "next";
import { projectsData } from "@/lib/data";
import ProjectClient from "./ProjectClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  // Default to English for SEO since language is client-side
  const project = projectsData.en.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found | Bernardo Alves Aguiar da Cunha",
    };
  }

  return {
    title: `${project.title} | Bernardo Alves Aguiar da Cunha`,
    description: `${project.title} - ${project.role}. Built with ${project.techStack.join(", ")}. ${project.summary}`,
    openGraph: {
      title: `${project.title} | Bernardo Alves Aguiar da Cunha`,
      description: project.summary,
      images: [project.thumbnail],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ProjectClient id={id} />;
}
