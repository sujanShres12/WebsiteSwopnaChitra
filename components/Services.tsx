import Link from "next/link";
import { services } from "@/data/services";

const carouselServices = [...services, ...services];

export default function Services() {
  return (
    <section id="services" className="overflow-hidden bg-[#E9DFD2] text-[#2B202D]">
      <div className="section-shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#76531D]">
              02 / Services
            </p>
            <h2 className="max-w-4xl text-5xl leading-none md:text-7xl">
              Full service production,
              <br />
              <em className="text-[#79561F]">from idea to screen.</em>
            </h2>
          </div>

          <Link
            href="/services"
            className="w-fit border border-[#3D2A3D] bg-[#3D2A3D] px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:border-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#2B202D]"
          >
            Show all services
          </Link>
        </div>

        <div className="relative mt-16">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#E9DFD2] to-transparent md:w-28" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#E9DFD2] to-transparent md:w-28" />

          <div className="services-carousel overflow-hidden">
            <div className="services-track flex w-max gap-5">
              {carouselServices.map((service, index) => (
                <article
                  key={`${service.number}-${index}`}
                  aria-hidden={index >= services.length}
                  className="flex min-h-80 w-[19rem] shrink-0 flex-col justify-between border border-[#3D2A3D]/15 bg-[#F7F2EA] p-6 shadow-sm transition hover:-translate-y-1 hover:bg-[#FBF8F2] md:w-[23rem]"
                >
                  <div className="flex items-start justify-between gap-6">
                    <span className="font-serif text-xl font-semibold text-[#76531D]">
                      {service.number}
                    </span>
                    <span className="rounded-full border border-[#76531D]/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#76531D]">
                      Service
                    </span>
                  </div>

                  <div>
                    <h3 className="mb-4 text-4xl font-semibold leading-none">
                      {service.title}
                    </h3>
                    <p className="text-base leading-7 text-[#2B202D]/80">
                      {service.shortDescription}
                    </p>
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
