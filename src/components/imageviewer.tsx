import React, { useState } from 'react'
import styles from "../styles/styles.module.css";


type Props = {
  images: string[]
}

const ImageViewer: React.FC<Props> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handlePrevClick = () => {
    setCurrentImageIndex(currentImageIndex - 1)
  }

  const handleNextClick = () => {
    setCurrentImageIndex(currentImageIndex + 1)
  }

  return (
      <div className={styles.image}>
        <img src={images[currentImageIndex]} />
          <div className={styles.buttons}>
              <button onClick={handlePrevClick} disabled={currentImageIndex === 0}>
                  Previous
              </button>
              <button onClick={handleNextClick} disabled={currentImageIndex === images.length - 1}>
                  Next
              </button>
          </div>
      </div>
  )
}

export default ImageViewer