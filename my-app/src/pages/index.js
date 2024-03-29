import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link'
import useSWR from 'swr';
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import ProjectsView from './projectView'
import MyAccounts from './socialAccounts'
import AboutView from './aboutView'
import Footer from './footer'
import { createElement, useEffect, useState } from 'react'
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] })
//Color pattern link https://colorhunt.co/palette/f1f6f9394867212a3e9ba4b5

const fetcher = (url) => fetch(url).then((res) => res.json()); 

export default function Home({ views }) {

  const [viewList , setViewList] = useState(views);
  const [view , setView] = useState(viewList.view[0]);

  const [moon, setMoon] = useState('none');
  const [sun, setSun] = useState('block');

  function changeDisplay(){
    if (moon == 'block' && views != undefined) {
      setMoon('none')
      setSun('block')
      setView(viewList.view[0])
    }
    else {
      setSun('none')
      setMoon('block')
      setView(viewList.view[1])
    }
  }

  const { locale } = useRouter();

  return (
    <>
      <Head>
        <title>Harun Onur</title>
        <meta property="description" content="Computer Engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`} style={{color: view.tcolor}}>
        <DisplayTexture texture={view.texture} />
        <div className={`${styles.mode}`}>
          <i className="bi bi-moon-fill fs-5" id='moon' onClick={() => changeDisplay()} style={{display: `${moon}`}}></i>
          <i className="bi bi-sun-fill fs-5" id='sun' onClick={() => changeDisplay()} style={{display: `${sun}`, color: '#394867'}}></i>
        </div>
        <div className={`${styles.leftDiv}`}>
        <Image
            src={"/pp.jpg"}
            alt='Picture of the author'
            className={`${styles.profilePhoto}`}
            width={500}
            height={500}
            priority={true}
          />
          <div className='leftdivTextDiv' style={{color: view.tcolor}}>
            <h3 className='name'>Harun Onur</h3>
            <PrintProfession locale={locale}/>
          </div>
        </div>
        <div className={`${styles.rightDiv}`}>
          <div className={`${styles.rightMenu}`} style={{color: view.tcolor}}>
            <PrintMenu locale={locale} view={view}></PrintMenu>
          </div>
        </div>
      </main>
      <ProjectsView view={view}></ProjectsView>
      <MyAccounts view={view}></MyAccounts>
      <AboutView view={view}></AboutView>
      <Footer view={view}></Footer>
      
    </>
  )
}



export async function getServerSideProps(){

  const res = await fetch(`${process.env.URL}/api/view`);
  const views = await res.json();

  return{
    props:{
      views: JSON.parse(views),
    },
  }
}

function PrintProfession({ locale }){

  if(locale == 'tr'){
    return <p>Bilgisayar Mühendisliği Öğrencisi</p>
  }
  else if(locale == 'de'){
    return <p>Student der Informatik</p>
  }
  else{
    return <p>Computer Engineering Student</p>
  }

}

function PrintMenu({ locale, view }){

  if(locale == 'tr'){
    return(
      <div className={`${styles.rightMenuDiv}`}>
        <a href='#projectsView' className='text-reset text-decoration-none'>
          <div className={`${styles.rightMenuDivElements}`} style={{color: view.tcolor}}>
            <h5>Projeler</h5>
          </div>
        </a>
        <a href='#about' className='text-reset text-decoration-none'>
          <div className={`${styles.rightMenuDivElements}`} style={{color: view.tcolor}}>
            <h5>Hakkımda</h5>
          </div>
        </a>
      </div>
    )
  }
  else if(locale == 'de'){
    return(
      <div className={`${styles.rightMenuDiv}`}>
      <a href='#projectsView' className='text-reset text-decoration-none'>
        <div className={`${styles.rightMenuDivElements}`} style={{color: view.tcolor}}>
          <h5>Projekte</h5>
        </div>
      </a>
      <a href='#about' className='text-reset text-decoration-none'>
        <div className={`${styles.rightMenuDivElements}`} style={{color: view.tcolor}}>
          <h5>Über Mich</h5>
        </div>
      </a>
    </div>
    )
  }
  else{
    return(
      <div className={`${styles.rightMenuDiv}`}>
      <a href='#projectsView' className='text-reset text-decoration-none'>
        <div className={`${styles.rightMenuDivElements}`} style={{color: view.tcolor}}>
          <h5>Projects</h5>
        </div>
      </a>
      <a href='#about' className='text-reset text-decoration-none'>
        <div className={`${styles.rightMenuDivElements}`} style={{color: view.tcolor}}>
          <h5>About Me</h5>
        </div>
      </a>
    </div>
    )
  }
}




/*function getView(){

  const { data, error, isLoading} = useSWR('/api/view', fetcher)

  if(error) console.log(error)

  //if(isLoading) console.log('Loading')

  if (!isLoading) {
      const css = JSON.parse(JSON.parse(data))
      return css
  }
}

*/