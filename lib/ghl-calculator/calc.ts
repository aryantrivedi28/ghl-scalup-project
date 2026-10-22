import { PLANS } from "./data";
import type { CalculatorState, RateMap } from "./data";

export interface CostBreakdown {
  planName: string;
  planCost: number;
  segs: number;
  smsBase: number;
  carrier: number;
  texting: number;
  calls: number;
  storage: number;
  email: number;
  fees: number;
  payg: number;
  flat: number;
  ai: number;
  aiLabel: string;
  usage: number;
  buffer: number;
  addons: number;
  total: number;
}

export function calc(S: CalculatorState, R: RateMap): CostBreakdown {
  const p = PLANS[S.plan];
  const planCost = S.bill === "annual" ? p.a / 12 : p.m;

  const segs = S.outMsgs * S.avgSeg;
  const smsBase = segs * R.sms;
  const carrier = S.outMsgs * R.carrier;
  const texting = smsBase + carrier + S.inMsgs * R.smsIn + S.mms * R.mms;

  const storage = S.storedMin * R.storage;
  const calls = S.outMin * R.callOut + S.inMin * R.callIn + S.recMin * R.rec + storage;

  const email = (S.emails / 1000) * R.email + (S.validations / 1000) * R.valid;
  const fees = S.numbers * R.number + (S.a2p ? R.a2p : 0);

  const payg = S.convMsgs * R.conv + S.voiceMin * R.voice + S.reviewsAI * R.reviews;
  const flat = S.aiSubs * R.flat;
  let ai = payg;
  let aiLabel = "AI (pay as you go)";
  if (S.aiMode === "flat" || (S.aiMode === "auto" && S.aiSubs > 0 && payg > flat)) {
    ai = flat;
    aiLabel = "AI (flat bundle)";
  }

  const usage = texting + calls + email + fees + ai;
  const buffer = usage * (S.buffer / 100);
  const addons = (S.hipaa ? R.hipaa : 0) + (S.app ? R.app : 0) + S.waSubs * R.wa;
  const total = planCost + usage + buffer + addons;

  return {
    planName: p.name, planCost, segs, smsBase, carrier, texting, calls, storage,
    email, fees, payg, flat, ai, aiLabel, usage, buffer, addons, total,
  };
}

export const money = (x: number) =>
  "$" + x.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });