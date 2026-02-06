"use client";

import Image from "next/image";
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import {HiOutlineCog, HiOutlineDesktopComputer, HiOutlineGlobeAlt, HiOutlineSparkles} from "react-icons/hi";

const getCategoryIcon = (category: string) => {
    switch (category) {
        case 'Game':
            return HiOutlineDesktopComputer;
        case 'Website':
            return HiOutlineGlobeAlt;
        case 'Tool':
            return HiOutlineCog;
        case 'Experiment':
            return HiOutlineSparkles;
        default:
            return HiOutlineDesktopComputer;
    }
};

interface Project {
    id: string;
    name: string;
    category: string;
    description: string;
    image: string;
    url: string;
}

const featuredProjects: Project[] = [
    {
        id: '1',
        name: 'Shroom Engine',
        category: 'Tool',
        description: 'Lightweight game engine built for rapid prototyping and experimental gameplay',
        image: '/enginepreview.jpg',
        url: '/engine'
    },
    {
        id: '2',
        name: 'I Must Obey',
        category: 'Game',
        description: 'An immersive fps game with deep mental impacts',
        image: '/imustobey.png',
        url: ''
    },
    {
        id: '3',
        name: 'Lorn eSport',
        category: 'Website',
        description: "Official website for the Lorn eSport team.",
        image: '/lornesport.png',
        url: 'https://lornesport.com',
    }
];

export function FeaturedProjects() {
    return (
        <section className="py-20 bg-linear-to-b from-transparent to-(--shroomlight-surface)/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div className="text-center mb-16 space-y-4">
                    <h2
                        className="text-4xl sm:text-5xl md:text-6xl font-bold"
                        style={{ color: "var(--shroomlight-light)", fontFamily: "var(--font-heading)" }}
                    >
                        Featured Projects
                    </h2>
                    <p
                        className="text-lg sm:text-xl max-w-2xl mx-auto"
                        style={{ color: "var(--shroomlight-accent-1)", fontFamily: "var(--font-body)" }}
                    >
                        A selection of our most innovative and experimental work
                    </p>
                </div>

                {/* Content */}
                <div
                    className="grid gap-8 mx-auto justify-center"
                    style={{
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        maxWidth: "1200px",
                    }}
                >
                    {featuredProjects.map((project, index) => {
                        const Icon = getCategoryIcon(project.category);

                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-(--shroomlight-surface) rounded-2xl overflow-hidden
                                hover:shadow-2xl hover:shadow-(--shroomlight-primary)/20 transition-all duration-300
                                border border-(--shroomlight-primary)/20 hover:border-(--shroomlight-primary)/50"
                            >
                                {/* Image */}
                                <div className="relative w-full h-48">
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        fill
                                        style={{ objectFit: "cover" }}
                                        className="group-hover:scale-110 transition-transform duration-300"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6 space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div
                                            className="flex items-center gap-2 px-3 py-1 rounded-full border"
                                            style={{
                                                backgroundColor: "var(--shroomlight-glow)/20",
                                                borderColor: "var(--shroomlight-primary)/30",
                                            }}
                                        >
                                            <Icon className="w-4 h-4" style={{ color: "var(--shroomlight-primary)" }} />
                                            <span
                                                className="text-sm"
                                                style={{ color: "var(--shroomlight-accent-1)", fontFamily: "var(--font-body)" }}
                                            >
                        {project.category}
                      </span>
                                        </div>

                                        {project.url ? (
                                            <a
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="opacity-0 group-hover:opacity-100 transition-opacity"
                                            >
                                                <ExternalLink className="w-5 h-5" style={{ color: "var(--shroomlight-accent-1)" }} />
                                            </a>
                                        ) : (
                                            <span
                                                className="text-xs italic opacity-70"
                                                style={{ color: "var(--shroomlight-accent-2)", fontFamily: "var(--font-body)" }}
                                            >
                        Not yet public
                      </span>
                                        )}
                                    </div>

                                    <h3
                                        className="text-2xl font-bold"
                                        style={{ color: "var(--shroomlight-light)", fontFamily: "var(--font-heading)" }}
                                    >
                                        {project.name}
                                    </h3>

                                    <p
                                        style={{ color: "var(--shroomlight-accent-1)", fontFamily: "var(--font-body)" }}
                                    >
                                        {project.description}
                                    </p>
                                </div>

                                {/* Glow effect on hover */}
                                <div
                                    className="absolute inset-0 opacity-0 pointer-events-none transition-opacity group-hover:opacity-100"
                                    style={{
                                        background:
                                            "linear-gradient(to right, var(--shroomlight-primary)/0, var(--shroomlight-primary)/5, var(--shroomlight-primary)/0)",
                                    }}
                                />
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <Link
                        href="/projects"
                        className="px-8 py-4 rounded-xl font-semibold border transition-all hover:shadow-lg"
                        style={{
                            fontFamily: "var(--font-heading)",
                            backgroundColor: "var(--shroomlight-surface)",
                            color: "var(--shroomlight-light)",
                            borderColor: "var(--shroomlight-primary)",
                        }}
                    >
                        View All Projects
                    </Link>
                </div>
            </div>
        </section>
    );
}