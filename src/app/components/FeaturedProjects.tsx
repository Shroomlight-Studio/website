"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Gamepad2, Globe, Wrench } from 'lucide-react';
import Link from 'next/link';

const getCategoryIcon = (category: string) => {
    switch (category) {
    case 'Game':
        return Gamepad2;
    case 'Website':
        return Globe;
    case 'Tool':
        return Wrench;
    default:
        return Gamepad2;
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
        name: 'I Must Obey',
        category: 'Game',
        description: 'An immersive fps game with deep mental impacts',
        image: '/imustobey.png',
        url: ''
    },
    {
        id: '2',
        name: 'Shroom Engine',
        category: 'Tool',
        description: 'Lightweight game engine built for rapid prototyping and experimental gameplay',
        image: '/enginepreview.jpg',
        url: '/engine'
    },
];

export function FeaturedProjects() {
    return (
        <section className="py-20 bg-linear-to-b from-transparent to-(--shroomlight-surface)/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div className="text-center mb-16 space-y-4">
                    <h2 
                        className="text-4xl sm:text-5xl md:text-6xl font-bold text-(--shroomlight-light)"
                        style={{ fontFamily: 'var(--font-heading)' }}
                    >
                        Featured Projects
                    </h2>
                    <p 
                        className="text-lg sm:text-xl text-(--shroomlight-accent-1) max-w-2xl mx-auto"
                        style={{ fontFamily: 'var(--font-body)' }}
                    >
                        A selection of our most innovative and experimental work
                    </p>
                </div>

                {/* Content */}
                <div className="grid gap-8 mx-auto justify-center"
                    style={{
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        maxWidth: '1200px'
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
                                className="group relative bg-(--shroomlight-surface) rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-(--shroomlight-primary)/20 transition-all duration-300 border border-(--shroomlight-primary)/20 hover:border-(--shroomlight-primary)/50"
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-(--shroomlight-surface) to-transparent opacity-60" />
                                </div>

                                {/* Content */}
                                <div className="p-6 space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 px-3 py-1 bg-(--shroomlight-glow)/20 rounded-full border border-(--shroomlight-primary)/30">
                                            <Icon className="w-4 h-4 text-(--shroomlight-primary)" />
                                            <span 
                                            className="text-sm text-(--shroomlight-accent-1)"
                                            style={{ fontFamily: 'var(--font-body)' }}
                                            >
                                            {project.category}
                                            </span>
                                        </div>
                                        {project.url ? (
                                            <a
                                                href={project.url} // the link you want to redirect to
                                                target="_blank" // opens in a new tab
                                                rel="noopener noreferrer" // security best practice
                                                className="opacity-0 group-hover:opacity-100 transition-opacity"
                                            >
                                                <ExternalLink className="w-5 h-5 text-(--shroomlight-accent-1) opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </a>
                                        ) : (
                                            <span
                                                className="text-xs text-(--shroomlight-accent-2) italic opacity-70"
                                                style={{ fontFamily: 'var(--font-body)' }}
                                            >
                                                Not yet public
                                            </span>
                                        )}
                                    </div>

                                    <h3 
                                        className="text-2xl font-bold text-(--shroomlight-light)"
                                        style={{ fontFamily: 'var(--font-heading)' }}
                                    >
                                        {project.name}
                                    </h3>

                                    <p 
                                        className="text-(--shroomlight-accent-1)"
                                        style={{ fontFamily: 'var(--font-body)' }}
                                    >
                                        {project.description}
                                    </p>
                                </div>

                                {/* Glow effect on hover */}
                                <div className="absolute inset-0 bg-linear-to-r from-(--shroomlight-primary)/0 via-(--shroomlight-primary)/5 to-(--shroomlight-primary)/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <Link
                        href="/projects"
                        className="px-8 py-4 bg-(--shroomlight-surface) rounded-xl text-(--shroomlight-light) font-semibold hover:bg-(--shroomlight-primary) transition-all border border-(--shroomlight-primary)/30 hover:border-(--shroomlight-primary) hover:shadow-lg hover:shadow-(--shroomlight-primary)/30"
                        style={{ fontFamily: 'var(--font-heading)' }}
                    >
                        View All Projects
                    </Link>
                </div>
            </div>
        </section>
    );
}
