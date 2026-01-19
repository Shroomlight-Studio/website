"use client";

import { motion } from 'framer-motion';
import { Cpu, Gamepad2, Globe, Sparkles } from 'lucide-react';

const services = [
    {
        icon: Gamepad2,
        title: 'Games',
        description: 'Experimental indie games that push creative boundaries and explore new gameplay mechanics',
        items: ['Narrative Experiences', 'Action Adventures', 'Emotion-Driven Stories'],
    },
    {
        icon: Cpu,
        title: 'Shroom Engine',
        description: 'Our custom-built game engine designed for rapid prototyping and creative experimentation',
        items: ['2D/3D Rendering', 'Physics System', 'Scripting Support'],
    },
    {
        icon: Globe,
        title: 'Web & Experiments',
        description: 'Interactive websites and creative coding projects that blend art with technology',
        items: ['Generative Art', 'Interactive Experiences', 'Creative Tools'],
    },
    {
        icon: Sparkles,
        title: 'Creative Tools',
        description: 'Development tools and utilities that empower creators to build unique experiences',
        items: ['Custom Color Theme', 'Asset Generators', 'Level Editors'],
    },
];

export function WhatWeDo() {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div className="text-center mb-16 space-y-4">
                    <h2 
                        className="text-4xl sm:text-5xl md:text-6xl font-bold text-(--shroomlight-light)"
                        style={{ fontFamily: 'var(--font-heading)' }}
                    >
                        What We Do
                    </h2>
                    <p 
                        className="text-lg sm:text-xl text-(--shroomlight-accent-1) max-w-2xl mx-auto"
                        style={{ fontFamily: 'var(--font-body)' }}
                    >
                        We create innovative tools and experiences across multiple domains
                    </p>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-(--shroomlight-surface) rounded-2xl p-8 hover:shadow-2xl hover:shadow-(--shroomlight-primary)/20 transition-all duration-300 border border-(--shroomlight-primary)/20 hover:border-(--shroomlight-primary)/50"
                            >
                                {/* Icon */}
                                <div className="mb-6">
                                    <div className="w-16 h-16 rounded-xl bg-linear-to-br from-(--shroomlight-primary) to-(--shroomlight-glow) flex items-center justify-center shadow-lg shadow-(--shroomlight-glow)/30 group-hover:shadow-(--shroomlight-glow)/50 transition-all group-hover:scale-110">
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 
                                    className="text-2xl font-bold text-(--shroomlight-light) mb-3"
                                    style={{ fontFamily: 'var(--font-heading)' }}
                                >
                                    {service.title}
                                </h3>
                                <p 
                                    className="text-(--shroomlight-accent-1) mb-6"
                                    style={{ fontFamily: 'var(--font-body)' }}
                                >
                                    {service.description}
                                </p>

                                {/* Items */}
                                <ul className="space-y-2">
                                    {service.items.map((item) => (
                                        <li 
                                            key={item}
                                            className="flex items-center gap-2 text-(--shroomlight-accent-2)"
                                            style={{ fontFamily: 'var(--font-body)' }}
                                        >
                                        <div className="w-1.5 h-1.5 rounded-full bg-(--shroomlight-primary)" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                {/* Glow effect on hover */}
                                <div className="absolute inset-0 bg-linear-to-br from-(--shroomlight-primary)/0 via-(--shroomlight-primary)/5 to-(--shroomlight-glow)/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
                            </motion.div>
                        );
                    })}
                    </div>
            </div>
        </section>
    );
}
