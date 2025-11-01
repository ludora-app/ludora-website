import { Poppins } from 'next/font/google';
import { PropsWithChildren } from 'react';

const poppins = Poppins({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
});

type HtmlBodyProviderProps = PropsWithChildren & {
  language: string;
};
const fontClassName = `${poppins.variable} antialiased`;

export default function HtmlBodyProvider({ children, language }: HtmlBodyProviderProps) {
  return (
    <html lang={language} className="scroll-smooth">
      <body className={fontClassName}>{children}</body>
    </html>
  );
}
