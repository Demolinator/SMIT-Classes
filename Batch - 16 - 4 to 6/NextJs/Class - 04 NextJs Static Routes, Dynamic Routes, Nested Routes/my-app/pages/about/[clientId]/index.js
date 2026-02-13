import { useRouter } from "next/router";
import Link from "next/link";

export default function Client() {
    const route = useRouter();
    let { clientId, projects } = route.query;

  return (
    <>
      <div>Visit {clientId}'s Projects Detail Page</div>
      <ul>
        <li>
          <Link href={`${clientId}/${projects}`}>{projects}</Link>
        </li>
        {/* <li>
          <Link href={`${clientId}/xyz`}>xyz</Link>
        </li> */}
      </ul>
    </>
  );
}
