/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

interface User {
  id: number;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  email: string;
  phone: string;
}

function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<User>(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        setUser(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setUser(null);
      }
    }

    fetchData();
  }, [id]);

  return (
    <div>
      <h2>User Details</h2>
      {user && (
        <div>
          <p>address: {user.address.city}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <Link to={`/user/${id}/tasks`}>View Tasks</Link>
        </div>
      )}
    </div>
  );
}

export default UserDetail;
