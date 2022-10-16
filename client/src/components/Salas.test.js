import { render, screen,fireEvent,waitFor } from '@testing-library/react';
import Salas from './Salas'
import {MemoryRouter} from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect';


test('Quando voce pesquisar algo, aparecera 5 videos sobre o assunto',async()=>{
    render(<MemoryRouter><Salas /></MemoryRouter>)
   const searchBar=screen.getByPlaceholderText('Procurar pelo nome do video...')
   const myForm=screen.getByRole("search")
   fireEvent.change(searchBar,{target:{value:'games'}})
   fireEvent.submit(myForm);
   console.log(myForm.id,'my form')
   const img= await waitFor(() =>{return screen.getAllByTestId('list')})
      expect(img).toHaveLength(5)
})  

test('Quando voce clica na imagem do video aparece o player na tela',async()=>{
    render(<MemoryRouter><Salas /></MemoryRouter>)
   const searchBar=screen.getByPlaceholderText('Procurar pelo nome do video...')
   const myForm=screen.getByRole("search")
   fireEvent.change(searchBar,{target:{value:'games'}})
   fireEvent.submit(myForm);
   console.log(myForm.id,'my form')
   const img= await waitFor(() =>{return screen.getAllByTestId('list')})
   fireEvent.click(img[0])
   const iframe=await waitFor(() =>{return screen.getAllByRole('iframe')})
})