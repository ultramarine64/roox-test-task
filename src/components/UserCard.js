import React from 'react';
import styles from '../styles/UserCard.scss';

export default function UserCard({name, city, company, id, handleUserSelecting}) {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <span>
          ФИО: <b>{name}</b>
        </span>
        <span>
          город: <b>{city}</b>
        </span>
        <span>
          компания: <b>{company}</b>
        </span>
      </div>
      <button onClick={() => handleUserSelecting(id)}>Подробнее</button>
    </div>
  );
}
