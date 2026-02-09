import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SubpageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="text-sm font-medium text-gray-500">{eyebrow}</div>
        <h1 className="mt-2 text-3xl sm:text-5xl font-semibold tracking-tight text-gray-900">
          {title}
        </h1>
        <p className="mt-4 text-gray-600 max-w-3xl">{description}</p>

        <div className="mt-7 flex flex-col sm:flex-row gap-3">
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6" asChild>
            <Link href="/register">Join now</Link>
          </Button>

          <Button
            variant="outline"
            className="border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white font-semibold transition-all duration-200"
            asChild
          >
            <Link href="/demo">Try Demo Account</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

