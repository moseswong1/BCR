import { PageShell } from "@/components/PageShell";

export const metadata = { title: "Cryptocurrency CFDs" };

export default function Page() {
  return (
    <PageShell
      title="Cryptocurrency CFDs"
      subtitle="Access crypto markets through CFDs (where available)."
    >
      <div className="prose max-w-none">
        <p>Add risk disclosure, trading hours, and typical spreads.</p>
        <p className="text-sm text-gray-500">
          (Placeholder page: replace this copy and add real content when you're ready.)
        </p>
      </div>
    </PageShell>
  );
}
