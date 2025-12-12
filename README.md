# Micro Offer Engine

A modern, AI-powered SaaS application for creating and selling micro digital offers. Built with NextWave AI Suite branding and deployed on GitHub, Vercel, and Supabase.

## 🚀 Features

- **Lightning-Fast Offer Generation**: Create complete micro offers in 5-15 minutes
- **AI-Powered Content**: Automatic generation of sales pages, marketing copy, and deliverables
- **Modern UI**: Dark, futuristic NextWave AI Suite aesthetic with glassmorphism design
- **Complete Dashboard**: Track sales, analytics, and manage your offers
- **API Integration**: Full API access for custom integrations
- **Secure Authentication**: Supabase-powered authentication
- **One-Click Deployment**: Deploy to Vercel with a single click

## 📁 Project Structure

```
micro-offer-engine/
├── index.html              # Main application page
├── login.html              # User login page
├── signup.html             # User registration page
├── dashboard.html          # User dashboard with analytics
├── settings.html           # Settings and API key management
├── sales.html              # Marketing/sales landing page
├── logout.php              # Logout handler (Supabase integration)
├── README.md               # This file
│
├── assets/
│   ├── css/
│   │   ├── nextwave.css    # NextWave AI Suite theme (primary)
│   │   └── style.css       # Placeholder for additional styles
│   │
│   └── js/
│       └── script.js       # Application logic and form handling
```

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, Bootstrap 5, jQuery
- **Styling**: Custom NextWave CSS theme with glassmorphism and neon accents
- **Backend**: Supabase (PostgreSQL + Auth)
- **Deployment**: Vercel + GitHub
- **Icons**: Font Awesome 6.5
- **Typography**: Google Fonts (Inter)

## 🎨 Design System

The application uses the **NextWave AI Suite** design language featuring:

- **Dark Gradient Background**: Professional, modern aesthetic
- **Neon Blue Accents**: Electric blue (#5ab4ff) for primary actions
- **Glassmorphism**: Frosted glass effect with backdrop blur
- **Smooth Animations**: Subtle transitions and hover effects
- **Responsive Design**: Mobile-first approach

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Blue | #5ab4ff | Buttons, highlights, text gradient |
| Dark Background | #0d1117 | Main background |
| Glass Panel | rgba(255,255,255,0.04) | Card backgrounds |
| Text Primary | #e4e8f0 | Main text |
| Text Secondary | #8fa3c2 | Secondary text |

## 📦 Installation & Setup

### Prerequisites

- Node.js 16+ (for Vercel deployment)
- Git
- GitHub account
- Supabase account
- Vercel account

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/micro-offer-engine.git
cd micro-offer-engine
```

### 2. Local Development

Simply open `index.html` in your browser, or use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server
```

Visit `http://localhost:8000` in your browser.

### 3. Supabase Setup

1. Create a new Supabase project
2. Set up authentication (Email/Password)
3. Create tables for offers, users, and transactions
4. Copy your Supabase URL and API key

### 4. Environment Variables

Create a `.env.local` file (for Vercel):

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
```

### 5. Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
```

## 🔧 Configuration

### Supabase Integration

Update `logout.php` with your Supabase logout logic:

```php
<?php
// Example: Supabase logout
header('Location: /login.html');
session_destroy();
exit;
?>
```

### API Keys

API keys are managed in the Settings page (`settings.html`). Users can:

- View active API keys
- Generate new keys
- Revoke old keys
- Copy keys to clipboard

## 📝 Pages Overview

| Page | Purpose |
|------|---------|
| `index.html` | Main offer creation interface |
| `login.html` | User authentication |
| `signup.html` | New user registration |
| `dashboard.html` | Analytics and offer management |
| `settings.html` | Account settings and API management |
| `sales.html` | Marketing landing page |

## 🚀 Deployment Checklist

- [ ] Update branding/logo in all pages
- [ ] Configure Supabase authentication
- [ ] Set up environment variables in Vercel
- [ ] Test all forms and API endpoints
- [ ] Configure custom domain (optional)
- [ ] Set up SSL certificate
- [ ] Enable analytics tracking
- [ ] Test on mobile devices
- [ ] Deploy to production

## 🔐 Security Considerations

1. **API Keys**: Never commit `.env` files to Git
2. **Authentication**: Use Supabase Auth for secure user management
3. **CORS**: Configure CORS policies in Supabase
4. **Rate Limiting**: Implement rate limiting on API endpoints
5. **Input Validation**: Validate all form inputs on client and server

## 📊 Analytics Integration

To add analytics (Google Analytics, Mixpanel, etc.):

1. Add tracking script to `<head>` of HTML files
2. Track user interactions in `assets/js/script.js`
3. Monitor conversion funnels in your analytics dashboard

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For issues, questions, or feature requests:

1. Check existing GitHub issues
2. Create a new issue with detailed description
3. Contact support at support@nextwave.ai

## 🔗 Links

- [Vercel Documentation](https://vercel.com/docs)
- [Supabase Documentation](https://supabase.io/docs)
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.0/)
- [NextWave AI Suite](https://nextwave.ai)

---

**Built with ❤️ by NextWave AI Suite**
