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
   * @param cellphone Celuar do usuário
   * @param city Cidade do usuário
   * @param country País do usuário
   * @returns Created User
   */
  async create(request: Request, response: Response) {
    try {
      const {
        name,
        email,
        password,
        cellphone,
        city,
        country,
      }: { name: string; email: string; password: string; cellphone: string; city: string; country: string } = Object(
        request["body"]
      );

      return response.status(200).json(new CSuccess(true, { name, email, password, cellphone, city, country }));
    } catch (error) {
      return response.status(500).send(new CError("Error at method create.", "Error."));
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
