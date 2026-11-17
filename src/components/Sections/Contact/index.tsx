'use client';

import { useI18n } from '@/components/providers/i18n-provider';
import { useToast } from '@/components/providers/toast-provider';
import { useContact } from '@/hooks/use-contact';
import { Loader2 } from 'lucide-react';

export default function Contact() {
  const { t, locale } = useI18n();
  const { show } = useToast();
  const { formData, handleChange, handleSubmit, isLoading, status } =
    useContact(
      () => show(t.contact.form.sent),
      (msg) => show(msg),
    );

  const emailPlaceholder =
    locale === 'pt' ? 'voce@empresa.com' : 'you@company.com';

  const cvUrl =
    locale === 'pt'
      ? '/Tamires_Manhaes_CV_2026_pt.pdf'
      : '/Tamires_Manhaes_CV_2026_en.pdf';

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(t.contact.email);
      show(t.contact.copied);
    } catch {
      show(t.contact.copyFail);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="wrap px-7">
        <div className="contact grid grid-cols-1 gap-14 border-t border-dashed border-gold pt-16 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="kicker">{t.contact.kicker}</p>
            <h2
              className="font-serif text-[clamp(36px,4.4vw,56px)] font-medium leading-tight tracking-tight"
              dangerouslySetInnerHTML={{ __html: t.contact.title }}
            />
            <p className="body mt-5 max-w-[420px] text-soft">
              {t.contact.body}
            </p>
            <div className="mail-row mt-7 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${t.contact.email}`}
                className="mail border-b border-gold py-1 font-mono text-[15px] break-all"
              >
                {t.contact.email}
              </a>
              <button
                type="button"
                onClick={copy}
                className="icon-btn font-mono text-sm text-soft"
              >
                {t.contact.copy}
              </button>
            </div>
            <div className="social mt-4 flex flex-wrap gap-x-7 gap-y-2 text-[15px] text-soft">
              <a
                href="https://linkedin.com/in/tamires-manhaes"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 hover:text-foreground"
              >
                {t.contact.social.linkedin}
              </a>
              <a
                href="https://github.com/tamires-manhaes"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 hover:text-foreground"
              >
                {t.contact.social.github}
              </a>
              <a href={cvUrl} download className="py-2 hover:text-foreground">
                {t.cv.btn}
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="cf flex flex-col gap-5 rounded border border-hair bg-raise p-7 lg:p-8"
            aria-labelledby="cf-title"
          >
            <h3 id="cf-title" className="sr-only">
              {t.contact.form.title}
            </h3>
            <div className="two grid grid-cols-1 gap-5 md:grid-cols-2">
              <Field label={t.contact.form.name}>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="field-input"
                />
              </Field>
              <Field label={t.contact.form.email}>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  placeholder={emailPlaceholder}
                  value={formData.email}
                  onChange={handleChange}
                  className="field-input"
                />
              </Field>
            </div>
            <Field label={t.contact.form.topic}>
              <select
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                className="field-input"
              >
                {t.contact.form.topicOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </Field>
            <Field label={t.contact.form.message}>
              <textarea
                name="message"
                rows={5}
                required
                placeholder={t.contact.form.placeholder}
                value={formData.message}
                onChange={handleChange}
                className="field-input min-h-[132px] resize-y"
              />
            </Field>
            <div className="form-foot flex flex-wrap items-center gap-3">
              <button
                type="submit"
                className="btn btn-gold"
                disabled={isLoading}
              >
                {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
                {t.contact.form.send}
              </button>
              {status && (
                <p className="status text-sm text-olive" role="status">
                  {status}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="field flex flex-col gap-2">
      <label className="font-mono text-xs tracking-wide text-faint">
        {label}
      </label>
      {children}
      {error && <p className="text-sm text-terra">{error}</p>}
    </div>
  );
}
