import React from 'react'
import './../../styles/index.scss'
import Foto from './../../images/foto.jpeg'
import style from './Example.module.scss'

const Example = () => {
  return (
    <div>
      <h1>Пример</h1>
      <h2>Картинка с котом</h2>
      <div className={style.exampleContainer} >
        <img src={Foto} alt="Фото сотрудника" className={style.exampleImage}/>
        <button>Загрузить другую</button>
      </div>

    </div>
  )
}

export default Example
