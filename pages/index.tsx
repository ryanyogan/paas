import Head from 'next/head';

const Index = () => (
  <div>
    <Head>
      <title>Index page</title>
      <meta name="description" content="This is a description" />
    </Head>
    <div style={{ padding: '0px 30px', fontSize: '30px', height: '100%', color: '#222' }}>
      <p>content on index</p>
    </div>
  </div>
);

export default Index;
