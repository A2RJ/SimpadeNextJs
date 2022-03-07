export default function Dashboard({ data }) {
  return <>{data ? <h1>{data.title}</h1> : ""}</>;
}
