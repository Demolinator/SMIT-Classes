import Link from "next/link";

export default function About() {
  // [...slugs] = {slugs: ["ABC", "XYZ"]}
  return (
    <>
      <div>Visit thier projects</div>
      <ul>
        <li>
          <Link
            href={{
              pathname: "about/talal",
              query: { name: "test", projects: "ABC" },
            }}
          >
            Talal
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "about/sufiyan",
              query: { name: "test", projects: "XYZ" },
            }}
          >
            Sufiyan
          </Link>
        </li>
      </ul>
    </>
  );
}
