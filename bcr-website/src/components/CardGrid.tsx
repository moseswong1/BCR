import Link from "next/link";

export default function CardGrid({
  items,
}: {
  items: { title: string; description: string; href: string }[];
}) {
  return (
    <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((x) => (
        <Link key={x.href} href={x.href} className="block">
          <div className="h-full p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="font-semibold text-gray-900">{x.title}</div>
            <div className="mt-2 text-sm text-gray-600">{x.description}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

