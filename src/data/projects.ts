export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Talent Protocol",
    techs: ["React", "NextJS", "Ruby on Rails", "Solidity", "Typescript"],
    link: "https://github.com/talentprotocol",
  },
  {
    title: "BuilderFi - Hackathon Project @ETHSingapore",
    techs: ["NextJS", "Solidty"],
    link: "https://github.com/francisco-leal/buidlerfi-eth-singapore",
  },
  {
    title: "Slice - Hackathon Project @ETHGlobal Lisbon",
    techs: ["NextJS", "Solidty"],
    link: "https://ethglobal.com/showcase/lice-fi4bo",
  },
  {
    title: "iCapital",
    techs: ["React", "Ruby on Rails"],
    link: "https://icapital.com/",
  },
  {
    title: "Runtime Revolution",
    techs: ["React", "Ruby on Rails"],
    link: "https://www.runtime-revolution.com/",
  },
];

export default projects;
