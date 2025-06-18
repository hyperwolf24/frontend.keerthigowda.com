# Technical Documentation

## Project Overview
This is a Next.js-based personal website for Keerthi Gowda, featuring multiple sections including home, about, contact, farm, music, and chandi sections. The project uses modern web technologies and follows best practices for performance and security.

## Tech Stack
- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: IBM Plex Mono
- **Deployment**: Docker
- **Container Management**: Docker Compose

## Project Structure
```
src/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Timeline.tsx
│   │   └── FloatingBubbles.tsx
│   ├── home/
│   ├── about/
│   ├── contact/
│   ├── farm/
│   ├── music/
│   ├── chandi/
│   ├── elements/
│   ├── utils/
│   ├── .well-known/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── metadata.ts
│   ├── robots.ts
│   └── sitemap.ts
└── middleware.ts
```

## Public Assets
The `public` directory contains all static assets that are served directly by Next.js:

```
public/
├── images/
│   ├── Profile images (keerthi-gowda*.webp)
│   ├── Farm produce images (arecanut.webp, cardamom.webp, etc.)
│   ├── Music-related images (mridangam*.webp)
│   ├── Event images (concert.webp, wedding-candid.webp)
│   └── Other content images (background.webp, shiva.webp, etc.)
├── icons/
│   ├── Favicon files (favicon.ico, favicon-*.png)
│   ├── Apple touch icons (apple-icon-*.png)
│   ├── Android icons (android-icon-*.png)
│   ├── Microsoft icons (ms-icon-*.png)
│   ├── manifest.json
│   └── browserconfig.xml
├── window.svg
├── file.svg
└── globe.svg
```

### Asset Organization
- **Images**: Contains all image assets in WebP format for optimal performance
  - Profile and personal images
  - Farm produce and agricultural content
  - Music and performance related images
  - Event and wedding photography
  - Background and decorative images

- **Icons**: Comprehensive set of favicon and app icons
  - Multiple sizes for different platforms (16x16 to 310x310)
  - Platform-specific icons (Apple, Android, Microsoft)
  - Web app manifest and browser configuration files

- **SVG Assets**: Vector graphics for UI elements
  - Navigation and interface icons
  - Decorative elements

## Key Features

### Layout and Navigation
- Responsive navigation system
- Custom floating bubbles background effect
- Consistent layout across all pages
- Footer with copyright information

### Security Features
- Content Security Policy (CSP) implementation
- XSS Protection
- Frame protection
- HSTS enabled
- Secure headers configuration

### Performance Optimizations
- Image optimization with remote patterns
- Font optimization with preloading
- Compression enabled
- Cache control headers
- React Strict Mode enabled

### Routes and Pages
1. **Home** (`/`)
   - Landing page with main content

2. **About** (`/about`)
   - Personal information and background

3. **Contact** (`/contact`)
   - Contact information and form

4. **Farm** (`/farm`)
   - Farming-related content and information

5. **Music** (`/music`)
   - Music-related content and information

6. **Chandi** (`/chandi`)
   - Chandi-related content and information

7. **Elements** (`/elements`)
   - Wedding photography project showcase
   - Features pay-per-photo candid photography service
   - Includes project details and service offerings
   - Responsive image gallery with wedding candid photography
   - Interactive UI elements with hover effects

### Components
1. **Navigation**
   - Main navigation component
   - Responsive menu system

2. **Timeline**
   - Timeline component for displaying chronological information

3. **FloatingBubbles**
   - Interactive background component
   - Creates dynamic visual effect

### Configuration Files
1. **next.config.js**
   - Image optimization settings
   - Security headers
   - Performance configurations

2. **tailwind.config.js**
   - Custom color scheme
   - Content paths
   - Theme extensions

3. **postcss.config.js**
   - Tailwind CSS integration
   - Autoprefixer configuration

### Docker Configuration
- Multi-stage build process
- Node.js 18 Alpine-based images
- Production-optimized configuration
- Port mapping: 8080:3000

## Development Guidelines
1. **Code Organization**
   - Follows Next.js 13+ app directory structure
   - Component-based architecture
   - Separation of concerns

2. **Styling**
   - Tailwind CSS for styling
   - Custom color scheme with primary color: #018c6d
   - Responsive design principles

3. **Performance**
   - Image optimization
   - Font optimization
   - Code splitting
   - Lazy loading where appropriate

4. **Security**
   - Strict CSP rules
   - Security headers
   - Input validation
   - XSS protection

## Deployment
The application is containerized using Docker and can be deployed using Docker Compose:
```bash
docker-compose up -d
```

## Environment
- Node.js 18
- Next.js
- TypeScript
- Tailwind CSS
- Docker
- Docker Compose

## Additional Features
- SEO optimization
- Sitemap generation
- Robots.txt configuration
- Social media integration
- Open Graph protocol support
- Twitter card support 