// Import interfaces
import { Request, Response } from "express";
import IUser from "../../interfaces/user";
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
      // Rece os dados de criação do usuário do body
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
      const user: IUser[] = await connection("Users").insert({
        id,
        name,
        email,
        password,
        cellphone,
        city,
      });
      // Retorna sucesso, email e senha para acesso
      return response.status(200).send(new CSuccess(true, { email, password }));
      // Caso algo tenha dado errado
    } catch (error) {
      // Retorna erro
      return response.status(500).send(new CError("Error at method create.", "Error."));
    }
  }

  /**
   * Rota para leitura de usuários
   * @returns Users
   */
  async read(request: Request, response: Response) {
    try {
      // Define todos os usuários
      const users = await connection("Users").select("*");

      // Restorna os usuários
      return response.status(200).send(new CSuccess(true, users));

      // Caso algo tenha dado errado
    } catch (error) {
      // Retorna erro
      return response.status(500).send(new CError("Error at method read.", "Error."));
    }
  }

  /**
   * Rota para fazer update dos dados de um usuário
   * @param newName Novo nome,
   * @param newEmail Novo email,
   * @param newPassword Nova senha,
   * @param newCity Nova cidade,
   * @param newCity Nova cidade,
   * @returns Sucesso
   */
  async update(request: Request, response: Response) {
    try {
      // Recebe o id e email do usuário cujois os dados serão alterados da query
      const { id, email }: { id: string; email: string } = Object(request["query"]);

      // Recebe os dados a serem atualizados do body
      const {
        newName,
        newEmail,
        newPassword,
        newCellphone,
        newCity,
      }: {
        newName?: string;
        newEmail?: string;
        newPassword?: string;
        newCellphone?: string;
        newCity?: string;
      } = Object(request["body"]);

      // Caso não sejam enviados o id ou email na query
      if (!id || !email) {
        return response.status(401).send(new CError("Error at method update.", "No id or email provided."));
      }

      const user: IUser[] = await connection("Users").where({ id: id, email: email }).select("*");

      // Caso não seja encontrado um usuário com esse email
      if (!user || !user.length) {
        return response.status(404).send(new CError("Error at method update", "No user found with this id."));
      }

      // Atualiza o usuário
      await connection("Users").where({ id: id, email: email }).select("*").update({
        name: newName,
        email: newEmail,
        password: newPassword,
        cellphone: newCellphone,
        city: newCity,
      });

      return response.status(200).send(new CSuccess(true, "User updated successfully."));
      // Caso algo tenha dado errado
    } catch (error) {
      // Retorna erro
      return response.status(500).send(new CError("Error at method update.", "Error."));
    }
  }

  /**
   * Função para excluir um usuário
   * @returns Usuário excluido
   */
  async delete(request: Request, response: Response) {
    try {
      // Recebe um id do corpo da requisição
      const { userID }: { userID: string } = Object(request["body"]);

      // Busca um id do banco de dados
      const id = await connection("Users").select("id").where({ id: userID });

      // Caso tenha sido encontrado um id no banco igual ao repassado
      if (!id) {
        console.log(id[0]["id"]);
        return response.status(200).send(new CSuccess(true, `Achou. ${id[0]["id"]}`));
      }
      // Senão
      else {
        // Retorna erro
        console.log("Caiu no else");
        return response.status(401).send(new CError("Error ate method delete.", "Not authorized."));
      }

      // Em caso de erro
    } catch (error) {
      // Retorna erro
      return response.status(500).send(new CError("Error at method delete.", "Error."));
    }
  }
}

export default new UserInstant();
