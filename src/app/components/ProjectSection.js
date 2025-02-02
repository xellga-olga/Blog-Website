"use client";
import ProjectModal from "./ProjectModal";
import { useState } from "react";

const ProjectSection = () => {
    const projects = [
        {
            id: 1,
            title: "Chatbot",
            tags: ["ReactJS", "CSS"],
            image: "/chatbot.png",
            link: "https://chatbot-reactjs-psi.vercel.app/",
            description: "An AI-powered chatbot built using ReactJS and CSS.",
            fullDescription: "This project implements a chatbot using ReactJS with a stylish UI. It provides interactive responses and handles user queries efficiently."
        },
        {
            id: 2,
            title: "E-commerce",
            tags: ["ReactJs", "Tailwind CSS"],
            image: "/e-commerce.png",
            link: "https://e-commerce-inly.vercel.app/",
            description: "An e-commerce platform built with ReactJs and Tailwind CSS.",
            fullDescription: "This project showcases a fully functional e-commerce website with product listings, a shopping cart, and responsive UI using Tailwind CSS."
        },
        {
            id: 3,
            title: "Fruits-Shop",
            tags: ["ReactJs", "Tailwind CSS", "Framer-motion"],
            image: "/fruits-shop.png",
            link: "https://fruits-shop-six.vercel.app/",
            description: "A Fruits Shop website built using ReactJs and Tailwind CSS.",
            fullDescription: "This project provides an animated and smooth UI for an online fruit store using Framer Motion for interactive elements and Tailwind CSS for styling."
        },
    ];

    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (id) => {
        setSelectedProject(id);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    const handleNextProject = () => {
        const currentIndex = projects.findIndex((project) => project.id === selectedProject);
        if (currentIndex === -1) return;
        const nextIndex = (currentIndex + 1) % projects.length;
        setSelectedProject(projects[nextIndex].id);
    };

    const handlePrevProject = () => {
        const currentIndex = projects.findIndex((project) => project.id === selectedProject);
        if (currentIndex === -1) return;
        const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
        setSelectedProject(projects[prevIndex].id);
    };

    return (
        <section id="projects" className="px-4 py-32 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {projects.map((project) => (
                    <button
                        onClick={() => handleProjectClick(project.id)}
                        key={project.id}
                        className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-primary-500/50 transition-colors hover:shadow-sm text-left"
                    >
                        <div className="flex flex-col h-full">
                            <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                            <div className="flex flex-wrap gap-1 mt-auto">
                                {project.tags.map((tag, index) => (
                                    <span key={index} className="px-2 py-0.5 text-xs rounded-full bg-primary-500/20 text-primary-200 border border-primary-500/30">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </button>
                ))}
            </div>
            {selectedProject && (
                <ProjectModal
                    project={projects.find((project) => project.id === selectedProject)}
                    onClose={handleCloseModal}
                    onNext={handleNextProject}
                    onPrev={handlePrevProject}
                />
            )}
        </section>
    );
};

export default ProjectSection;
