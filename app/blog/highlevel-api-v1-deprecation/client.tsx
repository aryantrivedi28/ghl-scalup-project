'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  ArrowRight,
  ChevronDown,
  Copy,
  Linkedin,
  Twitter,
  BookOpen,
  Zap,
  Rocket,
  Image as ImageIcon,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';
import BookingModal from '@/components/BookingModal';
import { Button } from '../../../components/ui/button';

export default function HighLevelAPIV1DeprecationClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [openBooking, setOpenBooking] = useState(false);

  const handleOpenBooking = () => {
    setOpenBooking(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'two-sources-two-levels',
        'deprecation-end-of-support-shutdown',
        'what-api-v1-means',
        'terms-kept-apart',
        'pit-four-lines',
        'who-is-affected',
        'hard-part-finding',
        'how-to-find-out',
        'what-could-stop-working',
        'is-this-just-replacing-key',
        'what-replaces-api-v1',
        'safe-migration-sequence',
        'testing-replacement',
        'when-migrated-integration-misbehaves',
        'ten-migration-mistakes',
        'separate-deprecation-webhook-signatures',
        'can-you-migrate-yourself',
        'what-to-gather',
        'why-waiting-makes-harder',
        'how-integration-audit-works',
        'the-question-to-answer',
        'faq'
      ];

      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveId(id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      q: "What is HighLevel API v1?",
      a: "The older HighLevel API, authenticated with a legacy API key that gives broad access to an agency's or sub-account's data. HighLevel's materials also call it API 1.0."
    },
    {
      q: "Is HighLevel API v1 deprecated?",
      a: "Yes. HighLevel's documentation says it reached end-of-support on December 31, 2025. Existing integrations may continue to work but receive no updates or support, and new legacy API keys can't be created."
    },
    {
      q: "When is HighLevel API v1 shutting down?",
      a: "HighLevel's account notification says November 30, 2026, with v1 endpoints unavailable from December 1, 2026. HighLevel's public documentation reviewed for this guide does not state a shutdown date, so treat the notification as the source if you received it."
    },
    {
      q: "What happens when API v1 is shut down?",
      a: "Integrations still making v1 requests may fail. What that looks like depends on the integration: leads that stop arriving, data that stops syncing, errors in scripts or dashboards that stop updating."
    },
    {
      q: "How do I know if I use HighLevel API v1?",
      a: "Look for legacy API keys in agency and sub-account settings, list every tool that connects to HighLevel, and check each connection type. Make labels its API-key connections deprecated, n8n's API-key credential is for v1, and a Zap may use a legacy key connection. The help pages reviewed here don't describe a usage report."
    },
    {
      q: "Are HighLevel API keys deprecated?",
      a: "Legacy API keys belong to API v1, which is end-of-support. New legacy keys can't be created, and keys unused for 90 days may be marked Expired. HighLevel recommends Private Integration Tokens for new credentials."
    },
    {
      q: "What replaces HighLevel API v1?",
      a: "It depends on the integration. HighLevel points internal tools and automations to Private Integration Tokens and public or Marketplace apps to OAuth 2.0. Built-in connectors in tools like Zapier, Make and n8n have their own current connection types."
    },
    {
      q: "Do Zapier, Make or n8n connections need to be migrated?",
      a: "Only if the specific connection uses the legacy API key. Check each tool's connection or credential type rather than assuming either way."
    },
    {
      q: "Is the migration only an API key change?",
      a: "Not necessarily. HighLevel's migration guide says not to assume it is only an authentication change, because requests and responses can differ. Scopes, headers, endpoints, field mapping and error handling may all change."
    },
    {
      q: "Can I migrate a HighLevel API integration myself?",
      a: "Possibly, if it is one simple integration you fully understand. Unknown dependencies, custom code, multiple integrations, client-facing systems and business-critical lead routing are better audited by someone technical first."
    },
    {
      q: "Who can migrate a HighLevel API integration?",
      a: "A developer or HighLevel integration specialist. HighLevel Support says it doesn't provide setup code auditing or developer consulting, though it accepts bug reports and runs a developer community."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'two-sources-two-levels', title: 'Two Sources, Two Levels of Urgency' },
    { id: 'deprecation-end-of-support-shutdown', title: 'Deprecation, End-of-Support and Shutdown Are Three Different Events' },
    { id: 'what-api-v1-means', title: 'What "API v1" Means in Plain English' },
    { id: 'terms-kept-apart', title: 'The Terms HighLevel Uses, Kept Apart' },
    { id: 'pit-four-lines', title: 'Private Integration Token in Four Lines' },
    { id: 'who-is-affected', title: 'Who Is Actually Affected: Not Every HighLevel User' },
    { id: 'hard-part-finding', title: 'The Hard Part Is Finding What Still Depends on the Old API' },
    { id: 'how-to-find-out', title: 'How to Find Out Whether Your Setup Still Uses API v1' },
    { id: 'what-could-stop-working', title: 'What Could Stop Working, and What Probably Won\'t' },
    { id: 'is-this-just-replacing-key', title: 'Is This Just Replacing the API Key? Usually Not' },
    { id: 'what-replaces-api-v1', title: 'What Replaces API v1' },
    { id: 'safe-migration-sequence', title: 'A Safe Migration Sequence' },
    { id: 'testing-replacement', title: 'Testing the Replacement' },
    { id: 'when-migrated-integration-misbehaves', title: 'When a Migrated Integration Misbehaves' },
    { id: 'ten-migration-mistakes', title: 'Ten Migration Mistakes That Cause Outages' },
    { id: 'separate-deprecation-webhook-signatures', title: 'A Separate Deprecation: Webhook Signatures' },
    { id: 'can-you-migrate-yourself', title: 'Can You Migrate This Yourself?' },
    { id: 'what-to-gather', title: 'What to Gather Before You Ask Anyone for Help' },
    { id: 'why-waiting-makes-harder', title: 'Why Waiting Makes This Harder' },
    { id: 'how-integration-audit-works', title: 'How an Integration Audit Works' },
    { id: 'the-question-to-answer', title: 'The Question to Answer This Week' },
    { id: 'faq', title: 'Frequently Asked Questions' }
  ];

  const sourceData = [
    { source: 'HighLevel\'s account notification', whatItSays: 'API v1 was deprecated on December 31, 2025, and will be shut down on November 30, 2026. From December 1, 2026, v1 endpoints are unavailable and integrations still making v1 requests may fail.', whatItMeans: 'If you received it, this is your working deadline.' },
    { source: 'HighLevel\'s API documentation and migration guide', whatItSays: 'V1 reached end-of-support on December 31, 2025. Existing connections may continue to work, with no support or updates. The documentation reviewed for this guide does not state a shutdown date.', whatItMeans: '"May continue to work" describes support status. It is not a promise.' },
    { source: 'HighLevel\'s June 26, 2026 post', whatItSays: 'No immediate shutoff; active V1 integrations continue to function for now; new V1 keys are disabled; plan the migration rather than wait for an outage.', whatItMeans: '"For now" is the operative phrase.' },
  ];

  const timelineData = [
    { date: 'December 31, 2025', whatHappened: 'End-of-support. No fixes, security patches, new features or troubleshooting for v1. Existing integrations may keep working.', source: 'Public documentation' },
    { date: '2026 (undated in documentation)', whatHappened: 'New legacy key creation removed. Legacy keys inactive for 90 days are marked Expired.', source: 'Public documentation' },
    { date: 'November 30, 2026', whatHappened: 'Shutdown date.', source: 'Account notification' },
    { date: 'December 1, 2026', whatHappened: 'v1 endpoints unavailable; integrations still making v1 requests may fail.', source: 'Account notification' },
  ];

  const termsData = [
    { term: 'API v1 (legacy API)', whatItIs: 'The older interface, authenticated with an API key', whyItMatters: 'The thing being retired' },
    { term: 'Legacy API key', whatItIs: 'A broad-access credential created at agency or sub-account level', whyItMatters: 'New ones can\'t be created; inactive ones expire' },
    { term: 'Current API (called "v2" in HighLevel\'s material)', whatItIs: 'The scoped interface for contacts, opportunities, workflows and more', whyItMatters: 'Where migrated integrations land' },
    { term: 'Version header', whatItIs: 'A per-request header that selects a version of the current API. Date-based (such as 2021-07-28) or named (v3 onward)', whyItMatters: 'Not the same as "API v1". The shutdown concerns the legacy key interface, not which date-based version a current integration sends' },
    { term: 'Private Integration Token (PIT)', whatItIs: 'A fixed token you create in settings with chosen scopes', whyItMatters: 'HighLevel\'s recommended replacement for internal tools' },
    { term: 'OAuth 2.0', whatItIs: 'An authorization flow for apps that other accounts install; tokens expire daily and refresh', whyItMatters: 'The path for public or Marketplace apps' },
    { term: 'Marketplace (public) app', whatItIs: 'An app other HighLevel accounts install', whyItMatters: 'Needs OAuth, not a PIT' },
    { term: 'Webhook', whatItIs: 'HighLevel sending event data to a URL you control', whyItMatters: 'A different mechanism from API calls into HighLevel' },
  ];

  const whoIsAffectedData = [
    { whereItMayHide: 'Zapier', whyItMayUseV1: 'A connection made with a pasted API key rather than a current sign-in. HighLevel\'s guide says to use the latest actions and versions of Zapier\'s HighLevel app.', howToCheck: 'Open each Zap\'s HighLevel step and check the connected account and app version' },
    { whereItMayHide: 'Make', whyItMayUseV1: 'Make labels its API-key connection types (Company and Agency) as deprecated and recommends its OAuth 2.0 connection types', howToCheck: 'Check the connection type on each HighLevel module' },
    { whereItMayHide: 'n8n', whyItMayUseV1: 'n8n\'s own documentation says its API-key credential is for API v1 and its OAuth2 credential is for API v2', howToCheck: 'Check which credential each HighLevel node uses' },
    { whereItMayHide: 'Custom forms and scripts', whyItMayUseV1: 'A key pasted into code years ago', howToCheck: 'Search code, environment settings and server logs for the legacy host and key use' },
    { whereItMayHide: 'Server-side apps, middleware, client portals', whyItMayUseV1: 'Built before Private Integrations existed', howToCheck: 'Ask whoever maintains them' },
    { whereItMayHide: 'External CRMs and lead-routing tools', whyItMayUseV1: 'Sync built on a key', howToCheck: 'Check the integration settings on the other side' },
    { whereItMayHide: 'Reporting dashboards', whyItMayUseV1: 'Scheduled pulls that run on a timer', howToCheck: 'Check the data source\'s credentials' },
    { whereItMayHide: 'Agency-built systems for clients', whyItMayUseV1: 'Reused patterns across sub-accounts', howToCheck: 'Check each sub-account and each client project' },
  ];

  const flowData = [
    { flow: 'A', direction: 'External app or form → integration → HighLevel API → contact or opportunity', whereLegacyDependencyMaySit: 'The credential the integration uses to write into HighLevel' },
    { flow: 'B', direction: 'HighLevel → API read → external system or dashboard', whereLegacyDependencyMaySit: 'The credential the external system uses to pull data out' },
    { flow: 'C', direction: 'HighLevel workflow → webhook or automation → external application', whereLegacyDependencyMaySit: 'Usually not an API v1 call itself, but the receiving system may call back using a legacy key' },
  ];

  const whatCouldStopData = [
    { flowAffected: 'Web form or ad lead → HighLevel', whatMayHappen: 'Leads stop arriving as contacts', howYoudNotice: 'A quiet inbox and a drop in new contacts' },
    { flowAffected: 'HighLevel → external CRM or tool', whatMayHappen: 'Data stops syncing outward', howYoudNotice: 'Two systems drifting apart' },
    { flowAffected: 'Custom script or application', whatMayHappen: 'Requests return errors', howYoudNotice: 'Error logs, if anyone reads them' },
    { flowAffected: 'Reporting dashboard', whatMayHappen: 'Numbers stop updating', howYoudNotice: 'Stale figures that look plausible' },
    { flowAffected: 'Workflows that depend on the incoming data', whatMayHappen: 'They never start because the contact never arrives', howYoudNotice: 'Follow-up that silently doesn\'t happen' },
    { flowAffected: 'A seasonal or quarterly integration', whatMayHappen: 'Its key may already be marked Expired after 90 days of inactivity', howYoudNotice: 'A failure that looks unrelated to the shutdown' },
  ];

  const whatChangesData = [
    { whatMayChange: 'Credential', legacyV1: 'API key', currentAPI: 'Private Integration Token or OAuth 2.0 token' },
    { whatMayChange: 'Where it\'s sent', legacyV1: 'Authorization header with the key (commonly documented by integration platforms)', currentAPI: 'Authorization header (HighLevel\'s migration guide shows the Bearer format)' },
    { whatMayChange: 'Host', legacyV1: 'A v1 host, commonly documented as rest.gohighlevel.com/v1', currentAPI: 'services.leadconnectorhq.com' },
    { whatMayChange: 'Version', legacyV1: 'None', currentAPI: 'A Version header on each request' },
    { whatMayChange: 'Permissions', legacyV1: 'Everything in the account', currentAPI: 'Only the scopes you select' },
    { whatMayChange: 'Request shape', legacyV1: 'As the v1 endpoint defines it', currentAPI: 'As the current endpoint defines it; HighLevel\'s own create-contact example sends locationId in the body' },
    { whatMayChange: 'Response handling', legacyV1: 'v1 response format', currentAPI: 'Current response format; code or tool mappings may need changing' },
    { whatMayChange: 'Field mapping and context', legacyV1: 'Account or location implied by the key', currentAPI: 'Location or agency context may need to be explicit' },
    { whatMayChange: 'Errors and limits', legacyV1: 'Older behaviour', currentAPI: 'Current behaviour and documented rate limits; confirm they suit your volume' },
    { whatMayChange: 'Webhooks', legacyV1: 'Separate concern', currentAPI: 'Check signature verification' },
  ];

  const replacementData = [
    { situation: 'An internal tool or automation connecting your own account (custom script, n8n or Make calling the API)', likelyPath: 'Private Integration Token', why: 'Scoped, created in settings, HighLevel\'s recommended path for internal tools', watchFor: 'Token is shown once. Create one per tool. Rotation is recommended every 90 days with a 7-day overlap. Up to 20 per agency and per location' },
    { situation: 'An app other accounts install', likelyPath: 'OAuth 2.0', why: 'PITs are for internal use only; OAuth supports multi-account installs', watchFor: 'Access tokens expire daily and need refreshing' },
    { situation: 'Zapier or Make built-in connector', likelyPath: 'The tool\'s current connection method', why: 'The connector handles authentication its own way', watchFor: 'Use the tool\'s latest HighLevel app version and its OAuth-style connection; check its current documentation' },
    { situation: 'An agency running many client sub-accounts from one tool', likelyPath: 'An architecture decision: agency-level PIT, per-sub-account PITs or an OAuth app', why: 'Each fits a different access pattern', watchFor: 'Don\'t default to one broad token. Least privilege is the point' },
    { situation: 'A flow that doesn\'t need an external tool at all', likelyPath: 'Rebuild natively with workflows or webhooks', why: 'The migration is a chance to delete an integration', watchFor: 'Confirm the native feature actually covers every step' },
  ];

  const testingData = [
    { layer: 'Authentication', question: 'Can the new credential authenticate?', passProves: 'The token is valid', doesntProve: 'That it can do anything useful' },
    { layer: 'Authorization', question: 'Does it have the right scopes?', passProves: 'The permitted actions', doesntProve: 'That every needed action is permitted' },
    { layer: 'Endpoint', question: 'Is the right current endpoint used?', passProves: 'The call reaches something', doesntProve: 'That it\'s the right one' },
    { layer: 'Request', question: 'Are parameters and fields correct?', passProves: 'The shape is accepted', doesntProve: 'That values are right' },
    { layer: 'Response', question: 'Does the tool read the new response correctly?', passProves: 'Parsing works', doesntProve: 'That every field maps' },
    { layer: 'Business process', question: 'Does the intended action happen?', passProves: 'A contact or record appears', doesntProve: 'That it appears in the right place' },
    { layer: 'Downstream', question: 'Did the next system receive it?', passProves: 'The chain started', doesntProve: 'That it finished' },
    { layer: 'Error handling', question: 'What happens when the API returns an error?', passProves: 'The failure path exists', doesntProve: 'That anyone notices' },
    { layer: 'Duplicates', question: 'Could one record be processed twice?', passProves: 'No repeat in the test', doesntProve: 'No repeat in production' },
    { layer: 'Production behaviour', question: 'Does it hold under realistic volume and edge cases?', passProves: 'Normal cases work', doesntProve: 'Rare ones. Test blank fields and repeat submissions' },
  ];

  const troubleshootingData = [
    { problem: 'It authenticates but doesn\'t create the expected record', likelyCause: 'A missing scope, wrong endpoint, wrong location ID, changed request format or field mapping', whatToCheck: 'The scopes on the token, the endpoint and request body against HighLevel\'s current documentation, and the location ID', correctiveAction: 'Correct the scope or request; test with a single record' },
    { problem: 'It works for one sub-account but not another', likelyCause: 'A token created at sub-account level used against a different sub-account, or location context missing', whatToCheck: 'Where the token was created and which location each request names', correctiveAction: 'Create the right token level, or make the location explicit' },
    { problem: 'Records are processed twice after cutover', likelyCause: 'Old and new automations both live on the same trigger', whatToCheck: 'Which automations are active for that trigger', correctiveAction: 'Pause the old one; confirm no duplicate Zap or scenario remains' },
    { problem: 'Everything worked, then stopped later', likelyCause: 'A rotated or expired token, or a copied token never updated', whatToCheck: 'Token rotation dates and which tool holds which token', correctiveAction: 'Update the tool with the new token; use the rotation overlap' },
    { problem: 'Webhooks arrive but are rejected', likelyCause: 'Signature verification still expects the old header', whatToCheck: 'Which signature header the receiver verifies', correctiveAction: 'Verify the current header' },
    { problem: 'A downstream workflow doesn\'t start', likelyCause: 'The upstream contact never arrived or arrived without expected fields', whatToCheck: 'The contact record and the workflow\'s trigger', correctiveAction: 'Fix the upstream record first' },
  ];

  const mistakesData = [
    'Deleting the old key before the replacement works.',
    'Editing the live automation without a copy. Duplicate it, then change the duplicate.',
    'Assuming it\'s a credential swap. Requests, responses and scopes may differ.',
    'Granting the new token too much. Copying broad v1 access into a PIT defeats the purpose.',
    'Testing only that authentication succeeds.',
    'Testing one record and calling it done.',
    'Ignoring downstream systems. A contact created correctly can still fail to trigger what comes next.',
    'Migrating one integration and missing another. An inventory is the defence.',
    'Not documenting the result. The next person will face the same mystery you did.',
    'Discovering late that the developer is gone. Find out now who built each integration.',
  ];

  const specialistData = [
    { situation: 'One simple internal integration you understand', selfMigration: 'Possibly', specialistWorth: 'Optional' },
    { situation: 'One known Zapier or Make connection', selfMigration: 'Possibly', specialistWorth: 'Optional' },
    { situation: 'An unknown legacy dependency', selfMigration: 'Risky', specialistWorth: 'Yes. Discovery is the hard part' },
    { situation: 'Custom code', selfMigration: 'Usually needs technical review', specialistWorth: 'Yes' },
    { situation: 'Multiple integrations', selfMigration: 'Risky', specialistWorth: 'Yes' },
    { situation: 'A client-facing production system', selfMigration: 'Risky', specialistWorth: 'Yes' },
    { situation: 'Multiple sub-accounts', selfMigration: 'Risky', specialistWorth: 'Yes' },
    { situation: 'The original developer is unknown or unreachable', selfMigration: 'Risky', specialistWorth: 'Yes' },
    { situation: 'Business-critical lead routing', selfMigration: 'Risky', specialistWorth: 'Yes' },
    { situation: 'A custom API application', selfMigration: 'A technical migration', specialistWorth: 'Yes' },
    { situation: 'Several legacy API keys', selfMigration: 'An audit is advisable', specialistWorth: 'Yes' },
  ];

  const whatToGatherData = [
    'The HighLevel notice email, in full.',
    'The affected account and sub-accounts.',
    'Each integration\'s name, what it does and the external tool involved.',
    'Which credential each one uses, described without exposing the secret.',
    'Screenshots of settings, scenarios and Zaps with secrets hidden.',
    'How it behaves today and what correct behaviour looks like.',
    'Known errors, and when they started.',
    'Any developer documentation or code repository.',
    'Webhook URLs and what receives them.',
    'Which workflows are business-critical.',
    'Who originally built each integration, and whether they\'re reachable.',
  ];

  const ProjectHelpCard = () => (
    <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
      <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
      <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get quick guidance for your migration.</p>
      <Link
        // onClick={handleOpenBooking}
        href="/book-a-call"
        className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
        Book a 30 min Free Call
        <ArrowRight className="w-3 h-3" />
      </Link>
    </div>
  );

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-[#0E9BF0] z-50 transition-all duration-100" id="progress-bar" />

      {/* Breadcrumb */}
      <nav className="bg-[#F8F9FB] border-b border-[#DDE1E9] py-3 px-4 md:px-6">
        <div className="max-w-[1080px] mx-auto flex items-center gap-2 text-xs md:text-sm text-[#5C6880] overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-[#0E9BF0] transition-colors">Home</Link>
          <ArrowRight className="w-3 h-3 text-[#96A0B5]" />
          <Link href="/blog" className="hover:text-[#0E9BF0] transition-colors">Blog</Link>
          <ArrowRight className="w-3 h-3 text-[#96A0B5]" />
          <span className="text-[#1A2236] font-medium">HighLevel API v1 Deprecation: What to Check and How to Migrate</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">API</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Deprecation</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Migration</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            HighLevel API v1 Deprecation:<br />
            <span className="text-[#F8D000]">What It Means, What Could Break and How to Migrate</span>
          </h1>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-7 h-7 overflow-hidden bg-white flex items-center justify-center">
              <img
                src="/web-app-manifest-192x192.png"
                alt="GHL Scale Up"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-medium text-white">GHL Scale Up Team</div>
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ Builds Delivered · Verified against HighLevel documentation as of October 2026</div>
            </div>
          </div>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            The email is short and the subject line is blunt: <strong className="text-white">[Action Required] API v1 Deprecation</strong>. It tells you HighLevel has seen your account using the legacy API. What a warning like that rarely makes obvious is what, in your business, is making those calls.
          </p>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            That is the real problem, and it isn't the API. A lead form wired up by a contractor years ago, a Zap nobody has opened since, a script on a client's server, a dashboard that pulls numbers every night: any of them can sit behind a legacy credential, and the only thing anyone has ever seen is that leads show up in the CRM.
          </p>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              <strong className="text-white">What is happening to HighLevel API v1?</strong> HighLevel's public documentation says API v1 reached end-of-support on December 31, 2025. Existing v1 integrations may keep working, but they get no updates or support, and new legacy API keys can no longer be created. HighLevel's account notification goes further: it says v1 will be shut down on November 30, 2026, and that integrations still making v1 requests may fail from December 1, 2026. <strong className="text-white">Who is affected?</strong> Not every HighLevel user. The change matters if an integration, app, script or external tool in your environment still depends on the legacy API, usually through a legacy API key.
            </p>
          </div>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            This guide explains what that means in plain language, how to find the dependency, what could stop working, what replaces the old connection, how to migrate without breaking a live system, and the point at which it makes sense to ask someone technical to look. It assumes you may be a business owner with no idea what an API call is, and it keeps enough detail that a developer won't find it thin.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get Migration Help
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#how-to-find-out"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              Find Your Dependencies
              <ChevronDown className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* MAIN LAYOUT - Sidebar on LEFT, Content on RIGHT */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-10 md:py-10">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 md:gap-12 items-start">

          {/* ==================== LEFT COLUMN: SIDEBAR ==================== */}
          <aside className="hidden lg:block lg:sticky lg:top-20 h-fit transition-all duration-300 ease-out order-1">
            <div className="hidden lg:block mb-6">
              <ProjectHelpCard />
            </div>

            <nav className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-xs font-bold tracking-wider uppercase text-[#5C6880] mb-4 flex items-center gap-2">
                <BookOpen className="w-3 h-3" />
                In This Guide
              </div>
              <ul className="space-y-0.5 max-h-[calc(100vh-200px)] overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-[#DDE1E9] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent hover:[&::-webkit-scrollbar-thumb]:bg-[#96A0B5]">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToHeading(item.id)}
                      className={`block w-full text-left text-xs md:text-sm py-2 px-3 rounded transition-all duration-200 ${activeId === item.id
                        ? 'bg-[#0E9BF0] text-white font-medium shadow-sm'
                        : 'text-[#5C6880] hover:text-[#0E9BF0] hover:bg-white'
                        }`}
                    >
                      <span className="flex items-start gap-2">
                        {activeId === item.id && (
                          <span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0 mt-1.5" />
                        )}
                        <span className="flex-1">{item.title}</span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="bg-[#0B1628] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 mt-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-7 overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src="/web-app-manifest-192x192.png"
                    alt="GHL Scale Up"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">GHL Scale Up Team</div>
                  <div className="text-xs text-white/50">GoHighLevel Expert Agency</div>
                </div>
              </div>
              <p className="text-xs text-white/60 leading-relaxed mb-3">
                5+ years GHL experience · 200+ systems built globally. All product details verified against HighLevel documentation as of October 2026.
              </p>
              <Link href="https://www.ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 mt-4">
              <div className="text-xs font-semibold text-[#5C6880] mb-3 uppercase tracking-wide">Share this guide</div>
              <div className="flex gap-2 flex-wrap">
                <a href="https://www.linkedin.com/company/ghl-scale-up" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold bg-[#0A66C2] text-white px-3 py-1.5 rounded-md hover:opacity-85 hover:shadow-md transition-all">
                  <Linkedin className="w-3 h-3" />
                  LinkedIn
                </a>
                <a href="https://x.com/GHLScaleUp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold bg-black text-white px-3 py-1.5 rounded-md hover:opacity-85 hover:shadow-md transition-all">
                  <Twitter className="w-3 h-3" />
                  X
                </a>
                <button
                  onClick={() => navigator.clipboard.writeText(window.location.href)}
                  className="flex items-center gap-1.5 text-xs font-semibold bg-[#F0F2F5] text-[#1A2236] px-3 py-1.5 rounded-md hover:bg-[#DDE1E9] transition-colors"
                >
                  <Copy className="w-3 h-3" />
                  Copy link
                </button>
              </div>
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-4">
              <div className="text-sm font-bold text-white mb-2">Need API Migration Help?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We help businesses audit and migrate their HighLevel API v1 integrations.</p>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Get Help
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </aside>

          {/* ==================== RIGHT COLUMN: BLOG CONTENT ==================== */}
          <main className="min-w-0 order-2">

            {/* Table of Contents - Mobile Only */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8 lg:hidden">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">What's in this guide</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-2">
                {tocItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToHeading(item.id)}
                    className="text-left text-sm text-[#5C6880] hover:text-[#0E9BF0] transition-colors py-1"
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:hidden mb-8">
              <ProjectHelpCard />
            </div>

            {/* Section: Two Sources Two Levels */}
            <h2 id="two-sources-two-levels" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              Two Sources, Two Levels of Urgency: What the Notice Says and What the Documentation Says
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Two kinds of HighLevel source describe this change, and they don't carry the same weight. Keeping them apart matters because one of them is the reason you're reading this.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Source</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What It Says</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">What It Means for You</th>
                  </tr>
                </thead>
                <tbody>
                  {sourceData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.source}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.whatItSays}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.whatItMeans}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If you received the notice, plan to its date. The absence of that date from public pages is not evidence it will move. HighLevel has moved a deprecation date before: an older version of its webhook guide gave July 1, 2026 for a signature change, and current versions say September 1, 2026. Plan on the date you were given.
            </p>

            {/* ============================================================
                🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
                ============================================================ */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/highlevel-api-v1-deprecation.png"
                  alt="HighLevel API v1 Deprecation: Timeline, credential types, and migration sequence"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>HighLevel API v1 Deprecation: Timeline, credential types, and migration sequence</span>
              </div>
            </div>

            {/* Section: Deprecation End-of-Support Shutdown */}
            <h2 id="deprecation-end-of-support-shutdown" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Deprecation, End-of-Support and Shutdown Are Three Different Events
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Date</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What Happened or Will Happen</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Source</th>
                  </tr>
                </thead>
                <tbody>
                  {timelineData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.date}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.whatHappened}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              End-of-support is not a shutdown. For almost a year, "it still works" has been true and has meant that nobody is maintaining it. An integration that works today is not evidence that it will work after the shutdown date, and the second row of that table is already running on its own clock.
            </p>

            {/* Section: What API v1 Means */}
            <h2 id="what-api-v1-means" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What "API v1" Means in Plain English
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Sometimes the action you want can't happen entirely inside HighLevel. Another system needs to push information in, or pull it out. An API is the doorway for that conversation. API v1 is the older doorway. It is opened with a legacy API key, which HighLevel describes as unrestricted access to your account's data. The newer doorway works with tokens that carry only the permissions you choose.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              That one fact explains most of the urgency. A legacy key is a master key. Anything holding it, whether a tool, a contractor's script or an old laptop, can act on the whole account, which is why HighLevel is retiring the model.
            </p>

            {/* Section: Terms Kept Apart */}
            <h2 id="terms-kept-apart" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              The Terms HighLevel Uses, Kept Apart
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Term</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What It Is</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Why It Matters Here</th>
                  </tr>
                </thead>
                <tbody>
                  {termsData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.term}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.whatItIs}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.whyItMatters}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: PIT Four Lines */}
            <h2 id="pit-four-lines" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              Private Integration Token in Four Lines
            </h2>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">What it is:</strong> a credential an integration uses to authenticate with HighLevel, created in settings with only the permissions (scopes) you choose.</li>
              <li><strong className="text-[#1A2236]">Why it exists:</strong> to replace the broad access of a legacy key with least-privilege access.</li>
              <li><strong className="text-[#1A2236]">How it affects you:</strong> a migrated integration needs a new credential, and often a different set of permissions, rather than a copy of the old one.</li>
              <li><strong className="text-[#1A2236]">When it matters:</strong> for internal tools and automations that connect one business's account. HighLevel's guidance is that PITs are for internal use and OAuth 2.0 is for apps other accounts install.</li>
            </ul>

            {/* Section: Who Is Affected */}
            <h2 id="who-is-affected" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Who Is Actually Affected: Not Every HighLevel User
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The shutdown matters if something in your environment still calls the legacy API. Plenty of HighLevel accounts run entirely on native workflows, forms and integrations that already use the current API and never touch a legacy key. If you received the notice, something does. The task is to find out what.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Seeing Zapier, Make or n8n in your stack proves nothing by itself. The question is which connection each one uses.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Where It May Hide</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Why It May Use v1</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">How to Check</th>
                  </tr>
                </thead>
                <tbody>
                  {whoIsAffectedData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.whereItMayHide}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.whyItMayUseV1}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.howToCheck}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: Hard Part Finding */}
            <h2 id="hard-part-finding" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              The Hard Part Is Finding What Still Depends on the Old API
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Legacy integrations survive for years because they work. Nobody writes documentation for something that has never failed. The original developer moves on. The credential lives inside another tool, so the business owner sees only the outcome: a contact appears, a number updates, a notification arrives. The mechanism is invisible until it stops.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A business can have hundreds of workflows inside HighLevel and still depend on a single undocumented script outside it for lead capture. That is why this reads as a developer notice and behaves like a continuity problem. Think of every connection as one of three flows, and ask where a credential sits in each.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Flow</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Direction</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Where the Legacy Dependency May Sit</th>
                  </tr>
                </thead>
                <tbody>
                  {flowData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.flow}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.direction}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.whereLegacyDependencyMaySit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: How to Find Out */}
            <h2 id="how-to-find-out" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Find Out Whether Your HighLevel Setup Still Uses API v1
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Work through these in order. Each answers a different question, and none requires writing code.
            </p>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Read the notice for specifics.</strong> Note which account or sub-account it names and anything it lists. Don't assume it names the tool.</li>
              <li><strong className="text-[#1A2236]">Look for legacy API keys in settings,</strong> at both agency and sub-account level. A key marked Expired hasn't been used for 90 days, which tells you it is either dormant or seasonal. Keys still shown as active are being used, or were refreshed recently.</li>
              <li><strong className="text-[#1A2236]">List every tool that talks to HighLevel:</strong> Zapier, Make, n8n, custom applications, forms, scripts, CRM integrations, middleware and agency-built systems.</li>
              <li><strong className="text-[#1A2236]">Check the connection type inside each tool,</strong> using the table above. A connection described as API key, legacy or deprecated is a candidate.</li>
              <li><strong className="text-[#1A2236]">Find out who built each one,</strong> where its documentation is, and whether that person is still reachable.</li>
              <li><strong className="text-[#1A2236]">Don't use revocation as a test.</strong> Revoking or deleting a key to see what complains is a production experiment. HighLevel's own guide says to leave the old setup running until the replacement works.</li>
            </ol>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The help pages reviewed here don't describe a report showing which tool made which v1 call, so discovery usually comes from the tool side and from logs. Keep a simple inventory as you go.
            </p>

            {/* Section: What Could Stop Working */}
            <h2 id="what-could-stop-working" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Could Stop Working, and What Probably Won't
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Your whole HighLevel account is not going offline. Specific integrations that depend on unavailable v1 endpoints may fail, and how badly depends entirely on what each one does.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Flow Affected</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What May Happen</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">How You'd Notice</th>
                  </tr>
                </thead>
                <tbody>
                  {whatCouldStopData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.flowAffected}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.whatMayHappen}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.howYoudNotice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The dangerous failures are the quiet ones. A loud error gets fixed. A lead form that stops creating contacts looks, from the outside, like a slow week.
            </p>

            {/* Section: Is This Just Replacing Key */}
            <h2 id="is-this-just-replacing-key" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Is This Just Replacing the API Key? Usually Not
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel's migration guide tells you not to assume this is only an authentication change, because requests and responses can differ between the legacy and current APIs. Its June 26 post says most migration problems come from scope mapping, authentication handling and webhook configuration, not from changing a URL.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What May Change</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Legacy (v1)</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Current API</th>
                  </tr>
                </thead>
                <tbody>
                  {whatChangesData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.whatMayChange}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.legacyV1}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.currentAPI}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The v1 host and the header details come from integration-platform documentation rather than HighLevel's current pages, so confirm them against your own code. The pattern holds regardless: a credential swap alone rarely finishes the job.
            </p>

            {/* Section: What Replaces API v1 */}
            <h2 id="what-replaces-api-v1" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Replaces API v1: Private Integration Token, OAuth 2.0 or Something Else
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              There isn't one replacement. HighLevel's own guidance splits it by what the integration is, and a wrong choice here is costly to undo.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Situation</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Likely Path</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Why</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Watch For</th>
                  </tr>
                </thead>
                <tbody>
                  {replacementData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.situation}</td>
                      <td className="py-3 px-3 text-[#0E9BF0] font-semibold">{item.likelyPath}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.why}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.watchFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Private Integrations are created at agency and sub-account level. By default agency admins can create them, and the permission can be restricted by role. If you can't find the setting, HighLevel says to check that the feature is enabled under Labs. HighLevel's API documentation also still describes differences in API access by plan, so confirm what yours supports before committing to a design.
            </p>

            {/* Section: Safe Migration Sequence */}
            <h2 id="safe-migration-sequence" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              A Safe Migration Sequence
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#0E9BF0]">Notice received → Find the dependency → Choose the path → Rebuild alongside → Test → Cut over → Retire the old</strong>
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The sequence in one line. The highlighted step is where HighLevel's guidance is most specific: don't edit the live automation.
            </p>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Inventory every legacy dependency:</strong> the keys, the tools using them, what each one does and who owns it.</li>
              <li><strong className="text-[#1A2236]">Document what each integration really does</strong> before building anything: trigger, source, action, endpoint, fields, destination, permissions, expected response and downstream effect.</li>
              <li><strong className="text-[#1A2236]">Decide the architecture</strong> using the table above. Don't force a PIT onto everything.</li>
              <li><strong className="text-[#1A2236]">Create replacement credentials</strong> with only the scopes that integration needs. Copy the token somewhere secure immediately, because HighLevel shows it once.</li>
              <li><strong className="text-[#1A2236]">Build the new implementation alongside the old one.</strong> HighLevel's guide says not to edit existing, active automations. Keep them running, create new ones, and duplicate rather than modify.</li>
              <li><strong className="text-[#1A2236]">Test properly</strong> (next section), with a test lead first.</li>
              <li><strong className="text-[#1A2236]">Cut over deliberately.</strong> Turn on the new automation, pause the old one, watch the first real records, and only then delete the old automation and key. Running both live against the same trigger can process one lead twice.</li>
              <li><strong className="text-[#1A2236]">Monitor and document.</strong> Write down what exists now, which token belongs to what, and when each is due for rotation.</li>
            </ol>

            {/* Section: Testing Replacement */}
            <h2 id="testing-replacement" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Testing the Replacement: Why a Successful Login Proves Almost Nothing
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A successful authentication test proves a credential is valid. It doesn't prove the business process works, which is the thing you're actually trying to protect.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Layer</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Question</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">A Pass Proves</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#F8D000]">It Doesn't Prove</th>
                  </tr>
                </thead>
                <tbody>
                  {testingData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.layer}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.question}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.passProves}</td>
                      <td className="py-3 px-3 text-[#F8D000]">{item.doesntProve}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              One successful record is a demonstration, not a test. Run at least a second, different, realistic record before trusting it.
            </p>

            {/* Section: When Migrated Integration Misbehaves */}
            <h2 id="when-migrated-integration-misbehaves" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              When a Migrated Integration Misbehaves
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Problem</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Likely Cause</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What to Check</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Corrective Action</th>
                  </tr>
                </thead>
                <tbody>
                  {troubleshootingData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.problem}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.likelyCause}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.whatToCheck}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.correctiveAction}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: Ten Migration Mistakes */}
            <h2 id="ten-migration-mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Ten Migration Mistakes That Cause Outages
            </h2>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              {mistakesData.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>

            {/* Section: Separate Deprecation Webhook Signatures */}
            <h2 id="separate-deprecation-webhook-signatures" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              A Separate Deprecation in the Same Project: Webhook Signatures
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Webhooks are HighLevel sending event data to a URL you control, which is a different mechanism from API calls into HighLevel. HighLevel's webhook guide says the legacy X-WH-Signature header (RSA) is deprecated on September 1, 2026, after which webhooks are signed only with X-GHL-Signature (Ed25519). An earlier version of the guide gave July 1, 2026 for the same change.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This isn't part of the API v1 shutdown. It matters because a project that moves every API call to a Private Integration can still leave a webhook receiver verifying only the old header. Many simple receivers don't verify signatures at all, in which case there is nothing to change. If yours does, check it now, since the date in the current guide has passed.
            </p>

            {/* Section: Can You Migrate Yourself */}
            <h2 id="can-you-migrate-yourself" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Can You Migrate This Yourself, or Does It Need a Specialist?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The more undocumented, interconnected and business-critical a system is, the more a proper audit is worth. Complexity, not importance, is what separates the two columns below.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Situation</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Self-Migration?</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#F8D000]">Specialist Worth Considering?</th>
                  </tr>
                </thead>
                <tbody>
                  {specialistData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.situation}</td>
                      <td className={`py-3 px-3 font-semibold ${item.selfMigration.includes('Possibly') ? 'text-[#25C97D]' : 'text-[#DC3545]'}`}>{item.selfMigration}</td>
                      <td className={`py-3 px-3 font-semibold ${item.specialistWorth.includes('Optional') ? 'text-[#25C97D]' : 'text-[#DC3545]'}`}>{item.specialistWorth}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Where you can get help matters. HighLevel's API documentation says its Support team doesn't provide setup code auditing or developer consulting, though bugs can be reported and a developer community exists. A single, well-defined integration is often a freelancer job. Anything spanning several systems benefits from architecture planning and testing, which is the freelancer-versus-agency distinction explained in <Link href="/blog/where-to-hire-gohighlevel-experts" className="text-[#0E9BF0] hover:underline">where to hire GoHighLevel experts</Link>, along with vetting questions and the account-access questions to settle before anyone touches your account.
            </p>

            {/* Section: What to Gather */}
            <h2 id="what-to-gather" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What to Gather Before You Ask Anyone for Help
            </h2>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              {whatToGatherData.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Never paste a live API key, token or secret into a public support thread, an article comment, a screenshot or an AI prompt.</strong> HighLevel says to share a Private Integration Token only with trusted parties and notes it can't be shown again. Granting a developer access to create their own scoped integration is often safer than handing over an existing credential.
            </p>

            {/* Section: Why Waiting Makes Harder */}
            <h2 id="why-waiting-makes-harder" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Why Waiting Makes This Harder
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Nothing about this requires panic. It requires time, and the time shrinks in predictable ways as the date HighLevel gave you approaches:
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>There is less time to find unknown dependencies, and discovery is the slowest part.</li>
              <li>Tracking down the original developer takes longer than anyone expects.</li>
              <li>There is less room to test with realistic volume and edge cases.</li>
              <li>A planned migration turns into an emergency one, done under failure rather than beside a working system.</li>
              <li>Scheduling production changes gets harder when several integrations all need attention in the same weeks.</li>
              <li>Keys inactive for 90 days may already be marked Expired, so some failures can arrive earlier than any shutdown date.</li>
            </ul>

            {/* Section: How Integration Audit Works */}
            <h2 id="how-integration-audit-works" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How an Integration Audit Works, and Where GHL Scale Up Fits
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If your setup is complicated, the useful first step isn't a rebuild. It's an audit that answers four questions: what is calling HighLevel, what does each call do, what replaces it, and what happens to the business if it stops.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GHL Scale Up's <Link href="/services/integrations" className="text-[#0E9BF0] hover:underline">integrations and API development service</Link> covers custom API connections, webhooks and Zapier or Make integrations, and describes a process that runs from discovery and architecture mapping through connection and authentication, workflow configuration, and testing with real data and monitoring. For an API v1 warning, that translates into an audit-first sequence:
            </p>
            <p className="text-sm md:text-base font-semibold text-[#0E9BF0] mb-4">
              Audit → Identify → Plan → Rebuild → Test → Cut over → Validate
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Audit and identify:</strong> list every legacy credential and the tools, scripts and forms using each one.</li>
              <li><strong className="text-[#1A2236]">Plan:</strong> establish what each integration does, what replaces it, and whether the credential type is a PIT, OAuth or something else.</li>
              <li><strong className="text-[#1A2236]">Rebuild and test:</strong> build alongside the old integration and test the layers in the table above.</li>
              <li><strong className="text-[#1A2236]">Cut over and validate:</strong> switch deliberately, watch real records, then retire the old credentials.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Whether a given setup turns out to be a quick connection change or a rebuild is what an audit establishes. No outcome is promised in advance.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Not sure what in your HighLevel account is still using API v1?</strong> The integrations service page above describes how to request an integration audit. Bring the checklist from the previous section.
            </p>

            {/* Section: The Question to Answer */}
            <h2 id="the-question-to-answer" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              The Question to Answer This Week
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The deadline matters less than what it forces. Every business that received this notice is being asked a question it should have been able to answer already: what is connected to our CRM, who built it, and what breaks if it stops. The migration is the smaller task. The inventory is the one most people skip.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Start there. Even if you end up changing a single credential in ten minutes, you'll know your lead capture, your sync and your reporting no longer depend on something nobody can name.
            </p>

            {/* Section: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              Frequently Asked Questions About the HighLevel API v1 Deprecation
            </h2>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <details key={index} className="group border-b border-[rgba(28,35,33,0.08)]">
                  <summary className="flex justify-between items-center cursor-pointer list-none py-4 text-[0.92rem] font-semibold text-[#1A2236] hover:text-[#0E9BF0] transition-colors">
                    {faq.q}
                    <ChevronDown className="w-4 h-4 text-[#8A9BB0] transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="text-sm text-[#5C6880] leading-relaxed pb-4">{faq.a}</p>
                </details>
              ))}
            </div>

            {/* Contextual CTA inside FAQ */}
            <div className="mt-4 text-sm text-[#5C6880] leading-relaxed">
              Still unsure what in your HighLevel account is using API v1?{' '}
              <Link href="/contact" className="text-[#0E9BF0] hover:underline font-medium">Book a free integration audit</Link>.
            </div>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/connect-zapier-to-gohighlevel" className="text-sm text-[#0E9BF0] hover:underline">Connect Zapier to GoHighLevel →</Link>
                <Link href="/blog/gohighlevel-workflow-not-triggering" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Not Triggering? →</Link>
                <Link href="/blog/gohighlevel-enrollment-history-execution-logs" className="text-sm text-[#0E9BF0] hover:underline">Enrollment History and Execution Logs Guide →</Link>
                <Link href="/blog/where-to-hire-gohighlevel-experts" className="text-sm text-[#0E9BF0] hover:underline">Where to Hire GoHighLevel Experts →</Link>
                <Link href="/services/integrations" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Integrations and API Development →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Need Help Migrating from API v1?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  We help businesses audit and migrate their HighLevel API v1 integrations safely.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105">
                  Book Your Free Assessment
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Author Section */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 my-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-7 h-7 overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src="/web-app-manifest-192x192.png"
                    alt="GHL Scale Up"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#1A2236]">GHL Scale Up Team</div>
                  <div className="text-xs text-[#5C6880]">GoHighLevel expert agency · 5+ years GHL experience · 200+ systems built and migrated globally</div>
                </div>
              </div>
              <p className="text-xs text-[#5C6880] leading-relaxed">
                GHL Scale Up is a specialised GoHighLevel implementation and SaaS growth agency. Based in India, we serve agencies and businesses across 6 countries with 200+ GoHighLevel builds delivered. This guide reflects direct experience auditing and migrating HighLevel API v1 integrations. All product details verified against HighLevel documentation as of October 2026.
              </p>
              <Link href="/" className="text-[#0E9BF0] text-xs hover:underline mt-2 inline-block">ghlscaleup.com</Link>
            </div>
          </main>
        </div>
      </div>

      {/* Booking Modal - Rendered at root level */}
      <BookingModal open={openBooking} setOpen={setOpenBooking} />

      {/* Progress Bar Script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          const progressBar = document.getElementById('progress-bar');
          if (progressBar) {
            window.addEventListener('scroll', () => {
              const scrollTop = window.scrollY;
              const docHeight = document.documentElement.scrollHeight - window.innerHeight;
              const progress = (scrollTop / docHeight) * 100;
              progressBar.style.width = Math.min(progress, 100) + '%';
            });
          }
        `
      }} />
    </>
  );
}