import React from "react";

const About = () => {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <header className="text-center space-y-4 mb-10">
          <h1 className="text-4xl md:text-5xl font-bold">About PawMatch</h1>
          <p className="text-muted-foreground">
            A premium, trusted community for responsible dog breeding.
          </p>
        </header>
        <section className="prose prose-neutral max-w-none">
          <p>
            We connect verified dog owners and breeders to ensure healthy, ethical,
            and well-documented breeding practices. Our platform prioritizes transparency,
            health certifications, and owner support.
          </p>
        </section>
      </div>
    </main>
  );
};

export default About;