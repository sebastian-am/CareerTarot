#!/bin/bash

# Kill any existing processes on the relevant ports
echo "Stopping existing processes..."
pkill -f "node.*3000" 2>/dev/null  # Frontend
pkill -f "node.*3001" 2>/dev/null  # Backend
pkill -f "python.*llm_service" 2>/dev/null  # Python LLM service

# Wait a moment for processes to fully stop
sleep 2

# Start the Python LLM service
echo "Starting Python LLM service..."
python3 llm_service.py &
LLM_PID=$!

# Wait for LLM service to start
sleep 2

# Start the Node.js backend
echo "Starting Node.js backend..."
node server.js &
BACKEND_PID=$!

# Wait for backend to start
sleep 2

# Start the React frontend
echo "Starting React frontend..."
cd client
npm run dev &
FRONTEND_PID=$!

# Wait for all processes to start
sleep 2

echo "All services restarted!"
echo "Frontend: http://localhost:3000"
echo "Backend: http://localhost:3001"
echo "LLM Service: http://localhost:5001"

# Function to handle script termination
cleanup() {
    echo "Shutting down services..."
    kill $FRONTEND_PID $BACKEND_PID $LLM_PID 2>/dev/null
    exit 0
}

# Set up trap to catch termination signal
trap cleanup SIGINT SIGTERM

# Keep script running
wait 