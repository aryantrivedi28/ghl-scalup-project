export type PlanKey = "starter" | "unlimited" | "agency";
export type BillMode = "monthly" | "annual";
export type AiMode = "auto" | "payg" | "flat";

export interface CalculatorState {
  plan: PlanKey; bill: BillMode; subs: number;
  outMsgs: number; avgSeg: number; inMsgs: number; mms: number; a2p: boolean;
  outMin: number; inMin: number; recMin: number; storedMin: number;
  emails: number; validations: number; numbers: number;
  convMsgs: number; voiceMin: number; reviewsAI: number;
  aiSubs: number; aiMode: AiMode;
  hipaa: boolean; app: boolean; waSubs: number;
  buffer: number; markup: number;
}

export const PLANS = {
  starter:   { name: "Starter",    m: 97,  a: 970,  note: "Up to 3 sub-accounts. For one business." },
  unlimited: { name: "Unlimited",  m: 297, a: 2970, note: "Unlimited sub-accounts, white-label desktop app, basic rebilling." },
  agency:    { name: "Agency Pro", m: 497, a: 4970, note: "SaaS Mode, mobile app, full markup control, AI rebilling." },
} as const;

export const DEFAULT_RATES = {
  sms: 0.0079, smsIn: 0.0079, carrier: 0.0105, mms: 0.02,
  callOut: 0.014, callIn: 0.0085, rec: 0.0025, storage: 0.0000167,
  email: 0.675, valid: 2.5, number: 1.15, a2p: 2,
  conv: 0.02, voice: 0.13, reviews: 0.08,
  flat: 97, hipaa: 297, app: 49, wa: 10,
} as const;

export type RateKey = keyof typeof DEFAULT_RATES;
export type RateMap = Record<RateKey, number>;

export const RATE_DEFS: { k: RateKey; label: string }[] = [
  { k: "sms",     label: "SMS per segment" },
  { k: "smsIn",   label: "Inbound SMS per segment" },
  { k: "carrier", label: "Carrier fee per message" },
  { k: "mms",     label: "MMS per message" },
  { k: "callOut", label: "Outbound call per minute" },
  { k: "callIn",  label: "Inbound call per minute" },
  { k: "rec",     label: "Call recording per minute" },
  { k: "storage", label: "Recording storage per stored minute" },
  { k: "email",   label: "Email per 1,000" },
  { k: "valid",   label: "Email validation per 1,000" },
  { k: "number",  label: "Phone number per month" },
  { k: "a2p",     label: "A2P fee per month" },
  { k: "conv",    label: "Conversation AI per message" },
  { k: "voice",   label: "Voice AI per minute" },
  { k: "reviews", label: "Reviews AI per response" },
  { k: "flat",    label: "AI Employee per sub-account" },
  { k: "hipaa",   label: "HIPAA add-on per month" },
  { k: "app",     label: "White-label app per month" },
  { k: "wa",      label: "WhatsApp per sub-account" },
];

export type FieldDef =
  | { id: string; label: string; unit?: string; hint?: string; step?: number; type?: "number" }
  | { id: string; type: "check"; label: string; hint?: string }
  | { id: string; type: "select"; label: string; options: [string, string][] };

export const GROUPS: { id: string; title: string; blurb: string; fields: FieldDef[] }[] = [
  { id: "texting", title: "Texting", blurb: "A segment is 160 plain characters. One emoji drops it to about 70.", fields: [
    { id: "outMsgs", label: "Texts sent per month", unit: "messages", hint: "Outbound SMS", step: 1 },
    { id: "avgSeg",  label: "Average segments per text", unit: "segments", hint: "1 for short plain texts. Real client averaged 3.8.", step: 0.1 },
    { id: "inMsgs",  label: "Texts received per month", unit: "messages", hint: "Replies from contacts", step: 1 },
    { id: "mms",     label: "Picture messages sent", unit: "MMS", hint: "MMS costs about 2.5x an SMS", step: 1 },
    { id: "a2p",     type: "check", label: "I text US numbers", hint: "Adds the monthly A2P fee. One-time registration is extra." },
  ]},
  { id: "calls", title: "Calls", blurb: "Billed per minute, outbound and inbound at different rates.", fields: [
    { id: "outMin",    label: "Outbound call minutes", unit: "min", step: 1 },
    { id: "inMin",     label: "Inbound call minutes", unit: "min", step: 1 },
    { id: "recMin",    label: "Minutes recorded", unit: "min", hint: "Recording is billed per minute", step: 1 },
    { id: "storedMin", label: "Recording minutes in storage", unit: "min", hint: "Grows until you delete recordings", step: 100 },
  ]},
  { id: "email", title: "Email and phone numbers", blurb: "Cheap per unit, but they add up at volume.", fields: [
    { id: "emails",      label: "Emails sent per month", unit: "emails", step: 100 },
    { id: "validations", label: "Emails verified per month", unit: "checks", hint: "$2.50 per 1,000 checks", step: 100 },
    { id: "numbers",     label: "Phone numbers", unit: "numbers", step: 1 },
  ]},
  { id: "ai", title: "AI", blurb: "Pay per use, or a flat bundle per sub-account. The calculator can pick the cheaper one.", fields: [
    { id: "convMsgs",  label: "Conversation AI messages", unit: "messages", step: 10 },
    { id: "voiceMin",  label: "Voice AI minutes", unit: "min", hint: "Published rates run $0.13 to $0.26 a minute", step: 10 },
    { id: "reviewsAI", label: "Reviews AI responses", unit: "responses", step: 5 },
    { id: "aiSubs",    label: "Sub-accounts using AI", unit: "accounts", hint: "The flat bundle is $97 for each one", step: 1 },
    { id: "aiMode", type: "select", label: "AI pricing", options: [["auto", "Pick the cheaper option"], ["payg", "Pay as you go"], ["flat", "Flat AI Employee bundle"]] },
  ]},
  { id: "addons", title: "Add-ons", blurb: "Extras that never appear on the pricing page.", fields: [
    { id: "hipaa",  type: "check", label: "HIPAA compliance", hint: "$297 a month. Needed for health data." },
    { id: "app",    type: "check", label: "White-label mobile app", hint: "$49 a month. Agency Pro only." },
    { id: "waSubs", label: "Sub-accounts using WhatsApp", unit: "accounts", hint: "$10 a month each, before message charges", step: 1 },
  ]},
  { id: "extra", title: "Safety buffer and rebilling", blurb: "Carrier fees keep rising. Agencies can charge clients a markup on usage.", fields: [
    { id: "buffer", label: "Buffer on usage", unit: "%", hint: "10 to 15% covers carrier fee rises", step: 1 },
    { id: "markup", label: "Markup if you rebill clients", unit: "%", hint: "Leave at 0 if you do not rebill", step: 5 },
  ]},
];

export const PLAN_FIELDS: FieldDef[] = [
  { id: "subs", label: "Sub-accounts you will run", unit: "accounts", hint: "Starter allows 3", step: 1 },
];

export const ZERO: CalculatorState = {
  plan: "starter", bill: "monthly", subs: 1,
  outMsgs: 0, avgSeg: 1, inMsgs: 0, mms: 0, a2p: false,
  outMin: 0, inMin: 0, recMin: 0, storedMin: 0,
  emails: 0, validations: 0, numbers: 0,
  convMsgs: 0, voiceMin: 0, reviewsAI: 0, aiSubs: 0, aiMode: "auto",
  hipaa: false, app: false, waSubs: 0,
  buffer: 10, markup: 0,
};

export const PRESETS = {
  solo: {
    label: "Solo business",
    note: "A single business on Starter with light texting, some calls and a regular email list.",
    v: { plan: "starter", subs: 1, outMsgs: 500, avgSeg: 1, inMsgs: 150, outMin: 500, inMin: 200, emails: 2000, numbers: 1, a2p: true, buffer: 10 },
  },
  agency: {
    label: "Growing agency",
    note: "An agency on Unlimited running 10 client sub-accounts, with some chat AI.",
    v: { plan: "unlimited", subs: 10, outMsgs: 5000, avgSeg: 1, inMsgs: 1500, outMin: 1500, inMin: 500, emails: 20000, validations: 2000, numbers: 5, a2p: true, convMsgs: 500, aiSubs: 2, buffer: 10, markup: 25 },
  },
  heavy: {
    label: "Heavy texting",
    note: "A texting-heavy agency with long messages, calls and Voice AI. This is where bills jump.",
    v: { plan: "unlimited", subs: 5, outMsgs: 30000, avgSeg: 2, inMsgs: 6000, mms: 300, outMin: 3000, inMin: 1000, recMin: 2000, storedMin: 20000, emails: 40000, validations: 5000, numbers: 5, a2p: true, convMsgs: 3000, voiceMin: 1500, reviewsAI: 100, aiSubs: 3, buffer: 15, markup: 20 },
  },
  real: {
    label: "Real client, Sep 2026",
    note: "A US real-estate client sub-account, September 2026. Real usage was $221.48. Published rates land close to that, not exactly, and Voice AI minutes are an estimate.",
    v: { plan: "starter", subs: 1, outMsgs: 3391, avgSeg: 3.76, inMsgs: 643, mms: 45, outMin: 1508, inMin: 163, recMin: 1166, storedMin: 168609, emails: 2453, validations: 720, numbers: 1, a2p: true, convMsgs: 197, voiceMin: 358, aiSubs: 1, aiMode: "payg", buffer: 0 },
  },
} as const;

export type PresetKey = keyof typeof PRESETS;