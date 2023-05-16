import React from 'react';
import styles from '../styles/styles.module.css';

type Props = {
    images: string[];
    currentImageIndex: number;
};

const ImageViewer = ({ images, currentImageIndex }: Props): JSX.Element => {
    const currentImage = images[currentImageIndex];

    return (
        <div className={styles.image}>
            <img src={currentImage} alt={'Example alt text'} />
        </div>
    );
};

export default ImageViewer;