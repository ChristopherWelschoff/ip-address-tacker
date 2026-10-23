"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const router = useRouter();

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const query = formData.get("search");

    if (typeof query !== "string" || query.trim() === "") {
      return;
    }

    router.push(`/?query=${encodeURIComponent(query.trim())}`);
  }

  return (
    <header className="md:bg-[url(/bg-desktop.png)] md:h-70 bg-[url(/bg-mobile.png)] bg-cover h-75 px-6">
      <Link href={"/"}>
        <div className="flex flex-col text-center text-white my-6">
          <h1 className="font-medium text-2xl">IP Address Tracker</h1>
          <small className="text-white/80">Click to show your IP Address</small>
        </div>
      </Link>
      <form onSubmit={handleSubmit} className=" max-w-xl mx-auto">
        <label className="sr-only" htmlFor="search">
          Search for IP Address or Domain
        </label>
        <div className="flex">
          <input
            placeholder="Search for any IP address or domain"
            className="bg-white  flex-1 rounded-l-xl p-4 placeholder:text-sm md:placeholder:text-xl"
            type="search"
            id="search"
            name="search"
          />
          <button
            type="submit"
            className="bg-gray-950 rounded-r-xl p-4 cursor-pointer transition ease-in-out duration-300 hover:bg-gray-400"
          >
            <Image
              alt="search for ip"
              src="/icon-arrow.svg"
              width={11}
              height={14}
            />
          </button>
        </div>
      </form>
    </header>
  );
}
