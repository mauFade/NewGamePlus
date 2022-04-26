// Import interfaces
import { Request, Response } from "express";
import IPost from "../../interfaces/posts";
// Imort classes
import { CSuccess, CError } from "../../classes/responses";
// Import modules
import crypto from "crypto";
// Import conexão com o banco de dados
import connection from "../../database/connection";

class PostInstant {
  /**
   * Função para a criação de um post
   * @param post_name Nome do post
   * @param post_description Desrição do post
   * @param specific_game
   */
  async create(request: Request, response: Response) {
    // Recebe dados do corpo da requisição
    const {
      postName,
      postDescription,
    }: {
      postName: string;
      postDescription: string;
    } = Object(request["body"]);

    let { specificGame }: { specificGame: string } = Object(request["body"]);

    // Caso não seja enviado nome ou descrição do post
    if (!postName || !postDescription) {
      // Retorna erro
      return response
        .status(401)
        .send(new CError("Error at method create.", "Name and description of the post are required data."));
    }
    // Caso não seja enviado um jogo específico do post
    if (!specificGame) {
      // Define como um post geral, sem jogo específico
      specificGame = "General type";
    }
    // Defina um id do post
    const id = crypto.randomBytes(4).toString();
    // Define a interface do post
    const post: IPost = {
      post_id: id,
      post_name: postName,
      post_description: postDescription,
      specific_game: specificGame,
    };
    // Salva o post no banco
    await connection("Posts").insert(post);
    // Retorna sucesso e dados do post
    return response.status(200).send(new CSuccess(true, post));
  }
}

export default new PostInstant();
