import styles from "@/styles/styles.module.css";
import React from "react";

const ExifDataViewer = ({ exifData }: { exifData: Record<string, any> | null }): JSX.Element => {
    return (
        <div className={styles.exifData}>
            <h2>Exif Data</h2>
            <div className={styles.exifDataContent}>
                {exifData ? (
                    <pre>{JSON.stringify(exifData, null, 2)}</pre>
                ) : (
                    <p>No Exif data found</p>
                )}
            </div>
        </div>
    );
};

export default ExifDataViewer;