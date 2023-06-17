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
import { createElement, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })
//Color pattern link https://colorhunt.co/palette/f1f6f9394867212a3e9ba4b5

const fetcher = (url) => fetch(url).then((res) => res.json()); 

export default function Home() {

  const views = getView();

  const [view , setView] = useState({});

  const [moon, setMoon] = useState('none');
  const [sun, setSun] = useState('block');

  function changeDisplay(){
    if (moon == 'block' && views != undefined) {
      setMoon('none')
      setSun('block')
      setView(views.view[0])
    }
    else {
      setSun('none')
      setMoon('block')
      setView(views.view[1])
    }
  }

  return (
    <>
      <Head>
        <title>Harun Onur</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`} style={{color: view.third_color}}>
        <div className={`${styles.mode}`}>
          <i className="bi bi-moon-fill fs-5" id='moon' onClick={() => changeDisplay()} style={{display: `${moon}`}}></i>
          <i className="bi bi-sun-fill fs-5" id='sun' onClick={() => changeDisplay()} style={{display: `${sun}`, color: '#394867'}}></i>
        </div>
        <div className={`${styles.leftDiv}`} style={{backgroundColor: view.main_color}}>
        <Image
            src={"/pp.jpg"}
            alt='Picture of the author'
            className={`${styles.profilePhoto}`}
            width={500}
            height={500}
            priority={true}
          />
          <div style={{paddingLeft: "5rem", color: view.third_color}}>
            <h3>Harun Onur</h3>
            <p>Computer Engineering Student</p>
          </div>
        </div>
        <div className={`${styles.rightDiv}`} style={{backgroundColor: view.main_color}}>
          <div className={`${styles.rightMenu}`} style={{color: view.third_color}}>
            <div className={`${styles.rightMenuDiv}`}>
              <a href='#projectsView' className='text-reset text-decoration-none'>
                <div className={`${styles.rightMenuDivElements}`} style={{color: view.third_color, backgroundColor: view.second}}>
                  <h5>Projects</h5>
                </div>
              </a>
              <a href='#about' className='text-reset text-decoration-none'>
                <div className={`${styles.rightMenuDivElements}`} style={{color: view.third_color}}>
                  <h5>About Me</h5>
                </div>
              </a>
            </div>
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


function getView(){

  const { data, error, isLoading} = useSWR('/api/view', fetcher)

  if(error) console.log(error)

  //if(isLoading) console.log('Loading')

  if (!isLoading) {
      const css = JSON.parse(JSON.parse(data))
      return css
  }
}