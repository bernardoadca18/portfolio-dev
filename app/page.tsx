"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  personalInfo,
  skillsData,
  experienceData,
  educationData,
  projectsData,
  certifications,
  dictionary,
} from "@/lib/data";
import ProjectGrid from "@/components/ProjectGrid";
import {
  Download,
  Mail,
  Terminal,
  Gamepad2,
  Server,
  Shield,
  ChevronRight,
  Briefcase,
  GraduationCap,
  Code2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { language } = useLanguage();
  const t = dictionary[language];
  const info = personalInfo[language];
  const skills = skillsData[language];
  const exp = experienceData[language];
  const edu = educationData[language];
  const projects = projectsData[language];

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/20 via-zinc-950 to-zinc-950 -z-10" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-emerald-400 text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                {t.hero.available}
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 font-display leading-tight">
                {t.hero.title1}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-500">
                  {t.hero.title2}
                </span>{" "}
                <br />
                {t.hero.title3}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-500">
                  {t.hero.title4}
                </span>
              </h1>

              <p className="text-lg text-zinc-400 mb-8 max-w-2xl leading-relaxed">
                {info.summary}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={`mailto:${info.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-zinc-950 font-semibold hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-950 active:scale-95"
                >
                  <Mail className="w-5 h-5" />
                  {t.hero.contact}
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 text-white font-medium border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 transition-all focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-zinc-950 active:scale-95"
                >
                  <Download className="w-5 h-5" />
                  {t.hero.downloadCv}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-square w-full max-w-md mx-auto">
                <div className="absolute inset-0 rounded-full border border-zinc-800/50 bg-zinc-900/20 backdrop-blur-3xl" />
                <div className="absolute inset-4 rounded-full border border-emerald-500/20 bg-gradient-to-tr from-zinc-900 to-zinc-800 overflow-hidden flex items-center justify-center">
                  {/* Placeholder for Profile Picture */}
                  <div className="text-center p-8">
                    <Terminal className="w-16 h-16 text-zinc-700 mx-auto mb-4" />
                    <p className="text-zinc-500 font-mono text-sm">
                      {t.hero.profilePlaceholder}
                    </p>
                  </div>
                </div>

                {/* Floating Badges */}
                <div
                  className="absolute top-10 -left-6 bg-zinc-900 border border-zinc-800 p-3 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce"
                  style={{ animationDuration: "3s" }}
                >
                  <div className="bg-emerald-500/20 p-2 rounded-lg">
                    <Code2 className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div className="pr-2">
                    <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">
                      {t.hero.badgeFullstack}
                    </p>
                    <p className="text-sm text-white font-bold">
                      {t.hero.badgeDev}
                    </p>
                  </div>
                </div>

                <div
                  className="absolute bottom-10 -right-6 bg-zinc-900 border border-zinc-800 p-3 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce"
                  style={{ animationDuration: "4s", animationDelay: "1s" }}
                >
                  <div className="bg-emerald-500/20 p-2 rounded-lg">
                    <Gamepad2 className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div className="pr-2">
                    <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">
                      {t.hero.badgeIndie}
                    </p>
                    <p className="text-sm text-white font-bold">
                      {t.hero.badgeDev}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-4">
                {t.skills.title}
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                {t.skills.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Software & IT Column */}
              <div className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 lg:p-10 min-w-0">
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-zinc-800/50">
                  <div className="p-3 bg-zinc-800 rounded-xl shrink-0">
                    <Server className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-2xl font-bold text-white font-display truncate">
                      {t.skills.software}
                    </h3>
                    <p className="text-sm text-zinc-400 truncate">
                      {t.skills.softwareSub}
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  {skills.software.map((category, idx) => (
                    <div key={idx}>
                      <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-4 flex items-center gap-2 break-words">
                        <ChevronRight className="w-4 h-4 text-emerald-500 shrink-0" />
                        {category.title}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 bg-zinc-950 border border-zinc-800 text-zinc-300 text-sm rounded-lg hover:border-emerald-500/50 hover:text-emerald-400 transition-colors cursor-default break-words"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Game Dev Column */}
              <div className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 lg:p-10 min-w-0">
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-zinc-800/50">
                  <div className="p-3 bg-zinc-800 rounded-xl shrink-0">
                    <Gamepad2 className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-2xl font-bold text-white font-display truncate">
                      {t.skills.games}
                    </h3>
                    <p className="text-sm text-zinc-400 truncate">
                      {t.skills.gamesSub}
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  {skills.games.map((category, idx) => (
                    <div key={idx}>
                      <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-4 flex items-center gap-2 break-words">
                        <ChevronRight className="w-4 h-4 text-emerald-500 shrink-0" />
                        {category.title}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 bg-zinc-950 border border-zinc-800 text-zinc-300 text-sm rounded-lg hover:border-emerald-500/50 hover:text-emerald-400 transition-colors cursor-default break-words"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience & Education Timeline */}
      <section
        className="py-24 bg-zinc-900/20 border-t border-zinc-900"
        id="experience"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            {/* Experience */}
            <div className="mb-20">
              <div className="flex items-center gap-3 mb-12">
                <Briefcase className="w-6 h-6 text-emerald-500 shrink-0" />
                <h2 className="text-3xl font-bold text-white font-display truncate">
                  {t.experience.title}
                </h2>
              </div>

              <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">
                {exp.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative flex items-center justify-between md:justify-center group is-active"
                  >
                    {/* Left side (empty on mobile, card or empty on desktop) */}
                    <div className="hidden md:block md:w-[calc(50%-2.5rem)]">
                      {index % 2 === 0 && (
                        <div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800 hover:border-emerald-500/30 transition-colors shadow-lg text-right">
                          <div className="flex flex-col items-end mb-4 gap-2">
                            <span className="text-sm font-medium text-emerald-400/80 bg-emerald-500/10 px-3 py-1 rounded-lg w-fit border border-emerald-500/20">
                              {item.timeline}
                            </span>
                            <h3 className="font-bold text-xl text-white mt-2">
                              {item.role}
                            </h3>
                            <div className="text-zinc-400 font-medium flex items-center justify-end gap-2 text-sm">
                              {item.company}
                            </div>
                          </div>
                          <p className="text-base text-zinc-400 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Timeline dot */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-zinc-950 bg-zinc-800 group-hover:bg-emerald-500 group-hover:border-emerald-500/30 text-zinc-500 group-hover:text-white shadow shrink-0 transition-colors duration-300 z-10 md:mx-5">
                      {item.type === "GameDev" ? (
                        <Gamepad2 className="w-4 h-4" />
                      ) : (
                        <Server className="w-4 h-4" />
                      )}
                    </div>

                    {/* Right side (card on mobile, card or empty on desktop) */}
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                      {(index % 2 !== 0 || true) && (
                        <div
                          className={`p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800 hover:border-emerald-500/30 transition-colors shadow-lg ${index % 2 === 0 ? "md:hidden" : ""}`}
                        >
                          <div className="flex flex-col mb-4 gap-2">
                            <span className="text-sm font-medium text-emerald-400/80 bg-emerald-500/10 px-3 py-1 rounded-lg w-fit border border-emerald-500/20">
                              {item.timeline}
                            </span>
                            <h3 className="font-bold text-xl text-white mt-2">
                              {item.role}
                            </h3>
                            <div className="text-zinc-400 font-medium flex items-center gap-2 text-sm">
                              {item.company}
                            </div>
                          </div>
                          <p className="text-base text-zinc-400 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-10">
                <GraduationCap className="w-6 h-6 text-emerald-500 shrink-0" />
                <h2 className="text-3xl font-bold text-white font-display truncate">
                  {t.education.title}
                </h2>
              </div>

              <div className="space-y-6">
                {edu.map((item) => (
                  <div
                    key={item.id}
                    className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800 hover:border-emerald-500/30 transition-colors"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                      <div>
                        <h3 className="font-bold text-xl text-white mb-1">
                          {item.degree}
                        </h3>
                        <div className="text-zinc-400">{item.institution}</div>
                      </div>
                      <span className="text-sm font-medium text-zinc-400 bg-zinc-800/50 px-3 py-1.5 rounded-lg shrink-0 w-fit border border-zinc-700/50">
                        {item.timeline}
                      </span>
                    </div>
                  </div>
                ))}

                <div className="mt-8 p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800">
                  <h3 className="font-bold text-xl text-white mb-6 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-emerald-500 shrink-0" />
                    {t.education.certifications}
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {certifications.map((cert, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-base text-zinc-400"
                      >
                        <ChevronRight className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        className="py-24 bg-zinc-950 border-t border-zinc-900"
        id="projects"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-4">
                {t.projects.title}
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                {t.projects.subtitle}
              </p>
            </div>

            <ProjectGrid projects={projects} dictionary={t} />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
