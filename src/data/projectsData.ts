import ClubAppMockup from "../assets/projects assets/ClubApp.png";
import GeorgeThePainterMockup from "../assets/projects assets/GeorgeThePainter.png";
import POSMockup from "../assets/projects assets/POS.png";
import type { technology } from "./skillsData";

type Project = {
    title: string;
    url: { href: string, text: string };
    color: string;
    description: string;
    technologies: technology[] | string[];
    image: ImageMetadata | undefined;
};

export const projects: Project[] = [
    {
        title: "George The Painter LLC",
        url: { href: "https://george-the-painter.com", text: "See website" },
        color: "#36B15F",
        description: "Landing pages for a painting company, designed with Figma and built with Astro. Uses Resend for capturing contact form information.",
        technologies: ["Astro", "Tailwind css"],
        image: GeorgeThePainterMockup
    },
    {
        title: "Club App",
        url: { href: "https://github.com/sebasRT/clubApp---frontEnd/tree/main/src", text: "See code" },
        color: "#f8643b",
        description: "Membership management system for a soccer club built with Next.js.",
        technologies: ["Next js", "Mongo DB", "Tailwind css"],
        image: ClubAppMockup
    },
    {
        title: "E-commerce Multitenant (White-label)",
        url: { href: "#", text: "Private project" },
        color: "#0ea5a4",
        description: "Multitenant white-label platform for grocery stores: per-tenant product catalogs and stock, synchronized with a mobile inventory app.",
        technologies: ["Next js", "Hono", "Mongo DB", "Redis", "Tanstack Query", "Zustand", "Zod", "Cloudinary"],
        image: undefined
    },
    {
        title: "Stock Manager (Mobile App)",
        url: { href: "#", text: "Private project" },
        color: "#7c3aed",
        description: "Mobile app for inventory management with STT and LLM structured outputs for product metadata editing, QR scanner, and push notifications.",
        technologies: ["React Native", "Expo", "Native Modules", "Firebase", "Anthropic API"],
        image: undefined
    },
    {
        title: "Order Handling (Mobile App)",
        url: { href: "#", text: "Private project" },
        color: "#ef4444",
        description: "App for handling incoming orders from the e-commerce platform, with push notifications integration.",
        technologies: ["React Native", "Expo", "Firebase", "Zustand", "Tanstack Query"],
        image: undefined
    },
    {
        title: "Point Of Sale (POS) — Desktop",
        url: { href: "/projects/pos", text: "In development" },
        color: "#f59e0b",
        description: "Desktop POS integrated with e-commerce and support for DIAN electronic invoicing (UBL + XAdES signature).",
        technologies: ["Rust", "Tauri", "SQLite", "C# (XAdES)"],
        image: POSMockup
    }
];
