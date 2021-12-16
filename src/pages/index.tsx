import styles from '../styles/style.module.scss'
import Head from 'next/head'
import { GetStaticProps } from 'next'

export default function Home() {
  return (
    <>
     <Head>
        <title>Board - Organizando suas tarefas.</title>
      </Head>
    <main className={styles.contentContainer}>

      <img src="./images/board-user.svg" alt="Ferramenta board" />

      <section className={styles.callToAction}>
        <h1>Uma ferramenta para seu dia a dia Escreva, planeje e organize-se..</h1>
        <p>
          <span>100% Gratuita </span>
           e online.
        </p>
      </section>

      <div className={styles.donaters}>
        <img src="https://sujeitoprogramador.com/steve.png" alt="Usuario1" />
      </div>

    </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = ()=> {

  return{
    props:{
      
    },
    revalidate: 60 * 60 //atualiza a cada 60 minutos
  }
}