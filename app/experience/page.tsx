import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { FiMapPin, FiAward, FiBriefcase, FiBook } from "react-icons/fi";

export default function ExperiencePage() {
  const data = [
    {
      title: "2022-2026",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white">
            <FiBook className="w-5 h-5 text-blue-400" />
            <div>
              <h3 className="text-lg font-semibold">Bachelor of Technology</h3>
              <div className="flex items-center gap-2 text-neutral-400 text-sm mt-1">
                <FiMapPin className="w-4 h-4" />
                <span>Jalgaon, IN</span>
              </div>
            </div>
          </div>

          <div className="pl-7">
            <p className="text-neutral-300 text-sm leading-relaxed">
              I will be Graduated with BTech in Computer Engineering, focusing on software
              development and computer science fundamentals. Developed strong
              problem-solving skills and technical expertise through
              comprehensive coursework and practical projects.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Jun 2023 - Dec 2023",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white">
            <FiBriefcase className="w-5 h-5 text-blue-400" />
            <div>
              <h3 className="text-lg font-semibold">Fullstack Developer</h3>
              <div className="flex items-center gap-2 text-neutral-400 text-sm mt-1">
                <span className="font-medium">We Are Engineer</span>
                <span>•</span>
                <span>Remote</span>
              </div>
            </div>
          </div>

          <div className="pl-7">
            <div className="space-y-3 text-sm text-neutral-300">
              <p className="leading-relaxed">
                Full-stack development role focusing on building scalable web
                applications.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">▹</span>
                  <span>
                    Developed backend services using Node.js
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">▹</span>
                  <span>Built responsive frontends with Next.js and React</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">▹</span>
                  <span>Automated development workflows with GitHub Actions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">▹</span>
                  <span>Optimized website performance for better speed and user experience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    
    {
      title: "Awards and Honors",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white">
            <FiAward className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-semibold">Achievements 🔥</h3>
          </div>

          <div className="pl-7 space-y-6 ">
            {/* Solana Radar Hackathon */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-400" />
                <a
                  href="https://drive.google.com/file/d/1TFXB3-PDFcV9i_XaA8X9LwggtFOR7vE2/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <h4 className="text-white font-medium hover:text-blue-400 transition-colors duration-200 inline-flex items-center gap-1">
                  IIT Bombay - National Entrepreneurship Challenge 2023 Finalists
                    <svg
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </h4>
                </a>
              </div>
              <div className="pl-5">
                <p className="text-neutral-300 text-sm leading-relaxed">
                  Achieved{" "}
                  <span className="text-blue-400 font-medium">8th place</span>{" "}
                  out of 50+ National teams, We refined ideas, pitched to experts, and grew exponentially,
                   showcasing innovative problem-solving.
                </p>
                <div className="flex gap-2 mt-2">
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">
                    National Competition
                  </span>
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">
                    50+ Teams
                  </span>
                </div>
              </div>
            </div>

            {/* Sui Overflow */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
              <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-400" />
              <a
                href="https://drive.google.com/file/d/1YS32js_ZvuK_x19ddGXs2mIhMaXTNri-/view"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <h4 className="text-white font-medium hover:text-blue-400 transition-colors duration-200 inline-flex items-center gap-1">
                Google Cloud - Gen AI Study Jam 2024
                <svg
                  className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                </h4>
              </a>
              </div>
              <div className="pl-5">
              <p className="text-neutral-300 text-sm leading-relaxed">
                Awarded for{" "}
                <span className="text-blue-400 font-medium">
                Excellence in GenAI
                </span>{" "}
                innovation—Optimized Vertex AI prompts, built GenAI apps with Gemini & Streamlit,
                 ranked top 5% in an AI challenge, and completed a 30-day GenAI program.
              </p>
              <div className="flex gap-2 mt-2">
                <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">
                GDSC Sarala Birla University, Ranchi
                </span>
                <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">
                GenAI
                </span>
                <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">
                Vertex AI
                </span>
              </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full ">
      <Timeline data={data} />
    </div>
  );
}
