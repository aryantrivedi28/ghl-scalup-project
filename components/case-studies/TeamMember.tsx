// components/case-studies/TeamMember.tsx
'use client';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';

interface TeamMemberProps {
  teamMember: {
    name?: string;
    role?: string;
    bio?: string;
    image?: any;
  };
}

export default function TeamMember({ teamMember }: TeamMemberProps) {
  if (!teamMember?.name) return null;

  return (
    <div className="bg-white border border-[#E8EDF4] rounded-2xl p-6 flex items-center gap-5">
      {teamMember.image && (
        <div className="w-20 h-20 rounded-full overflow-hidden bg-[#F4F7FA] flex-shrink-0">
          <Image
            src={urlFor(teamMember.image).url()}
            alt={teamMember.name}
            width={80}
            height={80}
            className="object-cover"
          />
        </div>
      )}
      <div>
        <h4 className="text-lg font-bold text-[#1C2E4A]">{teamMember.name}</h4>
        <p className="text-sm text-[#0E9BF0] font-medium mb-2">{teamMember.role}</p>
        {teamMember.bio && (
          <p className="text-sm text-[#4A5568] leading-relaxed">{teamMember.bio}</p>
        )}
      </div>
    </div>
  );
}