import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 w-full max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mt-8">
        Welcome to the Heart of the forest Dramatic Society!
      </h1>
      <Image
        src={"/logo.jpg"}
        alt="Heart of the forest"
        width={300}
        height={300}
        priority
        className="rounded-full mt-8 hover:scale-105 transition-transform duration-300"
      />
      <p className="text-center mt-4 text-lg  max-w-2xl">
        This website for the Heart of the forest Dramatic Society is coming
        soon! We are a community theatre group based in the heart of the
        forest, and we are dedicated to bringing high-quality theatre
        productions to our local community. Stay tuned for updates on our
        upcoming shows and events!
      </p>
    </main>
  );
}
