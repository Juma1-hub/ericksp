import "./globals.css";

export const metadata = {
  title: "ERICKSP | Trading Dashboard",
  description: "ERICKSP trading dashboard demo"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
