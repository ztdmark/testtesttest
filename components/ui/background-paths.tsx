"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 24 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        width: 0.3 + i * 0.02,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full"
                viewBox="0 0 696 316"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="#FFD700"
                        strokeWidth={path.width}
                        strokeOpacity={0.3 + path.id * 0.02}
                        initial={{ pathLength: 0.3, opacity: 0.4 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.4, 0.6, 0.4],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 15 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    title,
    className
}: {
    title?: string;
    className?: string;
}) {
    return (
        <div className={cn("w-full h-full", className)}>
            <FloatingPaths position={1} />
            <FloatingPaths position={-1} />
            {title && (
                <div className="relative z-10 container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl text-center mb-12 gold-text">{title}</h2>
                </div>
            )}
        </div>
    );
}