import type { technology } from "./skillsData";
import GeorgeThePainterMockup from "../assets/projects assets/GeorgeThePainter.png";
import ClubAppMockup from "../assets/projects assets/ClubApp.png";

type Project = {
    title: string;
    url: string;
    color: string;
    description: string;
    technologies: technology[];
    image: ImageMetadata
};

export const projects: Project[] = [
    {
        title: "George The Painter LLC",
        url: "https://www.project1.com",
        color: "#36B15F",
        description: "Landing pages for a painting company, designed with Figma and built with Astro. Uses Resend for capturing contact form information.",
        technologies: ["Astro", "Tailwind css"],
        image: GeorgeThePainterMockup
    },
    {
        title: "Club App",
        url: "http://www.clubapp.com", 
        color: "#f8643b",
        description: "Membership management system for a soccer club built with Next.js.",
        technologies: ["Next js", "Mongo DB", "Tailwind css"],
        image: ClubAppMockup
    }
];
