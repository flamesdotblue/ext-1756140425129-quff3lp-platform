import React from 'react';

function Logo({ size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label="Chiaroscuro mark"
    >
      <defs>
        <radialGradient id="g" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="40%" stopColor="#bfbfbf" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="100" height="100" rx="18" fill="#0b0b0d" />
      <circle cx="50" cy="50" r="40" fill="url(#g)" />
    </svg>
  );
}

export default function App() {
  return (
    <div className="page">
      <header className="nav">
        <div className="brand">
          <Logo />
          <span>Chiaroscuro</span>
        </div>
        <nav aria-label="primary">
          <a href="#work">Work</a>
          <a href="#studio">Studio</a>
          <a href="#contact" className="pill">Inquire</a>
        </nav>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="spotlight" aria-hidden="true" />
          <h1 id="hero-title">
            Where light carves
            <span className="break" />
            meaning from shadow
          </h1>
          <p className="lede">
            A minimalist studio shaping modern brands through contrast, restraint, and clarity.
          </p>
          <div className="cta">
            <a className="button primary" href="#contact">Start a project</a>
            <a className="button ghost" href="#work">See our work</a>
          </div>
        </section>

        <section className="panels" id="work" aria-label="Selected work">
          <article className="panel">
            <h3>Monochrome Identity</h3>
            <p>Typeface-led system with disciplined negative space and precise rhythm.</p>
          </article>
          <article className="panel">
            <h3>Lightform UI</h3>
            <p>Interface palette balancing luminous calls to action against quiet surfaces.</p>
          </article>
          <article className="panel">
            <h3>Shadowplay Campaign</h3>
            <p>Photography and motion that dramatize product form through gradient light.</p>
          </article>
        </section>

        <section className="statement" id="studio" aria-labelledby="studio-title">
          <h2 id="studio-title">Minimalism, amplified</h2>
          <p>
            We reduce until the essential remains, then use light to make it unforgettable. Every decision—a study in contrast.
          </p>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="footer-inner">
          <div className="brand small">
            <Logo size={20} />
            <span>Chiaroscuro Studio</span>
          </div>
          <form className="inquiry" onSubmit={(e) => e.preventDefault()} aria-label="Project inquiry">
            <label>
              <span className="visually-hidden">Email</span>
              <input type="email" placeholder="you@example.com" required />
            </label>
            <button type="submit" className="button primary">Request callback</button>
          </form>
          <p className="legal">© {new Date().getFullYear()} Chiaroscuro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
