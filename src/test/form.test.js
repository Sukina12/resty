import Form from '../components/form/Form';
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';



it('need to run a function on button click', async () => {
    let handleApiCall = jest.fn();
    render(<Form handleApiCall={handleApiCall} />);
    const button = screen.getByTestId('mybtn');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    await waitFor(() => expect(handleApiCall).toHaveBeenCalled());
});
