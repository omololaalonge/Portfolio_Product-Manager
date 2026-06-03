import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Omolola Alonge - Project/Product Manager Portfolio",
  description:
    "Portfolio for Omolola Alonge, a Project/Product Manager bridging business data, stakeholder requirements, agile delivery, and engineering execution.",
  openGraph: {
    title: "Omolola Alonge - Project/Product Manager Portfolio",
    description:
      "Project/Product Manager focused on MVP scoping, backlog triage, agile delivery, stakeholder alignment, and data-informed product operations.",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const storedTheme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              } catch {}
            `,
          }}
        />
      </head>
      <body className="bg-page font-sans antialiased">{children}</body>
    </html>
  );
}
