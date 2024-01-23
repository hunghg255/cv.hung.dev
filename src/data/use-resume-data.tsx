import Agile from "@/images/logos/at.png";
import Beau from "@/images/logos/ba.jpeg";
import Hust from "@/images/logos/hust.png";
import { GitHubLogoIcon, HomeIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";

export const useResumeData = () => {
  const t = useTranslations();

  return {
    name: "Hoang Hung",
    initials: "JS",
    location: "Ha Noi, Viet Nam",
    about: t("about"),
    summary: t("summary"),
    locationLink:
      "https://www.google.com/maps/place/H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.0227784,105.8163213,14z/data=!3m1!4b1!4m6!3m5!1s0x3135ab9bd9861ca1:0xe7887f7b72ca17a9!8m2!3d21.0277644!4d105.8341598!16zL20vMGZuZmY?entry=ttu",
    avatarUrl: "https://cdn.jsdelivr.net/gh/hunghg255/static/avatar.jpeg",
    personalWebsiteUrl: "https://hung.thedev.id",
    contact: {
      social: [
        {
          name: "GitHub",
          url: "https://github.com/hunghg255",
          icon: GitHubLogoIcon,
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/hoanggiahung/",
          icon: LinkedInLogoIcon,
        },
        {
          name: "X",
          url: "https://x.com/hunghg255",
          icon: TwitterLogoIcon,
        },
        {
          name: "Website",
          url: "https://hung.thedev.id",
          icon: HomeIcon,
        },
      ],
    },
    education: [
      {
        degree: t("education.bachelor.degree"),
        start: "2015",
        end: "2020",
        logo: Hust,
      },
    ],
    certifications: [],
    publications: [],
    work: [
      {
        company: "Agiletech",
        link: "https://agiletech.vn/",
        badges: ["Office"],
        title: t("work.agiletechvietnam.title"),
        logo: Agile,
        start: "Dec 2020",
        end: t("present"),
        description: [
          t("work.agiletechvietnam.description.1"),
          t("work.agiletechvietnam.description.2"),
        ],
      },
      {
        company: "Beau",
        link: "https://beau.vn/vi",
        badges: ["Office"],
        title: t("work.beau-agency.title"),
        logo: Beau,
        start: "Dec 2019",
        end: "Dec 2020",
        description: [t("work.beau-agency.description.1"), t("work.beau-agency.description.2")],
      },
    ],
    skills: [
      "HTML/CSS",
      "Tailwindcss",
      "JavaScript",
      "TypeScript",
      "React/Next.js/Remix",
      "Vitejs",
      "Sveltejs",
      "Rsbuild",
      "Webpack",
      "Node.js",
      "Nestjs",
      "Prisma",
      "GraphQL",
      "MongoDB",
      "PostgreSQL",
      "Firebase",
      "Docker",
      "CI/CD",
    ],
    projects: [
      {
        title: "NXB",
        techStack: ["Nextjs", "Reactjs"],
        description: "Management books and national newspapers",
        link: {
          label: "NXB",
          href: "https://nxb-web.isys.vn/",
        },
      },
      {
        title: "Mathpang",
        techStack: ["Nextjs", "Reactjs", "React Native"],
        description: "Learn math online for elementary school students.",
        link: {
          label: "Mathpang",
          href: "https://mathpang.com/",
        },
      },
      {
        title: "Pinex",
        techStack: ["Nextjs", "Reactjs"],
        description: "Finance social network",
        link: {
          label: "Pinex",
          href: "https://pinex.vn/",
        },
      },
      {
        title: "Hillridge",
        techStack: ["Nextjs", "Reactjs", "Nestjs", "Prisma", "PostgreSQL"],
        description: "Agricultural construction insurance",
        link: {
          label: "Hillridge",
          href: "https://www.hillridge.vn/",
        },
      },
      {
        title: "Maby",
        techStack: ["Nextjs", "Reactjs"],
        description:
          "Book an appointment, Search for the nearest salon, Search for a salon by city, View details of the salon, Notification function when there is a new appointment, cancel an appointment",
        link: {
          label: "Maby",
          href: "https://maby.us/",
        },
      },
      {
        title: "Maby Salon",
        techStack: ["Nextjs", "Reactjs"],
        description:
          "Building a sales website, Manage orders, Order function, Order management, product review, Order payment by visa/mastercard",
        link: {
          label: "Maby Salon",
          href: "https://salon.maby.us/",
        },
      },
      {
        title: "Gourmet Market Thailand",
        techStack: ["Nextjs", "Reactjs"],
        description:
          "Book an appointment, Manage an appointment, View details of the salon, Notification function when there is a new appointment, cancel an appointment",
        link: {
          label: "Gourmet Market Thailand",
          href: "https://gourmetmarketthailand.com/th/",
        },
      },
      {
        title: "Summoners Arena",
        techStack: ["Reactjs"],
        description:
          "Building a website to buy and sell heroes with tokens, Exchange tokens, Create and manage events",
        link: {
          label: "Summoners Arena",
          href: "https://app.summonersarena.io/",
        },
      },
      {
        title: "XO Sections",
        techStack: ["Nextjs", "Shopify", "Liquid"],
        description:
          "XO Sections is a great solution with tons of customizing options and easy-to-use interface.",
        link: {
          label: "XO Sections",
          href: "https://apps.shopify.com/xo-sections",
        },
      },
    ],
    projectsOOS: [
      {
        title: "Svg to Icon",
        techStack: ["TypeScript"],
        description: "Convert svg to icon",
        link: {
          label: "Svg to Icon",
          href: "https://github.com/hunghg255/csvgtocss",
        },
      },
      {
        title: "React Sticky",
        techStack: ["Reactjs", "TypeScript"],
        description: "A library sticky element for reactjs",
        link: {
          label: "React Sticky",
          href: "https://github.com/hunghg255/reactjs-s4y",
        },
      },
      {
        title: "Quilljs Resize Image",
        techStack: ["Quilljs", "TypeScript"],
        description: "A module resize image for quilljs",
        link: {
          label: "Quilljs Resize Image",
          href: "https://github.com/hunghg255/quill-resize-image",
        },
      },
    ],
  } as const;
};
