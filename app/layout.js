import './globals.css';
import Navbar from '@/components/head/Navbar';

 

export const metadata = {
  title: 'LUIGIE PIZZA',
  description: 'taste the italian',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-black'>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
