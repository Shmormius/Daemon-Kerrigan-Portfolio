import { CarouselItem } from '../types';
import { getAllProjectDetails } from '../data/projectDetails';

/**
 * Selects three projects from the project data for the carousel
 * @param count - Number of projects to select (default: 3)
 * @returns Array of CarouselItem objects
 */
export function getFeaturedProjects(count: number = 3): CarouselItem[] {
  const allProjects = getAllProjectDetails();
  
  const selectedProjects = allProjects.slice(0, count);
  
  return selectedProjects.map(project => ({
    title: project.title,
    image: project.heroImage || 'image/placeholders/dove1.jpg', 
    link: `/projects/${project.id}`
  }));
}

/**
 * Selects random projects from the project data for the carousel
 * @param count - Number of projects to select (default: 3)
 * @returns Array of CarouselItem objects
 */
export function getRandomFeaturedProjects(count: number = 3): CarouselItem[] {
  const allProjects = getAllProjectDetails();
  
  if (allProjects.length <= count) {
    return allProjects.map(project => ({
      title: project.title,
      image: project.heroImage || 'image/placeholders/dove1.jpg',
      link: `/projects/${project.id}`
    }));
  }
  
  const shuffled = [...allProjects].sort(() => 0.5 - Math.random());
  const selectedProjects = shuffled.slice(0, count);
  
  return selectedProjects.map(project => ({
    title: project.title,
    image: project.heroImage || 'image/placeholders/dove1.jpg',
    link: `/projects/${project.id}`
  }));
}
