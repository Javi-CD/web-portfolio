# Security Policy

## Supported Versions

We currently provide security support for the following versions of the project:

| Version | Supported |
| ------- | --------- |
| 1.0.x   | Yes       |
| < 1.0   | No        |

## Reporting a Vulnerability

Security is a priority for us. If you discover a security vulnerability, we ask that you help us resolve it responsibly.

### Reporting Process

1. **DO NOT** create a public issue for security vulnerabilities
2. Send an email to **javierperezdeveloper@gmail.com** with the details
3. Include the detailed information described below
4. Wait for our response before publicly disclosing

### Required Information

To help us understand and resolve the issue quickly, include the following information:

- **Type of vulnerability** (e.g. XSS, SQL injection, etc.)
- **Location** of the vulnerable code
- **Steps to reproduce** the issue
- **Potential impact** of the vulnerability
- **Any mitigation** you have identified

### Report Example

```
Subject: [SECURITY] XSS Vulnerability in Comments Component

Description:
I have found a Cross-Site Scripting (XSS) vulnerability in the comments component that allows execution of malicious scripts.

Location:
- File: src/components/sections/Comments.jsx
- Line: 45
- Function: renderComment()

Steps to reproduce:
1. Navigate to the comments section
2. Insert the payload: <script>alert('XSS')</script>
3. Submit the comment
4. The script executes when the page loads

Impact:
- Execution of arbitrary JavaScript code
- Potential session cookie theft
- Website defacement

Suggested mitigation:
- Sanitize user input
- Implement Content Security Policy (CSP)
- Use libraries like DOMPurify
- Follow Next.js security best practices
```

## Response Time

- **Initial confirmation**: Within 48 hours
- **Preliminary assessment**: Within 7 days
- **Resolution**: Depending on severity
  - Critical: 1-3 days
  - High: 1-2 weeks
  - Medium: 2-4 weeks
  - Low: 1-3 months

## Severity Classification

### Critical

- Remote code execution
- Unauthorized access to sensitive data
- Complete system compromise

### High

- Privilege escalation
- Authentication bypass
- Sensitive information exposure

### Medium

- Cross-Site Scripting (XSS)
- Cross-Site Request Forgery (CSRF)
- Limited code injection

### Low

- Non-sensitive information disclosure
- Minor configuration issues

## Resolution Process

1. **Triage**: We evaluate and classify the vulnerability
2. **Investigation**: We analyze the impact and develop a solution
3. **Development**: We create and test the fix
4. **Review**: Code review and security testing
5. **Deployment**: Release of the fix
6. **Disclosure**: Public communication after the fix

## Responsible Disclosure

### Our Commitment

- We will confirm receipt of your report within 48 hours
- We will keep you informed about the resolution progress
- We will publicly credit you for the discovery (if you wish)
- We will not take legal action against researchers acting in good faith

### Your Commitment

- Do not publicly disclose the vulnerability until we have released a fix
- Do not access data that does not belong to you
- Do not modify or delete data
- Do not perform denial of service attacks
- Do not use social engineering against our team

## Rewards

We currently do not offer a monetary bounty program, but:

- We will publicly acknowledge your contribution
- We will include you in our security hall of fame
- We will provide a recommendation letter if requested

## Security Best Practices

### For Developers

- Keep dependencies up to date
- Use static security analysis tools
- Implement robust input validation
- Follow the principle of least privilege
- Conduct security-focused code reviews

### For Users

- Keep your browser updated
- Use strong and unique passwords
- Enable two-factor authentication when available
- Report suspicious behavior

## Security Tools

This project uses the following tools to maintain security:

- **ESLint**: Static code analysis
- **Next.js**: Built-in security features and optimizations
- **Dependabot**: Automatic dependency updates
- **GitHub Security Advisories**: Vulnerability monitoring
- **npm audit**: Dependency auditing

## Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)
- [Mozilla Web Security Guidelines](https://infosec.mozilla.org/guidelines/web_security)
- [Google Web Fundamentals Security](https://developers.google.com/web/fundamentals/security)

## Contact

For security reports:

- **Email**: javierperezdeveloper@gmail.com

For other inquiries:

- **GitHub Issues**: [Create an issue](https://github.com/Javi-CD/web-portfolio/issues)
- **General email**: javierperezviloria07@gmail.com

## Vulnerability History

Currently, no security vulnerabilities have been reported for this project.

---
