# EmailJS Configuration for Contact Form

## Steps to configure EmailJS:

### 1. Create EmailJS account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up with your email
3. Verify your account

### 2. Configure email service

1. In the dashboard, go to **Email Services**
2. Click **Add New Service**
3. Select your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your account
5. **Copy the Service ID** that is generated

### 3. Create email template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template as a base:

```
Subject: New contact message - {{subject}}

Hello {{to_name}},

You have received a new message from your web portfolio:

**From:** {{from_name}} ({{from_email}})
**Subject:** {{subject}}
**Date:** {{date}}

**Message:**
{{message}}

---
This message was sent from your contact form.
```

4. **Copy the Template ID** that is generated

### 4. Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key**
3. Copy it

### 5. Configure environment variables

Edit the `.env.local` file with your credentials:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_TO_NAME=Your Name
```

### 6. Restart development server

```bash
npm run dev
```

## Available template variables:

- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_name}}` - Your name (recipient)
- `{{date}}` - Date and time when message was sent

## Free plan limits:

- 200 emails per month
- Perfect for a personal portfolio

## Troubleshooting:

- If you don't receive emails, check your spam folder
- Verify that environment variables are correctly configured
- Make sure the email service is active in EmailJS

Done! Your contact form will now send real emails to your inbox.
