// Import interfaces
import { Request, Response } from "express";
import IPost from "../../interfaces/posts";
import ITimeline from "../../interfaces/timeline";
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
   * @param specific_game Jogo em específico. Defaults to General Type
   * @returns New post
   */
  async create(request: Request, response: Response) {
    try {
      // Recebe dados do corpo da requisição
      const {
        postName,
        postDescription,
      }: {
        postName: string;
        postDescription: string;
      } = Object(request["body"]);

      let { specificGame }: { specificGame: string } = Object(request["body"]);
      // Recebe email no usuário da query
      const { email }: { email: string } = Object(request["query"]);
      // Caso não seja passado um email na query
      if (!email) {
        return response.status(403).send(new CError("Error at method create.", "You must be logged to create a post."));
      }
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
      const id = crypto.randomBytes(2).toString("hex", 0, 2);
      // Busca no banco de dados o id do usuário que está criando o post
      const auxId = await connection("Users").select("id").where({ email: email });

      // Caso não seja encontrado um usuário com esse email
      if (!auxId || !auxId.length) {
        return response.status(404).send(new CError("Error at method create.", "No user found with this id."));
      }
      // Desestrutura responsta do banco para um id string
      const userId = auxId[0]["id"] as string;
      // Define a interface do post
      const post: IPost = {
        user_id: userId,
        post_id: id,
        post_name: postName,
        post_description: postDescription,
        specific_game: specificGame,
      };
      // Salva o post no banco
      await connection("Posts").insert(post);
      // Retorna sucesso e dados do post
      return response.status(200).send(new CSuccess(true, post));
      // Em caso de erro
    } catch (error) {
      // Retorna erro
      return response.status(500).send(new CError("Error at method create.", "Error."));
    }
  }

  /**
   * Timeline para ver todos os posts
   * @returns Posts Timeline
   */
  async read(request: Request, response: Response) {
    try {
      // Recebe id do usuário da query
      const { id }: { id: string } = Object(request["query"]);
      // Caso não seja enviado um id
      if (!id) {
        return response.status(403).send(new CError("Error at method read.", "You must be logged in to view this."));
      }
      // Busca posts do banco
      const output: ITimeline[] = await connection("Users")
        .join("Posts", "Posts.user_id", "=", "Users.id")
        .select("post_id", "post_name", "post_description", "specific_game", "name", "email", "city");

      // Declara ouput para retornar todos os dados
      // const output: ITimeline = {
      //   name: users["name"],
      //   email: users["email"],
      //   postName: posts["post_name"],
      //   postDescription: posts["post_description"],
      //   game: "General type" ? undefined : posts["specific_game"],
      // };

      return response.status(200).send(new CSuccess(true, output));
      // Em caso de erro
    } catch (error) {
      // Retorna erro
      return response.status(500).send(new CError("Error at method create.", "Error."));
    }
  }
}

export default new PostInstant();
