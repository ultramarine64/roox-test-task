import React from 'react';
import UsersList from './components/UsersList'

export default function App() {
  const [usersData, setUsersData] = React.useState(null);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUsersData(data));
  }, []);

  return (
    usersData
    ?
    <UsersList usersData={usersData} />
    :
    null
  );
}
