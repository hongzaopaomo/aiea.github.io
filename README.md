# AIEA Foundation Website

This is the official website for the African International Exchange of Art Foundation (AIEA), built with React and Tailwind CSS.

## Project Overview

The AIEA Foundation website showcases the foundation's mission, activities, artists, publications, news, and donation opportunities. The website is designed to be modern, visually appealing, interactive, and responsive.

## Technology Stack

- **React**: A JavaScript library for building UI components.
- **Tailwind CSS**: A utility-first CSS framework for building responsive designs quickly.
- **React Router**: For managing page navigation.
- **GitHub Pages**: For hosting and deploying the website.
- **Axios**: For API requests (when integrated with a backend).

## Project Structure

```
/africa-education-foundation
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable components (Navbar, Footer, etc.)
│   ├── pages/             # Page components (Home, About, Team, etc.)
│   ├── assets/            # Assets (icons, fonts, etc.)
│   ├── api/               # API request handling
│   ├── hooks/             # Custom hooks (e.g., data fetching)
│   ├── App.js             # Main application entry point
│   ├── index.js           # React rendering entry point
│   ├── routes.js          # Routing configuration
├── .gitignore             # Git ignore file
├── package.json           # Dependency management
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
└── README.md              # Project documentation
```

## Website Functional Modules

1. **Home Page**: Shows the foundation's mission, highlights key projects, and displays partner organizations.
2. **About Us**: Introduction to the foundation, team members, history, and development.
3. **Artists**: Showcases artist works and provides individual artist introduction pages.
4. **Publications**: Displays articles, books, and publications with detailed content pages.
5. **News & Updates**: Foundation news, events, and announcements.
6. **Donations**: Online donation portal and information on donation methods.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/aiea.github.io.git
   cd africa-education-foundation
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` to see the website.

## Deployment

The website is configured to be deployed to GitHub Pages. To deploy:

1. Update the `base` path in `vite.config.js` if necessary.
2. Run the deployment script:
   ```
   npm run deploy
   ```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or inquiries, please contact info@aieafoundation.org.
