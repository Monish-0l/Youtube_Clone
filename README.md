# 🎬 YouTube Clone

A fully functional **YouTube Clone** frontend application built using React.js, Vite, and modern web technologies. This project replicates YouTube's core features including video browsing, searching, detailed video pages, dark/light mode, and responsive design.

---

## 📋 Project Overview

- 🔎 Search and view videos
- 📺 Video detail pages with related videos and comments
- 🌗 Light/Dark theme support
- 📱 Fully responsive design for all devices
- ⚙️ Built with reusable components and scalable architecture

---

## 🛠️ Technologies Used

### Core Technologies
- **React.js** v18.3.1
- **JavaScript** (ES6+)
- **HTML5** / **CSS3**
- **Vite** (build tool)

### UI & Styling
- **Bootstrap** v5.3.7
- **React Bootstrap** v2.10.10
- **Google Fonts** (Roboto)
- **Custom CSS**

### Routing & State Management
- **React Router DOM** v7.6.3
- **React Context API**
- **React Hooks** (`useState`, `useEffect`)

### Data Management
- Static JSON file with 30+ dummy videos
- Local Storage for theme persistence

---

## ✨ Features

### 🏠 Home Page
- Responsive grid showing video cards
- Sidebar with 13+ category filters
- Skeleton loading for smooth UX
- Adaptive layout for mobile, tablet, and desktop

### 🔍 Search Functionality
- Real-time filtering based on video title/channel/description
- Dynamic route: `/search/:query`

### 📺 Video Detail Page
- Embedded YouTube iframe player
- Like/Dislike and Subscribe (UI only)
- Comments with dummy user data
- Related video suggestions

### 🎨 UI/UX Enhancements
- Light/Dark Mode toggle using Context API
- Hover effects and animations
- Custom icons (search, avatars, logos)
- Responsive collapsible sidebar

---

## 📱 Responsive Design

| Device      | Layout                                           |
|-------------|--------------------------------------------------|
| Desktop     | 3-column video grid with full sidebar            |
| Tablet      | 2-column grid, collapsible sidebar               |
| Mobile      | 1-column layout, hidden sidebar, optimized navbar|

---

## 🏗️ Code Structure

src/
├── components/ # Reusable UI components
├── context/ # Theme context provider
├── data/ # Static JSON video data
├── pages/ # Route-based pages
├── App.jsx # Main app component
├── main.jsx # Entry point
└── index.css # Global styles


### 🔁 Routing
- `/` → Home Page
- `/video/:id` → Video Detail Page
- `/search/:query` → Search Results

---

## 📊 Video Data Structure

Each video object includes:

```json
{
  "id": "1",
  "title": "Sample Video Title",
  "channelName": "Channel Name",
  "channelAvatar": "URL",
  "thumbnail": "URL",
  "views": "123K",
  "uploadTime": "2 days ago",
  "duration": "10:23",
  "description": "Video description...",
  "embedUrl": "https://www.youtube.com/embed/...",
  "category": "Music",
  "likes": 234,
  "dislikes": 10
}

--------------------------------------------------

🎯 Key Technical Concepts
Bootstrap Grid & Utilities for layout

React Context API for theme management

Dynamic Routing with useParams and useNavigate

Prop Drilling and State Lifting for component communication

Event Handling for like, comment, subscribe actions

Local Storage to persist theme preference

--------------------------------------------------------

🚀 Performance & Optimization
Lazy loading (skeleton screens)

Responsive images (from Pexels)

Optimized component re-rendering

CSS animations for smooth transitions

------------------------------------------------

🔧 Development Tools
Vite - Lightning fast build/dev server

ESLint - Linting and code style checks

React DevTools - Debugging components

Browser DevTools - Mobile view and performance checks

----------------------------------------------------------

📈 Scalability & Extensibility
Modular file structure

Easy to integrate with real APIs

Reusable component-based architecture

Scalable routing and context setup
--------------------------------------------------------------

📱 Cross-Browser Compatibility
✅ Chrome, Firefox, Edge, Safari (Desktop)

✅ Android Chrome, iOS Safari (Mobile)

✅ iPad and other tablets

git clone https://github.com/yourusername/youtube-clone.git
cd youtube-clone
npm install
npm run dev

-----------------------------------------------------------------------


📜 License
This project is open-source and available for educational or personal use.


Built with ❤️ by Monish during Incture Training

