import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form } from './styles'
import {
  MainContainer,
  Nome,
  Campo,
  BotaoSalvar,
  Opcoes,
  Opcao
} from '../../styles'
import * as enums from '../../utils/enums/Contato'
import { cadastrar } from '../../store/reducers/contatos'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [Email, setEmail] = useState('')
  const [grupo, setGrupo] = useState(enums.Grupo.TRABALHO)
  const [numero, setNumero] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        grupo,
        Email,
        numero
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Nome>Novo Contato</Nome>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={nome}
          onChange={({ target }) => setNome(target.value)}
          type="Text"
          placeholder="Nome"
          required
        />
        <Campo
          value={Email}
          onChange={({ target }) => setEmail(target.value)}
          type="email"
          placeholder="e-mail"
        />
        <Campo
          value={numero}
          onChange={({ target }) => setNumero(target.value)}
          type="tel"
          placeholder="Numero de telefone"
          required
        />
        <Opcoes>
          <p>Grupo</p>

          {Object.values(enums.Grupo).map((grupo) => (
            <Opcao key={grupo}>
              <input
                value={grupo}
                name="grupo"
                type="radio"
                onChange={(evento) =>
                  setGrupo(evento.target.value as enums.Grupo)
                }
                id={grupo}
                defaultChecked={grupo === enums.Grupo.TRABALHO}
              />{' '}
              <label htmlFor={grupo}>{grupo}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
