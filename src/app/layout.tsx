import type { Metadata } from 'next'
import './globals.css'



export const metadata: Metadata = {
  title: 'WebDev Blog',
  description: 'My personal blog about web development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dracula">
      <body>{children}</body>
    </html>
  );
}
