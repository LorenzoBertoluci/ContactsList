import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'

import { Campo } from '../../styles'

import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Contato'
import { Botao, BotaoAdicionar } from '../../styles'
import { useNavigate } from 'react-router-dom'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <div>
        {' '}
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroCard
                valor={enums.Grupo.FAMILIA}
                criterio="grupo"
                legenda="familia"
              />
              <FiltroCard
                valor={enums.Grupo.AMIGOS}
                criterio="grupo"
                legenda="amigos"
              />
              <FiltroCard
                valor={enums.Grupo.TRABALHO}
                criterio="grupo"
                legenda="trabalho"
              />
              <FiltroCard criterio="todas" legenda="todas" />
            </S.Filtros>
            <BotaoAdicionar onClick={() => navigate('/novo')}>
              {' '}
              Adicionar novo contato
            </BotaoAdicionar>
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>
            {' '}
            Voltar a lista de Contatos
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
