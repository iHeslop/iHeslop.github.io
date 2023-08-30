import {
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from "../assets";

const experiences = [
  {
    title: "Bachelor of Design in Architecture",
    company_name: "University of Sydney",
    description:
      "Worked on multiple small and large scale architectural projects in lead and secondary roles",
    icon: coverhunt,
    iconBg: "#333333",
    date: "2017 - 2020",
  },
  {
    title: "Graduate Architect",
    company_name: "Environa Studio",
    description:
      "Worked on multiple small and large scale architectural projects in lead and secondary roles",
    icon: coverhunt,
    iconBg: "#333333",
    date: "2020 - 2023",
  },

  {
    title: "Accreditation in Software Engineering",
    company_name: "Institute of Data / University of Technology Sydney",
    description:
      "Worked on multiple small and large scale architectural projects in lead and secondary roles",
    icon: coverhunt,
    iconBg: "#333333",
    date: "2022 - 2023",
  },
];

const projects = [
  {
    id: "project-1",
    name: "KomiKult",
    description: "A comic characters list app that displays Marvel characters.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: komikult,
    repo: "https://github.com/shaqdeff/KomiKult",
    demo: "https://shaqdeff.github.io/KomiKult/",
  },
  {
    id: "project-2",
    name: "Leaderboard",
    description:
      "A leaderboard list app that displays scores submitted by different players.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: leaderboard,
    repo: "https://github.com/shaqdeff/Leaderboard",
    demo: "https://shaqdeff.github.io/Leaderboard/",
  },
  {
    id: "project-3",
    name: "Math Magicians",
    description: "This is a single-page calculator app built with React",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: math,
    repo: "https://github.com/shaqdeff/Math-Magicians",
    demo: "https://inspiring-medovik-37d3b3.netlify.app/",
  },
  {
    id: "project-4",
    name: "Movie Metro",
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    repo: "https://github.com/shaqdeff/Movie-Metro",
    demo: "https://movie-metro.netlify.app/",
  },
  {
    id: "project-5",
    name: "Nyeusi Fest Site",
    description:
      "This is a demo concert website for a music festival called Nyeusi.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: nyeusi,
    repo: "https://github.com/shaqdeff/Nyeusi-Fest-Site",
    demo: "https://shaqdeff.github.io/Nyeusi-Fest-Site/",
  },
];

export { experiences, projects };
