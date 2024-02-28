import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import * as enums from '../../utils/enums/Contato'

type TagProps = {
  grupo?: enums.Grupo
  parametro: 'grupo'
}

function retornaCorDeFundo(props: TagProps): string {
  if (props.grupo === enums.Grupo.FAMILIA) {
    return variaveis.azul
  } else if (props.grupo === enums.Grupo.AMIGOS) {
    return variaveis.amarelo2
  }
  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`
export const Nome = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`
export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`
export const InputArea = styled.textarea`
  color: #8b8b8b;
  font-size: 16px;
  line-height: 18px;
  font-family: 'Roboto Mono';
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`
