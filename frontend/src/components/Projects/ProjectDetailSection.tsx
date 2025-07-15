import { ReactElement } from 'react';
import { ProjectDetailSection } from '../../types';
import './ProjectDetailSection.css';

interface ProjectDetailSectionProps {
  section: ProjectDetailSection;
}

export default function ProjectDetailSectionComponent({ section }: ProjectDetailSectionProps): ReactElement {
  const renderContent = () => {
    switch (section.type) {
      case 'text':
        return (
          <div className="section-text">
            {section.title && <h3 className="section-title">{section.title}</h3>}
            <p className="section-content">{section.content}</p>
          </div>
        );
      
      case 'image':
        return (
          <div className="section-image">
            {section.title && <h3 className="section-title">{section.title}</h3>}
            <img 
              src={section.content} 
              alt={section.alt || section.title || 'Project image'} 
              className="project-image"
            />
          </div>
        );
      
      case 'link':
        return (
          <div className="section-link">
            {section.title && <h3 className="section-title">{section.title}</h3>}
            <a 
              href={section.href || section.content} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              {section.content}
            </a>
          </div>
        );
      
      case 'code':
        return (
          <div className="section-code">
            {section.title && <h3 className="section-title">{section.title}</h3>}
            <pre className="code-block">
              <code className={`language-${section.language || 'text'}`}>
                {section.content}
              </code>
            </pre>
          </div>
        );
      
      case 'video':
        return (
          <div className="section-video">
            {section.title && <h3 className="section-title">{section.title}</h3>}
            <video 
              src={section.content} 
              controls 
              className="project-video"
            />
          </div>
        );
      
      default:
        return <div>Unsupported section type</div>;
    }
  };

  return (
    <div className={`project-detail-section section-${section.type}`}>
      {renderContent()}
    </div>
  );
}
