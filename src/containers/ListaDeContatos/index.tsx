import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { MainContainer, Nome } from '../../styles'

import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraContatos = () => {
    let contatosFiltradas = itens
    if (termo !== undefined) {
      contatosFiltradas = contatosFiltradas.filter(
        (item) =>
          item.nome.toLowerCase().search(termo.toLowerCase()) >= 0 ||
          item.numero.toString().search(termo) >= 0 ||
          item.Email.toLowerCase().search(termo.toLowerCase()) >= 0
      )
      if (criterio === 'grupo') {
        contatosFiltradas = contatosFiltradas.filter(
          (item) => item.grupo === valor
        )
      }
      return contatosFiltradas
    } else {
      return itens
    }
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''

    const complementacao =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''

    if (criterio === 'todas') {
      mensagem = `${quantidade} contato(s) encontrada(s) ${complementacao}`
    } else {
      mensagem = `${quantidade}  contato(s) marca(s) como:  ${valor} ${complementacao}`
    }

    return mensagem
  }

  const contatos = filtraContatos()
  const mensagem = exibeResultadoFiltragem(contatos.length)
  return (
    <MainContainer>
      <Nome as="p">{mensagem}</Nome>
      <ul>
        {contatos.map((c) => (
          <li key={c.nome}>
            <Contato
              numero={c.numero}
              Email={c.Email}
              nome={c.nome}
              grupo={c.grupo}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
