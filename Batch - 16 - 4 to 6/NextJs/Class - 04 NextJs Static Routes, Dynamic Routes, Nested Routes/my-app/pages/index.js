import Link from "next/link";

export default function Home() {
  return (
    <>
      <h2>Home Page</h2>
      <Link href="/about">Go to Home About Page</Link>
    </>
  );
}
