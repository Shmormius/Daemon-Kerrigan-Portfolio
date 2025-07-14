# Daemon's Website - Containerized Setup

This project uses Docker to containerize both the frontend (React/Vite) and backend (Python/FastAPI) for easy deployment and development.

## 🚀 Quick Start

### Prerequisites
- Docker and Docker Compose installed
- Git

### Development Environment

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd ShmormiusWebsite/daemonkerrigan
   ```

2. **Start development environment**
   ```bash
   # Linux/Mac
   ./start-dev.sh
   
   # Windows PowerShell
   .\start-dev.ps1
   
   # Or manually
   docker-compose -f docker-compose.dev.yml up --build
   ```

3. **Access the application**
   - Frontend: http://localhost:5173
   - Backend: http://localhost:8000
   - API Documentation: http://localhost:8000/docs

### Production Environment

1. **Build and run production containers**
   ```bash
   docker-compose up --build -d
   ```

2. **Access the application**
   - Frontend: http://localhost:80
   - Backend: http://localhost:8000

## 📁 Project Structure

```
daemonkerrigan/
├── backend/
│   ├── app/
│   ├── Dockerfile
│   └── requirements.txt
├── frontend/
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   ├── Dockerfile.dev
│   ├── nginx.conf
│   └── package.json
├── docker-compose.yml          # Production
├── docker-compose.dev.yml      # Development
└── start-dev.ps1              # Development startup (Windows)
```

## 🔧 Configuration

### Environment Variables

**Frontend (.env.development / .env.production)**
- `VITE_API_BASE_URL`: Backend API URL
- `VITE_APP_NAME`: Application name
- `VITE_APP_VERSION`: Application version

**Backend (docker-compose.yml)**
- `CORS_ORIGINS`: Allowed frontend URLs
- `DATABASE_URL`: Database connection string
- `SECRET_KEY`: Application secret key

### API Communication

The frontend communicates with the backend through:
- **Development**: Direct API calls to `http://localhost:8000/api`
- **Production**: Nginx proxy passes `/api` requests to the backend container

## 🛠️ Development Commands

```bash
# Start development environment
docker-compose -f docker-compose.dev.yml up --build

# Start production environment
docker-compose up --build -d

# Stop containers
docker-compose down

# View logs
docker-compose logs -f [service-name]

# Rebuild specific service
docker-compose build [service-name]

# Run backend tests
docker-compose exec backend python -m pytest

# Access backend container
docker-compose exec backend bash

# Access frontend container
docker-compose exec frontend sh
```

## 🚦 Health Checks

The backend includes health checks accessible at:
- http://localhost:8000/health

## 🔒 Security Features

- Non-root user in containers
- CORS configuration
- Security headers in nginx
- Environment variable separation

## 📦 Production Deployment

For production deployment, consider:
1. Using environment-specific secrets
2. Setting up SSL/TLS certificates
3. Configuring proper database (PostgreSQL)
4. Setting up monitoring and logging
5. Using container orchestration (Kubernetes, Docker Swarm)

## 🐛 Troubleshooting

**Common Issues:**
- **Port conflicts**: Ensure ports 80, 8000, and 5173 are available
- **Docker not running**: Start Docker Desktop or Docker service
- **Permission issues**: Ensure Docker has proper permissions
- **API not accessible**: Check CORS settings and network configuration

**Debug Commands:**
```bash
# Check container status
docker-compose ps

# View container logs
docker-compose logs backend
docker-compose logs frontend

# Test API connectivity
curl http://localhost:8000/health
```
