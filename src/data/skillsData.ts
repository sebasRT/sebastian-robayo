export type technology = "Next js" | "Javascript" | "React js" | "Tailwind css" | "Mongo DB" | "Typescript" | "Astro" | "Figma" | "GitHub" | "GitLab" | "Resend";

type skill = {
    iconName: string;
    skillName: technology;
    description: string;
}

export const tools: skill[] = [
    {
        iconName: "skills/figma",
        skillName: "Figma",
        description:
            "Figma is a collaborative design tool that allows me to create and share user interface designs with team members. It provides a range of features for designing, prototyping, and collaborating on design projects.",
    },
    {
        iconName: "skills/github",
        skillName: "GitHub",
        description:
            "GitHub is a web-based platform for version control and collaboration that allows me to manage and track changes to my code. It provides features such as pull requests, issue tracking, and code reviews to facilitate collaboration with other developers.",
    },
    {
        iconName: "skills/gitlab",
        skillName: "GitLab",
        description:
            "GitLab is a web-based DevOps platform that provides a complete set of tools for managing the software development lifecycle. It includes features for version control, continuous integration and deployment, issue tracking, and more.",
    },
    {
        iconName: "skills/resend",
        skillName: "Resend",
        description: "Resend is a library for managing emails with React. It provides a convenient way to send and manage emails within a React application, allowing for easy integration with email service providers and customization of email templates.",
    }

];

export const skills: skill[] = [
    {
        iconName: "skills/nextjs",
        skillName: "Next js",
        description:
            "I use Next.js to build high-performance React applications with server-side rendering and static site generation. It helps me create fast, SEO-friendly websites by allowing for efficient rendering and smooth user experiences.",
    },
    {
        iconName: "skills/astro",
        skillName: "Astro",
        description:
            "With Astro I build fast, static websites with optimized performance, leveraging its ability to deliver content efficiently while integrating interactive components as needed.",
    },
    {
        iconName: "skills/reactjs",
        skillName: "React js",
        description:
            "React js allows me to build dynamic, responsive user interfaces with reusable components, enhancing the interactivity and maintainability of web applications.",
    },
    {
        iconName: "skills/javascript",
        skillName: "Javascript",
        description:
            "JavaScript is a versatile programming language that enables me to add interactivity and functionality to web pages. It is the foundation of modern web development.",
    },
    {
        iconName: "skills/typescript",
        skillName: "Typescript",
        description:
            "TypeScript is a typed superset of JavaScript that provides static typing and additional features to enhance the development experience. It helps me catch errors early and write more maintainable code.",
    },
    {
        iconName: "skills/mongodb",
        skillName: "Mongo DB",
        description:
            "MongoDB is a popular NoSQL database that allows me to store and retrieve data in a flexible and scalable manner. It is particularly well-suited for handling large amounts of unstructured data.",
    },
    {
        iconName: "skills/tailwind",
        skillName: "Tailwind css",
        description:
            "Tailwind CSS is a utility-first CSS framework that enables me to rapidly build custom user interfaces. It provides a set of pre-defined utility classes that can be combined to create responsive and visually appealing designs.",
    },

];

