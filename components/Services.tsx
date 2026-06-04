const services = [
  ["01", "Film Production", "From concept to final cut, we build cinematic stories with clarity and craft."],
  ["02", "Commercials", "Campaign films and branded stories designed to create lasting attention."],
  ["03", "Documentaries", "Patient, human storytelling grounded in real people and real places."],
  ["04", "Post Production", "Editing, color, motion, and sound that give each story its final voice."],
];

export default function Services() {
  return (
    <section id="services" className="bg-[#E9DFD2] text-[#2B202D]">
      <div className="section-shell">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#76531D]">02 / Services</p>
        <h2 className="max-w-4xl font-[Cormorant_Garamond] text-5xl leading-none md:text-7xl">
          Full service production,
          <br />
          <em className="text-[#79561F]">from idea to screen.</em>
        </h2>
        <div className="mt-16 grid border-l border-t border-[#3D2A3D]/15 md:grid-cols-2 lg:grid-cols-4">
          {services.map(([number, title, description]) => (
            <article key={number} className="flex min-h-72 flex-col justify-between border-b border-r border-[#3D2A3D]/15 p-6 transition hover:bg-[#F7F2EA]">
              <span className="font-[Cormorant_Garamond] text-lg font-semibold text-[#76531D]">{number}</span>
              <div>
                <h3 className="mb-4 font-[Cormorant_Garamond] text-3xl font-semibold">{title}</h3>
                <p className="text-base leading-7 text-[#2B202D]/80">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
