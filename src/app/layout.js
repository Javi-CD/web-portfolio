import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Javi - Full Stack Developer',
  description:
    'Portfolio de Javi - Desarrollador Full Stack especializado en tecnologías modernas',
  keywords: [
    'desarrollador',
    'full stack',
    'react',
    'node.js',
    'javascript',
    'typescript',
  ],
  authors: [{ name: 'Javi' }],
  openGraph: {
    title: 'Javi - Full Stack Developer',
    description:
      'Portfolio de Javi - Desarrollador Full Stack especializado en tecnologías modernas',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
