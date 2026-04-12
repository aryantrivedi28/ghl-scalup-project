// components/blog/CopyButton.tsx
'use client';

export default function CopyButton() {
  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    const btn = document.getElementById('copy-btn');
    if (btn) {
      const originalText = btn.innerHTML;
      btn.innerHTML = 'Copied!';
      setTimeout(() => {
        btn.innerHTML = originalText;
      }, 2000);
    }
  };

  return (
    <button
      id="copy-btn"
      onClick={handleCopy}
      className="flex items-center gap-1.5 text-xs font-semibold bg-[#F0F2F5] text-[#1A2236] px-3 py-1.5 rounded-md hover:bg-[#DDE1E9] transition-colors"
    >
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
        <rect x="4" y="4" width="7.5" height="7.5" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M1.5 9V2.5A1 1 0 012.5 1.5H9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
      Copy link
    </button>
  );
}