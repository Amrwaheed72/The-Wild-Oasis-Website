import Image from "next/image";
import Link from "next/link";
import bg from "../public/bg.png";
export default function Page() {
  return (
    <main className="mt-24">
      <Image src={bg} fill className="object-cover object-top" placeholder="blur" alt="Mountains and forests with two cabins" />
      <div className="relative z-10 text-center">
        <h1 className="text-6xl text-primary-50 mb-10 tracking-tight font-normal md:text-8xl">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-5 py-4 md:py-6  md:px-8 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all rounded-xl"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
