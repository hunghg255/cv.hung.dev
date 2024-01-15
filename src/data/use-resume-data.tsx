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
        company: "Agiletech Vietnam",
        link: "https://agiletech.vn/",
        badges: ["Office Work"],
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
        company: "Beau Agency Vietnam",
        link: "https://beau.vn/vi",
        badges: ["Office Work"],
        title: t("work.beau-agency.title"),
        logo: Beau,
        start: "Dec 2019",
        end: "Dec 2020",
        description: [t("work.beau-agency.description.1"), t("work.beau-agency.description.2")],
      },
    ],
    skills: ["JavaScript", "TypeScript", "React/Next.js/Remix", "Node.js"],
    projects: [
      {
        title: "CSS To Tailwindcss",
        techStack: ["Side Project", "TypeScript"],
        description: "CSS To Tailwindcss",
        link: {
          label: "css2tailwind",
          href: "https://github.com/hunghg255/css2tailwind",
        },
      },
    ],
  } as const;
};
