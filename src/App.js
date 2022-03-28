import React from 'react';
import UserFilters from './components/UserFilters';
import UsersList from './components/UsersList'
import styles from './styles/App.scss'

export default function App() {
  const [usersData, setUsersData] = React.useState(null);

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

  return (
    usersData
    ?
    <div className={styles.main}>
      <UserFilters handleSortingByCity={handleSortingByCity}
                   handleSortingByCompanies={handleSortingByCompanies}
      />
      <UsersList usersData={usersData} />
    </div>
    :
    null
  );
}
