import { PageShell } from "@/components/PageShell";

export const metadata = { title: "Commodity CFDs" };

export default function Page() {
  return (
    <PageShell
      title="Commodity CFDs"
      subtitle="Metals, energies and soft commodities."
    >
      <div className="prose max-w-none">
        <p>Add contract specs and trading hours.</p>
        <p className="text-sm text-gray-500">
          (Placeholder page: replace this copy and add real content when you're ready.)
        </p>
      </div>
    </PageShell>
  );
}
