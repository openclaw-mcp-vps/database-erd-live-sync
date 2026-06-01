import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ERD Live Sync — Auto-generate ERDs that update with schema changes',
  description: 'Connect to your database and get live-updating entity relationship diagrams with instant schema change notifications.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="346b2ded-10b0-4dde-b53e-ba531f2b97c9"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
