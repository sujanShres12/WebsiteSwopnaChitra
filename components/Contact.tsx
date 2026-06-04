"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <section id="contact" className="bg-[#F4EFE7] text-[#2B202D]">
      <div className="section-shell grid gap-16 lg:grid-cols-2">
        <div>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#76531D]">04 / Contact</p>
          <h2 className="font-[Cormorant_Garamond] text-5xl leading-none md:text-7xl">
            Have a story?
            <br />
            <em className="text-[#79561F]">Let&apos;s talk.</em>
          </h2>
          <div className="mt-12 grid gap-4 text-base font-medium text-[#2B202D]/80">
            <a href="mailto:hello@swopnachitra.com" className="w-fit border-b border-[#9A7130] pb-1 text-[#2B202D]">hello@swopnachitra.com</a>
            <a href="tel:+9779800000000">+977 980 000 0000</a>
            <span>Kathmandu, Nepal</span>
          </div>
        </div>
        <form onSubmit={submit} className="grid content-start gap-7">
          <input required name="name" placeholder="Your name" className="border-b border-[#3D2A3D]/25 bg-transparent py-5 text-lg font-medium text-[#2B202D] outline-none focus:border-[#76531D]" />
          <input required type="email" name="email" placeholder="Email address" className="border-b border-[#3D2A3D]/25 bg-transparent py-5 text-lg font-medium text-[#2B202D] outline-none focus:border-[#76531D]" />
          <textarea required name="message" rows={4} placeholder="Tell us about your project" className="resize-none border-b border-[#3D2A3D]/25 bg-transparent py-5 text-lg font-medium text-[#2B202D] outline-none focus:border-[#76531D]" />
          <button type="submit" className="w-fit border border-[#3D2A3D] bg-[#3D2A3D] px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:border-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#2B202D]">
            {sent ? "Message sent" : "Send inquiry"}
          </button>
        </form>
      </div>
    </section>
  );
}
