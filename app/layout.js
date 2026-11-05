import "./globals.css";
import { profile } from "../lib/data";

export const metadata = {
  title: `${profile.name} | ${profile.role}`,
  description: `${profile.name} ka portfolio. ${profile.role} jo ASP.NET, C#, SQL aur modern web technologies mein kaam karta hai.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
