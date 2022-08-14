import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { ChangeEvent,FormEvent, InvalidEvent, useState } from 'react';
import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';
import styles from './Post.module.css';


interface Author {
  name: string;
  avatarUrl: string;
  role: string;
}

interface Content {
  type: string;
  content: string;
}
interface PostProps{
  author: Author;
  publishedAt: Date;
  content: Content[];
}

export function Post({author, publishedAt, content}: PostProps) {

  const [comments,setComments] = useState([
   "Muito massa o projeto! React é a melhor tecnologia de hoje!"
  ]);

  const [newCommentText, setNewCommentText] = useState('');


  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
    locale: ptBR,
  });

  const publishedDateRelativeToNow =  formatDistanceToNow(publishedAt,{
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText('');

  }
  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }


  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity('')
  }




  function deleteComment(commentToDelete: string){
    const commentsWithoutDeletedOne = comments.filter(comment => comment !== commentToDelete);
    setComments(commentsWithoutDeletedOne);

    
  }

  const isNewCommentEmpty = newCommentText.length === 0;


  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar alt="userPhoto" hasBorder={true} src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>

        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
         
          {publishedDateRelativeToNow} 

        </time>
      </header>

      <div className={styles.content} >
        {content.map((item) => {
          if(item.type === "paragraph"){
            return <p key={item.content}>{item.content}</p>
          }
          if(item.type === "link"){
            return <a key={item.content} href={item.content}>{item.content}</a>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea name="comment"
          placeholder="Deixe seu comentário"
          onChange={handleNewCommentChange}
          value={newCommentText}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>

        <button type="submit" disabled={isNewCommentEmpty} >Publicar</button>
        </footer>

      </form>

      <div className={styles.commentList} >
        {comments.map(comment => {
          return (
          <Comment 
            key={comment} 
            content={comment} 
            onDeleteComment={deleteComment}
          />)
        })}
      </div>
      

    </article>

  )
}




