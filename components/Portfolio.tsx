import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

const carouselProjects = [...projects, ...projects];

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

export default function Portfolio() {
  return (
    <section id="portfolio" className="overflow-hidden bg-[#F0E8DD] text-[#2B202D]">
      <div className="section-shell">
        <div className="flex flex-col gap-8 border-b border-[#3D2A3D]/15 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#76531D]">
              03 / Selected work
            </p>
            <h2 className="text-5xl leading-[0.9] md:text-7xl">
              Stories we have
              <br />
              <em className="text-[#79561F]">brought to life.</em>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-base leading-7 text-[#2B202D]/80">
              A selection of films shaped by real places, careful observation,
              and a cinematic point of view.
            </p>
            <Link
              href="/portfolio"
              className="mt-6 inline-flex items-center gap-3 border border-[#3D2A3D] bg-[#3D2A3D] px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:border-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#2B202D]"
            >
              Show all portfolio
              <ArrowUpRight />
            </Link>
          </div>
        </div>

        <div className="relative mt-12">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#F0E8DD] to-transparent md:w-28" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#F0E8DD] to-transparent md:w-28" />

          <div className="portfolio-carousel overflow-hidden">
            <div className="portfolio-track flex w-max gap-5">
              {carouselProjects.map((project, index) => (
                <article
                  key={`${project.number}-${index}`}
                  aria-hidden={index >= projects.length}
                  className="group w-[20rem] shrink-0 overflow-hidden border border-[#3D2A3D]/15 bg-[#FBF8F2] shadow-sm transition hover:-translate-y-1 md:w-[28rem]"
                >
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title}, ${project.category}`}
                      fill
                      sizes="(max-width: 768px) 80vw, 28rem"
                      className="object-cover opacity-85 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#251827]/80 via-transparent to-transparent" />
                    <span className="absolute left-5 top-5 border border-white/30 bg-[#251827]/30 px-3 py-2 font-serif text-sm text-white backdrop-blur-md">
                      {project.number}
                    </span>
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#FFF0B5]">
                        {project.category}
                      </p>
                      <h3 className="text-4xl font-semibold leading-none text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <div className="grid gap-6 p-6">
                    <p className="text-base leading-7 text-[#2B202D]/80">
                      {project.description}
                    </p>
                    <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-[#3D2A3D]/15 pt-5">
                      <div>
                        <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#2B202D]/60">
                          Year
                        </dt>
                        <dd className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-[#2B202D]/90">
                          {project.year}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#2B202D]/60">
                          Location
                        </dt>
                        <dd className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-[#2B202D]/90">
                          {project.location}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
