'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import EducationSection from './EducationSection';
import AchievementsSection from './AchievementsSection';

export default function JourneyPage() {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <div
            id="journey"
            ref={ref}
            className="relative bg-[#0a0a0a]"
        >
            {/* Top entrance gradient from hero */}
            <div
                className="pointer-events-none absolute top-0 left-0 right-0 h-32 z-10"
                style={{ background: 'linear-gradient(to bottom, #0a0a0a 0%, transparent 100%)' }}
            />

            {/* Subtle grid texture */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)`,
                    backgroundSize: '72px 72px',
                }}
            />

            {/* Sections */}
            <AboutSection />

            <div
                className="relative h-px mx-8 sm:mx-16"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }}
            />

            <SkillsSection />

            <div
                className="relative h-px mx-8 sm:mx-16"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }}
            />

            <ProjectsSection />

            <div
                className="relative h-px mx-8 sm:mx-16"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }}
            />

            <EducationSection />

            <div
                className="relative h-px mx-8 sm:mx-16"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }}
            />

            <AchievementsSection />
        </div>
    );
}
