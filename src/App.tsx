import {Post} from './components/Post/Post';
import { Header } from './components/Header/Header';

import './global.css';
import styles from './App.module.css'
import { Sidebar } from './components/SideBar/Sidebar';



// author: {name:"", avatar_url:"",role:""}
// publishedAt: Date
// content: String

 const posts = [
  {
   id: 1,
   author:{
      name: "Cássio Henrique",
      avatarUrl: "https://avatars.githubusercontent.com/u/60746590?v=4",
      role: "Web Developer"
    },
    content: [
      {type:"paragraph", content: "Faala LinkedIn 💚",},

      {type: "paragraph", content: "Acabei de subir esse projeto pro meu portifólio. Este é um projeto baseado no desafio da @Rockeseat presente no Ignite.",},

      {type: "link", content: "👉🏾 cassio_izidorio/reactjs",},
    ],
    publishedAt: new Date('2022-08-11 20:35:00')

    
  },
  {
    id: 2,
    author:{
       name: "Leonardo Miranda",
       avatarUrl: "https://github.com/diego3g.png",
       role: "CFO @ Itusescola"
     },
     
     content: [
       {type:"paragraph", content: "Eai Devs 👋🏾!",},
 
       {type: "paragraph", content: "O React é uma biblioteca criada para construir telas de forma declarativa. Ou seja: o React cria aplicações web para serem executadas em navegadores, sejam eles para desktop, mobile ou qualquer outro dispositivo.",},
 
       {type: "link", content: "Leo/Itus",},
     ],
     publishedAt: new Date('2022-08-12 20:35:00'),
 
     
   }
 ]
function App() {
 

  return (
    <div>
    
    <Header />

    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        {posts.map(posts =>{
          return (
          <Post
            key={posts.id}
            author={posts.author}
            publishedAt={posts.publishedAt}
            content={posts.content}

          
          />)
        })}
       
      </main>

    </div>


    </div>

    
  )
}

export default App
