// libraries
import Head from "next/head";

// components
import Header from "../components/Header";
import MovieDetail from "../components/MovieDetail";

export default function MovieDetailsPage({ movie }) {
  if (!movie) return <h2>Loading...</h2>;

  return (
    <div>
      <Head>
        <title>
          {movie.title} ({movie.year})
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {!movie._id && <p>Loading...</p>}

      <div>
        <MovieDetail movie={movie} />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const data = await fetch(
    `${process.env.APP_DOMAIN}/api/moviedetails?movie_id=${context.query.movie_id}`
  );
  const movie = await data.json();

  return {
    props: { movie },
  };
}
