import type { Metadata } from 'next';
import { Barlow, Plus_Jakarta_Sans } from 'next/font/google';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-nasm-display',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-nasm-sans',
});

export const metadata: Metadata = {
  title: 'NASM International Partnership | IMSA',
  description: 'Official NASM International Partnership — Earn globally recognized fitness certifications through IMSA',
};

export default function NASMLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${barlow.variable} ${plusJakartaSans.variable}`}>
      {children}
    </div>
  );
}
