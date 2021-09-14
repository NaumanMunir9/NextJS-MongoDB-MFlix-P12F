// libraries
import Head from "next/head";

export default function MovieDetailsPage({ movie }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto">
        <h1 className="text-5xl">Movie Details For: {movie.title}</h1>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-wrap my-16">
          <img src={movie.poster} alt={movie.title} />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const data = await fetch(
    `http://localhost:3000/api/moviedetails?movie_id=573a13bdf29313caabd582fd`
  );
  const movie = await data.json();
  console.log(movie);

  return {
    props: { movie },
  };
}
