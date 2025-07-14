# Development startup script for Windows

Write-Host "[*] Starting development environment..." -ForegroundColor Green

# Function to check if Docker Desktop is running
function Test-DockerDesktop {
    try {
        $dockerVersion = docker version --format "{{.Server.Version}}" 2>$null
        if ($dockerVersion) {
            return $true
        }
        return $false
    } catch {
        return $false
    }
}

# Function to check if Docker Desktop process is running
function Test-DockerDesktopProcess {
    $dockerDesktop = Get-Process "Docker Desktop" -ErrorAction SilentlyContinue
    return $dockerDesktop -ne $null
}

# Check if Docker Desktop is running
Write-Host "[*] Checking Docker Desktop status..." -ForegroundColor Yellow

if (-not (Test-DockerDesktopProcess)) {
    Write-Host "[!] Docker Desktop is not running." -ForegroundColor Red
    Write-Host "Please start Docker Desktop and wait for it to fully initialize." -ForegroundColor Yellow
    Write-Host "You can:" -ForegroundColor Cyan
    Write-Host "  1. Open Docker Desktop from the Start menu" -ForegroundColor Cyan
    Write-Host "  2. Wait for the Docker Desktop icon to appear in the system tray" -ForegroundColor Cyan
    Write-Host "  3. Run this script again" -ForegroundColor Cyan
    exit 1
}

if (-not (Test-DockerDesktop)) {
    Write-Host "[!] Docker Desktop is starting up..." -ForegroundColor Yellow
    Write-Host "Waiting for Docker Desktop to be ready..." -ForegroundColor Yellow
    
    $timeout = 60 # 60 seconds timeout
    $elapsed = 0
    
    while (-not (Test-DockerDesktop) -and $elapsed -lt $timeout) {
        Start-Sleep -Seconds 2
        $elapsed += 2
        Write-Host "." -NoNewline -ForegroundColor Yellow
    }
    
    Write-Host ""
    
    if (-not (Test-DockerDesktop)) {
        Write-Host "[!] Docker Desktop failed to start within $timeout seconds." -ForegroundColor Red
        Write-Host "Please check Docker Desktop manually and try again." -ForegroundColor Yellow
        exit 1
    }
}

Write-Host "[+] Docker Desktop is running!" -ForegroundColor Green

# Clean up any previous containers
Write-Host "[*] Cleaning up previous containers..." -ForegroundColor Yellow
docker-compose -f docker-compose.dev.yml down 2>$null

# Build and start development containers
Write-Host "[*] Building and starting containers..." -ForegroundColor Yellow
docker-compose -f docker-compose.dev.yml up --build

Write-Host "[+] Development environment started!" -ForegroundColor Green
Write-Host "[*] Frontend: http://localhost:5173" -ForegroundColor Cyan
Write-Host "[*] Backend: http://localhost:8000" -ForegroundColor Cyan
Write-Host "[*] API Docs: http://localhost:8000/docs" -ForegroundColor Cyan
