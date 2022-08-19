import Head from "next/head";

const posts = [
  { title: "react Testing", excerpt: " Learn React Teting" },
  { title: "react with tailwind", excerpt: " Learn React with tailwind" },
];

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8 bg-gray-300">
      <Head>
        <title>O Almário</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='lg:col-span-8 col-span-1'>
        {/* buscando os titulos e resumos das postagens */}
        {posts.map((post, index) => (
          <div>
            {post.title}
            {post.excerpt}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12"></div>
      <div className="lg:col-span-4 col-span-1 ">
          <div className='lg:sticky relative top-8'>
            
          </div>
      </div>
    </div>
  );
}
