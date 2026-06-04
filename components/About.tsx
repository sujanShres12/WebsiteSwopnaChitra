const stats = [
  ["08+", "Years creating"],
  ["64", "Stories delivered"],
  ["12", "Global partners"],
];

export default function About() {
  return (
    <section id="about" className="bg-[#F4EFE7] text-[#2B202D]">
      <div className="section-shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#76531D]">01 / About us</p>
          <h2 className="font-[Cormorant_Garamond] text-5xl leading-none md:text-7xl">
            Rooted in Nepal.
            <br />
            <em className="text-[#79561F]">Made for the world.</em>
          </h2>
        </div>
        <div className="flex flex-col justify-end">
          <p className="max-w-2xl font-[Cormorant_Garamond] text-3xl font-semibold leading-relaxed text-[#2B202D]/90 md:text-4xl">
            Swopna Chitra means dream image. We are a Kathmandu-based collective that turns honest ideas into memorable moving pictures.
          </p>
          <div className="mt-14 grid grid-cols-3 border-t border-[#3D2A3D]/15">
            {stats.map(([value, label]) => (
              <div key={label} className="border-r border-[#3D2A3D]/15 pt-6">
                <strong className="block font-[Cormorant_Garamond] text-4xl font-normal text-[#9A7130] md:text-5xl">{value}</strong>
                <span className="mt-2 block text-xs font-medium uppercase tracking-[0.12em] text-[#2B202D]/75">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
