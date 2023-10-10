/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useEffect, useState } from "react";
import axios from "axios";
import "./AllUsers.css";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

function AllUsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  // const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Users Display</h1>
      <div className="card-container">
        {users.map((user) => (
          <div className="card">
            {/* <button onClick={() => navigate(`/user/${user.id}`)}>
              {user.name}
            </button> */}
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllUsersPage;
