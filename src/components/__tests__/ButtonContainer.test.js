import { render, screen, fireEvent } from '@testing-library/react';
import ButtonContainer from '../ButtonContainer';

describe('ButtonContainer', () => {
    test('renders three buttons with correct text', () => {
        render(
            <ButtonContainer
                handlePrevClick={() => {}}
                handleNextClick={() => {}}
                uploadImage={() => {}}
            />
        );

        const previousButton = screen.getByText('Previous');
        const nextButton = screen.getByText('Next');
        const uploadButton = screen.getByText('Upload Image');

        expect(previousButton).toBeInTheDocument();
        expect(nextButton).toBeInTheDocument();
        expect(uploadButton).toBeInTheDocument();
    });

    test('calls handlePrevClick when Previous button is clicked', () => {
        const handlePrevClickMock = jest.fn();

        render(
            <ButtonContainer
                handlePrevClick={handlePrevClickMock}
                handleNextClick={() => {}}
                uploadImage={() => {}}
            />
        );

        const previousButton = screen.getByText('Previous');
        fireEvent.click(previousButton);

        expect(handlePrevClickMock).toHaveBeenCalledTimes(1);
    });

    test('calls handleNextClick when Next button is clicked', () => {
        const handleNextClickMock = jest.fn();

        render(
            <ButtonContainer
                handlePrevClick={() => {}}
                handleNextClick={handleNextClickMock}
                uploadImage={() => {}}
            />
        );

        const nextButton = screen.getByText('Next');
        fireEvent.click(nextButton);

        expect(handleNextClickMock).toHaveBeenCalledTimes(1);
    });

    test('calls uploadImage when Upload Image button is clicked', () => {
        const uploadImageMock = jest.fn();

        render(
            <ButtonContainer
                handlePrevClick={() => {}}
                handleNextClick={() => {}}
                uploadImage={uploadImageMock}
            />
        );

        const uploadButton = screen.getByText('Upload Image');
        fireEvent.click(uploadButton);

        expect(uploadImageMock).toHaveBeenCalledTimes(1);
    });
});
