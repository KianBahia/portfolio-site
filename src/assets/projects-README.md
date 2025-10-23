# Your Project Folders

## 📁 Folder Structure Created

```
src/assets/
├── images/
│   ├── profile/                    # Your personal photo
│   └── projects/                  # Your project images
│       ├── real-emotion/          # Real Emotion project images
│       ├── healix/                # Healix project images
│       ├── steam-data-science-report/  # Steam Data Science Report images
│       └── epfl-life/             # EPFL LIFE project images
└── documents/                     # PDF documents (like your Steam report)
```

## 📝 Where to Edit Project Information

**File**: `src/data.js`

This file contains all your project information. You need to edit:

1. **Project descriptions** - Replace the placeholder text with your actual project descriptions
2. **Technologies** - Add the actual technologies you used for each project
3. **GitHub URLs** - Update with your actual GitHub repository URLs
4. **Live demo URLs** - Add if you have live demos
5. **Images** - Will be updated when you add your images

## 📸 Image Requirements

### **No specific size requirements!**

- Any image size will work
- The website will automatically resize and optimize them
- Recommended: 800x600px or larger for best quality
- Formats: JPG, PNG, or WebP

### **For each project, add:**

- **Main image**: The primary image that shows on the project card
- **Gallery images**: Additional images for the modal popup (2-4 images recommended)

### **Image naming suggestions:**

```
real-emotion/
├── hero.jpg              # Main project image
├── feature1.jpg          # Key feature screenshot
├── feature2.jpg          # Another feature
└── mobile-view.jpg       # Mobile version if applicable

healix/
├── dashboard.jpg         # Main dashboard view
├── user-interface.jpg    # User interface
└── analytics.jpg         # Analytics or data view

steam-data-science-report/
├── report-cover.jpg      # Report cover or summary
├── chart1.jpg            # Key chart or visualization
├── chart2.jpg            # Another important chart
└── methodology.jpg       # Methodology or process

epfl-life/
├── main-view.jpg         # Main application view
├── features.jpg          # Key features
└── technical.jpg         # Technical implementation
```

## 📄 PDF Documents

For your Steam Data Science Report:

- Add the PDF to: `src/assets/documents/steam-data-science-report.pdf`
- Update the `pdfUrl` field in `data.js` to link to this PDF

## 🚀 Next Steps

1. **Add your images** to the respective project folders
2. **Edit `src/data.js`** with your project descriptions and information
3. **Add your profile photo** to `src/assets/images/profile/profile-photo.jpg`
4. **Test the website** to make sure everything displays correctly

## 💡 Tips

- Use descriptive filenames for easy organization
- Keep images under 2MB for fast loading
- Consider using tools like TinyPNG to compress images
- Take screenshots of your actual projects for authenticity

