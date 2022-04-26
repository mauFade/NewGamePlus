/**
 * Interface para a criação de posts
 * @param user_id ID do usuário que fez o post
 * @param post_id ID do post
 * @param post_name Nome do post
 * @param post_description Descrição
 * @param specific_game Jogo em questão do post
 */
interface IPost {
  user_id: string;
  post_id: string;
  post_name: string;
  post_description: string;
  specific_game: string;
}

export default IPost;
