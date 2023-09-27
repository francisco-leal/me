type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "francisco@talentprotocol.com",
  title: "Hi, I'm Leal 👋",
  profile: "/opengraph-image.png",
  description:
    "Hello, I'm a *portuguese builder* that is in love with the web. I bring in over *7 years* of build web products to anything that I focus on. I am currently building *Talent Protocol*, a social and economic platform where builders commit to future goals, share their progress and find the support they need to succeed. I'm working with *Ruby on Rails, React, NextJS, Typescript and Solidity*. Outside of work you can find me playing chess, drinking coffee with friends, traveling or boxing (something new!).",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/Francisco__Leal",
    },
    {
      label: "Github",
      link: "https://github.com/francisco-leal",
    },
    {
      label: "Talent Protocol",
      link: "https://beta.talentprotocol.com/u/leal",
    },
  ],
};

export default presentation;
