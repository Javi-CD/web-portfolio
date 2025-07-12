# Contributing Guide

Thank you for your interest in contributing to this project. This guide will help you understand how you can participate effectively.

## Table of Contents

- [Contributing Guide](#contributing-guide)
  - [Table of Contents](#table-of-contents)
  - [Code of Conduct](#code-of-conduct)
  - [How to Contribute](#how-to-contribute)
  - [Development Environment Setup](#development-environment-setup)
    - [Prerequisites](#prerequisites)
    - [Initial Setup](#initial-setup)
  - [Development Process](#development-process)
    - [Workflow](#workflow)
    - [Syncing with Upstream](#syncing-with-upstream)
  - [Code Standards](#code-standards)
    - [JavaScript/React](#javascriptreact)
    - [CSS/Tailwind](#csstailwind)
    - [File Structure](#file-structure)
  - [Commit Messages](#commit-messages)
    - [Commit Types](#commit-types)
    - [Examples](#examples)
  - [Pull Requests](#pull-requests)
    - [Before Submitting](#before-submitting)
    - [Pull Request Template](#pull-request-template)
  - [Reporting Issues](#reporting-issues)
    - [Before Reporting](#before-reporting)
    - [Issue Template](#issue-template)
  - [Recognition](#recognition)
  - [Questions](#questions)

## Code of Conduct

This project adheres to the [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How to Contribute

There are several ways to contribute to this project:

- **Report bugs**: If you find an error, please create an issue
- **Suggest improvements**: Propose new features or enhancements
- **Contribute code**: Submit pull requests with fixes or new functionality
- **Improve documentation**: Help keep documentation up to date
- **Review code**: Participate in pull request reviews

## Development Environment Setup

### Prerequisites

- Node.js >= 18.0.0
- npm >= 8.0.0
- Git

### Initial Setup

1. **Fork the repository**

   ```bash
   # Fork the repository on GitHub
   # Then clone your fork
   git clone https://github.com/Javi-CD/web-portfolio.git
   cd web-portfolio
   ```

2. **Configure upstream**

   ```bash
   git remote add upstream https://github.com/javier-perez/web-portfolio.git
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Setup Git hooks**

   ```bash
   npm run prepare
   ```

5. **Verify setup**
   ```bash
   npm run lint
   npm run format:check
   npm run build
   ```

## Development Process

### Workflow

1. **Create a branch**

   ```bash
   git checkout -b type/branch-name
   ```

2. **Develop**
   - Write code following established standards
   - Run tests regularly
   - Keep commits small and focused

3. **Verify quality**

   ```bash
   npm run lint:fix
   npm run format
   npm run build
   ```

4. **Commit and push**

   ```bash
   git add .
   git commit -m "type(scope): description"
   git push origin type/branch-name
   ```

5. **Create Pull Request**

### Syncing with Upstream

```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

## Code Standards

### JavaScript/React

- Use ESLint to maintain code consistency
- Follow React Hooks conventions
- Prefer functional components over class components
- Use descriptive names for variables and functions
- Follow Next.js App Router conventions

### CSS/Tailwind

- Use Tailwind CSS classes when possible
- Maintain responsive design
- Follow mobile-first methodology

### File Structure

- Follow Next.js App Router structure (src/app/)
- Organize components in logical folders
- Use PascalCase file names for components
- Keep files small and focused

## Commit Messages

This project uses [Conventional Commits](https://www.conventionalcommits.org/). Commit messages should follow this format:

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

### Commit Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Formatting changes (spaces, commas, etc.)
- `refactor`: Code refactoring
- `test`: Adding or modifying tests
- `chore`: Maintenance tasks

### Examples

```bash
feat: add navigation component
fix: correct form validation error
docs: update installation guide
style: format code with prettier
refactor: simplify authentication logic
test: add tests for header component
chore: update dependencies
```

## Pull Requests

### Before Submitting

- Ensure your code passes all checks
- Update documentation if necessary
- Add tests for new functionality
- Verify there are no conflicts with main branch

### Pull Request Template

```markdown
## Description

Brief description of the changes made.

## Type of Change

- [ ] Bug fix (change that fixes an issue)
- [ ] New feature (change that adds functionality)
- [ ] Breaking change (change that could affect existing functionality)
- [ ] Documentation

## How Has This Been Tested

Describe the tests performed to verify the changes.

## Checklist

- [ ] My code follows the project standards
- [ ] I have performed a self-review of my code
- [ ] I have commented my code in hard-to-understand areas
- [ ] I have updated corresponding documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective
```

## Reporting Issues

### Before Reporting

- Search existing issues to avoid duplicates
- Verify the problem persists in the latest version
- Gather relevant environment information

### Issue Template

```markdown
## Problem Description

Clear and concise description of the problem.

## Steps to Reproduce

1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

## Expected Behavior

Description of what you expected to happen.

## Screenshots

If applicable, add screenshots.

## Environment Information

- OS: [e.g. iOS]
- Browser: [e.g. chrome, safari]
- Version: [e.g. 22]

## Additional Information

Any other relevant information about the problem.
```

## Recognition

All contributors will be recognized in the project credits file.

## Questions

If you have questions about how to contribute, feel free to:

- Create an issue with the "question" label
- Contact the project maintainers

Thank you for contributing to the project!
