export type ProjectDetail = {
  label: string;
  value: string;
};

export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  image: string;
  location: string;
  year: string;
  role: string;
  duration: string;
  details: ProjectDetail[];
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Roads Between Clouds",
    category: "Documentary",
    description:
      "A quiet journey through remote mountain communities and the roads that connect them.",
    image: "/images/portfolio-village.png",
    location: "Mustang, Nepal",
    year: "2025",
    role: "Production and post",
    duration: "18 min",
    details: [
      { label: "Type", value: "Documentary" },
      { label: "Location", value: "Mustang, Nepal" },
      { label: "Year", value: "2025" },
      { label: "Role", value: "Production and post" },
    ],
  },
  {
    number: "02",
    title: "Aangan",
    category: "Fashion Film",
    description:
      "Contemporary form meets the enduring textures of Patan at blue hour.",
    image: "/images/portfolio-fashion.png",
    location: "Patan, Nepal",
    year: "2025",
    role: "Creative direction",
    duration: "03 min",
    details: [
      { label: "Type", value: "Fashion film" },
      { label: "Location", value: "Patan, Nepal" },
      { label: "Year", value: "2025" },
      { label: "Role", value: "Creative direction" },
    ],
  },
  {
    number: "03",
    title: "Made by Memory",
    category: "Brand Story",
    description:
      "An intimate portrait of craft, patience, and knowledge passed through generations.",
    image: "/images/portfolio-artisan.png",
    location: "Kathmandu, Nepal",
    year: "2024",
    role: "Direction and edit",
    duration: "06 min",
    details: [
      { label: "Type", value: "Brand story" },
      { label: "Location", value: "Kathmandu, Nepal" },
      { label: "Year", value: "2024" },
      { label: "Role", value: "Direction and edit" },
    ],
  },
  {
    number: "04",
    title: "Festival of Light",
    category: "Commercial",
    description:
      "A warm campaign film built around family rituals, city lights, and seasonal memory.",
    image: "/images/portfolio-fashion.png",
    location: "Kathmandu, Nepal",
    year: "2024",
    role: "Campaign production",
    duration: "60 sec",
    details: [
      { label: "Type", value: "Commercial" },
      { label: "Location", value: "Kathmandu, Nepal" },
      { label: "Year", value: "2024" },
      { label: "Role", value: "Campaign production" },
    ],
  },
  {
    number: "05",
    title: "Stone and Sky",
    category: "Music Video",
    description:
      "A performance-led mountain video shaped by natural movement and stark landscapes.",
    image: "/images/portfolio-village.png",
    location: "Kaski, Nepal",
    year: "2023",
    role: "Direction",
    duration: "04 min",
    details: [
      { label: "Type", value: "Music video" },
      { label: "Location", value: "Kaski, Nepal" },
      { label: "Year", value: "2023" },
      { label: "Role", value: "Direction" },
    ],
  },
  {
    number: "06",
    title: "Hands of Home",
    category: "Event Film",
    description:
      "A cultural event film balancing live atmosphere, detail shots, and human moments.",
    image: "/images/portfolio-artisan.png",
    location: "Bhaktapur, Nepal",
    year: "2023",
    role: "Event coverage",
    duration: "09 min",
    details: [
      { label: "Type", value: "Event film" },
      { label: "Location", value: "Bhaktapur, Nepal" },
      { label: "Year", value: "2023" },
      { label: "Role", value: "Event coverage" },
    ],
  },
];
