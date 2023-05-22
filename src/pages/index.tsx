import React, { useState, useCallback, useEffect } from 'react';
import { FileContent, FileErrors, useFilePicker } from 'use-file-picker';
import ImageViewer from '../components/ImageViewer';
import ButtonContainer from '../components/ButtonContainer';
import ExifDataLoader from '../components/ExifDataLoader';
import styles from '../styles/styles.module.css';

const images = [
    'https://picsum.photos/200/300',
    'https://picsum.photos/250/350',
    'https://picsum.photos/300/400'
];

const IndexPage = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [errors, setErrors] = useState<FileErrors | null>(null);
    const [loading, setLoading] = useState(false);

    const handlePrevClick = useCallback(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }, []);

    const handleNextClick = useCallback(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, []);

    const [openFileSelector, { loading: filePickerLoading }] = useFilePicker({
        readAs: 'DataURL',
        accept: 'image/*',
        multiple: false,
        limitFilesConfig: { max: 1 },
        maxFileSize: 50,
        onFilesSuccessfulySelected: (selectedFiles) => {
            const uploadedImage = selectedFiles.filesContent[0];
            images.push(uploadedImage.content as string);
            setCurrentImageIndex(images.length - 1);
        },
        onFilesRejected: (fileErrors: FileErrors) => {
            setErrors(fileErrors);
        }
    });

    if (filePickerLoading || loading) {
        return <div>Loading...</div>;
    }

    if (errors) {
        return <div>Error...</div>;
    }

    return (
        <div className={styles.container}>
            <h1>My Image Viewer App</h1>
            <ImageViewer images={images} currentImageIndex={currentImageIndex} />
            <ButtonContainer
                uploadImage={openFileSelector}
                handlePrevClick={handlePrevClick}
                handleNextClick={handleNextClick}
            />
            <ExifDataLoader index={images} currentImageIndex={currentImageIndex} />
        </div>
    );
};

export default IndexPage;
