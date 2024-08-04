import { NextPage } from 'next';
import Head from 'next/head';

const Services: NextPage = () => {
  return (
    <>
      <Head>
        <title>Servicios - AISOLDEV</title>
        <meta name="description" content="Nuestros servicios incluyen desarrollo de software a medida, implementación de soluciones de IA y consultoría tecnológica." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold">Nuestros Servicios</h1>
        <ul className="mt-4 list-disc list-inside">
          <li>Desarrollo de software a medida</li>
          <li>Implementación de soluciones de IA</li>
          <li>Consultoría tecnológica</li>
        </ul>
      </div>
    </>
  );
};

export default Services;

