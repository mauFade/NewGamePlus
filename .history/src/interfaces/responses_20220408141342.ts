/**
 * Interface de resposta de erro para as requisições
 * @param error Onde ocorreu o erro
 * @param message Qual é o erro
 * @param success Erro na requisição
 */
interface IError {
  error: string;
  message: string;
}

/**
 * Interface de resposta de sucesso para as requisições
 * @param success Confirmação de sucesso
 * @param data Dados
 */
interface ISuccess {
  success: boolean;
  data: any;
}

export { IError, ISuccess };
