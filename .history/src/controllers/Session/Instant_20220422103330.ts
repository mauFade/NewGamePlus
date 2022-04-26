// Import interfaces
import { Request, Response } from "express";
import IUser from "../../interfaces/user";
// Import conexão com o banco de dados
import connection from "../../database/connection";
// Import classes
import { CSuccess, CError } from "../../classes/responses";

class SessionInstant {
  /**
   * Rota de login de um usuário
   * @param email Email
   * @param password Senha
   * @returns Login, token
   */
  async create(request: Request, response: Response) {
    // Reecebe email e senha ddo body
    const { email, password }: { email: string; password: string } = request["body"];
    // Caso não seja inserido algum dado
    if (!email || !password) {
      // Retorna erro
      return response.status(401).send(new CError("Error at method create.", "Email and password are required."));
    }
    // Declara usuário
    const user: IUser[] = await connection("Users").select("email", "password").where({ email: email });
    // Caso não encontre um usuário
    if (!user || !user.length) {
      // Retorna erro
      return response.status(404).send(new CError("Error at method create", "User not found."));
    }
    // Caso a senha enviada esteja errada
    if (password !== user[0]["password"]) {
      return response.status(403).send(new CError("Error at method create", "Invalid password."));
    }
    console.log(password, user[0]["password"]);
    // Retorna usuário
    return response.status(200).send(new CSuccess(true, user));
  }
}

export default new SessionInstant();
