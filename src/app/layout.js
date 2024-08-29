import "./globals.css";
import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "Chordz",
  description: "Aprenda o básico de teoria e composição músical.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <ClientLayout>{children}</ClientLayout>
    </html>
  );
}
