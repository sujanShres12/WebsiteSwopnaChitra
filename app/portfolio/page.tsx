import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RotatingPortfolioCard from "@/components/RotatingPortfolioCard";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Portfolio | Swopna Chitra",
  description:
    "Explore selected documentary, commercial, fashion film, music video, event film, and brand story projects by Swopna Chitra.",
};

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

export default function PortfolioPage() {
  return (
    <main className="bg-[#F0E8DD] text-[#2B202D]">
      <Navbar />

      <section className="mx-auto max-w-7xl px-5 pb-16 pt-36 md:px-10 md:pb-24">
        <div className="grid gap-8 border-b border-[#3D2A3D]/15 pb-12 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#76531D]">
              Portfolio / Selected work
            </p>
            <h1 className="max-w-5xl text-6xl leading-[0.9] md:text-8xl">
              Films, campaigns
              <br />
              <em className="text-[#79561F]">and visual stories.</em>
            </h1>
          </div>

          <div>
            <p className="max-w-md text-lg font-medium leading-8 text-[#2B202D]/80">
              Each card keeps the editorial portfolio design while its image,
              title, description, and project details change over time.
            </p>
            <Link
              href="/#contact"
              className="mt-7 inline-flex items-center gap-3 border-b border-[#76531D] pb-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#67491D]"
            >
              Start a project
              <ArrowUpRight />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.25fr_1fr] lg:grid-rows-2">
          <RotatingPortfolioCard projects={projects} startIndex={0} featured />
          {projects.slice(1).map((project, index) => (
            <RotatingPortfolioCard
              key={project.number}
              projects={projects}
              startIndex={index + 1}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
