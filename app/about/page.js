export const metadata = {
  title: 'About — Pranav',
};

export default function AboutPage() {
  return (
    <article>
      <h1>About</h1>
      <p>
        Write your full bio here. Background, what you're studying, what
        you're working towards (e.g. AI compiler engineering), and how you
        got into it.
      </p>

      <h2>Projects</h2>
      <p>
        <strong>Project name</strong> — one or two lines on what it does and
        what you used to build it.
      </p>
      <p>
        <strong>Project name</strong> — same as above.
      </p>

      <h2>Elsewhere</h2>
      <p>
        <a href="https://github.com/yourusername">GitHub</a> ·{' '}
        <a href="https://linkedin.com/in/yourusername">LinkedIn</a>
      </p>
    </article>
  );
}
