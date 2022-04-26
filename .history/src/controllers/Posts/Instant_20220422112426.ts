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
      specific_game,
    }: { post_name: string; post_description: string; specific_game: string } = Object(request["body"]);
  }
}

export default new PostInstant();
