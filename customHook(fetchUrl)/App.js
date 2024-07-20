import "./styles.css";
import useFetch from "./useFetch";

export default function App() {
  const [data, error] = useFetch("https://jsonplaceholder.typicode.com/users");

  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="App">
      {data && (
        <ul>
          {data.slice(0, 5).map((item) => {
            return <li>{item.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
