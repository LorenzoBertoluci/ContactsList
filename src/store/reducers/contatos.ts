import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      nome: 'Andre Sousa',
      grupo: enums.Grupo.AMIGOS,
      Email: 'andre.sousa' + '@gmail.com',
      numero: '51987654321'
    },
    {
      nome: 'Marcos Antonio',
      grupo: enums.Grupo.FAMILIA,
      Email: 'marcos.antonio' + '@hotmail.com',
      numero: '54987654322'
    },
    {
      nome: 'Paula Figueira',
      grupo: enums.Grupo.AMIGOS,
      Email: 'paula.figueira' + '@gmail.com',
      numero: '11987654323'
    },
    {
      nome: 'Paula Martins',
      grupo: enums.Grupo.TRABALHO,
      Email: 'paula.martins' + '@gmail.com',
      numero: '11987654333'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<string>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.numero !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDaContato = state.itens.findIndex(
        (c) => c.numero === action.payload.numero
      )

      if (indexDaContato >= 0) {
        state.itens[indexDaContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Contato>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('Contato já existe')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
