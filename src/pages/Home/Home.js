import React from 'react'
import './../../styles/index.scss'
import Foto from './../../images/foto.jpeg'
import style from './Home.module.scss'

const Home = () => {
  return (
    <>
      <h1>Обо мне</h1>
      <h2>Мария Ушакова</h2>
      <div className={style.homeContainer}>
        <div className={style.homeDescription}>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
            similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
            rerum facilis est et expedita distinctio.
          </p>
          <button>Смотреть работу</button>
        </div>
        <img src={Foto} alt="Фото сотрудника" className={style.homeImage} />
      </div>
    </>
  )
}

export default Home
