"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Project } from "@/data/projects";
import RotatingProjectDetail from "@/components/RotatingProjectDetail";

function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 fill-none stroke-current stroke-[1.4]"
    >
      <path d="M5 19 19 5M8 5h11v11" />
    </svg>
  );
}

export default function RotatingPortfolioCard({
  projects,
  startIndex,
  featured = false,
}: {
  projects: Project[];
  startIndex: number;
  featured?: boolean;
}) {
  const [projectIndex, setProjectIndex] = useState(startIndex % projects.length);
  const project = projects[projectIndex];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setProjectIndex((current) => (current + 1) % projects.length);
    }, 4200 + startIndex * 350);

    return () => window.clearInterval(interval);
  }, [projects.length, startIndex]);

  if (featured) {
    return (
      <article className="group relative overflow-hidden border border-[#3D2A3D]/15 bg-[#FBF8F2] shadow-sm lg:row-span-2">
        <div className="relative min-h-[31rem] overflow-hidden md:min-h-[43rem]">
          <Image
            key={project.image}
            src={project.image}
            alt={`${project.title}, ${project.category}`}
            fill
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover opacity-85 transition duration-700 ease-out group-hover:scale-[1.035] group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#251827]/85 via-transparent to-transparent" />
          <span className="absolute left-5 top-5 border border-white/30 bg-[#251827]/30 px-3 py-2 font-serif text-sm text-white backdrop-blur-md">
            {project.number}
          </span>
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#FFF0B5]">
              Featured project
            </p>
            <h2 className="max-w-xl text-4xl font-semibold leading-none text-white md:text-6xl">
              {project.title}
            </h2>
          </div>
        </div>

        <div className="grid gap-6 border-t border-[#3D2A3D]/15 p-6 md:grid-cols-[1fr_auto] md:items-end md:p-8">
          <div className="grid gap-6">
            <p className="max-w-xl text-lg leading-8 text-[#2B202D]/80">
              {project.description}
            </p>
            <RotatingProjectDetail
              key={project.number}
              details={project.details}
              offset={startIndex}
            />
          </div>

          <div className="grid gap-5 md:min-w-64">
            <dl className="grid grid-cols-2 gap-x-7 gap-y-4 border-t border-[#3D2A3D]/15 pt-4">
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#2B202D]/60">
                  Duration
                </dt>
                <dd className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-[#2B202D]/90">
                  {project.duration}
                </dd>
              </div>
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#2B202D]/60">
                  Role
                </dt>
                <dd className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-[#2B202D]/90">
                  {project.role}
                </dd>
              </div>
            </dl>
            <Link
              href="/#contact"
              aria-label={`Start a project like ${project.title}`}
              className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-[#9A7130]/60 text-[#9A7130] transition duration-300 hover:rotate-6 hover:bg-[#C9A84C] hover:text-[#2B202D]"
            >
              <ArrowUpRight />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group grid overflow-hidden border border-[#3D2A3D]/15 bg-[#FBF8F2] shadow-sm sm:grid-cols-[1.2fr_1fr] lg:grid-cols-[1.15fr_1fr]">
      <div className="relative min-h-64 overflow-hidden sm:min-h-full">
        <Image
          key={project.image}
          src={project.image}
          alt={`${project.title}, ${project.category}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 55vw, 26vw"
          className="object-cover opacity-85 transition duration-700 ease-out group-hover:scale-[1.035] group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#251827]/80 via-transparent to-transparent" />
        <span className="absolute left-5 top-5 border border-white/30 bg-[#251827]/30 px-3 py-2 font-serif text-sm text-white backdrop-blur-md">
          {project.number}
        </span>
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#FFF0B5]">
            {project.category}
          </p>
          <h2 className="max-w-xl text-3xl font-semibold leading-none text-white md:text-4xl">
            {project.title}
          </h2>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-7 p-6">
        <div>
          <h3 className="mb-4 text-3xl font-semibold leading-none md:text-4xl">
            {project.title}
          </h3>
          <p className="text-base leading-7 text-[#2B202D]/80">
            {project.description}
          </p>
        </div>

        <RotatingProjectDetail
          key={project.number}
          details={project.details}
          offset={startIndex}
        />

        <dl className="grid grid-cols-2 gap-x-7 gap-y-4 border-t border-[#3D2A3D]/15 pt-5">
          <div>
            <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#2B202D]/60">
              Duration
            </dt>
            <dd className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-[#2B202D]/90">
              {project.duration}
            </dd>
          </div>
          <div>
            <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#2B202D]/60">
              Role
            </dt>
            <dd className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-[#2B202D]/90">
              {project.role}
            </dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
