import emailjs from '@emailjs/browser';

/**
 * Service to send contact emails using the official EmailJS browser SDK.
 * 
 * Expected EmailJS template variables:
 * - name (or from_name)
 * - email (or from_email / reply_to)
 * - message
 * - subject: "New Portfolio Contact - {{name}}"
 * 
 * Environment variables configured via Vite (import.meta.env):
 * - VITE_EMAILJS_SERVICE_ID
 * - VITE_EMAILJS_TEMPLATE_ID
 * - VITE_EMAILJS_PUBLIC_KEY
 * 
 * @param {{ name: string, email: string, message: string }} formData
 * @returns {Promise<{ success: boolean, message: string, errorDetails?: string }>}
 */
export async function sendContactEmail(formData) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Basic validation check
  if (!formData?.name?.trim()) {
    return {
      success: false,
      message: 'Name is required.'
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData?.email?.trim() || !emailRegex.test(formData.email.trim())) {
    return {
      success: false,
      message: 'Valid email is required.'
    };
  }

  if (!formData?.message?.trim()) {
    return {
      success: false,
      message: 'Message is required.'
    };
  }

  // Check if environment variables are configured
  if (!serviceId || !templateId || !publicKey) {
    console.warn(
      '[EmailJS Service] Environment variables not configured: ' +
      (!serviceId ? 'VITE_EMAILJS_SERVICE_ID ' : '') +
      (!templateId ? 'VITE_EMAILJS_TEMPLATE_ID ' : '') +
      (!publicKey ? 'VITE_EMAILJS_PUBLIC_KEY' : '')
    );
    return {
      success: false,
      message: 'Failed to send message. Please try again.',
      errorDetails: 'EmailJS environment variables are not configured in Vercel. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in Vercel project settings.'
    };
  }

  // Prepare template parameters matching user requirements
  const trimmedName = formData.name.trim();
  const trimmedEmail = formData.email.trim();
  const trimmedMessage = formData.message.trim();

  const templateParams = {
    name: trimmedName,
    from_name: trimmedName,
    email: trimmedEmail,
    from_email: trimmedEmail,
    reply_to: trimmedEmail,
    message: trimmedMessage,
    subject: `New Portfolio Contact - ${trimmedName}`
  };

  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      {
        publicKey: publicKey
      }
    );

    if (response.status === 200 || response.text === 'OK') {
      return {
        success: true,
        message: 'Message sent successfully!'
      };
    }

    return {
      success: false,
      message: 'Failed to send message. Please try again.',
      errorDetails: `EmailJS response: ${response.status} ${response.text}`
    };
  } catch (error) {
    console.error('[EmailJS Service Error]:', error);
    const errText = error instanceof Error ? error.message : (error?.text || String(error));
    return {
      success: false,
      message: 'Failed to send message. Please try again.',
      errorDetails: errText
    };
  }
}
