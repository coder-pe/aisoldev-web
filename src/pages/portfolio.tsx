import { NextPage } from 'next';
import Head from 'next/head';

const Portfolio: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portafolio - AISOLDEV</title>
        <meta name="description" content="Aquí están algunos de nuestros proyectos recientes." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold">Nuestro Portafolio</h1>
        <p className="mt-4 text-lg">Aquí están algunos de nuestros proyectos recientes.</p>
        {/* Añadir detalles del portafolio aquí */}
      </div>
    </>
  );
};

export default Portfolio;

