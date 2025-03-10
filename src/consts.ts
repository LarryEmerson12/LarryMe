import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "LarryMe",
  DESCRIPTION: "My personal portfolio.",
  EMAIL: "larry.emerson14@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Introduction.",
};

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION: "All about me."
}

export const JOURNEY: Metadata = {
  TITLE: "Journey",
  DESCRIPTION: "My journey."
}

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects.",
};

export const BOOKS: Metadata = {
  TITLE: "Books",
  DESCRIPTION:
  "Books I've written.",
}

export const SOCIALS: Socials = [
  {
    NAME: "X (formerly Twitter)",
    HREF: "https://twitter.com/boogerbuttcheeks",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/trevortylerlee",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/trevortylerlee",
  },
];
