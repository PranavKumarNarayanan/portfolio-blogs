import './globals.css';

export const metadata = {
  title: 'Pranav',
  description: 'Pranav — notes on systems, compilers, and whatever else.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="page">
          <aside className="sidebar">
            <h1 className="name"><a href="/">Pranav Kumar S</a></h1>
            <p className="email">
              <a href="mailto:youremail@example.com">pranavkumarsankar@gmail.com</a>
            </p>
            <p className="intro">
              Computer science student. Linux enthusiast. Musician. Writer. <b>And a Lover</b>.
            </p>
            <nav className="nav">
              <a href="/">blog</a>
              <a href="/about">about</a>
            </nav>
          </aside>
          <main className="content">{children}</main>
        </div>
      </body>
    </html>
  );
}
