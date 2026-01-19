"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background glow effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-(--shroomlight-glow) rounded-full blur-3xl opacity-20" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-(--shroomlight-primary) rounded-full blur-3xl opacity-20" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    {/* Icon */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                        className="flex justify-center"
                    >
                        <div className="w-96 h-96 rounded-full bg-linear-to-tr from-(--shroomlight-accent-1) to-(--shroomlight-surface) flex items-center justify-center shadow-2xl shadow-(--shroomlight-glow)/40">
                            <img
                                src="/logo.svg"
                                alt="Shroomlight Logo"
                                className="w-64 h-64"
                            />
                        </div>
                    </motion.div>

                    {/* Title */}
                    <div className="space-y-4">
                        <h1 
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-(--shroomlight-light) tracking-tight"
                            style={{ fontFamily: 'var(--font-heading)' }}
                        >
                            Shroomlight Studio
                        </h1>
                        <p 
                            className="text-xl sm:text-2xl md:text-3xl text-(--shroomlight-accent-1) max-w-3xl mx-auto"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            Crafting games, engines, and experimental experiences at the intersection of art and code
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Link
                            href="/projects" 
                            className="group px-8 py-4 bg-linear-to-r from-(--shroomlight-primary) to-(--shroomlight-glow) rounded-xl text-white font-semibold flex items-center gap-2 hover:shadow-2xl hover:shadow-(--shroomlight-primary)/50 transition-all hover:scale-105"
                            style={{ fontFamily: 'var(--font-heading)' }}
                        >
                            Explore Projects
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/engine" 
                            className="px-8 py-4 bg-(--shroomlight-surface) rounded-xl text-(--shroomlight-light) font-semibold hover:bg-(--shroomlight-surface)/80 transition-all border border-(--shroomlight-primary)/30 hover:border-(--shroomlight-primary)"
                            style={{ fontFamily: 'var(--font-heading)' }}
                        >
                            Discover Shroom Engine
                        </Link>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto"
                    >
                        <div className="space-y-2">
                            <div className="text-4xl font-bold text-(--shroomlight-primary)" style={{ fontFamily: 'var(--font-heading)' }}>
                                2
                            </div>
                            <div className="text-(--shroomlight-accent-1)" style={{ fontFamily: 'var(--font-body)' }}>
                                Projects Shipped
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-4xl font-bold text-(--shroomlight-primary)" style={{ fontFamily: 'var(--font-heading)' }}>
                                1
                            </div>
                            <div className="text-(--shroomlight-accent-1)" style={{ fontFamily: 'var(--font-body)' }}>
                                Custom Engine
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-4xl font-bold text-(--shroomlight-primary)" style={{ fontFamily: 'var(--font-heading)' }}>
                                ∞
                            </div>
                            <div className="text-(--shroomlight-accent-1)" style={{ fontFamily: 'var(--font-body)' }}>
                                Ideas & Experiments
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}