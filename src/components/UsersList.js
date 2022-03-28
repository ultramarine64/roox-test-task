import React from 'react';
import styles from '../styles/UsersList.scss';
import UserCard from './UserCard';

export default function UsersList({usersData, handleUserSelecting}) {
  function generateUserCards() {
    return usersData.map(user => {
      return (
        <UserCard name={user.name}
                  city={user.address.city}
                  company={user.company.name}
                  key={user.id}
                  id={user.id}
                  handleUserSelecting={handleUserSelecting}
        />
      );
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Список пользователей</h1>
        {generateUserCards()}
        <span className={styles.usersNumber}>Найдено {usersData.length} пользователей</span>
      </div>
    </div>
  )
}
