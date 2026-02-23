# Jeddah Palaces - Web3Forms Setup

The contact form uses Web3Forms for email delivery. To complete the setup:

1. Go to https://web3forms.com/
2. Sign up for a free account
3. Create a new form
4. Copy your access key
5. Open `src/components/ContactForm.tsx`
6. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual access key on line 52

The form is configured to send emails to: `mhamd200211@gmail.com`

## Alternative Email Services

If you prefer a different service, you can replace Web3Forms with:

### Option 1: Vercel Serverless Function
Create `api/contact.ts` and use a service like Resend or SendGrid

### Option 2: EmailJS
Visit https://www.emailjs.com/ and follow their setup guide
