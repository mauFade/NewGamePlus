/**
 * Interface para a criação de posts
 * @param id ID do usuário que fez o post
 * @param post_id ID do post
 * @param post_name Nome do post
 * @param post_description Descrição
 * @param specific_game Jogo em questão do post
 */
interface IPost {
  id: string;
  post_id: string;
  post_name: string;
  post_description: string;
  specific_game: string;
}

export default IPost;
