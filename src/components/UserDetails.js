import React from 'react';
import styles from '../styles/UserDetails.scss'

export default function UserDetails({userData}) {
  return (
    <div className={styles.userDetails}>
      <h1>Профиль пользователя</h1>
      <button>Редактировать</button>
      <form id="userform" className={styles.detailsForm}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={userData.name} disabled />

        <label htmlFor="username">User Name</label>
        <input type="text" id="username" name="username" value={userData.username} disabled />

        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" name="email" value={userData.email} disabled />

        <label htmlFor="street">Street</label>
        <input type="text" id="street" name="street" value={userData.address.street} disabled />

        <label htmlFor="city">City</label>
        <input type="text" id="city" name="city" value={userData.address.city} disabled />

        <label htmlFor="zip">Zip code</label>
        <input type="text" id="zip" name="zip" value={userData.address.zipcode} disabled />

        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" name="phone" value={userData.phone} disabled />

        <label htmlFor="website">Website</label>
        <input type="url" id="website" name="website" value={userData.website} disabled />

        <label htmlFor="comment">Comment</label>
        <textarea id="comment" name="comment" disabled />
      </form>
      <input type="submit" form="userform" disabled />
    </div>
  )
}
