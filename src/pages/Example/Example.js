import React, { useState, useEffect } from 'react'
import './../../styles/index.scss'
import style from './Example.module.scss'
import { getImage } from '../../api/api'
import Loading from './../../images/loading.webp'

const Example = () => {
  const [image, setImage] = useState(Loading);

  async function makeGetRequest() {
    let catImage = await getImage();
    setImage(catImage);
  }

  useEffect(() => {
    makeGetRequest()
  }, [])

  function updateImage() {
    setImage(Loading);
    makeGetRequest();
  }

  return (
    <div>
      <h1>Пример</h1>
      <h2>Картинка с котом</h2>
      <div className={style.exampleContainer} >
        <img src={image} alt="Фото кота" className={style.exampleImage} />
        <button onClick={updateImage}>Загрузить другую</button>
      </div>

    </div>
  )
}

export default Example
