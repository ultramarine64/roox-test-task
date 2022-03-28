import React from 'react';
import styles from '../styles/UserCard.scss';

export default function UserCard(props) {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <span>
          ФИО: <b>{props.name}</b>
        </span>
        <span>
          город: <b>{props.city}</b>
        </span>
        <span>
          компания: <b>{props.company}</b>
        </span>
      </div>
      <a href="#">Подробнее</a>
    </div>
  );
}
