import { useEffect, useState } from "react";
import exifr from "exifr";
import styles from "../styles/styles.module.css";

type ExifDataLoaderProps = {
    index: string[];
    currentImageIndex: number;
};

const ExifDataLoader = ({ index, currentImageIndex }: ExifDataLoaderProps) => {
    const [exifData, setExifData] = useState<Record<string, any> | null>(null);

    useEffect(() => {
        const loadImageExifData = async () => {
            const currentImage = index[currentImageIndex];
            const data = await exifr.parse(currentImage);
            setExifData(data);
        };

        loadImageExifData().then(() => { console.log("loadImageExifData()") } );
    }, [index, currentImageIndex]);

    if (exifData === null) {
        // Return a placeholder or loading indicator
        return <div>Loading Exif data...</div>;
    }

    // Return the JSX element using the exifData
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

export default ExifDataLoader;
