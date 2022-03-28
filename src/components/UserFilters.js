import React from 'react';
import styles from '../styles/UserFilters.scss';

export default function UserFilters({handleSortingByCity, handleSortingByCompanies}) {
  return (
    <div className={styles.filters}>
      <span>Сортировка</span>
      <button onClick={handleSortingByCity}>по городу</button>
      <button onClick={handleSortingByCompanies}>по компании</button>
    </div>
  )
}
