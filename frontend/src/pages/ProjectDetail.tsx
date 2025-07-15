import { useParams } from 'react-router-dom';
import { ReactElement } from 'react';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import LeftRightSection from '../components/shared/LeftRightSection';
import ProjectDetailSection from '../components/Projects/ProjectDetailSection';
import { getProjectDetail } from '../data/projectDetails';
import './styles/ProjectDetail.css';

export default function ProjectDetail(): ReactElement {
  const { projectId } = useParams();
  const projectDetail = projectId ? getProjectDetail(projectId) : undefined;

  if (!projectDetail) {
    return (
      <div className="project-detail-container">
        <Header subtitle="Project Not Found" />
        <div className="project-not-found">
          <p>Sorry, the project you're looking for doesn't exist.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="project-detail-container">
      <Header subtitle={projectDetail.title} />
      
      <div className="project-detail-content">
        {/* Hero Section */}
        <div className="project-hero">
          {projectDetail.heroImage && (
            <img 
              src={projectDetail.heroImage} 
              alt={projectDetail.title}
              className="project-hero-image"
            />
          )}
          <div className="project-hero-content">
            <h1 className="project-title">{projectDetail.title}</h1>
            {projectDetail.subtitle && (
              <p className="project-subtitle">{projectDetail.subtitle}</p>
            )}
            <p className="project-overview">{projectDetail.overview}</p>
            
            <div className="project-technologies">
              {projectDetail.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
            
            <div className="project-links">
              {projectDetail.githubUrl && (
                <a 
                  href={projectDetail.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link-btn github-btn"
                >
                  View on GitHub
                </a>
              )}
              {projectDetail.liveUrl && (
                <a 
                  href={projectDetail.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link-btn live-btn"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Detail Sections */}
        <div className="project-sections">
          {projectDetail.sections.map((section, index) => (
            <LeftRightSection
              key={index}
              left={
                <div className="project-section-content">
                  {section.left.map((leftSection, leftIndex) => (
                    <ProjectDetailSection key={leftIndex} section={leftSection} />
                  ))}
                </div>
              }
              right={
                <div className="project-section-content">
                  {section.right.map((rightSection, rightIndex) => (
                    <ProjectDetailSection key={rightIndex} section={rightSection} />
                  ))}
                </div>
              }
            />
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}