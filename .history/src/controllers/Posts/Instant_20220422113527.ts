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
      post_name,
      post_description,
    }: {
      post_name: string;
      post_description: string;
    } = Object(request["body"]);

    let { specific_game }: { specific_game: string } = Object(request["body"]);

    // Caso não seja enviado nome ou descrição do post
    if (!post_name || !post_description) {
      // Retorna erro
      return response
        .status(401)
        .send(new CError("Error at method create.", "Name and description of the post are required data."));
    }
    // Caso não seja enviado um jogo específico do post
    if (!specific_game) {
      // Define como um post geral, sem jogo específico
      specific_game = "General type";
    }
    // Define a interface do post
    const post: IPost = {
      post_name: post_name,
      post_description: post_description,
      specific_game: specific_game,
    };
  }
}

export default new PostInstant();
