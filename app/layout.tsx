import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Conix Barbearia | Barra World',
  description: 'Corte masculino, barba e corte infantil no Barra World. Agende seu horário com a Conix Barbearia.',
  keywords: ['barbearia no Barra World', 'barbearia na Barra da Tijuca', 'corte masculino', 'corte infantil', 'barba'],
  openGraph: {
    title: 'Seu corte, do seu jeito. | Conix Barbearia',
    description: 'Cortes, barba e cuidado para todas as idades, no Barra World.',
    images: [{ url: '/og.png', width: 1734, height: 909, alt: 'Conix Barbearia — Seu corte, do seu jeito.' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seu corte, do seu jeito. | Conix Barbearia',
    description: 'Cortes, barba e cuidado para todas as idades, no Barra World.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
