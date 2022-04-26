// Imports
import { Request, Response } from "express";

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
    const {
      name,
      email,
      password,
      games,
    }: {
      name: string;
      email: string;
      password: string;
      games: string;
    } = Object(request["body"]);
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
