import { Inter } from 'next/font/google';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Javi-CD - Backend Developer',
  description:
    'Javi-CD Portfolio - Backend Developer with a passion for clean code',
  keywords: ['developer', 'backend', 'react', 'node.js', 'javascript', 'next'],
  authors: [{ name: 'Javi-CD' }],
  openGraph: {
    title: 'Javi - Backend Developer',
    description:
      'Javi-CDs Portfolio - Backend Developer with a passion for clean code',
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
