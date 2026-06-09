"use client";

import { useEffect, useState } from "react";
import type { ProjectDetail } from "@/data/projects";

export default function RotatingProjectDetail({
  details,
  offset = 0,
}: {
  details: ProjectDetail[];
  offset?: number;
}) {
  const [activeIndex, setActiveIndex] = useState(offset % details.length);
  const activeDetail = details[activeIndex];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % details.length);
    }, 2400 + offset * 180);

    return () => window.clearInterval(interval);
  }, [details.length, offset]);

  return (
    <div className="min-h-20 rounded-2xl border border-[#3D2A3D]/15 bg-[#F7F2EA] p-4 transition">
      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#2B202D]/55">
        {activeDetail.label}
      </p>
      <p className="mt-2 text-lg font-semibold text-[#2B202D]">
        {activeDetail.value}
      </p>
    </div>
  );
}
