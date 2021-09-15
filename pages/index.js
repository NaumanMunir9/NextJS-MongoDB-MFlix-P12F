// libraries
import { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";

// lib
import clientPromise from "../lib/mongodb";

export default function HomePage({ movies }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto">
        <h1 className="text-5xl">NextJS and MongoDB</h1>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-wrap my-16">
          {movies &&
            movies.map((movie) => (
              <Fragment key={movie._id}>
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-8">
                  <div className="md:flex">
                    <div className="md:flex-shrink-0">
                      <img
                        className="h-full w-full object-cover md:w-48"
                        src={movie.poster}
                        alt={movie.title}
                      />
                    </div>
                    <div className="p-8">
                      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        IMDB Rating: {movie.imdb.rating}
                      </div>
                      <div className="block mt-1 text-lg leading-tight font-medium text-black">
                        {movie.title} ({movie.year})
                      </div>
                      <p className="mt-2 text-gray-500">{movie.plot}</p>
                      <button
                        onClick={() => router.push(`/${movie._id}`)}
                        class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-4 w-full"
                      >
                        View
                      </button>
                    </div>
                  </div>
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
