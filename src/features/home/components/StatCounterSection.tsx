"use client";

import dynamic from "next/dynamic";

import { statKeys } from "@/config/homepage";
import { StatCounter } from "@/shared/components/client/StatCounter";

type StatCounterSectionProps = {
  stats: Record<(typeof statKeys)[number], { value: number; suffix?: string; label: string }>;
};

export function StatCounterSection({ stats }: StatCounterSectionProps): React.JSX.Element {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
      {statKeys.map((key) => {
        const stat = stats[key];
        return <StatCounter key={key} value={stat.value} suffix={stat.suffix} label={stat.label} />;
      })}
    </div>
  );
}

export const LazyStatCounterSection = dynamic(
  () => Promise.resolve({ default: StatCounterSection }),
  {
    ssr: false,
    loading: () => (
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {statKeys.map((key) => (
          <div key={key} className="h-20 animate-pulse rounded-lg bg-muted" />
        ))}
      </div>
    ),
  },
);
