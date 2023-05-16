import React from 'react';
import ImageViewer from '../components/imageviewer';
import styles from '../styles/styles.module.css';

const images = [
    {
        src: 'https://picsum.photos/200/300',
        alt: 'Image 1',
        metadata: 'Example metadata for Image 1',
    },
    {
        src: 'https://picsum.photos/250/350',
        alt: 'Image 2',
        metadata: 'Example metadata for Image 2',
    },
    {
        src: 'https://picsum.photos/300/400',
        alt: 'Image 3',
        metadata: 'Example metadata for Image 3',
    },
];

const IndexPage = () => {
    return (
        <div className={styles.container}>
            <h1>My Image Viewer App</h1>
            <ImageViewer images={images} />
        </div>
    );
};

export default IndexPage;