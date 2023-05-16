import React, { useState } from 'react';
import styles from '../styles/styles.module.css';

type Image = {
    src: string;
    alt: string;
    metadata: string;
};

type Props = {
    images: Image[];
};

const ImageViewer = ({ images }: Props): JSX.Element => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const currentImage = images[currentImageIndex];

    const handlePrevClick = (): void => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex - 1 + images.length) % images.length
        );
    };

    const handleNextClick = (): void => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className={styles.image}>
            <img src={currentImage.src} alt={currentImage.alt} />
            <div className={styles.metadata}>{currentImage.metadata}<br/>Alt text: {currentImage.alt}</div>
            <div className={styles.buttons}>
                <button onClick={handlePrevClick}>Previous</button>
                <button onClick={handleNextClick}>Next</button>
            </div>
        </div>
    );
};

export default ImageViewer;