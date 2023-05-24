import Link from "next/link";

export default async function Home({ searchParams }) {
  const page = +searchParams.page || 1;

  const req = await fetch(`http://localhost:3000/?page=${page}`, {
    cache: "no-cache",
  });
  const { name } = await req.json();
  return (
    <div>
      <h1>Hello {name}</h1>
      <Link href={`/?page=${page - 1}`}>
        <div>{"<"}</div>
      </Link>
      <Link href={`/?page=${page + 1}`}>
        <div>{">"}</div>
      </Link>
    </div>
  );
}
