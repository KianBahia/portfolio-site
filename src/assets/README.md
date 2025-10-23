# Portfolio Assets

This folder contains all the images and assets for your portfolio website.

## 📁 Folder Structure

```
assets/
├── images/
│   ├── profile/           # Your personal photo
│   │   └── profile-photo.jpg
│   └── projects/          # Project images organized by project
│       ├── ecommerce-platform/
│       ├── task-manager/
│       ├── data-dashboard/
│       ├── ai-recommendations/
│       ├── collaboration-tool/
│       └── mobile-banking/
└── icons/                 # Custom icons (if needed)
```

## 📸 Image Guidelines

### Profile Photo

- **File**: `profile/profile-photo.jpg`
- **Size**: 400x400px or larger (square aspect ratio)
- **Format**: JPG or PNG
- **Quality**: High resolution, professional headshot

### Project Images

- **Naming**: Use descriptive names (e.g., `hero.jpg`, `dashboard.jpg`, `mobile-view.jpg`)
- **Size**: 800x600px or larger
- **Format**: JPG or PNG
- **Quality**: High resolution, clear screenshots
- **Content**: Screenshots of your actual projects

## 🔗 How to Use in Code

### Import Images

```javascript
// Import your profile photo
import profilePhoto from "../assets/images/profile/profile-photo.jpg";

// Import project images
import ecommerceHero from "../assets/images/projects/ecommerce-platform/hero.jpg";
import ecommerceDashboard from "../assets/images/projects/ecommerce-platform/dashboard.jpg";
```

### Update data.js

```javascript
export const projects = [
  {
    title: "E-Commerce Platform",
    image: ecommerceHero, // Use imported image
    images: [
      ecommerceHero,
      ecommerceDashboard,
      // ... more images
    ],
    // ... rest of project data
  },
];
```

## 📝 Next Steps

1. Add your profile photo to `images/profile/profile-photo.jpg`
2. Add project screenshots to their respective folders
3. Update the `data.js` file to use your local images
4. Remove the placeholder Unsplash URLs

## 🎨 Image Optimization Tips

- Use tools like TinyPNG to compress images
- Keep file sizes under 500KB for web performance
- Use descriptive filenames for easy organization
- Consider creating different sizes for different use cases

