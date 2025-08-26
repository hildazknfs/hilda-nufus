"use client";

import { useState } from "react";
import {
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("work");

  const projects = [
    {
      date: "Nov 2024 - Feb 2025",
      title: "ISO 27001:2022 at Superbank",
      description:
        "Superbank Indonesia is a fast-growing digital bank backed by Emtek Group, Grab, Singtel, and KakaoBank. I support the implementation of the Information Security Management System by managing documentation, updating security policies, and helping ensure compliance with ISO 27001:2022 standards.",
      category: "Security Compliance",
      link: "/superbank.jpg",
    },
    {
      date: "Jun 2025",
      title: "CI-Based Email Reminder Automation",
      description: "Built an automated CI pipeline with GitHub Actions to send scheduled compliance emails. The system reads data from Google Sheets and sends emails via Gmail SMTP using Python and GitHub Secrets.",
      category: "Productivity Engineering",
      techStack: "Python · GitHub Actions · Google Sheets API · Gmail SMTP · GitHub Secrets",
      link: "https://github.com/hildazknfs/email-automation-reminder-github-actions",
    },
    {
      date: "Jul 2025",
      title: "GRC Google Workspace Automation Tools",
      description:
        "Developed a Google Apps Script solution to automate evidence folder creation, request tracking, and email notifications for internal GRC workflows. Enabled full automation within Google Workspace without external APIs.",
      category: "Compliance Automation",
      techStack: "Google Apps Script · Google Workspace (Sheets, Drive, Gmail)",
      link: "https://github.com/hildazknfs/automated-ticket-tracker-google-apps-script",
    },
    {
      date: "Apr 2025",
      title: "Flask App Deployment with Cloud Run",
      description:
        "Containerized a Flask API using Docker and deployed it to Google Cloud Run. Set up CI/CD with GitHub Actions for automated builds and deployments using secure GitHub Secrets.",
      category: "Cloud Engineering",
      techStack: "Python · Flask · Docker · GitHub Actions · Google Cloud Run",
      link: "https://github.com/hildazknfs/flask-cloudrun",
    },
    {
      date: "May 2024",
      title: "MyBlossom ML Platform",
      description:
        "Developed machine learning models for menstrual cycle prediction as part of Bangkit Academy capstone. Applied data preprocessing, feature engineering, and collaborative development with cloud and mobile teams.",
      category: "Machine Learning",
      techStack: "Python · TensorFlow · Google Cloud Platform",
      link: "https://github.com/finvalnnk14/MyBlossom",
    },
  ];

  const experiences = [
    {
      company: "Superbank Indonesia",
      role: "Security Assurance - Information Security",
      period: "May 2024 – May 2025",
      description:
        "Supporting ISO 27001 compliance, user access and privileged access management, third party security assessments, and security awareness initiatives in a regulated digital banking environment.",
    },
    {
      company: "PT Dicoding Akademi Indonesia",
      role: "Bangkit Academy - Machine Learning Path",
      period: "Feb 2024 - June 2024",
      description:
        "Developed machine learning solutions and collaborated on cross-functional teams for technology innovation projects.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-12">
        <div className="text-sm font-normal tracking-tight">
          Hilda Nufus
        </div>
        <div className="flex gap-8">
          <button
            onClick={() => setActiveSection("work")}
            className={`text-sm tracking-tight transition-colors duration-200 ${
              activeSection === "work"
                ? "text-black"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            Work
          </button>
          <button
            onClick={() => setActiveSection("about")}
            className={`text-sm tracking-tight transition-colors duration-200 ${
              activeSection === "about"
                ? "text-black"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            About
          </button>
          <button
            onClick={() =>
              (window.location.href = "mailto:hildazknfs@gmail.com")
            }
            className="group flex items-center text-sm text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            Contact
          </button>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h1 className="text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight text-black">
                Security, compliance, automation.
              </h1>
              <div className="mt-6 flex items-center gap-3 text-sm text-gray-500">
                <a
                  href="mailto:hildazknfs@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1 hover:text-black transition-colors duration-200 underline"
                >
                  Email
                  <ExternalLink
                    size={12}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  />
                </a>
                <a
                  href="https://linkedin.com/in/hilda-zakiatun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1 hover:text-black transition-colors duration-200 underline"
                >
                  LinkedIn
                  <ExternalLink
                    size={12}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  />
                </a>
                <a
                  href="https://github.com/hildazknfs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1 hover:text-black transition-colors duration-200 underline"
                >
                  Github
                  <ExternalLink
                    size={12}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  />
                </a>
                <a
                  href="/CV_Hilda.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1 hover:text-black transition-colors duration-200 underline"
                >
                  Resume
                  <ExternalLink
                    size={12}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  />
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight text-gray-400">
                Information Security & Engineering.
              </h2>
              <p className="mt-6 text-sm text-gray-500">
                Jakarta, Indonesia ·{" "}
                <span className="italic">Open to remote work worldwide.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      {activeSection === "work" && (
        <section className="px-8 pb-20">
          <div className="max-w-6xl mx-auto">
            {/* Featured Project */}
            <div className="mb-24">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                <div className="lg:col-span-2">
                  <p className="text-sm text-gray-400 font-normal">
                    {projects[0].date}
                  </p>
                </div>
                <div className="lg:col-span-6">
                  <div className="flex items-center gap-3 mb-6">
                    <h3 className="text-xl font-normal tracking-tight">
                      {projects[0].title}
                    </h3>
                    <ArrowRight size={18} className="text-gray-300" />
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 font-normal">
                    {projects[0].description}
                  </p>
                  <span className="text-xs text-gray-500 font-normal tracking-wide uppercase">
                    {projects[0].category}
                  </span>
                </div>
                <div className="lg:col-span-4">
                  <div className="aspect-[4/3] bg-gray-100 relative rounded overflow-hidden">
                    <Image
                      src={projects[0].link}
                      alt="Superbank ISO 27001"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Other Projects */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 mb-24">
              {projects.slice(1).map((project, index) => (
                <div key={index} className="group">
                  <div className="flex items-start justify-between mb-4">
                    <p className="text-sm text-gray-400 font-normal">
                      {project.date}
                    </p>
                    {project.link.startsWith("http") && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-gray-500 transition-colors duration-200"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                  <h3 className="text-lg font-normal tracking-tight mb-4 group-hover:text-gray-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 font-normal text-sm">
                    {project.description}
                  </p>
                  <div className="text-xs text-gray-400 font-normal tracking-wide uppercase relative -top-1 leading-none">
                    {project.category}
                  </div>
                  <p className="text-xs text-gray-400 font-normal mt-2">
                    {project.techStack}
                  </p>
                </div>
              ))}
            </div>

            {/* Experience Section */}
            <div className="pt-20 border-t border-gray-200">
              <h2 className="text-2xl font-light tracking-tight mb-16">
                Experience
              </h2>
              <div className="space-y-16">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12"
                  >
                    <div className="lg:col-span-3">
                      <p className="text-sm text-gray-400 font-normal">
                        {exp.period}
                      </p>
                    </div>
                    <div className="lg:col-span-9">
                      <h3 className="text-lg font-normal tracking-tight mb-2">
                        {exp.role}
                      </h3>
                      <p className="text-gray-600 mb-4 font-normal">
                        {exp.company}
                      </p>
                      <p className="text-gray-700 font-normal leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {activeSection === "about" && (
        <section className="px-10 pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
              <div className="space-y-6 max-w-sm">
                <div>
                  <p className="text-lg font-semibold tracking-tight mb-6">
                    Hi, my name is Hilda!
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed mt-4 text-justify">
                    I’m an Information Security and Technology Professional with
                    experience in GRC initiatives like ISO 27001 implementation,
                    access reviews, and vendor risk assessments. I focus on
                    strengthening governance through practical security controls
                    and clear processes.
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Using Python, Google Apps Script, and GitHub Actions, I
                    streamline workflows, reduce manual work, and enhance audit
                    readiness.
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    I combine technical skills with a compliance mindset to
                    deliver scalable, efficient, and secure solutions.
                  </p>
                </div>
              </div>
              <div className="space-y-12">
                <div>
                  <h3 className="text-lg font-normal tracking-tight mb-6">
                    Tech Stack & Skills
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm text-gray-400 mb-2 font-normal tracking-wide uppercase">
                        Automation & Scripting
                      </p>
                      <p className="text-gray-700 font-normal">
                        Python, Google Apps Script, Github Actions, HTML
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-2 font-normal tracking-wide uppercase">
                        Security & Compliance
                      </p>
                      <p className="text-gray-700 font-normal">
                        ISO 27001, ISMS, Access Reviews, Third Party Risk, Risk
                        Management
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-2 font-normal tracking-wide uppercase">
                        Tools
                      </p>
                      <p className="text-gray-700 font-normal">
                        Git, Github, Docker, Google Workspace, Jira
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-2 font-normal tracking-wide uppercase">
                        Ops
                      </p>
                      <p className="text-gray-700 font-normal">
                        Workflow Automation, Evidence Tracking, CI Pipelines,
                        Compliance Tooling, Audit Support, Documentation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="px-8 py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <a
            href="#"
            className="text-xs text-gray-400 font-normal hover:text-black transition-colors duration-200"
          >
            BACK TO TOP
          </a>
        </div>
      </footer>
    </div>
  );
}
