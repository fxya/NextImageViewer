import React, { useEffect, useState } from 'react';
import ImageViewer from '../components/imageviewer';
import styles from '../styles/styles.module.css';
import exifr from 'exifr';

const index = [
    'https://picsum.photos/200/300',
    'https://picsum.photos/250/350',
    'https://picsum.photos/300/400'
];

const IndexPage = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const [exifData, setExifData] = useState<Record<string, any> | null>(null);

    useEffect(() => {
        const loadImageExifData = async () => {
            const currentImage = index[currentImageIndex];
            const data = await exifr.parse(currentImage);
            setExifData(data);
        };

        loadImageExifData();
    }, [currentImageIndex]);

    const handlePrevClick = (): void => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex - 1 + index.length) % index.length
        );
    };

    const handleNextClick = (): void => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex + 1) % index.length
        );
    };

    return (
        <div className={styles.container}>
            <h1>My Image Viewer App</h1>
            <ImageViewer images={index} currentImageIndex={currentImageIndex} />

            {exifData && (
                <div className={styles.exifData}>
                    <h2>EXIF Data</h2>
                    <pre>{JSON.stringify(exifData, null, 2)}</pre>
                </div>
            )}

            <div className={styles.buttons}>
                <button onClick={handlePrevClick}>Previous</button>
                <button onClick={handleNextClick}>Next</button>
            </div>
        </div>
    );
};

export default IndexPage;