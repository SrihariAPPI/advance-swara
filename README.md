<div align="center">
<h1>🎙️ SWARA</h1>
<p><strong>Voice-Powered AI Assistant</strong></p>
</div>

# Swara-BOB - Intelligent Voice AI Assistant

**Swara-BOB** is an intelligent voice-powered AI assistant built with React, TypeScript, and Google's Gemini AI. It provides real-time voice interactions, multimodal capabilities, and seamless integration with modern web technologies.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-61dafb)](https://reactjs.org/)

## ✨ Features

- 🎤 **Real-time Voice Interaction** - Natural voice conversations with AI
- 🧠 **Gemini AI Integration** - Powered by Google's advanced Gemini models
- 🎨 **AI Art Generation** - Create stunning visuals with AI
- 📄 **PDF Search & Analysis** - Extract and search through PDF documents
- 💬 **Chat History** - Persistent conversation tracking with Firebase
- 🔐 **Authentication** - Secure user authentication system
- 📊 **Admin Dashboard** - Comprehensive management interface
- 🎯 **Task Management** - Organize and track your tasks
- 🌐 **Responsive Design** - Works seamlessly across all devices
- 🔊 **Voice Settings** - Customizable voice parameters

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Gemini API Key** - Get your API key from Google
- **Firebase Project** (optional, for authentication and storage)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SrihariAPPI/Swara-BOB.git
   cd Swara-BOB
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

## 🌐 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/SrihariAPPI/advance-swara)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/SrihariAPPI/advance-swara)

The project includes a `netlify.toml` configuration file for easy deployment.

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3 with TypeScript
- **Build Tool**: Vite 5.4
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI, Lucide Icons
- **AI Integration**: Google Gemini AI
- **Backend**: Firebase (Authentication, Firestore, Storage)
- **PDF Processing**: PDF.js
- **Audio Processing**: Web Audio API
- **State Management**: React Hooks
- **Routing**: React Router DOM

## 📁 Project Structure

```
Swara-BOB/
├── src/
│   ├── components/          # React components
│   │   ├── AdminDashboard.tsx
│   │   ├── ArtGenerator.tsx
│   │   ├── Auth.tsx
│   │   ├── ChatHistory.tsx
│   │   ├── TaskManager.tsx
│   │   └── ...
│   ├── services/            # API and service integrations
│   │   ├── geminiService.ts
│   │   ├── firebaseService.ts
│   │   ├── liveService.ts
│   │   └── pdfService.ts
│   ├── utils/               # Utility functions
│   ├── lib/                 # Library configurations
│   ├── App.tsx              # Main application component
│   └── main.tsx             # Application entry point
├── public/                  # Static assets
├── dist/                    # Production build
└── package.json             # Dependencies and scripts
```

## 🎯 Key Components

### Voice Interaction
Real-time voice recognition and synthesis using Web Audio API and Gemini Live API.

### AI Art Generation
Generate images using Gemini's multimodal capabilities with customizable prompts.

### PDF Search
Upload and search through PDF documents with intelligent text extraction.

### Chat History
Persistent conversation storage with Firebase Firestore integration.

### Admin Dashboard
Comprehensive analytics and user management interface.

## 🔧 Configuration

### Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication (Email/Password)
3. Create a Firestore database
4. Enable Storage
5. Copy your Firebase config to `.env.local`

### Gemini API Setup

1. Obtain your Gemini API key
2. Add it to `.env.local` as `VITE_GEMINI_API_KEY`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Google Gemini AI for powerful AI capabilities
- Firebase for backend infrastructure
- The React and TypeScript communities
- All contributors and supporters

## 📧 Contact

For questions or support, please open an issue on GitHub.

Repository: [https://github.com/SrihariAPPI/Swara-BOB](https://github.com/SrihariAPPI/advance-swara)

---

<div align="center">
Made with ❤️ by the Swara-BOB Team
</div>
