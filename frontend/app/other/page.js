import Link from "next/link";

const page = () => {
  const page = Math.floor(Math.random() * 5 + 1);
  return (
    <Link href={`/?page=${page}`}>
      <div>GO Home</div>
    </Link>
  );
};

export default page;
