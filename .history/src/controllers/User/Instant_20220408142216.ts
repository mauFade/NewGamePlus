// Import interfaces
import { Request, Response } from "express";
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
  async create(request: Request, response: Response) {
    try {
    } catch (error) {
      // Retorna erro
      return response.status(error["code"] ? error["code"] : 500);
    }
  }

  /**
   * Rota para leitura de usuários
   * @returns Users
   */
  async read(request: Request, response: Response) {
    return response.send("Everything Okay Brah");
  }
}

export default new UserInstant();
