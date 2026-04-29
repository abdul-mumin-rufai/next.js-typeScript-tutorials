import Navbar from '@/components/navbar';
import './globals.css';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { 
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <main className='max-w-3xl mx-auto py-4 flex gap-x-4'>
          {children}
        </main>
      </body>
    </html>
  )
};