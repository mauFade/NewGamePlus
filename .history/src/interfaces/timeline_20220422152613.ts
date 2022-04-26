/**
 * Interface de posts que são mostrado na timeline
 * @param name Nome do usuário
 * @param email Nome do usuário
 * @param postName Nome do post
 * @param postDescription Descrição do post
 * @param Game Game específico
 */
interface ITimeline {
  name: string;
  email: string;
  postName: string;
  postDescription: string;
  specific_game?: string;
}

export default ITimeline;
