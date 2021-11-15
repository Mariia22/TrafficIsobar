import React from 'react'
import './../../styles/index.scss'
import Foto from './../../images/foto.jpeg'
import style from './Home.module.scss'

const Home = () => {
  return (
    <div className={style.homeWrapper}>
      <h1>Обо мне</h1>
      <div className={style.homeContainer}>
        <div className={style.homeDescription}>
          <h2>Мария Ушакова</h2>
          <p>Около 2-х лет назад нашла в интернете HTMLAcademy и прошла задания на бесплатных тренажерах.  Меня привели в восторг, скорость развития технологий и возможности языков HTML и CSS. Затем добавила в копилку знаний JS и React, стала развивать небольшие pet-проекты.
            Traffic Isobar привлек меня интересными реализованными работами, с которыми я ознакомилась на официальном сайте. Мне хотелось бы поучаствовать в создании подобных проектов вместе с вашей крутой командой профессионалов.
          </p>
          <button>Смотреть работу</button>
        </div>
        <img src={Foto} alt="Фото сотрудника" className={style.homeImage} />
      </div>
    </div>
  )
}

export default Home
