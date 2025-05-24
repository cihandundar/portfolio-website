export interface Skill {
  id: number;
  image: string;
  name: string;
}

export const skills: Skill[] = [
  {
    id: 1,
    image: "/html.png",
    name: "HTML5",
  },
  {
    id: 2,
    image: "/css.png",
    name: "CSS",
  },
  {
    id: 3,
    image: "/javascript.png",
    name: "JavaScript",
  },
  {
    id: 4,
    image: "/scss.png",
    name: "SCSS",
  },
  {
    id: 5,
    image: "/react.png",
    name: "React",
  },
  {
    id: 6,
    image: "/next.png",
    name: "Next.js",
  },
  {
    id: 7,
    image: "/vue.png",
    name: "Vue",
  },
  {
    id: 8,  // id tekrarından dolayı bunu 8 yaptım
    image: "/tailwind.png",
    name: "Tailwind",
  },
];
