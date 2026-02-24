# Career Explorer - AI Impact Analysis Platform

An interactive web application that helps students explore careers and understand how AI is transforming different professions. Built with React, TypeScript, FastAPI, and powered by AI agents for real-time research.

## Features

### 🎯 Core Features
- **Career Exploration**: Browse 6 curated careers with detailed information
- **AI Risk Calculator**: Real-time automation risk analysis using AI and academic research
- **Day-in-Life Generator**: AI-powered realistic daily scenarios from web research
- **Ethical Dilemmas**: Research-backed AI ethics questions specific to each profession
- **ASU Degree Pathways**: Integrated degree recommendations with course details
- **Related Experiences**: Curated ASU programs, internships, and opportunities

### 🤖 AI-Powered Features
- **Transparency**: Shows calculation breakdown and research sources
- **Real-time Research**: Searches academic papers, articles, and news
- **DeepSeek-R1 Integration**: Advanced AI model for analysis
- **Web Search Agents**: DuckDuckGo and Semantic Scholar integration

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **React Router** for navigation
- **Tailwind CSS** for styling
- **Vite** for build tooling
- **Lucide React** for icons

### Backend
- **FastAPI** (Python)
- **HuggingFace Inference Client** (DeepSeek-R1)
- **Semantic Scholar API** for academic papers
- **DuckDuckGo** for web search
- **Python-dotenv** for environment management

## Project Structure

```
Principled-AI-Spark-Challenge/
├── frontend/                    # React + TypeScript frontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/     # React components
│   │   │   ├── pages/          # Page components
│   │   │   └── data/           # Career data
│   │   ├── assets/             # Images
│   │   ├── imports/            # Figma components
│   │   └── styles/             # CSS files
│   ├── package.json
│   └── vite.config.ts
├── backend/                     # FastAPI backend
│   ├── app.py                  # Main API server
│   ├── day_in_life_agent.py    # Day-in-life agent
│   ├── ethical_dilemmas_agent.py # Ethics agent
│   ├── skills_research_agent.py  # Skills agent
│   ├── requirements.txt
│   └── .env                    # Environment variables
├── start.sh                    # Unified start script
├── .gitignore
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js 18+ and npm
- Python 3.8+
- HuggingFace API token (optional, for AI features)

### Quick Start

```bash
# Clone the repository
cd Principled-AI-Spark-Challenge

# Run the unified start script
./start.sh
```

The script will:
1. Install dependencies (if needed)
2. Start backend on `http://localhost:8000`
3. Start frontend on `http://localhost:5173`

### Manual Setup

**Backend:**
```bash
cd backend
pip install -r requirements.txt

# Create .env file
echo "HF_TOKEN=your_token_here" > .env

# Start server
python app.py
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

## API Endpoints

### `POST /api/calculate-automation-risk`
Calculate AI automation risk for a career
```json
{
  "job_title": "Data Analyst",
  "job_description": "Optional description"
}
```

### `POST /api/generate-day-in-life`
Generate realistic day-in-life scenarios
```json
{
  "job_title": "Software Engineer"
}
```

### `POST /api/generate-ethical-dilemmas`
Generate AI ethics dilemmas from research
```json
{
  "job_title": "UX Designer"
}
```

## Key Features Explained

### AI Risk Calculator
- Searches 10+ academic papers via Semantic Scholar
- Identifies profession-specific AI tools
- Uses DeepSeek-R1 for task analysis
- Shows transparent calculation breakdown
- Displays confidence scores

### Day-in-Life Generator
- Searches career sites, Reddit, and articles
- Generates morning/afternoon task schedules
- Identifies real problems professionals solve
- Shows research source transparency

### Ethical Dilemmas Generator
- Searches ethics articles and academic papers
- Finds AI controversy news
- Generates 3 specific ethical scenarios
- Includes context and conflicting values
- Shows research source counts

## Careers Included

1. **Data Analyst** - High AI impact (65% risk)
2. **Software Engineer** - Medium-high impact (55% risk)
3. **UX Designer** - Medium impact (45% risk)
4. **Registered Nurse** - Low impact (15% risk)
5. **K-12 Teacher** - Low impact (20% risk)
6. **Marketing Manager** - Medium impact (50% risk)

## Development

### Frontend Development
```bash
cd frontend
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Backend Development
```bash
cd backend
python app.py        # Run FastAPI server
```

### Code Style
- Frontend: TypeScript with strict mode
- Backend: Python with type hints
- Styling: Tailwind CSS utility classes
- Components: Functional React components with hooks

## Environment Variables

### Backend (.env)
- `HF_TOKEN` - HuggingFace API token (optional)

## Performance Optimizations

- **Caching**: API responses cached in-memory
- **Lazy Loading**: Components loaded on demand
- **Image Optimization**: Unsplash CDN with optimized parameters
- **Code Splitting**: Vite automatic code splitting

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Troubleshooting

### Backend won't start
- Check Python version: `python --version` (need 3.8+)
- Install dependencies: `pip install -r requirements.txt`
- Check port 8000 is available

### Frontend won't start
- Check Node version: `node --version` (need 18+)
- Clear cache: `rm -rf node_modules && npm install`
- Check port 5173 is available

### AI features not working
- Verify HF_TOKEN in backend/.env
- Check HuggingFace API status
- App will use fallback mode without token

### CORS errors
- Ensure backend is running on port 8000
- Check CORS middleware in app.py

## Credits

- **Design**: ASU Design System
- **Icons**: Lucide React
- **Images**: Unsplash
- **AI Model**: DeepSeek-R1 via HuggingFace
- **Academic Data**: Semantic Scholar API

## License

This project was created for educational purposes as part of the AI Spark Challenge.

## Contact

For questions or issues, please refer to the project repository.
