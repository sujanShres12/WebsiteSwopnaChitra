import Image from "next/image";

type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  location: string;
  year: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Roads Between Clouds",
    category: "Documentary",
    description:
      "A quiet journey through remote mountain communities and the roads that connect them.",
    image: "/images/portfolio-village.png",
    location: "Mustang, Nepal",
    year: "2025",
    featured: true,
  },
  {
    title: "Aangan",
    category: "Fashion Film",
    description:
      "Contemporary form meets the enduring textures of Patan at blue hour.",
    image: "/images/portfolio-fashion.png",
    location: "Patan, Nepal",
    year: "2025",
  },
  {
    title: "Made by Memory",
    category: "Brand Story",
    description:
      "An intimate portrait of craft, patience, and knowledge passed through generations.",
    image: "/images/portfolio-artisan.png",
    location: "Kathmandu, Nepal",
    year: "2024",
  },
];

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

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const featured = project.featured === true;

  return (
    <article
      className={
        featured
          ? "group relative overflow-hidden border border-[#3D2A3D]/15 bg-[#FBF8F2] shadow-sm lg:row-span-2"
          : "group grid overflow-hidden border border-[#3D2A3D]/15 bg-[#FBF8F2] shadow-sm sm:grid-cols-[1.2fr_1fr] lg:grid-cols-[1.15fr_1fr]"
      }
    >
      <div
        className={
          featured
            ? "relative min-h-[31rem] overflow-hidden md:min-h-[43rem]"
            : "relative min-h-64 overflow-hidden sm:min-h-full"
        }
      >
        <Image
          src={project.image}
          alt={`${project.title}, ${project.category}`}
          fill
          sizes={
            featured
              ? "(max-width: 1024px) 100vw, 58vw"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 55vw, 26vw"
          }
          className="object-cover opacity-75 transition duration-700 ease-out group-hover:scale-[1.035] group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#251827]/80 via-transparent to-transparent" />
        <span className="absolute left-5 top-5 border border-white/30 bg-[#251827]/30 px-3 py-2 font-[Cormorant_Garamond] text-sm text-white backdrop-blur-md">
          0{index + 1}
        </span>
        {featured && (
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#FFF0B5]">
              Featured project
            </p>
            <h3 className="max-w-xl font-[Cormorant_Garamond] text-4xl leading-none text-white md:text-6xl">
              {project.title}
            </h3>
          </div>
        )}
      </div>

      <div
        className={
          featured
            ? "grid gap-6 border-t border-[#3D2A3D]/15 p-6 md:grid-cols-[1fr_auto] md:items-end md:p-8"
            : "flex flex-col justify-between gap-8 p-6"
        }
      >
        <div>
          {!featured && (
            <h3 className="mb-4 font-[Cormorant_Garamond] text-3xl leading-none md:text-4xl">
              {project.title}
            </h3>
          )}
          <p className="max-w-md text-base leading-7 text-[#2B202D]/80">
            {project.description}
          </p>
        </div>

        <div className={featured ? "flex items-end gap-8" : "grid gap-5"}>
          <dl className="grid grid-cols-2 gap-x-7 gap-y-4 border-t border-[#3D2A3D]/15 pt-4">
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#2B202D]/60">
                Type
              </dt>
              <dd className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-[#2B202D]/90">
                {project.category}
              </dd>
            </div>
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#2B202D]/60">
                Year
              </dt>
              <dd className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-[#2B202D]/90">
                {project.year}
              </dd>
            </div>
            <div className="col-span-2">
              <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#2B202D]/60">
                Location
              </dt>
              <dd className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-[#2B202D]/90">
                {project.location}
              </dd>
            </div>
          </dl>

          <a
            href="#contact"
            aria-label={`Start a project like ${project.title}`}
            className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-[#9A7130]/60 text-[#9A7130] transition duration-300 hover:rotate-6 hover:bg-[#C9A84C] hover:text-[#2B202D]"
          >
            <ArrowUpRight />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="overflow-hidden bg-[#F0E8DD] text-[#2B202D]">
      <div className="section-shell">
        <div className="grid gap-8 border-b border-[#3D2A3D]/15 pb-12 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#76531D]">
              03 / Selected work
            </p>
            <h2 className="font-[Cormorant_Garamond] text-5xl leading-[0.9] md:text-7xl">
              Stories we have
              <br />
              <em className="text-[#79561F]">brought to life.</em>
            </h2>
          </div>
          <div className="lg:justify-self-end">
            <p className="max-w-md text-base leading-7 text-[#2B202D]/80">
              A selection of films shaped by real places, careful observation,
              and a cinematic point of view.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-3 border-b border-[#76531D] pb-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#67491D]"
            >
              Create something with us
              <ArrowUpRight />
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.25fr_1fr] lg:grid-rows-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
