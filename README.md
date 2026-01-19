# Personal Website - Graduate School Application Portfolio

A modern, professional portfolio website built with Vue.js 3 and Vite, designed for graduate school applications.

## Features

- 🎨 Modern and professional UI design
- 📱 Fully responsive layout
- ⚡ Fast and optimized with Vite
- 🎯 Multi-page navigation with Vue Router
- 📄 Academic highlights with transcript download
- 🏆 Awards and competitions showcase
- 💼 Detailed work experience
- 📝 Self-study courses documentation
- 📊 IELTS scores display
- 🔗 GitHub integration for projects

## Sections

- **Home**: Introduction and call-to-action
- **About**: Personal background, self-study courses (NTU VIBE Coding, Automatic Control Systems)
- **Projects**: Portfolio projects including thesis project with contribution percentage and improvement plans
- **Experience**: Work experience with detailed achievements
- **Academics**: GPA, key coursework, IELTS scores, and transcript download
- **Awards**: Competition results and awards
- **Contact**: Contact form and social links

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Setup Instructions

### 1. Add Your Transcript PDF

Place your transcript PDF file in the `public` folder and name it `transcript.pdf`. The download link is already configured in the Academics page.

### 2. Customize Content

Update the following files with your information:

#### `src/components/About.vue`
- Update self-study section with your courses
- Modify personal bio

#### `src/components/Projects.vue`
- Add your thesis project with:
  - Project title and description
  - Your contribution percentage
  - GitHub repository link
  - Improvement plan link

#### `src/pages/AcademicsPage.vue`
- Update GPA values (Overall GPA, Major GPA, Ranking)
- Add your key coursework with grades
- Update IELTS scores (overall and individual sections)
- Add course projects related to research

#### `src/pages/AwardsPage.vue`
- Add your competition results and awards

#### `src/components/Experience.vue`
- Update work experience with detailed achievements

### 3. CI/CD Setup (GitHub Actions)

The project includes a GitHub Actions workflow that automatically builds and deploys to GitHub Pages when you push to the `main` branch.

**To enable GitHub Pages:**
1. Go to your repository Settings > Pages
2. Source: select "GitHub Actions"
3. The workflow will automatically deploy on push to `main`

**Note:** Update `vite.config.js` base path if your repository name is different from `personal-website`.

## Project Structure

```
personal-website/
├── public/
│   └── transcript.pdf          # Your transcript (add this file)
├── src/
│   ├── components/             # Reusable components
│   │   ├── About.vue
│   │   ├── Contact.vue
│   │   ├── Experience.vue
│   │   ├── Hero.vue
│   │   ├── Navigation.vue
│   │   ├── Projects.vue
│   │   └── Skills.vue
│   ├── pages/                  # Page components
│   │   ├── AboutPage.vue
│   │   ├── AcademicsPage.vue
│   │   ├── AwardsPage.vue
│   │   ├── ContactPage.vue
│   │   ├── ExperiencePage.vue
│   │   ├── HomePage.vue
│   │   └── ProjectsPage.vue
│   ├── App.vue
│   ├── main.js
│   ├── router.js
│   └── style.css
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD workflow
└── vite.config.js
```

## Technologies Used

- Vue.js 3
- Vue Router
- Vite
- CSS3 (Custom properties, Grid, Flexbox)
- GitHub Actions (CI/CD)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.
