"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projectsData, dictionary } from "@/lib/data";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Gamepad2,
  Code2,
  Calendar,
  User,
  Layers,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectClient({ id }: { id: string }) {
  const { language } = useLanguage();
  const t = dictionary[language];

  // Find project in the current language
  const project = projectsData[language].find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const isGame = project.category === "game";

  return (
    <article className="min-h-screen bg-zinc-950 pb-24">
      {/* Hero Banner */}
      <div className="relative h-[50vh] min-h-[400px] w-full bg-zinc-900 overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover opacity-40"
          referrerPolicy="no-referrer"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />

        <div className="absolute inset-0 flex items-end pb-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors mb-6 text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              {t.projectDetails.back}
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <div className="bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/30 flex items-center gap-2">
                {isGame ? (
                  <Gamepad2 className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Code2 className="w-4 h-4 text-emerald-500" />
                )}
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  {isGame ? t.projects.games : t.projects.software}
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-emerald-500 font-display mb-6">
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-6 text-sm text-zinc-300">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-zinc-500" />
                {project.role}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-zinc-500" />
                {project.timeline}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold text-white font-display mb-6 flex items-center gap-2">
                <Layers className="w-6 h-6 text-emerald-500" />
                {t.projectDetails.overview}
              </h2>
              <div className="prose prose-invert prose-zinc max-w-none">
                <p className="text-zinc-300 leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>
            </section>

            {/* Game Specific Sections */}
            {isGame && (
              <>
                {project.lore && (
                  <section className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8">
                    <h2 className="text-xl font-bold text-white font-display mb-4">
                      {t.projectDetails.lore}
                    </h2>
                    <p className="text-zinc-400 leading-relaxed italic border-l-2 border-emerald-500 pl-4">
                      &quot;{project.lore}&quot;
                    </p>
                  </section>
                )}

                {project.coreMechanics && (
                  <section>
                    <h2 className="text-xl font-bold text-white font-display mb-4">
                      {t.projectDetails.mechanics}
                    </h2>
                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-zinc-300 leading-relaxed">
                      {project.coreMechanics}
                    </div>
                  </section>
                )}

                {project.enemyDesign && (
                  <section>
                    <h2 className="text-xl font-bold text-white font-display mb-4">
                      {t.projectDetails.enemy}
                    </h2>
                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-zinc-300 leading-relaxed">
                      {project.enemyDesign}
                    </div>
                  </section>
                )}
              </>
            )}

            {/* Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-white font-display mb-6">
                  {t.projectDetails.gallery}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.gallery.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-video rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-lg"
                    >
                      <Image
                        src={img}
                        alt={`${project.title} mockup ${idx + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Actions */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">
                {t.projectDetails.links}
              </h3>
              <div className="space-y-3">
                {project.links.liveDemo && (
                  <a
                    href={project.links.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-500 text-zinc-950 font-semibold hover:bg-emerald-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {t.projectDetails.liveDemo}
                  </a>
                )}
                {project.links.playGame && (
                  <a
                    href={project.links.playGame}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-500 text-zinc-950 font-semibold hover:bg-emerald-400 transition-colors"
                  >
                    <Gamepad2 className="w-4 h-4" />
                    {t.projectDetails.playGame}
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-zinc-800 text-white font-medium hover:bg-zinc-700 transition-colors border border-zinc-700"
                  >
                    <Github className="w-4 h-4" />
                    {t.projectDetails.github}
                  </a>
                )}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">
                {t.projectDetails.techStack}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => {
                  let colorClass =
                    "text-zinc-300 border-zinc-700/50 bg-zinc-800/50";
                  const t = tech.toLowerCase();
                  if (
                    t.includes("node") ||
                    t.includes("django") ||
                    t.includes("spring") ||
                    t.includes("python") ||
                    t.includes("java")
                  ) {
                    colorClass =
                      "text-emerald-400 border-emerald-500/30 bg-emerald-500/10 shadow-[0_0_10px_rgba(16,185,129,0.1)]";
                  } else if (
                    t.includes("react") ||
                    t.includes("next") ||
                    t.includes("tailwind") ||
                    t.includes("vite")
                  ) {
                    colorClass =
                      "text-blue-400 border-blue-500/30 bg-blue-500/10 shadow-[0_0_10px_rgba(59,130,246,0.1)]";
                  } else if (
                    t.includes("api") ||
                    t.includes("websocket") ||
                    t.includes("jwt") ||
                    t.includes("postgres") ||
                    t.includes("aws") ||
                    t.includes("docker") ||
                    t.includes("rag") ||
                    t.includes("llm")
                  ) {
                    colorClass =
                      "text-purple-400 border-purple-500/30 bg-purple-500/10 shadow-[0_0_10px_rgba(168,85,247,0.1)]";
                  } else if (
                    t.includes("godot") ||
                    t.includes("c#") ||
                    t.includes("fsm") ||
                    t.includes("blender")
                  ) {
                    colorClass =
                      "text-orange-400 border-orange-500/30 bg-orange-500/10 shadow-[0_0_10px_rgba(249,115,22,0.1)]";
                  }

                  return (
                    <span
                      key={tech}
                      className={`px-3 py-1.5 text-sm rounded-lg border ${colorClass}`}
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
