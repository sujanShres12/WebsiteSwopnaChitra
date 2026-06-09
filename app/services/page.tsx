import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services } from "@/data/services";

export const metadata = {
  title: "Services | Swopna Chitra",
  description:
    "Explore Swopna Chitra's film production, commercial, documentary, post-production, music video, and event film services.",
};

export default function ServicesPage() {
  return (
    <main className="bg-[#F4EFE7] text-[#2B202D]">
      <Navbar />

      <section className="mx-auto max-w-7xl px-5 pb-16 pt-36 md:px-10 md:pb-24">
        <div className="grid gap-8 border-b border-[#3D2A3D]/15 pb-12 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#76531D]">
              Services / Swopna Chitra
            </p>
            <h1 className="max-w-5xl text-6xl leading-[0.9] md:text-8xl">
              Production services
              <br />
              <em className="text-[#79561F]">built around story.</em>
            </h1>
          </div>

          <div>
            <p className="max-w-md text-lg font-medium leading-8 text-[#2B202D]/80">
              Here is the full service list. Each offering can stand alone or
              combine into one complete production workflow.
            </p>
            <Link
              href="/#contact"
              className="mt-7 inline-flex border-b border-[#76531D] pb-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#67491D]"
            >
              Start a project
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.number}
              className="border border-[#3D2A3D]/15 bg-[#FBF8F2] p-6 shadow-sm md:p-8"
            >
              <div className="mb-12 flex items-start justify-between gap-6">
                <span className="font-serif text-2xl font-semibold text-[#76531D]">
                  {service.number}
                </span>
                <span className="max-w-36 text-right text-xs font-semibold uppercase tracking-[0.15em] text-[#2B202D]/55">
                  Swopna Chitra
                </span>
              </div>

              <h2 className="mb-5 text-4xl font-semibold leading-none md:text-5xl">
                {service.title}
              </h2>
              <p className="mb-8 text-lg leading-8 text-[#2B202D]/80">
                {service.fullDescription}
              </p>

              <ul className="grid gap-3 border-t border-[#3D2A3D]/15 pt-6">
                {service.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#2B202D]/75"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#76531D]" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
