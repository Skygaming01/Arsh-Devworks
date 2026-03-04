
import "./globals.css";

export const metadata = {
  title: "Arsh Saifi Portfolio",
  description: "Full Stack Developer & Discord Systems Architect"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
