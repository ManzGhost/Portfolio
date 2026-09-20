import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Send, 
  CheckCircle2, 
  Copy, 
  MapPin, 
  Loader2, 
  AlertCircle, 
  ExternalLink,
  RotateCcw
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sendContactEmail } from '../services/emailService';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [statusFeedback, setStatusFeedback] = useState('');
  const [copied, setCopied] = useState(false);
  const [lastSentSummary, setLastSentSummary] = useState<{ name: string; email: string; message: string } | null>(null);

  const validateForm = () => {
    if (!name.trim()) {
      setErrorMessage('Name is required.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setErrorMessage('Valid email is required.');
      return false;
    }
    if (!message.trim()) {
      setErrorMessage('Message is required.');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent duplicate submissions while in flight
    if (status === 'submitting') return;

    if (!validateForm()) return;

    setStatus('submitting');
    setErrorMessage('');
    setStatusFeedback('');

    const formData = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim()
    };

    try {
      const result = await sendContactEmail(formData);

      if (result.success) {
        // Form resets ONLY after successful submission
        setLastSentSummary({ ...formData });
        setName('');
        setEmail('');
        setMessage('');
        setStatus('success');
        setStatusFeedback(result.message || 'Message sent successfully!');
      } else {
        // Form is NOT cleared on failure
        setStatus('error');
        setStatusFeedback(result.message || 'Failed to send message. Please try again.');
        if (result.errorDetails) {
          setErrorMessage(result.errorDetails);
        }
      }
    } catch (err: unknown) {
      console.error('Contact form submission error:', err);
      // Form is NOT cleared on failure
      setStatus('error');
      setStatusFeedback('Failed to send message. Please try again.');
      setErrorMessage(err instanceof Error ? err.message : 'An unexpected error occurred.');
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi David, this is ${name || 'a visitor'} (${email || 'No email provided'}).\n\nMessage:\n${message || 'Hi David, I came across your portfolio and would like to connect.'}`
    );
    window.open(`https://wa.me/919546681813?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleSendAnother = () => {
    setStatus('idle');
    setStatusFeedback('');
    setErrorMessage('');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Availability */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-medium">
              <Mail className="w-3.5 h-3.5" />
              <span>GET IN TOUCH</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Let's Work Together
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              I'm actively seeking entry-level Java Full Stack Developer roles, software internships, and engineering opportunities. Drop a message directly to my email inbox or connect below.
            </p>

            <div className="pt-2 space-y-4">
              {/* Email direct copy box */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Direct Email</div>
                    <div className="text-sm font-semibold text-white truncate">{PERSONAL_INFO.links.email}</div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-white border border-slate-700 text-xs font-mono flex items-center gap-1.5 transition-all shrink-0 cursor-pointer"
                  aria-label="Copy email address"
                  id="copy-email-btn"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone direct */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Phone / WhatsApp</div>
                    <a href="tel:+919546681813" className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors font-mono">
                      +91-9546681813
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleOpenWhatsApp}
                  className="px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 hover:text-emerald-200 border border-emerald-500/30 text-xs font-mono flex items-center gap-1 transition-all shrink-0 cursor-pointer"
                  title="Chat directly on WhatsApp"
                  id="direct-whatsapp-btn"
                >
                  <span>Chat</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>

              {/* Location & Status */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Location</div>
                  <div className="text-sm font-semibold text-white">Bengaluru, India &bull; Open to Relocation</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div 
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl shadow-black/30 backdrop-blur-sm"
              id="contact-form-container"
            >
              
              {/* SUCCESS STATE */}
              {status === 'success' ? (
                <div className="text-center py-6 space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400 shadow-lg shadow-emerald-500/10">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      Message sent successfully!
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto mt-2 leading-relaxed">
                      Thank you <span className="font-semibold text-white">{lastSentSummary?.name}</span>. Your message has been sent directly to my inbox via EmailJS. I will respond to your email shortly.
                    </p>
                  </div>

                  {lastSentSummary && (
                    <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 text-left space-y-2 text-xs">
                      <div className="text-slate-400 font-mono flex items-center justify-between">
                        <span>Reply-To: <strong className="text-slate-200 font-sans">{lastSentSummary.email}</strong></span>
                        <span className="text-emerald-400 font-mono">Delivered to Inbox</span>
                      </div>
                      <p className="text-slate-300 font-sans italic border-t border-slate-800 pt-2 line-clamp-3">
                        "{lastSentSummary.message}"
                      </p>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      onClick={handleSendAnother}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 transition-all cursor-pointer"
                      id="contact-send-another-btn"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Send Another Message</span>
                    </button>
                    <button
                      onClick={handleOpenWhatsApp}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20 transition-all cursor-pointer"
                      id="contact-whatsapp-followup-btn"
                    >
                      <span>Also Ping on WhatsApp</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" id="contact-form" noValidate>
                  {/* Failure Alert Banner: On failure show "Failed to send message. Please try again." */}
                  {status === 'error' && (
                    <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/40 text-rose-200 text-xs flex items-start gap-2.5 animate-in fade-in">
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />
                      <div className="space-y-1">
                        <p className="font-semibold text-rose-300">
                          {statusFeedback || 'Failed to send message. Please try again.'}
                        </p>
                        {errorMessage && (
                          <p className="text-[11px] text-rose-300/80 font-mono">
                            {errorMessage}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Validation Error Banner */}
                  {status !== 'error' && errorMessage && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Field: Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 uppercase tracking-wider">
                      Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errorMessage) setErrorMessage('');
                        if (status === 'error') setStatus('idle');
                      }}
                      placeholder="Your Full Name"
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all disabled:opacity-50"
                    />
                  </div>

                  {/* Field: Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 uppercase tracking-wider">
                      Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errorMessage) setErrorMessage('');
                        if (status === 'error') setStatus('idle');
                      }}
                      placeholder="your.email@example.com"
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all disabled:opacity-50"
                    />
                  </div>

                  {/* Field: Message */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 uppercase tracking-wider">
                        Message <span className="text-rose-400">*</span>
                      </label>
                      <span className="text-[11px] font-mono text-slate-500">
                        {message.length} characters
                      </span>
                    </div>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errorMessage) setErrorMessage('');
                        if (status === 'error') setStatus('idle');
                      }}
                      placeholder="Hi David, we have an opening for a Java Full Stack Developer and would love to connect..."
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none disabled:opacity-50"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/40 transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    id="contact-submit-btn"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 pt-1 text-[11px] font-mono text-slate-500">
                    <span>Powered by EmailJS</span>
                    <span>&bull;</span>
                    <button
                      type="button"
                      onClick={handleOpenWhatsApp}
                      className="text-emerald-400 hover:underline cursor-pointer"
                    >
                      Or chat on WhatsApp
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
