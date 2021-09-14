// libraries
import Head from "next/head";

export default function MovieDetailsPage({ movie }) {
  if (!movie) return <h2>Loading...</h2>;

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

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const data = await fetch(
    `http://localhost:3000/api/moviedetails?movie_id=${params.movie_id}`
  );
  const movie = await data.json();

  return {
    props: { movie },
    revalidate: 1,
  };
}
