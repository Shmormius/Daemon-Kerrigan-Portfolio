// Application constants

export const APP_CONFIG = {
  NAME: "Daemon's Website",
  VERSION: "1.0.0",
  AUTHOR: "Daemon Kerrigan",
  DESCRIPTION: "Personal portfolio website",
} as const;

export const ROUTES = {
  HOME: "/",
  ABOUT: "/about", 
  PROJECTS: "/projects",
  CONTACT: "/contact",
  PROJECT_DETAIL: "/projects/:projectId",
} as const;

export const CONTACT_INFO = {
  EMAIL: "shmormius@gmail.com",
  LOCATION: "Fort Collins, CO",
  SCHOOL: "Colorado State University",
  LANGUAGES: ["English", "Japanese"],
} as const;

export const SOCIAL_LINKS = {
  GITHUB: "https://github.com/Shmormius",
  LINKEDIN: "https://www.linkedin.com/in/daemon-kerrigan-83b89825a",
  INSTAGRAM: "https://www.instagram.com/bagofhostileroosters/",
  FACEBOOK: "https://www.facebook.com/daemon.kerrigan.5",
  STEAM: "https://steamcommunity.com/profiles/76561198375240696/",
} as const;

export const THEME = {
  COLORS: {
    PRIMARY: "#d9d0e2",
    SECONDARY: "#b0d1af", 
    TERTIARY: "#e48b17",
    HOUSE: "#6e90d8",
    WHITE: "#FFFFFF",
    BLACK: "#000",
    GREY: {
      0: "#f8f8f8",
      1: "#dbe1e8",
      2: "#b2becd",
      3: "#6c7983",
      4: "#454e56",
      5: "#2a2e35",
      6: "#12181b",
    },
  },
  BREAKPOINTS: {
    MOBILE: "600px",
    TABLET: "768px",
    DESKTOP: "1000px",
    LARGE: "1200px",
  },
} as const;

export const CAROUSEL_CONFIG = {
  AUTO_SCROLL_INTERVAL: 3000,
  TRANSITION_DURATION: 500,
  DUPLICATES_COUNT: 3,
} as const;

export const FORM_VALIDATION = {
  NAME: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 50,
  },
  SUBJECT: {
    MIN_LENGTH: 5,
    MAX_LENGTH: 100,
  },
  MESSAGE: {
    MIN_LENGTH: 10,
    MAX_LENGTH: 1000,
  },
} as const;

export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || "/api",
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000,
} as const;

// Navigation items
export const NAV_ITEMS = [
  { label: "Home", path: ROUTES.HOME },
  { label: "About", path: ROUTES.ABOUT },
  { label: "Projects", path: ROUTES.PROJECTS },
  { label: "Contact", path: ROUTES.CONTACT },
] as const;

// Project categories/skills
export const SKILLS = {
  PROGRAMMING: ["Java", "C", "C++", "Python", "Assembly", "algorithms", "data structures"],
  MACHINE_LEARNING: ["Neural Networks", "TensorFlow", "PyTorch", "Sklearn", "Pandas", "SVM", "Regression"],
  WEB_DEVELOPMENT: ["HTML", "CSS", "JavaScript", "React", "JSON", "REST APIs", "Flask"],
  AGILE: ["Git", "GitHub Actions", "CI/CD", "Scrum", "Jira", "devops"],
} as const;

// Animation/transition timings
export const TRANSITIONS = {
  FAST: "0.2s",
  NORMAL: "0.3s", 
  SLOW: "0.5s",
  VERY_SLOW: "1s",
} as const;
