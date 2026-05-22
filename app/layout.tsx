import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Incident Response Runbook Validator",
  description: "Validate incident response playbooks with simulated scenarios before real incidents occur."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d371a209-79d9-4d2f-a666-0d14b3d8fc63"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
