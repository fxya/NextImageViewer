import styles from '../styles/styles.module.css';
import React, {MouseEventHandler} from 'react';

type Props = {
    handlePrevClick: () => void;
    handleNextClick: () => void;
    uploadImage: () => void;
};

const ButtonContainer = ({ handlePrevClick, handleNextClick, uploadImage }: Props) => {
    return (
        <div className={styles.buttons}>
            <button onClick={handlePrevClick}>Previous</button>
            <button onClick={handleNextClick}>Next</button>
            <button onClick={uploadImage}>Upload Image</button>
        </div>
    );
};

export default ButtonContainer;
