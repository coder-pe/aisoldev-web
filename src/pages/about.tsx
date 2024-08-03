import { NextPage } from 'next';
import Head from 'next/head';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sobre Nosotros - AISOLDEV</title>
        <meta name="description" content="AISOLDEV es una empresa líder en desarrollo de software con un enfoque en soluciones de inteligencia artificial." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold">Sobre Nosotros</h1>
        <p className="mt-4 text-lg">AISOLDEV es una empresa líder en desarrollo de software con un enfoque en soluciones de inteligencia artificial.</p>
      </div>
    </>
  );
};

export default About;

