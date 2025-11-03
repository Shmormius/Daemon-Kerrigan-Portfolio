import { ReactElement, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import { getBlogDetail } from '../data/blogDetails';
import { BlogDetailSection } from '../types';
import './styles/BlogDetail.css';
import AnimeRankingList from '../components/Blog/AnimeRankingList';
import BookJournalList from '../components/Blog/BookJournalList';
import { animeRankingData } from '../data/animeData';
import { bookJournalData } from '../data/bookData';

export default function BlogDetail(): ReactElement {
  const { postId } = useParams<{ postId: string }>();
  
  const blogPost = postId ? getBlogDetail(postId) : undefined;

  const highlightHouseText = () => {
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
    
    textElements.forEach(element => {
      if (element.children.length === 0) {
        const text = element.textContent || '';
        if (text.toLowerCase().includes('house')) {
          const newHTML = text.replace(
            /\bhouse\b/gi, 
            '<span class="house">$&</span>'
          );
          element.innerHTML = newHTML;
        }
      }
    });
  };

  useEffect(() => {
    if (blogPost?.customCss) {
      document.body.classList.add(`${blogPost.customCss}-page`);
      
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = `/styles/${blogPost.customCss}.css`;
      link.id = `blog-css-${blogPost.customCss}`;
      document.head.appendChild(link);

      setTimeout(highlightHouseText, 100);

      return () => {
        document.body.classList.remove(`${blogPost.customCss}-page`);
        const existingLink = document.getElementById(`blog-css-${blogPost.customCss}`);
        if (existingLink) {
          document.head.removeChild(existingLink);
        }
      };
    } else {
      setTimeout(highlightHouseText, 100);
    }
  }, [blogPost?.customCss, blogPost?.sections]);

  if (!blogPost) {
    return <Navigate to="/blog" replace />;
  }

  const renderSection = (section: BlogDetailSection, index: number) => {
    const className = section.className ? `blog-section ${section.className}` : 'blog-section';
    
    switch (section.type) {
      case 'text':
        return (
          <div key={index} className={className}>
            {section.title && <h3>{section.title}</h3>}
            {section.subtitle && <h4>{section.subtitle}</h4>}
            <p>{section.content}</p>
          </div>
        );
      
      case 'image':
        return (
          <div key={index} className={className}>
            {section.title && <h3>{section.title}</h3>}
            <img src={section.content as string} alt={section.alt || section.title} />
          </div>
        );
      
      case 'list':
        return (
          <div key={index} className={className}>
            {section.title && <h3>{section.title}</h3>}
            <ul>
              {(section.content as string[]).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        );
      
      case 'quote':
        return (
          <div key={index} className={className}>
            <blockquote>
              <p>"{section.content}"</p>
              {section.metadata?.author && (
                <cite>— {section.metadata.author}</cite>
              )}
            </blockquote>
          </div>
        );
      
      case 'gallery':
        return (
          <div key={index} className={className}>
            {section.title && <h3>{section.title}</h3>}
            <div className="image-gallery">
              {(section.content as string[]).map((image, i) => (
                <img key={i} src={image} alt={`Gallery image ${i + 1}`} />
              ))}
            </div>
          </div>
        );
      
      case 'custom':
        if (section.component === 'AnimeRankingList') {
          return (
            <div key={index} className={className}>
              {section.title && <h3>{section.title}</h3>}
              <AnimeRankingList animeData={animeRankingData} />
            </div>
          );
        }
        if (section.component === 'BookJournalList') {
          return (
            <div key={index} className={className}>
              {section.title && <h3>{section.title}</h3>}
              <BookJournalList bookData={bookJournalData} />
            </div>
          );
        }
        return null;
      
      default:
        return null;
    }
  };

  return (
    <div className="blog-detail-container">
      <Header subtitle={blogPost.title} />
      
      <article className="blog-detail-content">
        {/* Hero Section */}
        <div className="blog-meta">
            <h1>{blogPost.title}</h1>
            {blogPost.subtitle && <h2>{blogPost.subtitle}</h2>}
        </div>

        {/* Content Sections */}
        <div className="blog-content">
          {blogPost.sections.map((section, index) => renderSection(section, index))}
        </div>
      </article>
      
      <Footer />
    </div>
  );
}