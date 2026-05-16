<div align="center">

# 🎙️ SWARA

### Voice-Powered AI Assistant

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-61dafb)](https://reactjs.org/)

[🚀 Live Demo](https://ai.studio/apps/922d1b41-69a9-484f-a869-8c56a889d9ab) | [📖 Documentation](#) | [🐛 Report Bug](https://github.com/SrihariAPPI/Swara-BOB/issues)

</div>

---

## 📋 Table of Contents

<details>
<summary>Click to expand</summary>

- [About](#-about)
- [Features](#-features)
- [Quick Start](#-quick-start)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Configuration](#-configuration)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

</details>

---

## 🎯 About

**Swara-BOB** is an intelligent voice-powered AI assistant built with React, TypeScript, and Google's Gemini AI. It provides real-time voice interactions, multimodal capabilities, and seamless integration with modern web technologies.

<div align="center">

### Why Swara-BOB?

| Feature | Description |
|---------|-------------|
| 🎤 **Voice First** | Natural conversations with advanced AI |
| 🧠 **Smart AI** | Powered by Google Gemini |
| 🎨 **Creative** | Generate stunning AI art |
| 📱 **Responsive** | Works on all devices |

</div>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎤 Voice & AI
- Real-time voice interaction
- Gemini AI integration
- Natural language processing
- Voice customization

</td>
<td width="50%">

### 🎨 Creative Tools
- AI art generation
- PDF search & analysis
- Task management
- Chat history

</td>
</tr>
<tr>
<td width="50%">

### 🔐 Security
- Secure authentication
- Firebase integration
- Data encryption
- Privacy focused

</td>
<td width="50%">

### 📊 Management
- Admin dashboard
- Analytics & insights
- User management
- Performance tracking

</td>
</tr>
</table>

---

## 🚀 Quick Start

### Prerequisites

<table>
<tr>
<td>

**Required**
- Node.js v18+
- npm or yarn
- Gemini API Key

</td>
<td>

**Optional**
- Firebase Project
- Git
- VS Code

</td>
</tr>
</table>

### Installation

<details>
<summary><b>Step 1: Clone the repository</b></summary>

```bash
git clone https://github.com/SrihariAPPI/Swara-BOB.git
cd Swara-BOB
```

</details>

<details>
<summary><b>Step 2: Install dependencies</b></summary>

```bash
npm install
# or
yarn install
```

</details>

<details>
<summary><b>Step 3: Configure environment</b></summary>

Create a `.env.local` file:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

</details>

<details>
<summary><b>Step 4: Run development server</b></summary>

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

</details>

---

## 🛠️ Tech Stack

<div align="center">

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 18.3, TypeScript, Vite 5.4 |
| **Styling** | Tailwind CSS, Radix UI |
| **AI/ML** | Google Gemini AI |
| **Backend** | Firebase (Auth, Firestore, Storage) |
| **Processing** | PDF.js, Web Audio API |
| **Icons** | Lucide Icons |

</div>

---

## 📁 Project Structure

```
Swara-BOB/
├── 📂 src/
│   ├── 📂 components/       # React components
│   │   ├── AdminDashboard.tsx
│   │   ├── ArtGenerator.tsx
│   │   ├── Auth.tsx
│   │   ├── ChatHistory.tsx
│   │   ├── TaskManager.tsx
│   │   └── ...
│   ├── 📂 services/         # API integrations
│   │   ├── geminiService.ts
│   │   ├── firebaseService.ts
│   │   ├── liveService.ts
│   │   └── pdfService.ts
│   ├── 📂 utils/            # Utility functions
│   ├── 📂 lib/              # Library configs
│   ├── App.tsx              # Main component
│   └── main.tsx             # Entry point
├── 📂 public/               # Static assets
├── 📂 dist/                 # Production build
├── package.json
├── vite.config.ts
└── README.md
```

---

## 🔧 Configuration

### Firebase Setup

<details>
<summary>Click for detailed Firebase setup instructions</summary>

1. **Create Project**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Add project"
   - Follow the setup wizard

2. **Enable Services**
   - Authentication (Email/Password)
   - Firestore Database
   - Storage

3. **Get Configuration**
   - Project Settings → General
   - Copy Firebase config
   - Add to `.env.local`

</details>

### Gemini API Setup

<details>
<summary>Click for Gemini API setup instructions</summary>

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create or select a project
3. Generate API key
4. Add to `.env.local` as `VITE_GEMINI_API_KEY`

</details>

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

<div align="center">

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/SrihariAPPI/Swara-BOB)

</div>

<details>
<summary><b>Manual Deployment Steps</b></summary>

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Deploy to Vercel"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository

3. **Configure Environment**
   - Add all environment variables from `.env.local`
   - Click "Deploy"

4. **Done!** 🎉
   - Your app is live
   - Automatic deployments on push

</details>

### Deploy to Netlify

<div align="center">

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/SrihariAPPI/Swara-BOB)

</div>

The project includes a `netlify.toml` configuration file for easy deployment.

---

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 🎯 Key Components

<table>
<tr>
<td width="50%">

### 🎤 Voice Interaction
Real-time voice recognition and synthesis using Web Audio API and Gemini Live API.

</td>
<td width="50%">

### 🎨 AI Art Generation
Generate images using Gemini's multimodal capabilities with customizable prompts.

</td>
</tr>
<tr>
<td width="50%">

### 📄 PDF Search
Upload and search through PDF documents with intelligent text extraction.

</td>
<td width="50%">

### 💬 Chat History
Persistent conversation storage with Firebase Firestore integration.

</td>
</tr>
</table>

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

<details>
<summary><b>Contribution Guidelines</b></summary>

1. **Fork the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Swara-BOB.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Make your changes**
   - Write clean, documented code
   - Follow existing code style
   - Add tests if applicable

4. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

5. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```

6. **Open a Pull Request**
   - Describe your changes
   - Link any related issues

</details>

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

<div align="center">

Special thanks to:

| Project | Contribution |
|---------|-------------|
| 🤖 **Google Gemini AI** | Powerful AI capabilities |
| 🔥 **Firebase** | Backend infrastructure |
| ⚛️ **React** | Frontend framework |
| 📘 **TypeScript** | Type safety |

</div>

---

## 📧 Contact & Support

<div align="center">

### Need Help?

[📖 Documentation](#) • [💬 Discussions](https://github.com/SrihariAPPI/Swara-BOB/discussions) • [🐛 Issues](https://github.com/SrihariAPPI/Swara-BOB/issues)

### Repository

**[https://github.com/SrihariAPPI/Swara-BOB](https://github.com/SrihariAPPI/Swara-BOB)**

---

<sub>Made with ❤️ by the Swara-BOB Team</sub>

</div>
