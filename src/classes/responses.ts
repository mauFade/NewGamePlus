// Import interfaces
import { IError, ISuccess } from "../interfaces/responses";

class CError implements IError {
  /**
   * Classe que implementa a interface de erro
   * @param message Onde ocorreu o erro
   * @param error Qual é o erro
   */
  constructor(public message: string, public error: any) {
    this.message = message;
    this.error = error;
  }
}

class CSuccess implements ISuccess {
  /**
   * Classe que implementa a interface de sucesso
   * @param success Requisição bem sucedida
   * @param data Dados retornados
   */
  constructor(public success: boolean, public data: any) {
    this.success = success;
    this.data = data;
  }
}

export { CError, CSuccess };
