# MovicDev Portfolio

A modern, minimal portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Inspired by clean, elegant design principles with a black, white, and blue color palette.

## 🚀 Features

- **Modern Design**: Clean, minimal layout with plenty of whitespace
- **Smooth Animations**: Micro-interactions and transitions powered by Framer Motion
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Performance Optimized**: Built with Next.js 14 App Router
- **Type Safe**: Full TypeScript support
- **Accessible**: Semantic HTML and ARIA labels

## 🛠️ Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React** (Icons)

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page
├── components/
│   ├── Navigation.tsx    # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Projects.tsx      # Projects showcase
│   ├── Skills.tsx        # Skills section
│   └── Contact.tsx       # Contact form
├── data/
│   ├── projects.ts       # Project data
│   └── skills.ts         # Skills data
└── types/
    └── index.ts          # TypeScript types
```

## ✏️ Customization

### Update Your Information

1. **Projects**: Edit `data/projects.ts` to add/update your projects
2. **Skills**: Edit `data/skills.ts` to update your skills
3. **About Section**: Modify `components/About.tsx` with your information
4. **Contact Links**: Update social links in `components/Contact.tsx`
5. **Hero Section**: Customize the hero text in `components/Hero.tsx`

### Styling

- Colors are defined in `tailwind.config.ts`
- Global styles are in `app/globals.css`
- Component-specific styles use Tailwind utility classes

### Contact Form

The contact form currently shows an alert on submission. To integrate with an email service:

1. Set up an API route in `app/api/contact/route.ts`
2. Update the `handleSubmit` function in `components/Contact.tsx`
3. Consider using services like:
   - Resend
   - SendGrid
   - Nodemailer
   - Formspree

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

This Next.js app can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Credits

Design inspired by minimal portfolio websites, adapted with a black, white, and blue color scheme.
