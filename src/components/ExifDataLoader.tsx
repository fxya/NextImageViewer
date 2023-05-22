import { useEffect, useState } from "react";
import exifr from "exifr";

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

        loadImageExifData();
    }, [index, currentImageIndex]);

    if (exifData === null) {
        // Return a placeholder or loading indicator
        return <div>Loading Exif data...</div>;
    }

    // Return the JSX element using the exifData
    return (
        <div>
            {/* Render the exifData properties */}
            {Object.entries(exifData).map(([key, value]) => (
                <div key={key}>
                    <span>{key}: </span>
                    <span>{value}</span>
                </div>
            ))}
        </div>
    );
};

export default ExifDataLoader;
