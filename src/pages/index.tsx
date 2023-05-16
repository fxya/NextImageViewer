import React, { useState, useCallback } from 'react';
import ImageViewer from '../components/ImageViewer';
import ButtonContainer from '../components/ButtonContainer';
import styles from '../styles/styles.module.css';
import ExifDataViewer from '../components/ExifDataViewer';
import ExifDataLoader from '../components/ExifDataLoader';

const index = [
    'https://picsum.photos/200/300',
    'https://picsum.photos/250/350',
    'https://picsum.photos/300/400'
];

const IndexPage = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    const handlePrevClick = useCallback((): void => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex - 1 + index.length) % index.length
        );
    }, []);

    const handleNextClick = useCallback((): void => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex + 1) % index.length
        );
    }, []);

    return (
        <div className={styles.container}>
            <h1>My Image Viewer App</h1>
            <ImageViewer images={index} currentImageIndex={currentImageIndex} />
            <ButtonContainer
                handlePrevClick={handlePrevClick}
                handleNextClick={handleNextClick}
            />
            <ExifDataViewer exifData={ExifDataLoader(index, currentImageIndex)} />
        </div>
    );
};

export default IndexPage;