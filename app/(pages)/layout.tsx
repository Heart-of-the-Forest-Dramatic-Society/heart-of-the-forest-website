export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 w-full max-w-7xl mx-auto">
      {children}
    </div>
  );
}
