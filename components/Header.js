// libraries
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" onClick={() => router.push("/")}>
              <span className="sr-only">NextJS&MongoDB</span>
              <img
                className="h-10 w-auto sm:h-10"
                src="/nextjs-mongodb.jpg"
                alt="logo"
              />
            </a>
          </div>

          <div as="nav" className="hidden md:flex space-x-10">
            <a
              href="#"
              onClick={() => router.push("/")}
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
