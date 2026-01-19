"use client";

import { Code2, Download, Github, Layers, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SiGithub } from "react-icons/si";

const features = [
    {
        icon: Zap,
        title: "Lightning Fast Rendering",
        description: "Optimized for speed, Shroom Engine delivers high-performance rendering for immersive experiences."
    },
    {
        icon: Code2,
        title: "Clean API Design",
        description: "Intuitive and well-documented API makes it easy for developers to integrate and extend functionality."
    },
    {
        icon: Layers,
        title: 'Modular Architecture',
        description: 'Use only the components you need with our flexible plugin system',
    }
];

const techSpecs = [
    {
        label: "Languages",
        value: "C++, Lua"
    },
    {
        label: "Supported Platforms",
        value: "Windows, Linux"
    },
    {
        label: "Graphics API",
        value: "Vulkan"
    },
    {
        label: "License",
        value: "MIT"
    }
]

export function EnginePage() {
    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-20 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                    >
                        <div className="inline-block px-4 py-2 bg-(--shroomlight-glow)/20 rounded-full border border-(--shroomlight-primary)/30">
                            <span 
                                className="text-sm text-(--shroomlight-primary)"
                                style={{ fontFamily: 'var(--font-body)' }}
                            >
                                Our Custom Game Engine
                            </span>
                        </div>
                        <h1 
                            className="text-5xl sm:text-6xl md:text-7xl font-bold text-(--shroomlight-light)"
                            style={{ fontFamily: 'var(--font-heading)' }}
                        >
                            Shroom Engine
                        </h1>
                        <p 
                            className="text-xl sm:text-2xl text-(--shroomlight-accent-1) max-w-3xl mx-auto"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            A lightweight, experimental game engine built from the ground up for creative freedom, rapid prototyping, and innovative gameplay
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <a
                            href="https://github.com/Shroomlight-Studio/Shroom"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-(--shroomlight-surface) rounded-xl text-(--shroomlight-light) font-semibold hover:bg-(--shroomlight-surface)/80 transition-all border border-(--shroomlight-primary)/30 hover:border-(--shroomlight-primary) flex items-center gap-2"
                            style={{ fontFamily: 'var(--font-heading)' }}
                        >
                            <SiGithub className="w-5 h-5" />
                            View on GitHub
                        </a>
                    </motion.div>
                </div>

                {/* Tech Specs */}
                <div className="mb-20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {techSpecs.map((spec, index) => (
                            <motion.div
                                key={spec.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                className="bg-(--shroomlight-surface) rounded-xl p-6 text-center border border-(--shroomlight-primary)/20"
                            >
                                <div 
                                    className="text-sm text-(--shroomlight-accent-1) mb-2"
                                    style={{ fontFamily: 'var(--font-body)' }}
                                >
                                    {spec.label}
                                </div>
                                <div 
                                    className="font-semibold text-(--shroomlight-light)"
                                    style={{ fontFamily: 'var(--font-heading)' }}
                                >
                                    {spec.value}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Features Section */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-(--shroomlight-light) mb-4"
                            style={{ fontFamily: 'var(--font-heading)' }}
                        >
                            Core Features
                        </h2>
                        <p 
                            className="text-lg text-(--shroomlight-accent-1) max-w-2xl mx-auto"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            Everything you need to bring your creative vision to life
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;

                            return (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    className="group bg-(--shroomlight-surface) rounded-2xl p-6 sm:p-8 hover:shadow-2xl hover:shadow-(--shroomlight-primary)/20 transition-all duration-300 border border-(--shroomlight-primary)/20 hover:border-(--shroomlight-primary)/50"
                                >
                                    <div className="mb-4">
                                        <div className="w-14 h-14 rounded-xl bg-linear-to-br from-(--shroomlight-primary) to-(--shroomlight-glow) flex items-center justify-center shadow-lg shadow-(--shroomlight-glow)/30 group-hover:shadow-(--shroomlight-glow)/50 transition-all group-hover:scale-110">
                                            <Icon className="w-7 h-7 text-white" />
                                        </div>
                                    </div>
                                    <h3 
                                        className="text-xl font-bold text-(--shroomlight-light) mb-3"
                                        style={{ fontFamily: 'var(--font-heading)' }}
                                    >
                                        {feature.title}
                                    </h3>
                                    <p 
                                        className="text-(--shroomlight-accent-1)"
                                        style={{ fontFamily: 'var(--font-body)' }}
                                    >
                                        {feature.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Code Example Section */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-(--shroomlight-light) mb-4"
                            style={{ fontFamily: 'var(--font-heading)' }}
                        >
                            Simple & Elegant API
                        </h2>
                        <p 
                            className="text-lg text-(--shroomlight-accent-1) max-w-2xl mx-auto"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            Get started with just a few lines of code
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="bg-(--shroomlight-surface) rounded-2xl p-6 sm:p-8 border border-(--shroomlight-primary)/30 overflow-x-auto"
                    >
                        <pre 
                        className="text-sm sm:text-base text-(--shroomlight-accent-1)"
                        style={{ fontFamily: 'monospace' }}
                        >
                            {`#include <Shroom/Shroom.h>

class BasicApp : public Shroom::Application {
public:
    BasicApp() : Application("Demo App", 1920, 1080) {}

    void OnUpdate(float deltaTime) override {
        // Update game logic here
    }

    void OnRender() override {
        Shroom::Renderer::BeginFrame();

        // Clear screen with a color
        Shroom::Renderer::Clear({0.2f, 0.3f, 0.3f, 1.0f});

        // Draw ImGui UI
        ImGui::Begin("Hello Shroom!");
        ImGui::Text("Welcome to your first Shroom app");
        ImGui::End();

        Shroom::Renderer::EndFrame();
    }
};

Shroom::Application* Shroom::CreateApplication() {
    return new BasicApp();
}`}
                        </pre>
                    </motion.div>
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="bg-linear-to-br from-(--shroomlight-surface) to-(--shroomlight-glow)/10 rounded-2xl p-8 sm:p-12 text-center border border-(--shroomlight-primary)/30"
                >
                    <h2 
                        className="text-3xl sm:text-4xl font-bold text-(--shroomlight-light) mb-4"
                        style={{ fontFamily: 'var(--font-heading)' }}
                    >
                        Shroom Engine Coming Soon!
                    </h2>
                    
                    <p 
                        className="text-lg text-(--shroomlight-accent-1) mb-8 max-w-2xl mx-auto"
                        style={{ fontFamily: 'var(--font-body)' }}
                    >
                        We’re hard at work on Shroom Engine — the ultimate toolkit for building your dream games. 
                        Sign up below to get notified when it’s ready!
                    </p>

                    {/* Email / Notification CTA */}
                    <form className="flex flex-col sm:flex-row gap-4 justify-center"
                        onSubmit={async (e) => {
                            e.preventDefault();
                            
                            const form = e.currentTarget as HTMLFormElement;
                            const formData = new FormData(form);
                            const email = formData.get("email")?.toString();
                            if (!email) return;

                            try {
                                const res = await fetch("/api/notify", {
                                    method: "POST",
                                    headers: { "Content-Type": "application/json" },
                                    body: JSON.stringify({ email }),
                                });

                                if (res.ok) {
                                    alert("You have been added to the notify list!");
                                    form.reset();
                                } else {
                                    alert("Failed to send your request.");
                                }
                            } catch (err) {
                                console.error(err);
                                alert("Something went wrong!");
                            }
                        }}
                    >
                        <input 
                            type="email"
                            name="email"
                            placeholder="Your email address"
                            className="px-4 py-3 rounded-xl border border-(--shroomlight-primary) bg-(--shroomlight-surface) text-(--shroomlight-light) placeholder-(--shroomlight-accent-1) focus:outline-none focus:ring-2 focus:ring-(--shroomlight-primary) transition-all w-full sm:w-80"
                        />
                        <button
                            type="submit"
                            className="px-8 py-3 bg-linear-to-r from-(--shroomlight-primary) to-(--shroomlight-glow) rounded-xl text-white font-semibold hover:shadow-2xl hover:shadow-(--shroomlight-primary)/50 transition-all hover:scale-105"
                            style={{ fontFamily: 'var(--font-heading)' }}
                        >
                            Notify Me
                        </button>
                    </form>

                    <p className="mt-4 text-sm text-(--shroomlight-accent-1)" style={{ fontFamily: 'var(--font-body)' }}>
                        No spam — just updates when Shroom Engine launches.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}