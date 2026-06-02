import GHLVirtualAssistantClient from './client';

export const metadata = {
      title: 'Dedicated GHL Virtual Assistant Full Account Management Daily',
      description: 'A dedicated GHL VA to manage your account daily running campaigns, updating pipelines, building workflows, and handling all GHL tasks so you can focus on growth.',
      alternates: {
            canonical: 'https://www.ghlscaleup.com/virtual-assistant',
      },
}

export default function GHLVirtualAssistantPage() {
      return <GHLVirtualAssistantClient />
}