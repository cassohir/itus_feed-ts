import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from '../Avatar/Avatar';

import styles from './Comment.module.css';

interface CommentProps{
  content: string;
  onDeleteComment: (comment: string) => void;
}


export function Comment({content, onDeleteComment}: CommentProps) {

  const [likeCount,setLikeCount] = useState(0);
  function handleLikeComment(){
    setLikeCount((state) =>{
      return state + 1;
    });

  }


  function handleDeleteComment(){

    onDeleteComment(content);
  }

  return (

    <div className={styles.comment}>
      <Avatar 
        hasBorder={false} 
        src="https://www.github.com/davidsonmarra.png" 
        alt="userPhoto"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <div className={styles.header}>
            <div className={styles.authorAndTime}>
              <strong>Mateus Marques</strong>
              <time title="11 de Agosto de 2022" dateTime="2022-08-11 20:35" > Cerca de 1h atrás</time>
            </div>

            <button 
                onClick={handleDeleteComment} 
                title="Deletar comentário">
             <Trash size={24}/>
            </button>
          </div>

          <p>{content}</p>

        </div>

        <footer>
         
        <button onClick={handleLikeComment}>
          <ThumbsUp/>
          Aplaudir <span>{likeCount}</span>
        </button>
        </footer>

      </div>



    </div>

  )
  
  
}