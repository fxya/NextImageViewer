import React, { useState, useCallback } from 'react';
import { FileContent, useFilePicker } from 'use-file-picker';
import ImageViewer from '../components/ImageViewer';
import ButtonContainer from '../components/ButtonContainer';
import ExifDataViewer from '../components/ExifDataViewer';
import ExifDataLoader from '../components/ExifDataLoader';
import styles from '../styles/styles.module.css';

const index  = [
    'https://picsum.photos/200/300',
    'https://picsum.photos/250/350',
    'https://picsum.photos/300/400'
];

const IndexPage = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    const [openFileSelector, { loading, filesContent, errors }] = useFilePicker({
        readAs: 'DataURL',
        accept: 'image/*',
        multiple: true,
        limitFilesConfig: { max: 1 },
        // minFileSize: 0.1, // in megabytes
        maxFileSize: 50,
        imageSizeRestrictions: {
            maxHeight: 900, // in pixels
            maxWidth: 1600,
            minHeight: 600,
            minWidth: 768,
        },
    });

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

    const handleUploadImage = useCallback((filesContent: FileContent[]): void => {
        index.push(filesContent[0].content);
        setCurrentImageIndex((prevIndex) =>
            (prevIndex + 1) % index.length
        );
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (errors.length) {
        return <div>Error...</div>;
    }

    return (
        <div className={styles.container}>
            <h1>My Image Viewer App</h1>
            <ImageViewer images={index} currentImageIndex={currentImageIndex} />
            <ButtonContainer
                uploadImage={openFileSelector}
                handlePrevClick={handlePrevClick}
                handleNextClick={handleNextClick}
            />
            <ExifDataViewer exifData={ExifDataLoader(index, currentImageIndex)} />
        </div>
    );
};

export default IndexPage;
