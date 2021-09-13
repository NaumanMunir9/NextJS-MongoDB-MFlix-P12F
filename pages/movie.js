// libraries
import { Fragment } from "react";
import Head from "next/head";

// lib
import clientPromise from "../lib/mongodb";

export default function MoviePage({ movies }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto">
        <h1 className="text-5xl">This is the Movies Page</h1>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-wrap my-16">
          {movies &&
            movies.map((movie) => (
              <Fragment key={movie._id}>
                <div className="w-1/4 p-16 border border-black">
                  <h2>Movie Title: {movie.title}</h2>
                  <p>Release Year: {movie.year}</p>
                  <p>IMDB Rating: {movie.imdb.rating}</p>
                </div>
              </Fragment>
            ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const client = await clientPromise;
  const db = client.db("sample_mflix");

  const data = await db
    .collection("movies")
    .find({ year: { $gte: 2000 }, "imdb.rating": { $gte: 8 } })
    .limit(20)
    .toArray();

  const movies = JSON.parse(JSON.stringify(data));

  return {
    props: { movies },
  };
}
