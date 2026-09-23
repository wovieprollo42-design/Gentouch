'use client';

import { useState, type FormEvent } from 'react';
import { Button } from './Button';
import { CheckboxField, SelectField, TextArea, TextField } from './Field';
import { Check } from './Icons';

const TOPICS = [
  'Select an option',
  'I have a question',
  'I would like prayer',
  'I want to get connected',
  'I am planning a visit',
  'Kids or youth ministry',
  'Giving or finance',
  'Something else',
] as const;

type Errors = Partial<Record<'name' | 'email' | 'phone' | 'topic' | 'message', string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+()\d\s.-]{7,20}$/;

export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');
  const [wantsContact, setWantsContact] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function validate(): Errors {
    const next: Errors = {};

    if (name.trim().length < 2) next.name = 'Please tell us your full name.';
    if (!EMAIL_RE.test(email.trim())) next.email = 'Please enter a valid email address.';
    if (phone.trim() && !PHONE_RE.test(phone.trim()))
      next.phone = 'Please enter a valid phone number, or leave this blank.';
    if (!topic) next.topic = 'Let us know how we can help.';
    if (message.trim().length < 10)
      next.message = 'Please share a little more so we can respond well.';

    return next;
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next = validate();
    setErrors(next);

    if (Object.keys(next).length > 0) {
      const firstKey = Object.keys(next)[0];
      document.getElementById(firstKey)?.focus();
      return;
    }

    /**
     * BACKEND HOOK — no submission endpoint has been provided yet.
     * Point this at the church's form handler (Formspree, Resend, a Next.js
     * route handler, or the ChMS of choice) and keep the success state below.
     */
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-3xl border border-brand-200 bg-brand-50/60 p-8 text-center sm:p-12">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-700 text-white shadow-glow">
          <Check className="h-6 w-6" />
        </span>
        <h3 className="mt-6 text-2xl font-semibold tracking-[-0.02em] text-ink">
          Thank you for reaching out.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-[0.97rem] leading-relaxed text-ink-muted">
          We have received your message and someone from our team will be in touch. If you asked for
          prayer, our prayer team is already praying for you.
        </p>
        <Button
          variant="outline"
          size="sm"
          className="mt-7"
          onClick={() => {
            setSent(false);
            setName('');
            setEmail('');
            setPhone('');
            setTopic('');
            setMessage('');
            setWantsContact(false);
          }}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          label="Full Name"
          name="name"
          required
          value={name}
          onChange={setName}
          error={errors.name}
          autoComplete="name"
          placeholder="Your name"
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          required
          value={email}
          onChange={setEmail}
          error={errors.email}
          autoComplete="email"
          placeholder="you@example.com"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          label="Phone"
          name="phone"
          type="tel"
          value={phone}
          onChange={setPhone}
          error={errors.phone}
          autoComplete="tel"
          placeholder="Optional"
        />
        <SelectField
          label="How can we help?"
          name="topic"
          required
          options={TOPICS}
          value={topic}
          onChange={setTopic}
          error={errors.topic}
        />
      </div>

      <TextArea
        label="Prayer Request / Message"
        name="message"
        required
        rows={6}
        value={message}
        onChange={setMessage}
        error={errors.message}
        placeholder="Share as much or as little as you would like. Prayer requests are handled confidentially by our prayer team."
      />

      <CheckboxField
        name="wantsContact"
        checked={wantsContact}
        onChange={setWantsContact}
        label="I would like someone from the church to contact me."
      />

      <Button type="submit" variant="accent" size="lg" className="w-full sm:w-auto">
        Send Message
      </Button>
    </form>
  );
}
