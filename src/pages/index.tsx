import React, { useState, useCallback, useEffect } from 'react';
import {FileContent, FileErrors, SelectedFiles, useFilePicker} from 'use-file-picker';
import ImageViewer from '../components/ImageViewer';
import ButtonContainer from '../components/ButtonContainer';
import ExifDataViewer from '../components/ExifDataViewer';
import ExifDataLoader from '../components/ExifDataLoader';
import styles from '../styles/styles.module.css';

const index = [
    'https://picsum.photos/200/300',
    'https://picsum.photos/250/350',
    'https://picsum.photos/300/400'
];

const IndexPage = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const [filesContent, setFilesContent] = useState<FileContent[]>([]);
    const [errors, setErrors] = useState<FileErrors>();

    const handlePrevClick = useCallback(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + index.length) % index.length);
    }, []);

    const handleNextClick = useCallback(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % index.length);
    }, []);

    const [openFileSelector, { loading }] = useFilePicker({
        readAs: 'DataURL',
        accept: 'image/*',
        multiple: false,
        limitFilesConfig: { max: 1 },
        maxFileSize: 50,
        onFilesSuccessfulySelected: (selectedFiles) => {
            const uploadedImage = selectedFiles.filesContent
            setFilesContent(uploadedImage);
            const updatedIndex = [...index];    // Create a copy of the index array via the spread operator

            if (uploadedImage !== undefined) {
                index.push(uploadedImage[0].content as string); // Support a single file upload
            }
            console.log(index);
            setCurrentImageIndex(index.length - 1);  // Set the current image index to the last image in the array
        },
        onFilesRejected: (fileErrors: FileErrors) => {
            setErrors(fileErrors);
            console.log(fileErrors);
        }
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    if (errors) {
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
