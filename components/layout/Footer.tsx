export function Footer() {
  return (
    <footer className="bg-background/80 backdrop-blur-sm border-t py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Heart of the Forest Dramatic
          Society. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Designed and developed by BenCyber (Ben) from the Heart of the Forest
          Team.
        </p>
      </div>
    </footer>
  );
}
