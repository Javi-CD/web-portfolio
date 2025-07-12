<div align="center">
    <h1>Web Portfolio</h1>
</div>

<div align="center" style="display:flex; justify-content:center;">
<p>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![Next.js](https://img.shields.io/badge/Next.js-14.2.15-000000.svg)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC.svg)](https://tailwindcss.com/)

</p>

</div>

<div align="center">
<i>A modern and responsive web portfolio built with cutting-edge technologies</i>

[Live Demo](https://javier-perez.github.io/web-portfolio) • [Documentation](https://github.com/javier-perez/web-portfolio/wiki) • [Report Bug](https://github.com/Javi-CD/web-portfolio/issues)

## </div>

---

## Description

This project is a personal web portfolio developed with Next.js and React, designed to showcase projects, skills, and professional experience in an elegant and modern way. It uses Tailwind CSS for responsive design and features a fully configured CI/CD pipeline with Server-Side Rendering (SSR) capabilities.

## Key Features

- **Modern Framework**: Built with Next.js 14 and React 18 for optimal performance and SER
- **Responsive Design**: Implemented with Tailwind CSS for optimal experience across all devices
- **Code Quality**: ESLint and Prettier configured to maintain code standards
- **CI/CD**: Automated pipeline with GitHub Actions
- **Consistent Commits**: CommitLint and Husky for standardized commit messages
- **Optimization**: Production-optimized configuration

## Technologies Used

| Technology   | Version | Purpose                     |
| ------------ | ------- | --------------------------- |
| Next.js      | 14.2.15 | React framework with SSR    |
| React        | 18      | User interface framework    |
| Tailwind CSS | 3.4.1   | Utility-first CSS framework |
| ESLint       | 8       | JavaScript linter           |
| Prettier     | 3.0.0   | Code formatter              |
| Husky        | 9.1.7   | Git hooks                   |
| CommitLint   | 19.8.1  | Commit message validation   |

## Installation and Setup

### Prerequisites

- Node.js >= 18.0.0
- npm >= 8.0.0

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/Javi-CD/web-portfolio
   cd web-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Setup Husky**

   ```bash
   npm run prepare
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## Available Scripts

| Script                 | Description                                |
| ---------------------- | ------------------------------------------ |
| `npm run dev`          | Starts the Next.js development server      |
| `npm run build`        | Builds the application for production      |
| `npm run start`        | Starts the production server               |
| `npm run lint`         | Runs ESLint                                |
| `npm run lint:fix`     | Runs ESLint and fixes errors automatically |
| `npm run format`       | Formats code with Prettier                 |
| `npm run format:check` | Checks code formatting                     |

## Project Structure

```
web-portfolio/
├── .github/
│   └── workflows/
│       └── ci.yml
├── .husky/
│   └── commit-msg
├── src/
│   ├── app/
│   │   ├── layout.js
│   │   └── page.js
│   ├── components/
│   └── globals.css
├── public/
├── package.json
├── next.config.js
├── jsconfig.json
├── tailwind.config.js
├── eslint.config.js
├── commitlint.config.js
└── README.md
```

## Contributing

Contributions are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) to learn about the contribution process and development guidelines.

## Code of Conduct

This project adheres to the [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Security

If you discover any security vulnerabilities, please review our [Security Policy](SECURITY.md).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Author

**Javier Pérez**

- GitHub: [Javi-CD](https://github.com/Javi-CD)
<!-- - LinkedIn: [Javier Pérez](https://linkedin.com/in/javier-perez) -->
- Email: javierperezviloria07@gmail.com

---

<div align="center">

**Developed with dedication and web development best practices**

</div>
