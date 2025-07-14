# Daemon's Portfolio Website

A modern, containerized portfolio website showcasing projects, skills, and professional experience. Built with React/TypeScript frontend and Python/FastAPI backend, deployed using Docker.

## Technical Details

### Frontend
- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS3** - Styling

### Backend
- **Python 3.11** - Runtime
- **FastAPI** - Web framework
- **Uvicorn** - ASGI server

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration
- **Nginx** - Reverse proxy and static file serving

## Project Structure

```
daemonkerrigan/
├── frontend/                    # React TypeScript frontend
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   ├── pages/             # Page components
│   │   ├── hooks/             # Custom React hooks
│   │   ├── types/             # TypeScript type definitions
│   │   ├── utils/             # Utility functions
│   │   ├── constants/         # Application constants
│   │   └── styles/           # CSS stylesheets
│   ├── public/               # Static assets
│   ├── Dockerfile            # Production container
│   ├── Dockerfile.dev        # Development container
│   └── nginx.conf           # Nginx configuration
├── backend/                  # Python FastAPI backend
│   ├── app/                 # Application code
│   ├── data/               # Database and uploads
│   ├── DockerFile          # Backend container
│   └── requirements.txt    # Python dependencies
├── docker-compose.yml      # Production orchestration
├── docker-compose.dev.yml  # Development orchestration
└── README.md              # This file
```

## Quick Start

### Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- [Git](https://git-scm.com/)

### Development Setup

1. **Start development environment**
   ```powershell
   # Windows PowerShell
   .\start-dev.ps1
   
   # Or manually
   docker-compose -f docker-compose.dev.yml up --build
   ```

2. **Access the application**
   - Frontend: [http://localhost:5173](http://localhost:5173)
   - Backend: [http://localhost:8000](http://localhost:8000)

## 👨‍💻 Author

**Daemon Kerrigan**
- Email: shmormius@gmail.com
