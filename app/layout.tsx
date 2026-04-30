import Navbar from '@/components/navbar';
import './globals.css';
import { Inter, Inconsolata, Roboto } from 'next/font/google';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });
const inconsolata = Inconsolata({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['latin'], weight: ['400'] }); // some font need weight property just like Roboto


// metadata is provided in the html head to give us more infprmation
export const metadata: Metadata = {
  title: "Rufai next.js",
  description: "A comprehensive next.js with typescript tutorial to gain the fundamentals of next.js",
  keywords:"next.js, typescript and tailwind css"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { 
  // Layout allow us to share UI within other pages.
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <Navbar />
        <main className='max-w-3xl mx-auto py-4 flex gap-x-4'>
          {children}
        </main>
      </body>
    </html>
  )
};