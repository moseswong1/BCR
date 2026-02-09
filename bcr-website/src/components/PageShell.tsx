export function PageShell(props: {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  const { title, subtitle, children } = props;

  return (
    <main className="bg-white">
      {/* Page title area */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">{title}</h1>
          {subtitle ? (
            <p className="mt-2 text-gray-600 max-w-3xl">{subtitle}</p>
          ) : null}
        </div>
      </section>

      {/* Page body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {children}
      </div>
    </main>
  );
}
