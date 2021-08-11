import Form from '../components/form/Form';
import Results from '../components/results/Results';
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import '@testing-library/user-event'


it('need to run a function on button click', async () => {
    let callApi = jest.fn();
    render(<Form handleApiCall={callApi} />);
    const button = screen.getByTestId('mybtn');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    await waitFor(() => expect(callApi).toHaveBeenCalled());
});

it('render result after submit the form', async () => {
    const data = {
        headers: {
            "cache-control": 'string no-cache'
        },
        count: 2,
        results: [
            { name: 'fake thing 1', url: 'http://fakethings.com/1' },
            { name: 'fake thing 2', url: 'http://fakethings.com/2' },
        ],
    };
    render(<Results data={data} />);
    const items = screen.getByTestId('result');

    expect(items).toHaveTextContent('"count : "2"headers : "{ "cache-control": "string no-cache" }"results : "[ { "name": "fake thing 1", "url": "http://fakethings.com/1" }, { "name": "fake thing 2", "url": "http://fakethings.com/2" } ]');
})
