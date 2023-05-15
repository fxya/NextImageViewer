import React from 'react'
import ImageViewer from '../components/imageviewer'
import styles from "../styles/styles.module.css";


const index = [
    'https://picsum.photos/200/300',
    'https://picsum.photos/250/350',
    'https://picsum.photos/300/400'
]

const IndexPage = () => {
    return (
        <div className={styles.container}>
            <h1>My Image Viewer App</h1>
            <ImageViewer images={index}/>
        </div>
    )
}

export default IndexPage