'use client';

import { useState, type FormEvent } from 'react';
import { Button } from './Button';
import { CheckboxField, SelectField, TextArea, TextField } from './Field';
import { Check } from './Icons';
import { serviceTimes } from '@/data/site';

const SERVICE_OPTIONS = [
  'Choose a service',
  ...serviceTimes.map((s) => `${s.name} — ${s.time}`),
  'Not sure yet',
] as const;

const PARTY_SIZES = ['How many are coming?', 'Just me', '2 people', '3 – 4 people', '5 or more'] as const;

type Errors = Partial<Record<'name' | 'email' | 'phone' | 'service' | 'party', string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+()\d\s.-]{7,20}$/;

export function PlanVisitForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [party, setParty] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [bringingKids, setBringingKids] = useState(false);
  const [wantsGreeter, setWantsGreeter] = useState(true);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function validate(): Errors {
    const next: Errors = {};
    if (name.trim().length < 2) next.name = 'Please tell us your full name.';
    if (!EMAIL_RE.test(email.trim())) next.email = 'Please enter a valid email address.';
    if (phone.trim() && !PHONE_RE.test(phone.trim()))
      next.phone = 'Please enter a valid phone number, or leave this blank.';
    if (!service) next.service = 'Which service would you like to join?';
    if (!party) next.party = 'Let us know how many to expect.';
    return next;
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next = validate();
    setErrors(next);

    if (Object.keys(next).length > 0) {
      document.getElementById(Object.keys(next)[0])?.focus();
      return;
    }

    /** BACKEND HOOK — connect to the church's form handler or ChMS. */
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-3xl border border-brand-200 bg-white p-8 text-center shadow-soft sm:p-12">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-700 text-white shadow-glow">
          <Check className="h-6 w-6" />
        </span>
        <h3 className="mt-6 text-2xl font-semibold tracking-[-0.02em] text-ink">
          We cannot wait to meet you.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-[0.97rem] leading-relaxed text-ink-muted">
          Someone from our welcome team will reach out before your visit, and we will have a person
          ready to meet you by name when you arrive.
        </p>
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
        <TextField
          label="Which Sunday?"
          name="date"
          type="date"
          value={date}
          onChange={setDate}
          hint="Not sure yet? Leave this blank."
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <SelectField
          label="Service"
          name="service"
          required
          options={SERVICE_OPTIONS}
          value={service}
          onChange={setService}
          error={errors.service}
        />
        <SelectField
          label="Party Size"
          name="party"
          required
          options={PARTY_SIZES}
          value={party}
          onChange={setParty}
          error={errors.party}
        />
      </div>

      <TextArea
        label="Anything we should know?"
        name="notes"
        rows={4}
        value={notes}
        onChange={setNotes}
        placeholder="Accessibility needs, questions about kids ministry, or anything that would make your first visit easier."
      />

      <div className="grid gap-3.5 sm:grid-cols-2">
        <CheckboxField
          name="bringingKids"
          checked={bringingKids}
          onChange={setBringingKids}
          label="I am bringing children and would like help with check-in."
        />
        <CheckboxField
          name="wantsGreeter"
          checked={wantsGreeter}
          onChange={setWantsGreeter}
          label="I would like someone to meet me at the entrance."
        />
      </div>

      <Button type="submit" variant="accent" size="lg" className="w-full sm:w-auto">
        I am Planning to Visit
      </Button>
    </form>
  );
}
