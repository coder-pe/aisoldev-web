import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-white">
            Inicio
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-white">
            Nosotros
          </Link>
        </li>
        <li>
          <Link href="/services" className="text-white">
            Servicios
          </Link>
        </li>
        <li>
          <Link href="/portfolio" className="text-white">
            Portafolio
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-white">
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}

