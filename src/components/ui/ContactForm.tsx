import { useState, useEffect, useRef } from 'react'
import { Button } from './Button'

// Set VITE_TURNSTILE_SITE_KEY in your .env file.
// Use '1x00000000000000000000AA' for local testing (always passes).
const SITEKEY = import.meta.env.VITE_TURNSTILE_SITE_KEY ?? '1x00000000000000000000AA'

interface Fields {
  name: string
  company: string
  tel: string
  email: string
  message: string
}

const EMPTY: Fields = { name: '', company: '', tel: '', email: '', message: '' }

type Status = 'idle' | 'submitting' | 'success' | 'error'

// Shared input/textarea style — used on the olive CTA background
const field: React.CSSProperties = {
  width: '100%',
  padding: '10px 14px',
  fontFamily: 'var(--font-ui)',
  fontSize: 14,
  lineHeight: 1.5,
  background: '#fff',
  border: '1.5px solid transparent',
  color: 'var(--apd-ink)',
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 150ms ease-out',
}

const label: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-ui)',
  fontSize: 11.5,
  fontWeight: 700,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.75)',
  marginBottom: 6,
}

function Field({ id, lbl, type = 'text', required = true, value, onChange, placeholder }: {
  id: keyof Fields; lbl: string; type?: string; required?: boolean
  value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; placeholder?: string
}) {
  return (
    <div>
      <label htmlFor={id} style={label}>{lbl}{required && <span aria-hidden="true" style={{ color: 'rgba(255,255,255,0.5)', marginLeft: 3 }}>*</span>}</label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={field}
        onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = 'var(--apd-steel-blue)' }}
        onBlur={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = 'transparent' }}
      />
    </div>
  )
}

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(EMPTY)
  const [status, setStatus] = useState<Status>('idle')
  const [turnstileToken, setTurnstileToken] = useState('')
  const widgetContainerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)

  // Load Turnstile script (explicit mode) once
  useEffect(() => {
    const SCRIPT_ID = 'cf-turnstile-script'
    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement('script')
      script.id = SCRIPT_ID
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
      script.async = true
      script.defer = true
      document.head.appendChild(script)
    }
  }, [])

  // Render Turnstile widget once the script is ready
  useEffect(() => {
    const render = () => {
      if (!widgetContainerRef.current || widgetIdRef.current != null) return
      const ts = (window as unknown as Record<string, unknown>).turnstile as {
        render: (el: HTMLElement, opts: Record<string, unknown>) => string
      } | undefined
      if (!ts) return
      widgetIdRef.current = ts.render(widgetContainerRef.current, {
        sitekey: SITEKEY,
        theme: 'light',
        callback: (token: string) => setTurnstileToken(token),
        'expired-callback': () => setTurnstileToken(''),
        'error-callback': () => setTurnstileToken(''),
      })
    }

    if ((window as unknown as Record<string, unknown>).turnstile) {
      render()
    } else {
      const script = document.getElementById('cf-turnstile-script')
      script?.addEventListener('load', render)
      return () => script?.removeEventListener('load', render)
    }
  }, [])

  const set = (f: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields(prev => ({ ...prev, [f]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!turnstileToken || status === 'submitting') return
    setStatus('submitting')
    try {
      const body = new URLSearchParams({
        'form-name': 'contact',
        ...fields,
        'cf-turnstile-response': turnstileToken,
      })
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div style={{ padding: '40px 32px', background: 'rgba(255,255,255,0.1)', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, color: '#fff', marginBottom: 10 }}>
          Message received.
        </div>
        <p style={{ fontFamily: 'var(--font-prose)', fontSize: 16, color: 'rgba(255,255,255,0.85)', margin: 0 }}>
          We'll be in touch within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      noValidate
    >
      {/* Netlify required hidden fields */}
      <input type="hidden" name="form-name" value="contact" />
      <p hidden aria-hidden="true"><label>Don't fill this out: <input name="bot-field" /></label></p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 16px' }}>
        <Field id="name"    lbl="Name"    value={fields.name}    onChange={set('name')}    placeholder="Jane Smith" />
        <Field id="company" lbl="Company" value={fields.company} onChange={set('company')} placeholder="Acme Corp" required={false} />
        <Field id="email"   lbl="Email"   type="email" value={fields.email} onChange={set('email')} placeholder="jane@acme.com" />
        <Field id="tel"     lbl="Phone"   type="tel"   value={fields.tel}   onChange={set('tel')}   placeholder="(602) 555-0100" required={false} />

        {/* Message — full width */}
        <div style={{ gridColumn: '1 / -1' }}>
          <label htmlFor="message" style={label}>
            Message<span aria-hidden="true" style={{ color: 'rgba(255,255,255,0.5)', marginLeft: 3 }}>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={fields.message}
            onChange={set('message')}
            placeholder="Tell us about the product, approximate quantity, and timeline…"
            style={{ ...field, resize: 'vertical', minHeight: 100 }}
            onFocus={(e) => { (e.currentTarget as HTMLTextAreaElement).style.borderColor = 'var(--apd-steel-blue)' }}
            onBlur={(e) => { (e.currentTarget as HTMLTextAreaElement).style.borderColor = 'transparent' }}
          />
        </div>

        {/* Turnstile + submit row */}
        <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <div ref={widgetContainerRef} />
          <Button
            type="submit"
            variant="accent"
            size="sm"
            disabled={!turnstileToken || status === 'submitting'}
          >
            {status === 'submitting' ? 'Sending…' : 'Send message'}
          </Button>
        </div>

        {status === 'error' && (
          <p style={{ gridColumn: '1 / -1', margin: 0, fontFamily: 'var(--font-ui)', fontSize: 13, color: '#fca5a5' }}>
            Something went wrong — please try again or email us directly.
          </p>
        )}
      </div>
    </form>
  )
}
