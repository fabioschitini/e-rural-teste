import { render, screen,fireEvent,waitFor } from '@testing-library/react';
import Nav from './Nav'
import {MemoryRouter} from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect';


test('when you clikc on the link, the url changes accorginly ',()=>{
    render(<MemoryRouter><Nav /></MemoryRouter>)
   const home=screen.getByText('Home Page')
   fireEvent.click(home);
   expect(screen.getByTestId('location-display')).toHaveTextContent('/')
})
