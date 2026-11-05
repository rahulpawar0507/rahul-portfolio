import { profile } from "../lib/data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &
          Node.js.
        </p>
      </div>
    </footer>
  );
}
