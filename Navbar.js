
import Link from 'next/link';
import { useRouter } from 'next/router';
import '../styles/navbar.css';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="navbar">
      <Link href="/" className={router.pathname === '/' ? 'active' : ''}>Home</Link>
      <Link href="/solve" className={router.pathname === '/solve' ? 'active' : ''}>Equation Solver</Link>
      <Link href="/word-problem" className={router.pathname === '/word-problem' ? 'active' : ''}>Word Problem Solver</Link>
      <Link href="/graph" className={router.pathname === '/graph' ? 'active' : ''}>Graph Plotter</Link>
      <Link href="/geometry" className={router.pathname === '/geometry' ? 'active' : ''}>Geometry Solver</Link>
      <Link href="/upload-image" className={router.pathname === '/upload-image' ? 'active' : ''}>OCR Solver</Link>
    </nav>
  );
}