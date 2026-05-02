import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css'; // Global styles
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Bernardo Alves Aguiar da Cunha | Portfolio',
  description: 'Fullstack Software & Game Developer | IT Technician',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark`}>
      <body className="bg-zinc-950 text-zinc-100 font-sans min-h-screen flex flex-col" suppressHydrationWarning>
        <LanguageProvider>
          <Navbar />
          <div className="pt-16 flex-grow">
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
