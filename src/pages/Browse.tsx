import React from "react";

const Browse = () => {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <header className="text-center space-y-4 mb-10">
          <h1 className="text-4xl md:text-5xl font-bold">Browse Dogs</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our verified dog profiles by breed, age, and location.
          </p>
        </header>
        <section className="text-center text-muted-foreground">
          <p>Filters and listing coming soon.</p>
        </section>
      </div>
    </main>
  );
};

export default Browse;