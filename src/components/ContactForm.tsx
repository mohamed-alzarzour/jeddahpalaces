import { useState } from 'react';
import { getLanguage, t } from '../lib/i18n';

export default function ContactForm() {
    const lang = getLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        honeypot: '', // Anti-spam
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = (): boolean => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = t('required', lang);
        }

        if (!formData.email.trim()) {
            newErrors.email = t('required', lang);
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = t('invalidEmail', lang);
        }

        if (!formData.message.trim()) {
            newErrors.message = t('required', lang);
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Check honeypot
        if (formData.honeypot) {
            return; // Bot detected
        }

        if (!validate()) return;

        setStatus('loading');

        try {
            // Using Web3Forms
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: '7068255c-98ed-4ce9-8e10-2736bc049eb5',
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                    from_name: 'Jeddah Palaces Website',
                    to_email: 'mhamd200211@gmail.com',
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '', honeypot: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // Clear error when user starts typing
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    return (
        <div className="relative">
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field (hidden) */}
                <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                />

                {/* Name Field */}
                <div className="group">
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                        {t('name', lang)} <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-primary/30 border-2 transition-all duration-300 
              ${errors.name ? 'border-red-500' : 'border-secondary/20 focus:border-secondary'} 
              focus:outline-none focus:ring-2 focus:ring-secondary/20`}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                        <p id="name-error" className="text-red-500 text-sm mt-1" role="alert">
                            {errors.name}
                        </p>
                    )}
                </div>

                {/* Email Field */}
                <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                        {t('email', lang)} <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-primary/30 border-2 transition-all duration-300 
              ${errors.email ? 'border-red-500' : 'border-secondary/20 focus:border-secondary'} 
              focus:outline-none focus:ring-2 focus:ring-secondary/20`}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                        <p id="email-error" className="text-red-500 text-sm mt-1" role="alert">
                            {errors.email}
                        </p>
                    )}
                </div>

                {/* Phone Field */}
                <div className="group">
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        {t('phone', lang)}
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-primary/30 border-2 border-secondary/20 focus:border-secondary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary/20"
                    />
                </div>

                {/* Message Field */}
                <div className="group">
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                        {t('message', lang)} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-primary/30 border-2 transition-all duration-300 resize-none
              ${errors.message ? 'border-red-500' : 'border-secondary/20 focus:border-secondary'} 
              focus:outline-none focus:ring-2 focus:ring-secondary/20`}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                        <p id="message-error" className="text-red-500 text-sm mt-1" role="alert">
                            {errors.message}
                        </p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full px-8 py-4 bg-gradient-to-r from-secondary to-accent text-white font-semibold rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                    {status === 'loading' ? t('sending', lang) : t('send', lang)}
                </button>

                {/* Status Messages */}
                {status === 'success' && (
                    <div className="p-4 bg-green-500/10 border-2 border-green-500 text-green-700 dark:text-green-300 rounded-lg animate-fade-in" role="alert">
                        {t('successMessage', lang)}
                    </div>
                )}

                {status === 'error' && (
                    <div className="p-4 bg-red-500/10 border-2 border-red-500 text-red-700 dark:text-red-300 rounded-lg animate-fade-in" role="alert">
                        {t('errorMessage', lang)}
                    </div>
                )}
            </form>
        </div>
    );
}
