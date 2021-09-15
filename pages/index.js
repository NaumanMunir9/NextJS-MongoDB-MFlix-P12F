// libraries
import Head from "next/head";

// lib
import clientPromise from "../lib/mongodb";

// components
import Header from "../components/Header";
import MoviesCard from "../components/MoviesCard";

export default function HomePage({ movies }) {
  return (
    <div>
      <Head>
        <title>MFlix Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <MoviesCard movies={movies} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const client = await clientPromise;
  const db = client.db("sample_mflix");

  const data = await db
    .collection("movies")
    .find({ year: { $gte: 2000 }, "imdb.rating": { $gte: 8.2 } })
    .limit(20)
    .toArray();

  const movies = JSON.parse(JSON.stringify(data));

  return {
    props: { movies },
  };
}
