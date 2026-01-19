"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Code2, Layers, Zap } from "lucide-react";
import Link from 'next/link';

export function EnginePreview() {
    const features = [
        {
            icon: Zap,
            title: 'Lightning Fast',
            description: 'Optimized rendering pipeline for smooth performance',
        },
        {
            icon: Code2,
            title: 'Developer Friendly',
            description: 'Clean API and comprehensive documentation',
        },
        {
            icon: Layers,
            title: 'Modular Design',
            description: 'Use only what you need, when you need it',
        },
    ];

    return (
        <section className="py-20 bg-linear-to-b from-(--shroomlight-surface)/20 to-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Content */}
                    <div className="space-y-8">
                        {/* Title */}
                        <div className="space-y-4">
                            <div className="inline-block px-4 py-2 bg-(--shroomlight-glow)/20 rounded-full border border-(--shroomlight-primary)/30">
                                <span 
                                className="text-sm text-(--shroomlight-primary)"
                                style={{ fontFamily: 'var(--font-body)' }}
                                >
                                Our Custom Engine
                                </span>
                            </div>
                            <h2 
                                className="text-4xl sm:text-5xl md:text-6xl font-bold text-(--shroomlight-light)"
                                style={{ fontFamily: 'var(--font-heading)' }}
                            >
                                Shroom Engine
                            </h2>
                            <p 
                                className="text-lg sm:text-xl text-(--shroomlight-accent-1)"
                                style={{ fontFamily: 'var(--font-body)' }}
                            >
                                A lightweight, experimental game engine built from the ground up for creative freedom and rapid prototyping
                            </p>
                        </div>

                        {/* Features */}
                        <div className="space-y-4">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start gap-4 p-4 rounded-xl bg-(--shroomlight-surface)/50 border border-(--shroomlight-primary)/10 hover:border-(--shroomlight-primary)/30 transition-all"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-linear-to-br from-(--shroomlight-primary) to-(--shroomlight-glow) flex items-center justify-center shadow-lg shadow-(--shroomlight-glow)/20 shrink-0">
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 
                                            className="font-semibold text-(--shroomlight-light) mb-1"
                                            style={{ fontFamily: 'var(--font-heading)' }}
                                        >
                                            {feature.title}
                                        </h4>
                                        <p 
                                            className="text-sm text-(--shroomlight-accent-1)"
                                            style={{ fontFamily: 'var(--font-body)' }}
                                        >
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                                );
                            })}
                        </div>

                        {/* CTA Button */}
                        <Link
                            href="/engine"
                            className="group px-8 py-4 bg-linear-to-r from-(--shroomlight-primary) to-(--shroomlight-glow) rounded-xl text-white font-semibold flex items-center gap-2 hover:shadow-2xl hover:shadow-(--shroomlight-primary)/50 transition-all hover:scale-105"
                            style={{ fontFamily: 'var(--font-heading)' }}
                        >
                            Learn More About Shroom Engine
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Right: Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden border border-(--shroomlight-primary)/30 shadow-2xl shadow-(--shroomlight-primary)/20 h-96 md:h-110">
                        <img
                            src="/enginepreview.jpg"
                            alt="Shroom Engine"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-tr from-(--shroomlight-glow)/20 to-transparent" />
                        </div>

                        {/* Floating elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-(--shroomlight-primary) rounded-full blur-3xl opacity-30 animate-pulse" />
                        <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-(--shroomlight-glow) rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}