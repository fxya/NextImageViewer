import styles from '../styles/styles.module.css';
import React from 'react';

type Props = {
    handlePrevClick: () => void;
    handleNextClick: () => void;
};

const ButtonContainer = ({ handlePrevClick, handleNextClick }: Props) => {
    return (
        <div className={styles.buttons}>
            <button onClick={handlePrevClick}>Previous</button>
            <button onClick={handleNextClick}>Next</button>
        </div>
    );
};

export default ButtonContainer;
