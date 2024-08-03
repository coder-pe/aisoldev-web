import { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>AISOLDEV</title>
        <meta name="description" content="AISOLDEV - Soluciones de Desarrollo de Software" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold">Bienvenido a AISOLDEV</h1>
        <p className="mt-4 text-lg">Somos una empresa de desarrollo de software dedicada a proporcionar soluciones de IA.</p>
      </div>
    </>
  );
};

export default Home;

