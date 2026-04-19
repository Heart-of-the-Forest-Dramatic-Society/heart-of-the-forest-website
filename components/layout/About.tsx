import Image from "next/image";

export function About() {
  const values = [
    "Inclusive and welcoming",
    "Volunteer powered",
    "Local stories, big stage energy",
  ];

  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
    >
      <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-linear-to-br from-secondary via-secondary/85 to-muted/70 p-6 sm:p-8 lg:p-10 shadow-2xl shadow-black/10 dark:shadow-secondary/20">
        <div className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-heart/25 blur-3xl" />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end">
          <div className="lg:col-span-12 text-center">
            <p className="text-sm font-semibold tracking-[0.25em] text-primary uppercase mb-2">
              About Us
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
              Community theatre with heart, craft, and a little bit of magic.
            </h2>
          </div>
        </div>

        <ul className="relative mt-6 flex flex-wrap gap-3 items-center justify-center">
          {values.map((value) => (
            <li
              key={value}
              className="rounded-full border border-border/70 bg-background/70 px-4 py-2 text-sm font-medium"
            >
              {value}
            </li>
          ))}
        </ul>

        <div className="relative mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <article className="lg:col-span-7 rounded-2xl border border-border/60 bg-background/85 backdrop-blur-sm p-6 sm:p-7 shadow-lg shadow-black/5">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3">
              Who We Are
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              The Heart of the Forest Dramatic Society is a vibrant community of
              theatre enthusiasts dedicated to bringing captivating performances
              to life. We are passionate about storytelling and creating
              memorable experiences for our audiences. Our society is made up of
              talented actors, directors, designers, and volunteers who work
              together to produce a diverse range of theatrical productions each
              year.
            </p>
          </article>

          <figure className="group lg:col-span-5 rounded-2xl overflow-hidden border border-border/60 bg-background/70 min-h-72 shadow-lg shadow-black/5">
            <Image
              src="/group.jpg"
              alt="Heart of the Forest Dramatic Society Group Photo"
              width={900}
              height={650}
              priority
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </figure>

          <figure className="group lg:col-span-5 rounded-2xl overflow-hidden border border-border/60 bg-background/70 min-h-72 order-4 lg:order-0 shadow-lg shadow-black/5">
            <Image
              src="/Performance.jpg"
              alt="Heart of the Forest Dramatic Society Performance"
              width={900}
              height={650}
              priority
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </figure>

          <article className="lg:col-span-7 rounded-2xl border border-border/60 bg-background/85 backdrop-blur-sm p-6 sm:p-7 flex flex-col justify-center shadow-lg shadow-black/5">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3">
              Our Mission
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Our mission is to foster a love for theatre and the arts within
              our community. We strive to create a welcoming and inclusive
              environment where individuals of all backgrounds can come together
              to share their passion for performance. Through our productions,
              workshops, and outreach programs, we aim to inspire creativity,
              promote cultural enrichment, and build lasting connections among
              theatre lovers in our community.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
