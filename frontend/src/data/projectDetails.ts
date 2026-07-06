import { ProjectDetail } from '../types';

export const projectDetails: Record<string, ProjectDetail> = {
  "building-classification": {
    id: "building-classification",
    title: "CSU Building Classification",
    subtitle: "Winning submission - CSU's first Machine Learning competition",
    heroImage: "/image/project-thumbnail/Picture3.png",
    overview: "A computer-vision model that identifies Colorado State University campus buildings from photographs across 49 classes. Because the competition banned pretrained weights, the ResNet50 backbone was trained entirely from scratch and paired with a custom loss function to handle class imbalance and difficult samples. This submission won CSU's first Machine Learning competition.",
    technologies: ["Python", "PyTorch", "ResNet50", "Computer Vision", "NumPy", "Pandas"],
    githubUrl: "https://github.com/Shmormius/building-classification-CSU",
    sections: [
      {
        left: [
          {
            type: 'text',
            title: 'The Challenge',
            content: 'The task was to classify photographs into 49 distinct CSU campus buildings, taken across varied angles, lighting, and weather. A key competition constraint made it much harder: pretrained ImageNet weights were not allowed, so every parameter had to be learned from the competition dataset alone.'
          },
          {
            type: 'text',
            title: 'Approach',
            content: 'I built a ResNet50 classifier from scratch in PyTorch, wrapped in a custom CSUBuildingDataset that loaded images from CSV manifests and applied a normalization/augmentation pipeline. To pick a robust validation split, I extracted feature embeddings and selected the most distinct samples rather than splitting randomly.'
          }
        ],
        right: [
          {
            type: 'image',
            content: '/image/project-thumbnail/Picture3.png',
            alt: 'CSU building augmented for classification',
            title: 'Sample Input'
          },
          {
            type: 'text',
            title: 'Custom Loss',
            content: 'Simple cross-entropy struggled with imbalanced and hard-to-distinguish buildings, so I combined label-smoothed cross-entropy with focal loss. Focal loss down-weights easy examples and focuses training on the buildings the model kept confusing, which pushed accuracy past the other submissions.'
          }
        ]
      },
      {
        left: [
          {
            type: 'text',
            title: 'Key Details',
            content: 'ResNet50 trained from scratch (no pretrained weights), 49-class output head, custom PyTorch Dataset with CSV-driven loading, embedding-based validation selection, and a combined focal + cross-entropy loss with label smoothing.'
          }
        ],
        right: [
          {
            type: 'code',
            title: 'Combined Focal + Cross-Entropy Loss',
            content: `class CombinedLoss(torch.nn.Module):
    def __init__(self, alpha=1.0, gamma=2.0, smoothing=0.1,
                 weight_ce=0.5, weight_fl=0.5):
        super().__init__()
        self.alpha, self.gamma = alpha, gamma
        self.weight_ce, self.weight_fl = weight_ce, weight_fl
        self.ce_loss = torch.nn.CrossEntropyLoss(
            label_smoothing=smoothing)

    def focal_loss(self, outputs, targets):
        ce = F.cross_entropy(outputs, targets, reduction='none')
        pt = torch.exp(-ce)
        return (self.alpha * (1 - pt) ** self.gamma * ce).mean()

    def forward(self, outputs, targets):
        return (self.weight_ce * self.ce_loss(outputs, targets)
                + self.weight_fl * self.focal_loss(outputs, targets))`,
            language: 'python'
          }
        ]
      }
    ]
  },

  "web-scraper": {
    id: "web-scraper",
    title: "Web Scraper with GitHub Actions",
    subtitle: "Automated Dead by Daylight stats tracking & visualization",
    heroImage: "/image/project-thumbnail/graph.png",
    overview: "An automated pipeline that tracks Dead by Daylight player statistics over time. A Python scraper parses player profiles, merges the numbers into per-player JSON files, and a GitHub Actions workflow runs it on a daily schedule so the data stays current with no manual work. The results are charted on the site's blog.",
    technologies: ["Python", "BeautifulSoup", "GitHub Actions", "JSON", "JavaScript"],
    githubUrl: "https://github.com/Shmormius/Shmormius.github.io",
    liveUrl: "https://shmormius.github.io/main-pages/blogs/dbd-stats/dbd.html",
    sections: [
      {
        left: [
          {
            type: 'text',
            title: 'Scheduled Automation',
            content: 'A GitHub Actions workflow runs the scraper on a daily cron schedule (and on every push). When the freshly scraped stats differ from what is stored, the workflow commits and pushes the updated JSON back to the repo, so the dataset builds up a running history entirely hands-free.'
          },
          {
            type: 'text',
            title: 'Scraping & Storage',
            content: 'The scraper requests each tracked player profile, uses BeautifulSoup to pull the stat name/value pairs out of the page markup, and merges them into that player JSON file rather than overwriting it. The front-end then reads those JSON files to render the charts.'
          }
        ],
        right: [
          {
            type: 'image',
            content: '/image/project-thumbnail/graph.png',
            alt: 'Dead by Daylight stats visualization',
            title: 'Stats Dashboard'
          },
          {
            type: 'link',
            title: 'View the live stats page',
            content: 'Open the Dead by Daylight stats dashboard',
            href: 'https://shmormius.github.io/main-pages/blogs/dbd-stats/dbd.html'
          }
        ]
      },
      {
        left: [
          {
            type: 'code',
            title: 'Parsing Stats with BeautifulSoup',
            content: `def createJSONData(soup):
    new_data = {}
    stats_class = "flex flex-col px-8 py-2"
    name_class = "text-sm md:text-base cursor-default"
    data_class = "text-base md:text-lg font-bold leading-0"

    for el in soup.find_all("div", class_=stats_class):
        name = el.find("p", class_=name_class)
        value = el.find("p", class_=data_class)
        if name is not None and value is not None:
            new_data[name.text.strip()] = value.text.strip()
    return new_data`,
            language: 'python'
          }
        ],
        right: [
          {
            type: 'text',
            title: 'Why It Matters',
            content: 'The interesting part is not the scraping itself but the fully automated, source-controlled data pipeline: a scheduled job that quietly accumulates a clean historical dataset in Git and keeps a live visualization up to date without anyone touching it.'
          }
        ]
      }
    ]
  },

  "autonomous-rover": {
    id: "autonomous-rover",
    title: "Autonomous Rover",
    subtitle: "GPS-guided, internet-controlled rover",
    heroImage: "/image/project-thumbnail/rover-desk.jpg",
    overview: "A self-seeking rover that navigates toward GPS waypoints and can also be driven remotely over the internet. An Arduino handles the sensors and motors while a Raspberry Pi runs a Flask web server that relays commands to the Arduino over serial, letting you control and monitor the rover from any browser.",
    technologies: ["C++", "Arduino", "Python", "Flask", "Raspberry Pi", "GPS"],
    githubUrl: "https://github.com/Shmormius/Autonomous-Rover",
    sections: [
      {
        left: [
          {
            type: 'text',
            title: 'Sensing & Hardware',
            content: 'The Arduino reads a GPS module (TinyGPS++) for position, an HMC5883L magnetometer for heading, and a DHT11 for temperature/humidity, then drives the motors accordingly. With position and compass heading it can orient itself and steer toward a target coordinate.'
          },
          {
            type: 'text',
            title: 'Two-Board Architecture',
            content: 'A Raspberry Pi runs a Flask web server and connects to the Arduino over a USB serial link. Commands entered on the web page are written to the serial port; the Arduino executes them and writes back a response that the page displays - a clean split between the real-time control loop and the network interface.'
          }
        ],
        right: [
          {
            type: 'image',
            content: '/image/project-thumbnail/rover-desk.jpg',
            alt: 'Autonomous rover hardware on a desk',
            title: 'The Rover'
          },
          {
            type: 'code',
            title: 'Flask to Serial Command Relay',
            content: `@app.route("/", methods=['POST'])
def interaction():
    action = request.form['action']
    command = "{}\\n".format(action)
    ser.write(command.encode('utf-8'))   # send to Arduino
    line = ser.readline().decode('utf-8').rstrip()  # read reply
    commands.insert(0, line)
    return render_template('interaction.html',
                           commands=commands)`,
            language: 'python'
          }
        ]
      }
    ]
  },

  "static-portfolio-website": {
    id: "static-portfolio-website",
    title: "Static Portfolio Website",
    subtitle: "The original GitHub Pages portfolio",
    heroImage: "/image/project-thumbnail/javascript.png",
    overview: "The first version of my personal site, hand-built with vanilla HTML, CSS, and JavaScript and hosted on GitHub Pages. It houses an about-me page, a project portfolio, and a blog, including data-driven sections powered by JSON such as anime rankings, a book journal, and the automated game-stats tracker. This React site is its successor.",
    technologies: ["HTML", "CSS", "JavaScript", "JSON", "GitHub Pages"],
    githubUrl: "https://github.com/Shmormius/Shmormius.github.io",
    liveUrl: "https://shmormius.github.io/index.html",
    sections: [
      {
        left: [
          {
            type: 'text',
            title: 'Built From Scratch',
            content: 'No frameworks - just semantic HTML, hand-written CSS, and vanilla JavaScript. Reusable pieces like the navigation bar are injected with small scripts, and content-heavy sections (blog posts, rankings) are rendered from JSON data files.'
          },
          {
            type: 'text',
            title: 'Data-Driven Content',
            content: 'Several pages read from JSON rather than hard-coded markup: an anime ranking list, a book journal, and the Dead by Daylight stats tracker that is kept up to date by the automated scraper. It made the site easy to update by editing data instead of HTML.'
          }
        ],
        right: [
          {
            type: 'image',
            content: '/image/project-thumbnail/javascript.png',
            alt: 'Static portfolio website',
            title: 'Original Site'
          },
          {
            type: 'link',
            title: 'Visit the original site',
            content: 'Open the GitHub Pages portfolio',
            href: 'https://shmormius.github.io/index.html'
          }
        ]
      }
    ]
  },

  "consumer-producer-problem": {
    id: "consumer-producer-problem",
    title: "Producer-Consumer Problem",
    subtitle: "Bounded-buffer concurrency in Java",
    heroImage: "/image/project-thumbnail/consumer.png",
    overview: "A classic operating-systems concurrency exercise: one producer thread and one consumer thread share a fixed-size (1000-element) circular buffer. Synchronization with wait()/notify() prevents the producer from overflowing the buffer and the consumer from reading an empty one, while cumulative sums on both sides confirm no data is lost across a million items.",
    technologies: ["Java", "Multithreading", "Concurrency", "Makefile"],
    githubUrl: "https://github.com/Shmormius/Consumer-Producer-Problem",
    sections: [
      {
        left: [
          {
            type: 'text',
            title: 'Bounded Buffer',
            content: 'The shared buffer is a fixed 1000-slot array used as a circular queue with head and tail indices. The producer generates one million random doubles; the consumer removes them in order. Both track a running sum so the two totals can be compared at the end to verify correctness.'
          },
          {
            type: 'text',
            title: 'Synchronization',
            content: 'Producer and consumer run on separate threads using synchronized methods. When the buffer is full the producer calls wait(); when it is empty the consumer waits. Each successful operation calls notify() to wake the other side, avoiding both race conditions and busy-waiting.'
          }
        ],
        right: [
          {
            type: 'image',
            content: '/image/project-thumbnail/consumer.png',
            alt: 'Producer-consumer buffer diagram',
            title: 'Shared Buffer'
          },
          {
            type: 'code',
            title: 'Producer Thread',
            content: `public synchronized void producer() throws InterruptedException {
    int produceCount = 0;
    do {
        double item = new Random().nextDouble();
        while (bufferSize == MAXSIZE) {
            wait();               // buffer full - yield to consumer
        }
        buffer[tail] = item;
        tail = (tail + 1) % MAXSIZE;
        bufferSize++;
        produceCount++;
        notify();                 // signal the consumer
    } while (produceCount < 1000000);
}`,
            language: 'java'
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
