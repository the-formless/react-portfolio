import carouselStyles from './imageContainer.module.scss'
import { useState } from 'react'
import {BiLeftArrowAlt, BiRightArrowAlt} from 'react-icons/bi'

function Images({images, projectName}) {

  const activeClass = carouselStyles['radio'] +' '+ carouselStyles['active'];
  const radioClass = carouselStyles['radio'];
  const [image, setImage] = useState(images[0]);

  const slide = (left) => {
    if(left) {
      if(images.indexOf(image) === 0){
        setImage(images[images.length - 1]);
      }
      else {
        setImage(images[images.indexOf(image) - 1]);
      }
    }
    else {
      if(images.indexOf(image) === images.length -1){
        setImage(images[0]);
      }
      else {
        setImage(images[images.indexOf(image) + 1]);
      }
    }
  }

  return (
    <div className={carouselStyles['image-container']}>
      <img src={image} className={carouselStyles['image']} alt={projectName}/>
      
      {images.length > 1 && <div className={carouselStyles['sliderBtns']}>
        <BiLeftArrowAlt className={carouselStyles['prev']} onClick={()=>slide(true)}/>
        <BiRightArrowAlt className={carouselStyles['prev'] + ' ' + carouselStyles['next']} onClick={()=>slide(false)}/>
      </div>}
      {images.length > 1 && 
      <div className={carouselStyles['image-buttons']}>
        {images.map((v, i) => 
          <div key={i} className={(v===image)? activeClass : radioClass} onClick={() => setImage(v)}></div>
        )}
      </div>}
    </div>
  )
}

export default Images