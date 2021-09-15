// libraries
import { useRouter } from "next/router";

export default function MovieDetail({ movie }) {
  const router = useRouter();

  return (
    <>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt={movie.title}
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={movie.poster}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                IMDB Rating: {movie.imdb.rating}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium my-4">
                {movie.title} ({movie.year})
              </h1>

              <p className="leading-relaxed mt-4">{movie.fullplot}</p>
              <div className="flex flex-col mt-6 pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex">
                  <span className="mr-3">Award Wins:</span>
                  {movie.awards.wins}
                </div>

                <div className="flex">
                  <span className="mr-3">Award Nomination:</span>
                  {movie.awards.nominations}
                </div>

                <div className="flex">
                  <span className="mr-3">Directors:</span>
                  {movie.directors}
                </div>

                <div className="flex">
                  <span className="mr-3">Cast:</span>
                  {movie.cast.map((item, i) => (
                    <div key={i}>{item},&nbsp;</div>
                  ))}
                </div>

                <div className="flex">
                  <span className="mr-3">Runtime:</span>
                  {movie.runtime} mins
                </div>
              </div>
              <div className="flex">
                <button
                  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full"
                  onClick={() => router.push("/")}
                >
                  Go Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
