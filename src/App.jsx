import { useEffect, useState } from "react";
import "./App.css";
import User from "./components/User";

function App() {
  const [users, setUsers] = useState([]); // State to hold user data fetched from the API

  // Fetch user data when the component mounts (when App is first rendered)
  useEffect(() => {
    // Define an async function to fetch user data
    async function fetchUsers() {
      const response = await fetch("https://raw.githubusercontent.com/cederdorff/race/master/data/users.json"); // Fetch data from the provided URL
      const data = await response.json(); // Parse the JSON response
      setUsers(data); // Update state with fetched user data
    }
    fetchUsers(); // Call the async function to initiate the fetch
  }, []);

  return (
    <main className="app">
      <h1>My First React App</h1>
      <section className="grid">
        {users.map(user => (
          <User key={user.id} name={user.name} mail={user.mail} image={user.image} />
        ))}
      </section>
    </main>
  );
}

export default App;
