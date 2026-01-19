"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = usePathname();

    const navigation = [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: "Shroom Engine", path: "/engine" },
    ];

    const isActive = (path: string) => {
        return location === path;
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-(--shroomlight-bg)/90 border-b border-(--shroomlight-surface)/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 group"
                    >
                        <div className="w-8 h-8 rounded-lg bg-linear-to-br from-(--studio-primary) to-(--studio-glow) flex items-center justify-center shadow-lg shadow-(--studio-glow)20 group-hover:shadow-(--studio-glow)/40 transition-all">
                            <img
                                src="/logo.svg"
                                alt="Shroomlight Logo"
                                className="w-8 h-8"
                            />
                        </div>
                        <span className="text-xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                            Shroomlight
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navigation.map((item) => {
                            const active = isActive(item.path);

                            return (
                                <Link
                                    key={item.name}
                                    href={item.path}
                                    className={`
                                        relative inline-flex items-center
                                        px-4 py-2 rounded-lg transition-all
                                        ${active
                                            ? 'text-(--shroomlight-light)'
                                            : 'text-(--shroomlight-accent-1) hover:text-(--shroomlight-light)'
                                        }`
                                    }
                                    style={{ fontFamily: 'var(--font-body)' }}
                                >
                                    {active && (
                                        <motion.div 
                                            layoutId="activeNav"
                                            className="absolute inset-0 -z-10 rounded-lg bg-(--shroomlight-surface)"
                                            transition={{type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    
                                    {item.name}
                                </Link>
                            );                            
                        })}
                    </nav>
                    
                    {/* Mobile menu Navigation */}
                    <button 
                        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-(--shroomlight-surface) transition-colors"
                    >
                        {isMobileMenuOpen 
                            ? <X className="w-6 h-6 text-(--shroomlight-accent-1)" /> 
                            : <Menu className="w-6 h-6 text-(--shroomlight-accent-1)" />
                        }
                    </button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden border-t border-(--shroomlight-surface)/30 bg-(--shroomlight-bg)"
                        >
                            <nav className="px-4 py-4 flex flex-col gap-2">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block w-full text-left px-4 py-3 rounded-lg transition-all ${
                                        isActive(item.path)
                                        ? 'bg-(--shroomlight-surface) text-(--shroomlight-light)'
                                        : 'text-(--shroomlight-accent-1) hover:bg-(--shroomlight-surface)/50 hover:text-(--shroomlight-light)'
                                    }`}
                                    style={{ fontFamily: 'var(--font-body)' }}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            </nav>

                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );

}
