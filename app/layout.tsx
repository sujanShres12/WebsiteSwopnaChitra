import type {Metadata} from 'next';
import './globals.css';
import CustomNavbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'SWOPNA CHITRA | Premium Production Company',
  description: 'Specializing in TV commercials, social media content, corporate event coverage, and social media marketing.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="bg-midnight">
        <CustomNavbar />
        <main>{children}</main>
        <footer className="footer text-center">
          <div className="container">
            <p className="mb-0">&copy; {new Date().getFullYear()} <span className="text-gold fw-bold">SWOPNA CHITRA</span>. All Rights Reserved.</p>
            <p className="small text-muted mt-2">Cinematic Excellence in Every Frame.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
