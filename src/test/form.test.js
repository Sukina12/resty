import Form from '../components/form/index';
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';



it('need to run a function on button click', async () => {
    let callApi = jest.fn();
    render(<Form handleApiCall={callApi} />);
    const button = screen.getByTestId('mybtn');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
});
