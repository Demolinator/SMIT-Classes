import { useRouter } from "next/router";

export default function Client() {
    const route = useRouter();
    let { clientId, projectId } = route.query;
    // console.log(route.query)

  return (
    <>
      <div>Project {clientId} Details Page</div>
      <h2>{projectId}</h2>
    </>
  );
}
