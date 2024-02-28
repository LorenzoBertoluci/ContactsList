import { useDispatch, useSelector } from 'react-redux'
import { alteraFiltro } from '../../store/reducers/filtro'
import * as S from './styles'
import * as enums from '../../utils/enums/Contato'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criterio: 'grupo' | 'todas'
  valor?: enums.Grupo
}

const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, contatos } = useSelector((state: RootReducer) => state)

  const verficaEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const contarContato = () => {
    if (criterio === 'todas') return contatos.itens.length
    if (criterio === 'grupo') {
      return contatos.itens.filter((item) => item.grupo === valor).length
    }
  }

  const filtrar = () => {
    dispatch(
      alteraFiltro({
        criterio,
        valor
      })
    )
  }
  const contador = contarContato()
  const ativo = verficaEstaAtivo()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
