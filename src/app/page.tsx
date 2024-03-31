import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-screen w-full">
      <div className="w-[70%]">
        <p className="text-lg">
          Welcome to our Instagram Clone. The home page is currently under construction, and we&apos;re working on adding authentication functionality. Our primary focus right now is on creating the pages and user interfaces.
        </p>
        <div className="mt-4">
          <p>Here are the pages we&apos;ve created so far:</p>
          <ul className="mt-2 list-disc">
            <li className="hover:underline">
              <Link href="/login">Login</Link>
            </li>
            <li className="hover:underline">
              <Link href="/signup">Signup</Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
