import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import ListUsers from "./components/ListUsers";

function App() {
  const [utilisateurs, setUtilisateurs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      return res.data;
    };

    getData().then((users) => setUtilisateurs(users));
  }, []);

  return (
    <div>
      {utilisateurs.length === 0 ? (
        <h1>Liste des utilisateurs vide</h1>
      ) : (
        <ListUsers users={utilisateurs} />
      )}
    </div>
  );
}

export default App;
