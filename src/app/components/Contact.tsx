"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Mail, MessageCircle } from 'lucide-react';

export function Contact() {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative bg-linear-to-br from-(--shroomlight-surface) to-(--shroomlight-surface)/50 rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden border border-(--shroomlight-primary)/30 shadow-xl"
                >
                    {/* Background decorative elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-(--shroomlight-glow) rounded-full blur-3xl opacity-10" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-(--shroomlight-primary) rounded-full blur-3xl opacity-10" />

                    <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
                        {/* Icon */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                            className="flex justify-center"
                        >
                            <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-(--shroomlight-primary) to-(--shroomlight-glow) flex items-center justify-center shadow-lg">
                                <MessageCircle className="w-10 h-10 text-white" />
                            </div>
                        </motion.div>

                        {/* Heading */}
                        <div className="space-y-4">
                            <h2 
                                className="text-3xl sm:text-4xl md:text-5xl font-bold text-(--shroomlight-light)"
                                style={{ fontFamily: 'var(--font-heading)' }}
                            >
                                Want to collaborate or work with us?
                            </h2>
                            <p 
                                className="text-lg sm:text-xl text-(--shroomlight-accent-1) max-w-2xl mx-auto"
                                style={{ fontFamily: 'var(--font-body)' }}
                            >
                                We're always excited to connect with creative minds, collaborate on innovative projects, or discuss potential opportunities. Whether you have an idea, a project, or just want to say hello — we'd love to hear from you!
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                            <button
                                onClick={() => (window.location.href = "mailto:hello@shroomlight.studio")}
                                className="group px-8 py-4 bg-linear-to-r from-(--shroomlight-primary) to-(--shroomlight-glow) rounded-xl text-white font-semibold flex items-center gap-2 hover:shadow-xl transition-all hover:-translate-y-1 w-full sm:w-auto justify-center"
                                style={{ fontFamily: 'var(--font-heading)' }}
                            >
                                <Mail className="w-5 h-5" />
                                Get in Touch
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <a
                                href="mailto:hello@shroomlight.studio"
                                className="px-8 py-4 bg-(--shroomlight-surface) rounded-xl text-(--shroomlight-light) font-semibold hover:bg-(--shroomlight-surface)/80 transition-all border border-(--shroomlight-primary)/50 hover:border-(--shroomlight-primary) hover:shadow-md w-full sm:w-auto text-center"
                                style={{ fontFamily: 'var(--font-heading)' }}
                            >
                                hello@shroomlight.studio
                            </a>
                        </div>

                        {/* Additional info */}
                        <div className="pt-8 border-t border-(--shroomlight-primary)/20">
                            <p 
                                className="text-sm text-(--shroomlight-accent-2)"
                                style={{ fontFamily: 'var(--font-body)' }}
                            >
                                We typically respond within 24-48 hours
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}