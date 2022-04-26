// Import interfaces
import { Request, Response } from "express";
import { ISuccess, IError } from "../../interfaces/responses";
import User from "../../interfaces/user";
// Import classes
import { CSuccess, CError } from "../../classes/responses";
// Import modules
import crypto from "crypto";
// Import conexão com o banco de dados
import connection from "../../database/connection";

class UserInstant {
  /**
   * Rota para criação de um novo usuário
   * @param name Nome do usuário
   * @param email Email do usuário
   * @param password Senha do usuário
   * @param cellphone Celuar do usuário
   * @param city Cidade do usuário
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
      }: {
        name: string;
        email: string;
        password: string;
        cellphone: string;
        city: string;
      } = Object(request["body"]);

      // Caso não seja inserido algum dos dados
      if (!name || !email || !password || !cellphone || !city) {
        return response.status(403).send(new CError("Error at method create.", "All fields are required."));
      }

      // Declara um id aleatório
      const id = crypto.randomBytes(4).toString("hex");

      // Cria o usuário
      const user: User[] = await connection("Users").insert({
        id,
        name,
        email,
        password,
        cellphone,
        city,
      });
      // Retorna sucesso
      return response.status(200).send(new CSuccess(true, user));
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
