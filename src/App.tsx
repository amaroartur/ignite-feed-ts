import { Header } from './components/Header'
import { Sidebar } from './components/Sidebax'
import { Post, PostType } from './components/Post'

import "./global.css"

import styles from "./App.module.css"

function App() {

  const posts: PostType[] = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/amaroartur.png',
        name: 'Artur Amaro',
        role: 'Web developer'
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: 'jane.design/doctorcare' }
      ],
      publishedAt: new Date('2024-03-21 10:22:00')
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/diego3g.png',
        name: 'Diego Fernandes',
        role: 'CTO @Rocketseat'
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: 'jane.design/doctorcare' }
      ],
      publishedAt: new Date('2024-03-20 10:22:00')
    }
  ]

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
