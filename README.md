# Personal Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS. Features a beautiful landing page, project showcase, and about section.

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm build
```

## 🎨 Customization Guide

### 1. Update Personal Information

Edit `src/data.js` to customize your portfolio content:

#### Projects Section

Add, remove, or modify projects in the `projects` array:

```javascript
{
  title: "Your Project Name",
  description: "Project description",
  technologies: ["React", "Node.js", "etc"],
  githubUrl: "https://github.com/username/project",
  liveUrl: "https://your-demo.com",
  image: "path/to/image.jpg" // Optional
}
```

#### About Section

Update the `aboutData` object:

- **bio**: Your personal introduction
- **hobbies**: Array of your hobbies and interests
- **skills**: Categorized skills array
- **certificates**: Your certificates and achievements
- **socialLinks**: Your social media and contact links

### 2. Personalize the Hero Section

Edit `src/components/Hero.js`:

- Line 15: Change "Your Name" to your actual name
- Lines 46-73: Update social media links

### 3. Add Project Images

To add images to your projects:

1. Place images in `public/images/` folder
2. Update the `image` field in `src/data.js`:
   ```javascript
   image: "/images/project-screenshot.jpg";
   ```

### 4. Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    }
  }
}
```

### 5. Update Footer

Edit the footer in `src/App.js` (lines 18-24) to update copyright information.

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js      # Navigation bar with smooth scroll
│   ├── Hero.js        # Landing page/hero section
│   ├── Projects.js    # Projects grid display
│   ├── ProjectCard.js # Individual project card
│   └── About.js       # About section with skills & certificates
├── data.js            # All portfolio content (easy to update!)
├── App.js             # Main app component
├── App.css            # Custom styles and animations
└── index.css          # Tailwind CSS imports
```

## 🎯 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth scrolling navigation
- ✅ Modern gradient backgrounds
- ✅ Hover animations and transitions
- ✅ Project cards with GitHub and live demo links
- ✅ Skills organized by category
- ✅ Certificates showcase
- ✅ Social media integration
- ✅ Easy to customize (all content in one file)

## 🛠️ Technologies Used

- React 19
- Tailwind CSS
- JavaScript ES6+

## 📝 Tips

1. **Add Real Project Images**: Replace placeholder images with actual screenshots of your projects
2. **Update All Links**: Make sure to update all social media and project links with your actual URLs
3. **Keep It Updated**: Regularly add new projects and update your skills
4. **Optimize Images**: Compress images before adding them to improve load times
5. **Test Responsiveness**: Check your portfolio on different screen sizes

## 🚀 Deployment

You can deploy this portfolio to:

- **Vercel**: `npm install -g vercel` then `vercel`
- **Netlify**: Connect your GitHub repo
- **GitHub Pages**: Use `gh-pages` package
- **Heroku**, **AWS**, **Azure**, etc.

## 📧 Need Help?

If you need to customize something specific, all components are well-commented and easy to modify. The main content is in `src/data.js` for quick updates!

---

**Happy Coding! 🎉**
