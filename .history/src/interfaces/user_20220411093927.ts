/**
 * Interface da dados para a cariação de um usuário
 *  @param name Nome do usuário
 * @param email Email do usuário
 * @param password Senha do usuário
 * @param cellphone Celuar do usuário
 * @param city Cidade do usuário
 */
interface User {
  name: string;
  email: string;
  password: string;
  cellphone: string;
  city: string;
}

export { User };
