export type Service = {
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    number: "01",
    title: "Film Production",
    shortDescription:
      "From concept to final cut, we build cinematic stories with clarity and craft.",
    fullDescription:
      "Complete film production support for narrative projects, brand films, and visual stories that need strong planning, crews, locations, and execution.",
    deliverables: ["Creative development", "Production planning", "Direction", "Crew and location support"],
  },
  {
    number: "02",
    title: "Commercials",
    shortDescription:
      "Campaign films and branded stories designed to create lasting attention.",
    fullDescription:
      "Commercial production for brands that need polished, memorable visuals for television, digital campaigns, and social platforms.",
    deliverables: ["Campaign concepting", "Script and storyboard", "Shoot production", "Digital cutdowns"],
  },
  {
    number: "03",
    title: "Documentaries",
    shortDescription:
      "Patient, human storytelling grounded in real people and real places.",
    fullDescription:
      "Documentary storytelling shaped through research, field production, interviews, observational filming, and careful editorial structure.",
    deliverables: ["Research", "Interview production", "Field filming", "Story editing"],
  },
  {
    number: "04",
    title: "Post Production",
    shortDescription:
      "Editing, color, motion, and sound that give each story its final voice.",
    fullDescription:
      "Post-production services that refine raw footage into finished work with strong rhythm, polish, and emotional clarity.",
    deliverables: ["Editing", "Color grading", "Sound design", "Motion graphics"],
  },
  {
    number: "05",
    title: "Music Videos",
    shortDescription:
      "Performance-led and concept-driven videos built around mood, rhythm, and identity.",
    fullDescription:
      "Music video production for artists and labels, from visual treatment and location design through shoot execution and final delivery.",
    deliverables: ["Treatment design", "Art direction", "Performance shoots", "Final master exports"],
  },
  {
    number: "06",
    title: "Event Films",
    shortDescription:
      "Cinematic coverage for launches, cultural programs, and milestone events.",
    fullDescription:
      "Event film coverage that captures atmosphere, people, highlights, and key moments without losing the energy of the live experience.",
    deliverables: ["Multi-camera coverage", "Highlight films", "Speaker capture", "Social edits"],
  },
];
