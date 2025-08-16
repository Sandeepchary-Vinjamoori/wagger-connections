import React from "react";

const Contact = () => {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4 bg-gradient-to-br from-warm-gray to-cream">
      <div className="max-w-4xl mx-auto">
        <header className="text-center space-y-4 mb-10">
          <h1 className="text-4xl md:text-5xl font-bold">Contact PawMatch</h1>
          <p className="text-muted-foreground">
            We would love to hear from you. Reach out anytime.
          </p>
        </header>
        <section className="rounded-xl border p-8 bg-card shadow-sm space-y-2">
          <p>Email: hello@pawmatch.com</p>
          <p>Phone: (555) 123-4567</p>
          <p>Address: 123 Pet Street, San Francisco, CA 94102</p>
        </section>
      </div>
    </main>
  );
};

export default Contact;