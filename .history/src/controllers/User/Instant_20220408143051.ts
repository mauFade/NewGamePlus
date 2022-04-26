// Import interfaces
import { Request, Response } from "express";
import { ISuccess, IError } from "../../interfaces/responses";
// Import classes
import { CSuccess, CError } from "../../classes/responses";

class UserInstant {
  /**
   * Rota para criação de um novo usuário
   * @param name Nome do usuário
   * @param email Email do usuário
   * @param password Senha do usuário
   * @param games Jogos do usuário
   * @returns Created User
   */
  async create(request: Request, response: Response): Promise<Response<Record<number, IError | ISuccess>>> {
    try {
      const { name, email }: { name: string; email: string } = Object(request["body"]);

      console.log(name, email);

      return response.status(200).json(new CSuccess(true, { name, email }));
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Rota para leitura de usuários
   * @returns Users
   */
  async read(request: Request, response: Response) {
    try {
    } catch (error) {
      console.log(error);
    }
  }
}

export default new UserInstant();
