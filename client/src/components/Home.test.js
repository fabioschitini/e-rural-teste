import React from 'react';
import { render, screen,fireEvent,waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {MemoryRouter,BrowserRouter as Router} from 'react-router-dom'
import Home from './Home'
import instance from './apis/express'
const nomeTeste='testando 123'


 
 test('When you click on the add text, create alert input',()=>{
    render(<MemoryRouter><Home /></MemoryRouter>)
    const addImage=screen.getByTestId('add')
    fireEvent.click(addImage);
    expect(screen.getByText('De um nome a sua sala')).toBeInTheDocument()
    expect(screen.getByText('Submit')).toBeInTheDocument()
    expect(screen.getByText('Sair')).toBeInTheDocument()
})

test('When you click on the sair button, close alert',async ()=>{
    render(<MemoryRouter><Home /></MemoryRouter>)
    const addImage=screen.getByTestId('add')
    fireEvent.click(addImage);
    const sair=screen.getByText('Sair')
    fireEvent.click(sair)
    await waitFor(() =>{expect(screen.queryByText('De um nome a sua sala')).not.toBeInTheDocument()})
})

test('When you click on the submit button,submit info to database,then redirect to the room page',async ()=>{
    render(<MemoryRouter><Home /></MemoryRouter>)
    const addImage=screen.getByTestId('add')
    fireEvent.click(addImage);
    const nameField=await screen.findByPlaceholderText(/Insira o nome da sala/i) 
    const submit=screen.getByText('Submit')
    fireEvent.change(nameField,{target:{value:`${nomeTeste}`}})
    fireEvent.click(submit)
    await waitFor(() =>{expect( screen.getByTestId('test')).toHaveTextContent(`"name":"${nomeTeste}"`)})
    await waitFor(() =>{expect(screen.getByTestId('location-display')).toHaveTextContent('/salas/')})
}) 

test('When you click on the delete button,delete room,then redirect to the home page',async ()=>{
    const salasLista= await instance.get('/salas')
    const testSalas=salasLista.data.filter(game=>game.name==`${nomeTeste}`)[0]
    if(testSalas){
        render(<MemoryRouter><Home /></MemoryRouter>)
        await waitFor(() =>{return screen.getByTestId(`${nomeTeste}`)})
        const deletar=screen.getByTestId(`${nomeTeste}`)
        console.log(deletar.id,'butao de deletar')
        fireEvent.click(deletar) 
        await waitFor(() =>{expect( screen.getByTestId('test')).not.toHaveTextContent(`"name":"${nomeTeste}"`)})
        await waitFor(() =>{expect(screen.getByTestId('location-display')).toHaveTextContent('/')})
    }

})  