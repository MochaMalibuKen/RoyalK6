# RK6 Youth in Action - Deployment Guide

## 🚀 Quick Start

Your JAMstack website is ready for deployment! Here's how to get it live:

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production  
npm run build
```

## 🌐 Deployment Options

### Option 1: Netlify (Recommended)
1. Push your code to GitHub/GitLab
2. Connect to Netlify (https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy automatically on push!

**Forms**: Netlify Forms will work automatically
**Custom Domain**: Add in Netlify settings

### Option 2: Vercel
1. Push to GitHub
2. Connect to Vercel (https://vercel.com)
3. Framework: Other
4. Build command: `npm run build`
5. Output directory: `dist`

### Option 3: GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run build && npm run deploy`

## 📝 Post-Deployment Checklist

### Required Updates
1. **Replace placeholder logos**:
   - Add real logos: `src/assets/images/logo-light.png` & `logo-dark.png`
   
2. **Update contact information**:
   - Phone numbers in footer and contact page
   - Email addresses throughout the site
   - Physical address on contact page

3. **Social Media Links**:
   - Update all social media URLs in footer
   - Add real social media handles

4. **PayPal Integration**:
   - Replace donation button placeholder with real PayPal button
   - Add merchant ID and donation settings

### Optional Enhancements
1. **Analytics**:
   - Add Google Analytics 4 tracking
   - Update tracking events in `main.js`

2. **Social Media Feed**:
   - Integrate Instagram API
   - Add TikTok embed widgets
   - Connect YouTube channel

3. **SEO Optimization**:
   - Update meta descriptions for each page
   - Add structured data markup
   - Submit sitemap to Google Search Console

4. **Performance**:
   - Optimize images (WebP format)
   - Add service worker for offline support
   - Enable CDN through hosting provider

## 🎨 Customization

### Brand Colors
Colors are defined in `tailwind.config.js` - update there to change throughout the site.

### Content Updates
- Main content is in HTML files in `src/`
- Leadership team info in `src/index.html` and `src/about.html`
- Program details in `src/programs.html`

### New Features
- Forms: Add `data-netlify="true"` for auto-processing
- Pages: Create new `.html` files in `src/`
- Styles: Extend Tailwind config or add to `input.css`

## 📧 Form Handling

### Netlify Forms (Current Setup)
- Contact form: Automatically processes to Netlify dashboard
- Volunteer form: Includes spam protection with honeypot
- Notifications: Set up email alerts in Netlify settings

### Alternative Form Processors
- **Formspree**: Simple form backend service
- **Getform**: Free form endpoints  
- **Emailjs**: Client-side email sending

## 🔒 Security

✅ **Already Configured**:
- HTTPS enforced
- Spam protection on forms
- Secure headers in `netlify.toml`
- Static site = minimal attack surface

## 📊 Analytics Integration

### Google Analytics 4
Add to `<head>` in `layout.html`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Update `main.js` tracking functions with real gtag calls.

## 🎯 Launch Checklist

- [ ] All placeholder content replaced with real content
- [ ] Contact information updated
- [ ] Social media links working
- [ ] Forms tested and receiving submissions
- [ ] Mobile responsiveness verified
- [ ] Dark/light mode toggle working
- [ ] All navigation links functional
- [ ] SEO meta tags updated
- [ ] Analytics tracking installed
- [ ] Domain name configured
- [ ] SSL certificate active

## 📞 Support

Your website is built with modern, maintainable technologies:
- **Eleventy**: Static site generator
- **Tailwind CSS**: Utility-first CSS framework  
- **Vanilla JavaScript**: No framework dependencies
- **Netlify Forms**: Serverless form processing

Documentation:
- [Eleventy Docs](https://www.11ty.dev/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Netlify Forms Docs](https://docs.netlify.com/forms/)

---

🎉 **Your RK6 Youth in Action website is ready to empower young leaders online!**
