import { getAll } from "@/services/service";

export default function Home({ products }) {
  const productsList = products.map(product => {
    return (
      <li key={product.id}>
        {product.title} <br />
        {product.description}
      </li>
    )
  })
  return (
    <div>
      <h1>
        Hello Page
      </h1>
      <ul>
          {productsList}
      </ul>
    </div>
  );
}


// export async function getServerSideProps() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//   const data = await response.json()
//   return {
//     props: {
//       posts: data
//     }
//   }
// }

export async function getStaticProps() {
  const data = getAll()
  return {
    props: {
      products: data
    }
  }
}