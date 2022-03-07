export async function getServerSideProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => json);
    console.log(data);
  return {
    props: {
      data: data || [],
    },
  };
}

export default function Persetujuan({data}) {
  return (
    <>
      <h1>Persetujuan</h1>
      <h3>{data.title}</h3>
    </>
  );
}
