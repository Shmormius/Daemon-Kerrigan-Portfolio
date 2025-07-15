import { ProjectDetail } from '../types';

export const projectDetails: Record<string, ProjectDetail> = {
  "building-classification": {
    id: "building-classification",
    title: "CSU Building Classification",
    subtitle: "Machine Learning Competition Winner",
    heroImage: "image/project-thumbnail/Picture3.png",
    overview: "Won CSU's first Machine Learning competition with a ResNet50-based building classification system that achieved 94% accuracy in identifying campus buildings from images.",
    technologies: ["Python", "PyTorch", "ResNet50", "Computer Vision", "Machine Learning"],
    githubUrl: "https://github.com/yourusername/building-classification",
    sections: [
      {
        left: [
          {
            type: 'text',
            title: 'Problem Statement',
            content: 'The challenge was to create a machine learning model that could accurately classify different buildings on the CSU campus from photographs. This required handling various lighting conditions, angles, and seasonal changes.'
          },
          {
            type: 'text',
            title: 'Technical Approach',
            content: 'I used a pre-trained ResNet50 model and fine-tuned it on our custom dataset of campus buildings. The model was trained with data augmentation techniques to improve robustness.'
          }
        ],
        right: [
          {
            type: 'image',
            content: 'image/project-thumbnail/Picture3.png',
            alt: 'Building classification results',
            title: 'Model Performance'
          },
          {
            type: 'text',
            title: 'Results',
            content: 'Achieved 94% accuracy on the test set, outperforming other submissions. The model correctly identified 23 out of 25 building types with high confidence scores.'
          }
        ]
      },
      {
        left: [
          {
            type: 'text',
            title: 'Key Features',
            content: 'Data augmentation pipeline, Transfer learning implementation, Model ensemble techniques, Real-time inference capabilities'
          }
        ],
        right: [
          {
            type: 'code',
            title: 'Model Architecture',
            content: `# ResNet50 with custom classifier
model = torchvision.models.resnet50(pretrained=True)
model.fc = nn.Sequential(
    nn.Dropout(0.5),
    nn.Linear(2048, 512),
    nn.ReLU(),
    nn.Dropout(0.3),
    nn.Linear(512, num_classes)
)`,
            language: 'python'
          }
        ]
      }
    ]
  },
  
  "web-scraper": {
    id: "web-scraper",
    title: "Web Scraper with GitHub Actions",
    subtitle: "Automated Data Collection & Visualization",
    heroImage: "image/project-thumbnail/graph.png",
    overview: "Developed an automated web scraping system that collects game data daily using GitHub Actions, stores it in a database, and generates interactive visualizations.",
    technologies: ["Python", "BeautifulSoup", "GitHub Actions", "Pandas", "Plotly", "SQLite"],
    githubUrl: "https://github.com/yourusername/web-scraper",
    liveUrl: "https://your-scraper-dashboard.com",
    sections: [
      {
        left: [
          {
            type: 'text',
            title: 'Automation Pipeline',
            content: 'Built a robust scraping pipeline that runs daily via GitHub Actions, collecting data from multiple gaming websites and storing it in a structured database.'
          },
          {
            type: 'text',
            title: 'Data Processing',
            content: 'Implemented data cleaning and normalization processes to handle inconsistent data formats and ensure data quality across different sources.'
          }
        ],
        right: [
          {
            type: 'image',
            content: 'image/project-thumbnail/graph.png',
            alt: 'Data visualization dashboard',
            title: 'Interactive Dashboard'
          },
          {
            type: 'link',
            title: 'Live Dashboard',
            content: 'View the live data visualization dashboard',
            href: 'https://your-scraper-dashboard.com'
          }
        ]
      }
    ]
  },
  
  "autonomous-rover": {
    id: "autonomous-rover",
    title: "Autonomous Rover",
    subtitle: "Internet-Controlled GPS Navigation",
    heroImage: "image/project-thumbnail/rover-desk.jpg",
    overview: "Designed and built an autonomous rover with GPS navigation capabilities and internet control interface using Arduino and Flask.",
    technologies: ["C++", "Arduino", "Flask", "GPS", "Servo Motors", "WiFi"],
    githubUrl: "https://github.com/yourusername/autonomous-rover",
    sections: [
      {
        left: [
          {
            type: 'text',
            title: 'Hardware Design',
            content: 'Custom-built rover chassis with GPS module, servo motors for steering, and WiFi module for remote communication. All components integrated with Arduino Uno.'
          },
          {
            type: 'text',
            title: 'Navigation System',
            content: 'Implemented GPS-based navigation with waypoint following and obstacle avoidance using ultrasonic sensors.'
          }
        ],
        right: [
          {
            type: 'image',
            content: 'image/project-thumbnail/rover-desk.jpg',
            alt: 'Autonomous rover hardware',
            title: 'Rover Hardware'
          },
          {
            type: 'text',
            title: 'Control Interface',
            content: 'Web-based control panel built with Flask allowing real-time monitoring and manual override capabilities.'
          }
        ]
      }
    ]
  },
  
  "static-portfolio-website": {
    id: "static-portfolio-website",
    title: "Static Portfolio Website",
    subtitle: "GitHub Pages Hosted Portfolio",
    heroImage: "image/project-thumbnail/javascript.png",
    overview: "Created a responsive portfolio website using vanilla HTML, CSS, and JavaScript, hosted on GitHub Pages with custom domain configuration.",
    technologies: ["HTML5", "CSS3", "JavaScript", "GitHub Pages", "Responsive Design"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://yourportfolio.com",
    sections: [
      {
        left: [
          {
            type: 'text',
            title: 'Design Philosophy',
            content: 'Focused on clean, minimalist design with smooth animations and responsive layout that works across all devices.'
          },
          {
            type: 'text',
            title: 'Performance Optimization',
            content: 'Implemented lazy loading, optimized images, and minified assets to achieve fast load times and high Lighthouse scores.'
          }
        ],
        right: [
          {
            type: 'image',
            content: 'image/project-thumbnail/javascript.png',
            alt: 'Portfolio website screenshot',
            title: 'Website Interface'
          },
          {
            type: 'link',
            title: 'Live Website',
            content: 'Visit the live portfolio website',
            href: 'https://yourportfolio.com'
          }
        ]
      }
    ]
  },
  
  "consumer-producer-problem": {
    id: "consumer-producer-problem",
    title: "Consumer Producer Problem",
    subtitle: "Concurrent Programming in Java",
    heroImage: "image/project-thumbnail/consumer.png",
    overview: "Implementation of the classic consumer-producer problem using Java threads, demonstrating synchronization and concurrency concepts.",
    technologies: ["Java", "Threads", "Synchronization", "Concurrency", "Semaphores"],
    githubUrl: "https://github.com/yourusername/consumer-producer",
    sections: [
      {
        left: [
          {
            type: 'text',
            title: 'Concurrency Implementation',
            content: 'Implemented multiple producer and consumer threads with proper synchronization using semaphores and mutexes to prevent race conditions.'
          },
          {
            type: 'code',
            title: 'Producer Thread',
            content: `public void produce() throws InterruptedException {
    empty.acquire();
    mutex.acquire();
    
    buffer.add(item);
    System.out.println("Produced: " + item);
    
    mutex.release();
    full.release();
}`,
            language: 'java'
          }
        ],
        right: [
          {
            type: 'image',
            content: 'image/project-thumbnail/consumer.png',
            alt: 'Consumer producer diagram',
            title: 'System Architecture'
          },
          {
            type: 'text',
            title: 'Thread Safety',
            content: 'Ensured thread safety through proper use of synchronization primitives and atomic operations.'
          }
        ]
      }
    ]
  }
};

export function getProjectDetail(id: string): ProjectDetail | undefined {
  return projectDetails[id];
}

export function getAllProjectDetails(): ProjectDetail[] {
  return Object.values(projectDetails);
}
