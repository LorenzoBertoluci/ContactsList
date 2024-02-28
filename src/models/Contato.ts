import * as enums from '../utils/enums/Contato'

class Contato {
  nome: string
  grupo: enums.Grupo
  Email: string
  numero: string

  constructor(nome: string, grupo: enums.Grupo, Email: string, numero: string) {
    this.nome = nome
    this.grupo = grupo
    this.Email = Email
    this.numero = numero
  }
}

export default Contato
