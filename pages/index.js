// libraries
import Head from "next/head";

// lib
import clientPromise from "../lib/mongodb";

export default function Home({ isConnected }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto">
        <h1 className="text-5xl">NextJS and MongoDB</h1>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const client = await clientPromise;

  // client.db() will be the default database passed in the MONGODB_URI
  // You can change the database by calling the client.db() function and specifying a database like:
  // const db = client.db("myDatabase");
  // Then you can execute queries against your database like so:
  // db.find({}) or any of the MongoDB Node Driver commands

  const isConnected = await client.isConnected();

  return {
    props: { isConnected },
  };
}
