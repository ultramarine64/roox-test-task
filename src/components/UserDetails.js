import React from 'react';
import styles from '../styles/UserDetails.scss'

export default function UserDetails({userData}) {
  const [isEditable, setEditable] = React.useState(false);
  const [formData, setFormData] = React.useState(
    {
      name: userData.name,
      username: userData.username,
      email: userData.email,
      street: userData.address.street,
      city: userData.address.city,
      zipcode: userData.address.zipcode,
      phone: userData.phone,
      website: userData.website,
      comment: ""
    }
  )

  function handleChange(event) {
    const {name, value} = event.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(JSON.stringify(formData));
  }

  return (
    <div className={styles.userDetails}>
      <h1>Профиль пользователя</h1>
      <button onClick={() => setEditable(true)}>Редактировать</button>
      <form id="userform" className={styles.detailsForm} onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          readOnly={!isEditable}
          required
        />

        <label htmlFor="username">User Name</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          readOnly={!isEditable}
          required
        />

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          readOnly={!isEditable}
          required
        />

        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          name="street"
          value={formData.street}
          onChange={handleChange}
          readOnly={!isEditable}
          required
        />

        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          readOnly={!isEditable}
          required
        />

        <label htmlFor="zipcode">Zip code</label>
        <input
          type="text"
          id="zipcode"
          name="zipcode"
          pattern="[0-9][0-9-]*"
          value={formData.zipcode}
          onChange={handleChange}
          readOnly={!isEditable}
          required
        />

        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          readOnly={!isEditable}
          required
        />

        {
          // @note Валидатор будет ругаться на сайты без https-префикса.
          // @todo Реализовать собственную валидацию.
        }
        <label htmlFor="website">Website</label>
        <input
          type="url"
          id="website"
          name="website"
          value={formData.website}
          onChange={handleChange}
          readOnly={!isEditable}
          required
        />

        <label htmlFor="comment">Comment</label>
        <textarea
          id="comment"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          readOnly={!isEditable}
        />
      </form>
      <input type="submit" form="userform" disabled={!isEditable} />
    </div>
  )
}
