# RK6 Youth in Action - Website

A modern JAMstack website for RK6 Youth in Action, a nonprofit organization empowering young individuals to become proactive leaders and compassionate citizens in their communities.

## 🎨 Design Features

- **Graffiti-meets-Magic Aesthetic**: Bright, modern design inspired by street art with magical glow effects
- **Mobile-First Responsive**: Beautiful on all devices from mobile to desktop
- **Dark/Light Mode**: Automatic theme switching with user preference saving
- **Accessibility Focused**: WCAG compliant with proper contrast and navigation
- **Interactive Animations**: Subtle sparkle effects and smooth hover animations

## 🛠️ Technology Stack

- **Static Site Generator**: Eleventy (11ty)
- **Styling**: Tailwind CSS with custom brand colors
- **JavaScript**: Vanilla JS for interactions and animations
- **Forms**: Netlify Forms for contact and volunteer applications
- **Deployment**: Ready for Netlify/Vercel deployment

## 🎨 Brand Colors

### Light Mode
- Royal Purple: `#8B5CF6`
- Gold: `#E8B923`
- Teal: `#4CB4B1`
- Bright Pink: `#F15BB5`
- Neutral Dark: `#0B0F14`
- Light Background: `#FDFBF9`

### Dark Mode
- Purple Glow: `#A78BFA`
- Gold Glow: `#FFD347`
- Teal Deep: `#2AAE9A`
- Background Dark: `#0B0F14`

## 📁 Project Structure

```
src/
├── _includes/          # Layout templates
│   └── layout.html     # Main layout with navigation and footer
├── assets/
│   ├── css/
│   │   ├── input.css   # Tailwind source
│   │   └── style.css   # Compiled CSS
│   ├── js/
│   │   └── main.js     # Interactive JavaScript
│   └── images/         # Logo and image assets
├── index.html          # Home page
├── about.html          # About page
├── programs.html       # Programs page
├── get-involved.html   # Get Involved page with forms
└── contact.html        # Contact page
```

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Build CSS** (if needed separately)
   ```bash
   npm run build:css
   ```

## 📄 Pages Overview

### Home Page (`/`)
- Hero section with mission statement
- Leadership team showcase
- Programs preview
- Social media feed placeholder
- Call-to-action sections

### About Page (`/about/`)
- Detailed mission, vision, and promise
- Core values section
- Extended leadership team profiles
- Organizational story

### Programs Page (`/programs/`)
- Four main program areas:
  - Mentorship Program
  - Skill Building
  - Community Service Projects
  - Recreational Activities
- Impact statistics
- Program details with visual cards

### Get Involved Page (`/get-involved/`)
- Volunteer application form (Netlify Forms)
- PayPal donation button placeholder
- Resource downloads (PDF placeholders)
- Partnership information

### Contact Page (`/contact/`)
- Contact form (Netlify Forms)
- Office information and hours
- Interactive map placeholder
- FAQ section
- Social media links

## 🎯 Key Features

### Forms
- **Netlify Forms Integration**: Ready-to-use contact and volunteer forms
- **Spam Protection**: Honeypot fields included
- **Validation**: Client-side form validation with visual feedback
- **Accessibility**: Proper labels and ARIA attributes

### Interactive Elements
- **Dark Mode Toggle**: Smooth theme switching with persistence
- **Mobile Menu**: Responsive navigation with hamburger menu
- **Smooth Scrolling**: Enhanced navigation experience
- **Scroll Animations**: Elements fade in as they enter viewport
- **Sparkle Effects**: Magical particle animations (desktop only)

### Accessibility
- **Semantic HTML**: Proper heading hierarchy and landmark elements
- **Keyboard Navigation**: Full keyboard accessibility support
- **Color Contrast**: WCAG AA compliant color combinations
- **Screen Reader Support**: ARIA labels and descriptions
- **Focus Management**: Clear focus indicators and logical tab order

### Performance
- **Optimized Images**: Lazy loading and responsive images
- **Minimal JavaScript**: Vanilla JS for faster loading
- **CSS Optimization**: Tailwind purging for smaller file sizes
- **Static Generation**: Fast loading with Eleventy

## 🔧 Customization

### Adding New Pages
1. Create new HTML file in `src/`
2. Add frontmatter with layout and metadata
3. Update navigation in `layout.html`

### Modifying Colors
Update colors in `tailwind.config.js` and they'll automatically apply throughout the site.

### Adding New Features
- Forms: Add `data-netlify="true"` attribute
- Animations: Use existing Tailwind animation classes
- Interactive elements: Extend `main.js`

## 📱 Social Media Integration

Placeholders are included for:
- Instagram feed
- TikTok integration
- Twitter/X timeline
- YouTube videos
- Facebook posts

## 💳 Payment Integration

- PayPal donation button placeholder
- Ready for Stripe integration
- Contact forms for alternative donation methods

## 🚀 Deployment

### Netlify
1. Connect repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Forms will automatically work with Netlify Forms

### Vercel
1. Connect repository to Vercel
2. Framework preset: Other
3. Build command: `npm run build`
4. Output directory: `dist`

## 📝 Content Management

### Updating Content
- Text content is in HTML files for easy editing
- No CMS required - content is version controlled
- Brand voice guidelines included in comments

### Adding Images
1. Add images to `src/assets/images/`
2. Update references in HTML files
3. Include alt text for accessibility

## 🎨 Design System

### Typography
- **Display Font**: Permanent Marker (graffiti style)
- **Body Font**: Inter (clean, readable)

### Components
- **Cards**: Rounded corners with hover glow effects
- **Buttons**: Gradient backgrounds with scale animations
- **Forms**: Consistent styling with focus states
- **Navigation**: Fixed header with backdrop blur

### Layout
- **Container**: Max-width with responsive padding
- **Grid System**: CSS Grid and Flexbox
- **Breakpoints**: Mobile-first responsive design

## 🔒 Security

- **Form Protection**: Honeypot spam prevention
- **HTTPS**: Enforced through deployment platforms
- **Content Security**: Static generation eliminates many attack vectors

## 📊 Analytics Ready

Placeholder functions included for:
- Google Analytics 4
- Facebook Pixel
- Custom event tracking
- Conversion tracking

## 🆘 Support

For questions or support:
- Review the code comments for implementation details
- Check the component examples in each page
- Refer to Tailwind CSS and Eleventy documentation

## 📄 License

This website template is created for RK6 Youth in Action. Please customize and use according to your organization's needs.

---

**Built with ❤️ for youth empowerment and community transformation.**
