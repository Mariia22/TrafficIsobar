import React, { useEffect } from 'react'
import axios from 'axios'
import './../../styles/index.scss'
import Foto from './../../images/foto.jpeg'
import style from './Example.module.scss'

const Example = () => {
  async function makeGetRequest() {
    let res = await axios.get('https://docs.thecatapi.com/');

    let data = res.data;
    console.log(data);
  }

  useEffect(() => {
    makeGetRequest()
  }, [])

  return (
    <div>
      <h1>Пример</h1>
      <h2>Картинка с котом</h2>
      <div className={style.exampleContainer} >
        <img src={Foto} alt="Фото сотрудника" className={style.exampleImage} />
        <button>Загрузить другую</button>
      </div>

    </div>
  )
}

export default Example
