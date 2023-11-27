import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const TeamPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect( () => {
    const getUsers = async () =>  {
      try {
        setloading(true)
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await res.json();
        setUsers(users);
      } finally {
       setloading(false);
      }
};
    getUsers()
  }, []);

    if(loading) {
      return <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    }
  return (
    <div>
      <div className="container">
        <div className="render">
            {users.map((user) => (
               <div className="render_data" key={user.id}>

                <h4 className="user_id">{user.id} </h4>

                 <h3 className="user_name">Name: {user.name}</h3>

                 <div className="iteams">
                 <h4>Username: {user.username}</h4>
                 <p>Website: {user.website} </p>
                 <h4>Email: <Link className="alink" to={`/team`}>{user.email}</Link> </h4>
                 <h4 className="phone_link">Phone: <a className="alink" href="/">{user.phone}</a> </h4>
                 </div>

                 <NavLink className="link" to={`/TeamMemberPage`}>Lear more...</NavLink>
               </div>
            ))}
          </div>
      </div>
    </div>
  );
};
export default TeamPage;