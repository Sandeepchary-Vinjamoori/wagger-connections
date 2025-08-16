import React from "react";

const HowItWorks = () => {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4 bg-gradient-to-br from-cream via-background to-warm-gray">
      <div className="max-w-6xl mx-auto">
        <header className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">How PawMatch Works</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Create a profile, browse verified matches, and connect with owners.
          </p>
        </header>
        <section className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Create Profile', desc: 'Add your dog\'s info, photos, and health records.'},
            { title: 'Browse Matches', desc: 'Filter by breed, location, age, and more.'},
            { title: 'Connect', desc: 'Message owners and schedule safe meetups.'},
          ].map((s) => (
            <div key={s.title} className="rounded-xl border p-8 bg-card shadow-sm">
              <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default HowItWorks;