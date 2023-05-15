import React, {useState} from 'react'
import styles from "../styles/styles.module.css";


type Props = {
    images: string[]
}

const ImageViewer = ({images}: Props): JSX.Element => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    const handlePrevClick = (): void => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex - 1 + images.length) % images.length
        );
    };

    const handleNextClick = (): void => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex + 1) % images.length
        );
    };

    return (
        <div className={styles.image}>
            <img src={images[currentImageIndex]} alt={'alt'}/>
            <div className={styles.buttons}>
                <button onClick={handlePrevClick}>
                    Previous
                </button>
                <button onClick={handleNextClick}>
                    Next
                </button>
            </div>
        </div>
    )
}

export default ImageViewer