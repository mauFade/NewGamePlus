/**
 * Interface da dados para a criação de um usuário
 * @param name Nome do usuário
 * @param email Email do usuário
 * @param password Senha do usuário
 * @param cellphone Celuar do usuário
 * @param city Cidade do usuário
 */
interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  cellphone: string;
  city: string;
}

export default IUser;
