# Portfolio Website

A portfolio website showcasing UX-UI design work, visual designs, and contact information.

## Project Structure

```
portfolio/
├── public/             # Production-ready files (build output)
├── src/                # Source files
│   ├── assets/         # Static assets
│   │   ├── icons/      # SVG icons
│   │   ├── images/     # Images and photos
│   │   └── videos/     # Video files
│   ├── components/     # Reusable HTML components
│   ├── js/             # JavaScript files
│   ├── styles/         # CSS files
│   ├── index.html      # Main HTML file
│   └── server.js       # Express server
└── forms.db            # SQLite database for contact form
```

## Setup and Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```

## Building for Production

To create a production build, run:

```
npm run build
```

This will copy all files from the `src` directory to the `public` directory.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Node.js
- Express
- SQLite3
- Nodemailer for email functionality

## Deployment

This project is structured to be easily deployed to platforms like Netlify, Vercel, or any other hosting service that supports Node.js applications.
