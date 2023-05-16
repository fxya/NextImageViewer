import {useEffect, useState} from "react";
import exifr from "exifr";

const ExifDataLoader  = ( index: string[], currentImageIndex: number) => {
    const [exifData, setExifData] = useState<Record<string, any> | null>(null);

    useEffect(() => {
        const loadImageExifData = async () => {
            const currentImage = index[currentImageIndex];
            const data = await exifr.parse(currentImage);
            setExifData(data);
        };

        loadImageExifData();
    }, [currentImageIndex]);


    return exifData;
}

export default ExifDataLoader;