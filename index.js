import Link from 'next/link';
import { motion } from 'framer-motion';
import '../styles/globals.css';


export default function Home() {
  return (
    <div className="container">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Math Solver App
      </motion.h1>
      <nav>
        <Link href="/solve"><button>Equation Solver</button></Link>
        <Link href="/word-problem"><button>Word Problem Solver</button></Link>
        <Link href="/graph"><button>Graph Plotter</button></Link>
        <Link href="/geometry"><button>Geometry Solver</button></Link>
        <Link href="/upload-image"><button>Upload Image</button></Link>
      </nav>
    </div>
  );
}
