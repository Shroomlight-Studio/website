"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Gamepad2, Globe, Sparkles, Wrench } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

type CategoryType = 'All' | 'Games' | 'Websites' | 'Tools' | 'Experiments';
interface Project {
    id: string;
    name: string;
    category: CategoryType;
    description: string;
    image: string;
    url: string;
    tags: string[];
}

const projects: Project[] = [
    {
        id: '1',
        name: 'Shroom Engine',
        category: 'Tools',
        description: 'Lightweight game engine built for rapid prototyping and experimental gameplay',
        image: '/enginepreview.jpg',
        url: '/engine',
        tags: ['Engine', 'Framework', 'Open Source'],
    },
    {
        id: '2',
        name: 'I Must Obey',
        category: 'Games',
        description: 'An immersive fps game with deep mental impacts',
        image: '/imustobey.png',
        url: '',
        tags: ['FPS', 'Narrative Driven', 'Hell'],
    },
];

const getCategoryIcon = (category: CategoryType) => {
    switch (category) {
    case 'Games':
        return Gamepad2;
    case 'Websites':
        return Globe;
    case 'Tools':
        return Wrench;
    case 'Experiments':
        return Sparkles;
    default:
        return Gamepad2;
    }
};

export function ProjectsPage() {
    const router = useRouter();
    const pathname = usePathname();
    const [activeFilter, setActiveFilter] = useState<CategoryType>('All');

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const category = params.get('category') as CategoryType | null;
        if (category && ['Games','Websites','Tools','Experiments'].includes(category)) {
            setActiveFilter(category);
        } else {
            setActiveFilter('All');
        }
    }, []);

    const filters: CategoryType[] = ['All', 'Games', 'Websites', 'Tools', 'Experiments'];
    const filteredProjects = activeFilter === 'All' 
        ? projects 
        : projects.filter(project => project.category === activeFilter);

    const setFilter = (filter: CategoryType) => {
        setActiveFilter(filter);
        router.replace(`${pathname}?category=${filter}`, { scroll: false });
    };

    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div className="text-center mb-12 space-y-4">
                    <h1 
                        className="text-4xl sm:text-5xl md:text-6xl font-bold text-(--shroomlight-light)"
                        style={{ fontFamily: 'var(--font-heading)' }}
                    >
                        All Projects
                    </h1>
                    <p 
                        className="text-lg sm:text-xl text-(--shroomlight-accent-1) max-w-2xl mx-auto"
                        style={{ fontFamily: 'var(--font-body)' }}
                    >
                        Explore our complete collection of games, tools, websites, and experiments
                    </p>
                </div>

                {/* Filters */}
                <div className="mb-12">
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setFilter(filter)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                                activeFilter === filter
                                    ? 'bg-linear-to-r from-(--shroomlight-primary) to-(--shroomlight-glow) text-white shadow-lg shadow-(--shroomlight-primary)/30'
                                    : 'bg-(--shroomlight-surface) text-(--shroomlight-accent-1) hover:bg-(--shroomlight-surface)/80 border border-(--shroomlight-primary)/20 hover:border-(--shroomlight-primary)/50'
                                }`}
                                style={{ fontFamily: 'var(--font-body)' }}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => {
                        const Icon = getCategoryIcon(project.category);
                        return (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.97 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.97 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
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
                                        className="text-xl sm:text-2xl font-bold text-(--shroomlight-light)"
                                        style={{ fontFamily: 'var(--font-heading)' }}
                                    >
                                        {project.name}
                                    </h3>

                                    <p 
                                        className="text-(--shroomlight-accent-1) text-sm sm:text-base"
                                        style={{ fontFamily: 'var(--font-body)' }}
                                    >
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-1 bg-(--shroomlight-bg)/50 rounded text-xs text-(--shroomlight-accent-2)"
                                                style={{ fontFamily: 'var(--font-body)' }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Glow effect on hover */}
                                <div className="absolute inset-0 bg-linear-to-r from-(--shroomlight-primary)/0 via-(--shroomlight-primary)/5 to-(--shroomlight-primary)/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            </motion.div>
                        );
                        })}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}