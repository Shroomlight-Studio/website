"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const pathname = usePathname();
    const containerRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
    const [indicator, setIndicator] = useState({ x: 0, width: 0 });

    const navigation = [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: "Shroom Engine", path: "/engine" },
    ];

    const isActive = (path: string) => {
        return pathname === path;
    }

    useLayoutEffect(() => {
        const activeEl = itemRefs.current[pathname];
        const containerEl = containerRef.current;

        if (activeEl && containerEl) {
            const a = activeEl.getBoundingClientRect();
            const c = containerEl.getBoundingClientRect();

            setIndicator({
                x: a.left - c.left,
                width: a.width,
            });
        }
    }, [pathname]);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-(--shroomlight-bg)/90 backdrop-blur-md border-b border-(--shroomlight-surface)/30">
            <div className="max-w-7xl mx-auto px-4">
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
                    <div
                        ref={containerRef}
                        className="relative hidden md:flex items-center gap-8"
                    >
                        {/* Active Rect */}
                        <motion.div
                            className="absolute top-1/2 -translate-y-1/2 h-10 rounded-lg bg-(--shroomlight-surface)"
                            animate={{ x: indicator.x, width: indicator.width }}
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />

                        {navigation.map((item) => {
                            const active = isActive(item.path);

                            return (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    ref={(el) => {
                                        itemRefs.current[item.path] = el;
                                    }}
                                    className={`relative z-10 px-4 py-2 rounded-lg transition-colors ${
                                        pathname === item.path
                                        ? "text-(--shroomlight-light)"
                                        : "text-(--shroomlight-accent-1) hover:text-(--shroomlight-light)"
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>

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
                        <div className="px-4 py-4 space-y-2">
                            {navigation.map((item) => {
                                const active = isActive(item.path);
                            
                                return (
                                    <Link
                                        href={item.path}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`block w-full text-left px-4 py-3 rounded-lg transition-all ${
                                            active
                                            ? 'bg-(--shroomlight-surface) text-(--shroomlight-light)'
                                            : 'text-(--shroomlight-accent-1) hover:bg-(--shroomlight-surface)/50 hover:text-(--shroomlight-light)'
                                        }`}
                                        style={{ fontFamily: 'var(--font-body)' }}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
