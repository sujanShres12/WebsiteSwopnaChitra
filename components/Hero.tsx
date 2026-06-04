import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-end overflow-hidden">
      <Image
        src="/images/hero.png"
        alt="A production crew filming in Nepal"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#251827]/80 via-[#251827]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#251827]/70 via-transparent to-transparent" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-40 md:px-10 md:pb-28">
        <div className="mb-6 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.22em] text-[#FFF0B5]">
          <span className="gold-rule" />
          Nepal based production house
        </div>
        <h1 className="max-w-5xl font-[Cormorant_Garamond] text-6xl leading-[0.88] text-white md:text-8xl lg:text-[9rem]">
          Stories born here.
          <br />
          <em className="text-[#E8C97A]">Seen everywhere.</em>
        </h1>
        <div className="mt-10 flex flex-col gap-7 md:flex-row md:items-center">
          <p className="max-w-lg text-base font-medium leading-7 text-white/90 md:text-lg md:leading-8">
            Films, commercials, music videos, and documentaries crafted with a distinct sense of place.
          </p>
          <a
            href="#portfolio"
            className="w-fit border border-[#E8C97A] bg-[#251827]/30 px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#FFF4D6] backdrop-blur-sm transition hover:bg-[#E8C97A] hover:text-[#251827]"
          >
            Explore our work
          </a>
        </div>
      </div>
    </section>
  );
}
