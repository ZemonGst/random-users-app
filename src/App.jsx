import { useState, useEffect } from 'react'
import { fetchUsers } from './services/api'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
      setLoading(false);
    };

    loadUsers();
  }, []);

  if (loading) {
    return <h2 className="loading">Loading...</h2>;
  }

  return (
    <div className="container">
      <h1 className="title">Random Users</h1>

      <div className="grid">
        {users.map((user, index) => (
          <div key={user.login?.uuid || index} className="card">
            <img 
              src={user.picture.large} 
              alt={`${user.name.first} ${user.name.last}`} 
              loading="lazy"
            />

            <h2>
              {user.name.title} {user.name.first} {user.name.last}
            </h2>

            <p className="email">{user.email}</p>
            <p className="phone">{user.phone}</p>

            <p className="location">
              {user.location.city}, {user.location.country}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App
