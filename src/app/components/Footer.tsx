import { Mail } from "lucide-react"
import { SiDiscord, SiGithub, SiX } from "react-icons/si";

export function Footer() {
    return (
        <footer className="bg-(--shroomlight-bg) border-t border-(--shroomlight-surface)/30 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-(--shroomlight-primary) to-(--shroomlight-glow) flex items-center justify-center shadow-lg shadow-(--shroomlight-glow)/20">
                                <img
                                    src="/logo.svg"
                                    alt="Shroomlight Logo"
                                    className="w-5 h-5"
                                />
                            </div>
                            <span className="text-xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                                Shroomlight Studio
                            </span>
                        </div>
                        <p className="text-(--shroomlight-accent-1) text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                            Creating games, engines, and experimental experiences
                        </p>
                    </div>

                    {/* Links */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-(--shroomlight-light)" style={{ fontFamily: 'var(--font-heading)' }}>
                            Explore
                        </h4>
                        <ul className="space-y-2 text-sm text-(--shroomlight-accent-1)" style={{ fontFamily: 'var(--font-body)' }}>
                            <li>
                                <a href="/projects?category=Games" className="hover:text-(--shroomlight-primary) transition-colors">
                                    Games
                                </a>
                            </li>
                            <li>
                                <a href="/projects?category=Websites" className="hover:text-(--shroomlight-primary) transition-colors">
                                    Websites
                                </a>
                            </li>
                            <li>
                                <a href="/projects?category=Tools" className="hover:text-(--shroomlight-primary) transition-colors">
                                    Tools
                                </a>
                            </li>
                            <li>
                                <a href="/projects?category=Experiments" className="hover:text-(--shroomlight-primary)] transition-colors">
                                    Experiments
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-(--shroomlight-light)" style={{ fontFamily: 'var(--font-heading)' }}>
                            Connect
                        </h4>
                        <div className="flex gap-4">
                            <a
                                href="https://discord.gg/xyHvWTEhJp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-(--shroomlight-surface) flex items-center justify-center text-(--shroomlight-accent-1) hover:bg-(--shroomlight-primary) hover:text-white transition-all hover:shadow-lg hover:shadow-(--shroomlight-primary)/30"
                            >
                                <SiDiscord className="w-5 h-5" />
                            </a>
                            <a
                                href="https://github.com/Shroomlight-Studio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-(--shroomlight-surface) flex items-center justify-center text-(--shroomlight-accent-1) hover:bg-(--shroomlight-primary) hover:text-white transition-all hover:shadow-lg hover:shadow-(--shroomlight-primary)/30"
                            >
                                <SiGithub className="w-5 h-5" />
                            </a>
                            <a
                                href="https://x.com/shroomlightstd"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-(--shroomlight-surface) flex items-center justify-center text-(--shroomlight-accent-1) hover:bg-(--shroomlight-primary) hover:text-white transition-all hover:shadow-lg hover:shadow-(--shroomlight-primary)/30"
                            >
                                <SiX className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:contact@shroomlightstudio.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-(--shroomlight-surface) flex items-center justify-center text-(--shroomlight-accent-1) hover:bg-(--shroomlight-primary) hover:text-white transition-all hover:shadow-lg hover:shadow-(--shroomlight-primary)/30"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div 
                    className="mt-8 pt-8 border-t border-(--shroomlight-surface)/30 text-center text-sm text-(--shroomlight-accent-1)" 
                    style={{ fontFamily: 'var(--font-body)' }}
                >
                    <p>
                        © {new Date().getFullYear()} Shroomlight Studio. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}