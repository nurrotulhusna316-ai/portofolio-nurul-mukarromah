import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Aspiration from './components/Aspiration';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ExperienceModal from './components/ExperienceModal';
import SummaryModal from './components/SummaryModal';

import {
  INITIAL_PROJECTS,
  INITIAL_SKILLS,
  INITIAL_EXPERIENCES,
  INITIAL_CONTACT,
  DEFAULT_AVATAR,
} from './data/portfolioData';
import { Project, Skill, Experience as ExperienceType, ContactInfo } from './types';

export default function App() {
  // LocalStorage-backed state with fallbacks to initial data
  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem('nm_projects');
      return saved ? JSON.parse(saved) : INITIAL_PROJECTS;
    } catch {
      return INITIAL_PROJECTS;
    }
  });

  const [skills, setSkills] = useState<Skill[]>(() => {
    try {
      const saved = localStorage.getItem('nm_skills');
      return saved ? JSON.parse(saved) : INITIAL_SKILLS;
    } catch {
      return INITIAL_SKILLS;
    }
  });

  const [experiences, setExperiences] = useState<ExperienceType[]>(() => {
    try {
      const saved = localStorage.getItem('nm_experiences');
      return saved ? JSON.parse(saved) : INITIAL_EXPERIENCES;
    } catch {
      return INITIAL_EXPERIENCES;
    }
  });

  const [contactInfo, setContactInfo] = useState<ContactInfo>(() => {
    try {
      const saved = localStorage.getItem('nm_contact');
      return saved ? JSON.parse(saved) : INITIAL_CONTACT;
    } catch {
      return INITIAL_CONTACT;
    }
  });

  const [customAvatarUrl, setCustomAvatarUrl] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('nm_avatar');
      return saved && saved.trim() ? saved : DEFAULT_AVATAR;
    } catch {
      return DEFAULT_AVATAR;
    }
  });

  // Modal active states
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false);
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false);

  // Sync state changes with localStorage
  useEffect(() => {
    try {
      localStorage.setItem('nm_projects', JSON.stringify(projects));
    } catch (e) {
      console.error(e);
    }
  }, [projects]);

  useEffect(() => {
    try {
      localStorage.setItem('nm_skills', JSON.stringify(skills));
    } catch (e) {
      console.error(e);
    }
  }, [skills]);

  useEffect(() => {
    try {
      localStorage.setItem('nm_experiences', JSON.stringify(experiences));
    } catch (e) {
      console.error(e);
    }
  }, [experiences]);

  useEffect(() => {
    try {
      localStorage.setItem('nm_contact', JSON.stringify(contactInfo));
    } catch (e) {
      console.error(e);
    }
  }, [contactInfo]);

  useEffect(() => {
    try {
      localStorage.setItem('nm_avatar', customAvatarUrl);
    } catch (e) {
      console.error(e);
    }
  }, [customAvatarUrl]);

  // Handlers
  const handleUpdateProjectLink = (projectId: string, newLink: string, linkType: string) => {
    const updated = projects.map((p) =>
      p.id === projectId ? { ...p, externalLink: newLink, linkType: linkType as any } : p
    );
    setProjects(updated);
    if (selectedProject && selectedProject.id === projectId) {
      setSelectedProject({ ...selectedProject, externalLink: newLink, linkType: linkType as any });
    }
  };

  const handleAddProject = (newProject: Project) => {
    setProjects([newProject, ...projects]);
  };

  const handleAddExperience = (newExp: ExperienceType) => {
    setExperiences([newExp, ...experiences]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-violet-200 selection:text-violet-900">
      {/* Navigation Bar */}
      <Navbar
        avatarUrl={customAvatarUrl}
        onOpenSummary={() => setIsSummaryModalOpen(true)}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section with Nurul's authentic profile photo */}
        <Hero
          avatarUrl={customAvatarUrl}
          onUpdateAvatar={(url) => setCustomAvatarUrl(url)}
        />

        {/* 2. Tentang Saya */}
        <About avatarUrl={customAvatarUrl} />

        {/* 3. Pendidikan */}
        <Education />

        {/* 4. Keahlian */}
        <Skills skills={skills} onUpdateSkills={setSkills} />

        {/* 5. Proyek Portofolio */}
        <Projects
          projects={projects}
          onOpenProject={(proj) => setSelectedProject(proj)}
          onAddProject={handleAddProject}
        />

        {/* 6. Pengalaman dan Pengembangan Diri */}
        <Experience
          experiences={experiences}
          onOpenAddModal={() => setIsExperienceModalOpen(true)}
        />

        {/* 7. Tujuan dan Cita-Cita */}
        <Aspiration />

        {/* 8. Kontak */}
        <Contact
          contactInfo={contactInfo}
          onUpdateContactInfo={setContactInfo}
        />
      </main>

      {/* Footer */}
      <Footer
        contactInfo={contactInfo}
        onOpenSummary={() => setIsSummaryModalOpen(true)}
      />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onUpdateLink={handleUpdateProjectLink}
      />

      <ExperienceModal
        isOpen={isExperienceModalOpen}
        onClose={() => setIsExperienceModalOpen(false)}
        onAddExperience={handleAddExperience}
      />

      <SummaryModal
        isOpen={isSummaryModalOpen}
        onClose={() => setIsSummaryModalOpen(false)}
        avatarUrl={customAvatarUrl}
        projects={projects}
        skills={skills}
        experiences={experiences}
        contactInfo={contactInfo}
      />
    </div>
  );
}
