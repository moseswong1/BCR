import { PageShell } from "@/components/PageShell";

export const metadata = { title: "Help & Support" };

export default function Page() {
  return (
    <PageShell
      title="Help & Support"
      subtitle="FAQs, platform help, and account assistance."
    >
      <div className="prose max-w-none">
        <p>Add support topics and a searchable help center.</p>
        <p className="text-sm text-gray-500">
          (Placeholder page: replace this copy and add real content when you're ready.)
        </p>
      </div>
    </PageShell>
  );
}
