/**
 * Interface para a criação de posts
 * @param post_name Nome do post
 * @param post_description Descrição
 * @param specific_game Jogo em questão do post
 */
interface IPost {
  post_id: string;
  post_name: string;
  post_description: string;
  specific_game: string;
}

export default IPost;
