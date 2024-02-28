import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'
import * as enums from '../../utils/enums/Contato'

import {
  Botao,
  BotaoCancelarRemover,
  BotaoSalvar,
  Opcoes,
  Opcao
} from '../../styles'
import { BarraAcoes } from './styles'

type Props = ContatoClass

const Contato = ({
  Email: EmailOriginal,
  grupo: grupoOriginal,
  nome,
  numero: numeroOriginal
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)

  const [Email, setEmail] = useState('')
  const [numero, setNumero] = useState('')
  const [grupo, setGrupo] = useState(enums.Grupo.TRABALHO)

  useEffect(() => {
    if (EmailOriginal.length > 0) {
      setEmail(EmailOriginal)
    }
    if (numeroOriginal.length > 0) {
      setNumero(numeroOriginal)
    }
    if (grupoOriginal) {
      setGrupo(grupoOriginal as enums.Grupo)
    }
  }, [EmailOriginal, grupoOriginal, numeroOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setEmail(EmailOriginal)
    setNumero(numeroOriginal)
    setGrupo(grupoOriginal)
  }

  return (
    <S.Card>
      <label htmlFor={nome}>
        <S.Nome>
          {estaEditando && <em> Editando: </em>}
          {nome}
        </S.Nome>
      </label>
      <S.Tag parametro="grupo" grupo={grupo}>
        {estaEditando ? (
          <>
            <Opcoes>
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
                    defaultChecked={grupo === grupoOriginal}
                  />{' '}
                  <label htmlFor={grupo}>{grupo}</label>
                </Opcao>
              ))}
            </Opcoes>
          </>
        ) : (
          <>{grupo}</>
        )}
      </S.Tag>
      <S.InputArea
        disabled={!estaEditando}
        value={Email}
        onChange={(evento) => setEmail(evento.target.value)}
      />
      <S.InputArea
        disabled={!estaEditando}
        value={numero}
        typeof="tel"
        onChange={(evento) => setNumero(evento.target.value)}
      />

      <BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    Email,
                    grupo,
                    nome,
                    numero
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <BotaoCancelarRemover onClick={() => dispatch(remover(numero))}>
              Remover
            </BotaoCancelarRemover>
          </>
        )}
      </BarraAcoes>
    </S.Card>
  )
}

export default Contato
