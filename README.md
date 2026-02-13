# STRUCTA General Contracting Website

A professional, modern, and responsive company website for STRUCTA General Contracting, built with Next.js (App Router) and Tailwind CSS.

## Features

- ✅ **Next.js 14** with App Router
- ✅ **Tailwind CSS** for styling
- ✅ **Arabic Language** with RTL support
- ✅ **Fully Responsive** design (mobile, tablet, desktop)
- ✅ **Modern UI** with industrial design suitable for a contracting company
- ✅ **WhatsApp Integration** - Floating button with direct chat link
- ✅ **SEO-Friendly** structure
- ✅ **Reusable Components** (Navbar, Footer, ServiceCard, WhatsAppButton)

## Sections

1. **Hero Section** - Company name, slogan, and call-to-action buttons
2. **About Us** - Company description and statistics
3. **Services** - 10 service cards with icons
4. **Gallery** - Project showcase with placeholder images
5. **Contact** - Contact form and information

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout with RTL support
│   ├── page.tsx             # Main page
│   └── globals.css          # Global styles
├── components/
│   ├── Navbar.tsx           # Navigation bar
│   ├── Footer.tsx           # Footer component
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Services.tsx         # Services section
│   ├── ServiceCard.tsx      # Service card component
│   ├── Gallery.tsx          # Gallery section
│   ├── Contact.tsx          # Contact section
│   └── WhatsAppButton.tsx   # Floating WhatsApp button
├── public/
│   └── image/               # Static images (logo, gallery)
└── package.json
```

## Customization

### WhatsApp Number

Update the WhatsApp number in:
- `components/WhatsAppButton.tsx` (line 4)
- `components/Contact.tsx` (line 50)

### Colors

The color palette uses a custom "steel" theme defined in `tailwind.config.ts`. You can modify colors there.

### Content

All Arabic content can be found in the respective component files. Update text directly in the components.

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Heroicons** - SVG icons (inline)

## License

This project is proprietary and belongs to STRUCTA General Contracting.

