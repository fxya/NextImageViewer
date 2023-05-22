import React, { useState, useCallback, useEffect } from 'react';
import { FileContent, FileErrors, useFilePicker } from 'use-file-picker';
import ImageViewer from '../components/ImageViewer';
import ButtonContainer from '../components/ButtonContainer';
import ExifDataLoader from '../components/ExifDataLoader';
import styles from '../styles/styles.module.css';

const initialIndex = [
    'https://picsum.photos/200/300',
    'https://picsum.photos/250/350',
    'https://picsum.photos/300/400'
];

const IndexPage = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [filesContent, setFilesContent] = useState<FileContent[]>([]);
    const [errors, setErrors] = useState<FileErrors | null>(null);
    const [loading, setLoading] = useState(false);

    const handlePrevClick = useCallback(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + initialIndex.length) % initialIndex.length);
    }, []);

    const handleNextClick = useCallback(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % initialIndex.length);
    }, []);

    const [openFileSelector, { loading: filePickerLoading }] = useFilePicker({
        readAs: 'DataURL',
        accept: 'image/*',
        multiple: false,
        limitFilesConfig: { max: 1 },
        maxFileSize: 50,
        onFilesSuccessfulySelected: (selectedFiles) => {
            const uploadedImage = selectedFiles.filesContent[0];
            setFilesContent([uploadedImage]);
            setCurrentImageIndex(initialIndex.length);
        },
        onFilesRejected: (fileErrors: FileErrors) => {
            setErrors(fileErrors);
        }
    });

    useEffect(() => {
        if (filesContent.length > 0) {
            const updatedIndex = [...initialIndex];
            updatedIndex.push(filesContent[0].content as string);
            setCurrentImageIndex(updatedIndex.length);
        }
    }, [filesContent]);

    if (filePickerLoading || loading) {
        return <div>Loading...</div>;
    }

    if (errors) {
        return <div>Error...</div>;
    }

    return (
        <div className={styles.container}>
            <h1>My Image Viewer App</h1>
            <ImageViewer images={initialIndex} currentImageIndex={currentImageIndex} />
            <ButtonContainer
                uploadImage={openFileSelector}
                handlePrevClick={handlePrevClick}
                handleNextClick={handleNextClick}
            />
            <ExifDataLoader index={initialIndex} currentImageIndex={currentImageIndex} />
        </div>
    );
};

export default IndexPage;
