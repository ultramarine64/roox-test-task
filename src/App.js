import React from 'react';
import UserFilters from './components/UserFilters';
import UserDetails from './components/UserDetails';
import UsersList from './components/UsersList';
import styles from './styles/App.scss';

export default function App() {
  const [usersData, setUsersData] = React.useState(null);
  const [selectedUser, setSelectedUser] = React.useState(null);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUsersData(data));
  }, []);

  function handleSortingByCity() {
    const compareByCities = function(userA, userB) {
      return userA.address.city.localeCompare(userB.address.city);
    }

    setUsersData(prevUsersData => prevUsersData.slice().sort(compareByCities));
  }

  function handleSortingByCompanies() {
    const compareByCompanies = function(userA, userB) {
      return userA.company.name.localeCompare(userB.company.name);
    }

    setUsersData(prevUsersData => prevUsersData.slice().sort(compareByCompanies));
  }

  function handleUserSelecting(selectedId) {
    setSelectedUser(usersData.find((user) => user.id === selectedId));
  }

  return (
    usersData
    ?
      <main className={styles.main}>
        <UserFilters handleSortingByCity={handleSortingByCity}
                     handleSortingByCompanies={handleSortingByCompanies}
        />
        {
          selectedUser
          ?
            <UserDetails userData={selectedUser} />
          :
            <UsersList usersData={usersData} handleUserSelecting={handleUserSelecting} />
        }
      </main>
    :
      null
  );
}
