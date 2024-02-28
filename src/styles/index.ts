import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
  `

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`
export const Nome = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font0weight: bolt;
`
export const Campo = styled.input`
  display: block;
  margin-bottom: 16px;
  padding: 8px;
  background-color: #fff;
  border-radious: 8px;
  font-wheight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
`
export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azulEscuro};
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
export const BotaoAdicionar = styled(Botao)`
  background-color: ${variaveis.verde};
  margin-top: 8px;
  width: 100%;
`

export const Opcoes = styled.div`
  display: flex;
  align-items: center;
  flex-direction: collum;
`
export const Opcao = styled.div`
  justify-content: space-between;

  text-transform: capitalize;
  margin-right: 8px;
`

export default EstiloGlobal
