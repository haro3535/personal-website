import { useState } from "react"
import Image from 'next/image'
import { useRouter } from "next/router";
import Texture1 from './backgroundTexture1';
import Texture2 from './backgroundTexture2';

export default function AboutView({ view }){

    const router = useRouter();
    const { locale } = router;
    console.log(locale)

    const [displayWhite , setDisplayWhite] = useState('flex');
    const [displayBlue , setDisplayBlue] = useState('none');

    if (view.texture == 0 && displayWhite != 'flex') {
        setDisplayWhite('flex')
        setDisplayBlue('none')
    }
    else if (view.texture == 1 && displayWhite != 'none'){
        setDisplayWhite('none')
        setDisplayBlue('flex')
    }

    const year = new Date().getFullYear() - 2003;

    switch(locale){
        case 'tr':
                return(
                    <>
                    <main className="container-fluid d-flex vh-100  justify-content-center align-items-center" id="about" style={{backgroundColor: view.mcolor, color: view.tcolor}}>
                        <div className="container h-auto vw-70" style={{zIndex: '2'}}>
                            <PrintTurkish year={year}></PrintTurkish>
                        </div>
                    </main>
                    </>
                )
        case 'de':
                return(
                    <>
                    <main className="container-fluid d-flex vh-100  justify-content-center align-items-center" id="about" style={{backgroundColor: view.mcolor, color: view.tcolor}}>
                        <div className="container h-auto vw-70" style={{zIndex: '2'}}>
                            <PrintDeutsch year={year}></PrintDeutsch>
                        </div>
                    </main>
                    </>
                )
        default:
                return(
                    <>
                    <main className="container-fluid d-flex vh-100  justify-content-center align-items-center" id="about" style={{backgroundColor: view.mcolor, color: view.tcolor}}>
                        <div className="container h-auto vw-70" style={{zIndex: '2'}}>
                            <PrintEnglish year={year}></PrintEnglish>
                        </div>
                    </main>
                    </>
                )
    }

    return(
        <>
            <main className="container-fluid d-flex vh-100  justify-content-center align-items-center" id="about" style={{backgroundColor: view.mcolor, color: view.tcolor}}>
                <div className="container h-auto vw-70" style={{zIndex: '2'}}>
                    
                </div>
            </main>
        </>
    )
};


function DisplayTexture({ texture }){

    if (texture == 0) {
      return <Texture1></Texture1>
    }
    
    return <Texture2></Texture2>
  }

function PrintTurkish({year}){

    return(
        <>
        <h3>Hakkımda</h3>
        <br/>
        <p>Merhabalar,</p>
            <p>
                Ben Harun, {year} yaşındayım. İzmir Bornova'da doğdum ve doğduğumdan beri İzmir'de yaşıyorum. İlk okulu Attaroğlu İlkokulu'nda okudum. 
                İlkokulu bitirdikten sonra Çamkıran Ortaokulu'na gittim ve ortaokuldan sonra da liseyi <b>Suphi Koyuncuoğlu Anadolu Lisesi'nde</b> okudum. 
                Şimdi ise <b>İzmir Ekonomi Üniversitesi Bilgisayar Mühendisliği</b> 2.sınıf öğrencisiyim. 
                <br/>
                <br/>
                Kodlamaya ilk olarak üniversite sınavından önce 2020 yılında başladım. <b>HTML</b> ile başlayıp <b>CSS</b> ile devam ettim. Daha sonra <b>JavaScript'e </b>
                çalıştım, backend için. Üniversiteye girdiğimde ise dil olarak <b>Java</b> eğitimi aldım. Artıdan <b>NodeJS</b>, <b>Flutter</b>, <b>Python</b>, <b>MySQL</b>, 
                <b> MongoDB</b> ve <b>Arduino </b> gibi farklı diller ve frameworkler ile çalıştım. İlerleyen zamanlarda ise yeni dilleri ve frameworkleri öğrenmeyi planlıyorum.  
                <br/>
                <br/>
                Kariyer hedefim, birçok önemli alanda deneyim kazanmak ve bu deneyimleri kullanarak biraz olsun ülkemi dışa bağımlılığını azaltmak. Bu alanlara örnek verecek olursam
                bunlar; <b>finans sektörü</b>, <b>yapay zeka</b> ve <b>uzay endüstrisi</b> gibi alanlar olabilir. Ama geleceğin ne getireceği belli olmaz...
            </p>
        </>
    )
}

function PrintEnglish({year}){
    return(
        <>
            <h3>About Me</h3>
            <br/>
            <p>Hello,</p>
            <p>
                I'm Harun, {year} years old. I was born in Bornova, Izmir, and I have been living in Izmir since I was born. I attended Attaroğlu Primary School for my elementary education. 
                After completing elementary school, I went to Çamkıran Middle School, and then I attended <b>Suphi Koyuncuoğlu Anatolian High School</b> for my high school education. 
                Now, I am a third-year student studying Computer Engineering at <b>Izmir University of Economics.</b>
                <br/>
                <br/>
                I started coding in 2020 before the university entrance exam. I began with <b>HTML</b> and continued with <b>CSS</b>. Later, I studied <b>JavaScript</b> for backend development.
                When I entered university, I received training in <b>Java</b> as a programming language. Additionally, I have worked with different languages and frameworks such as <b>NodeJS</b>, <b>Flutter</b>, <b>Python</b>, <b>MySQL</b>, 
                <b> MongoDB</b> and <b>Arduino</b>. In the future, I plan to learn new languages and frameworks.  
                <br/>
                <br/>
                My career goal is to gain experience in various important fields and use that experience to reduce my country's external dependence to some extent. Examples of these fields could be 
                the <b>finance sector</b>, <b>artificial intelligence</b>, and the <b>space industry</b>. However, it's uncertain what the future holds...
            </p>
        </>
    )
}

function PrintDeutsch({year}){
    return(
        <>
            <h3>Über Mich</h3>
            <br/>
            <p>Hallo,</p>
            <p>
                Ich bin Harun, {year} Jahre alt. Ich wurde in Bornova, Izmir, geboren und lebe seit meiner Geburt in Izmir. Ich habe die Attaroğlu-Grundschule besucht.
                Nach dem Abschluss der Grundschule bin ich zur Çamkıran-Mittelschule gegangen und danach habe ich die <b>Suphi Koyuncuoğlu Anatolian High School</b> für meine weiterführende Schulausbildung besucht. 
                Derzeit bin ich im zweiten Jahr und studiere Informatik an der <b>Izmir University of Economics.</b>
                <br/>
                <br/>
                Ich habe im Jahr 2020 mit dem Programmieren begonnen, bevor ich die Universität betreten habe. Ich fing mit <b>HTML</b> an und setzte meine Lernreise mit <b>CSS</b> fort. Später habe ich <b>JavaScript</b> für die Backend-Entwicklung studiert. 
                Als ich an die Universität kam, erhielt ich eine Schulung in <b>Java</b> als Programmiersprache. Zusätzlich habe ich mit verschiedenen Sprachen und Frameworks wie <b>NodeJS</b>, <b>Flutter</b>, <b>Python</b>, <b>MySQL</b>, <b>MongoDB</b> und <b>Arduino</b> gearbeitet. In Zukunft plane ich, 
                neue Sprachen und Frameworks zu lernen.
                <br/>
                <br/>
                Mein Karriereziel ist es, Erfahrungen in verschiedenen wichtigen Bereichen zu sammeln und diese Erfahrungen zu nutzen, um die externe Abhängigkeit meines Landes in gewissem Maße zu verringern. Beispiele für solche Bereiche könnten der <b>Finanzsektor</b>, <b>künstliche Intelligenz</b> und <b>die Raumfahrtindustrie</b> sein.
                Allerdings ist ungewiss, was die Zukunft bereithält...
            </p>
        </>
    )
}


/*
İngilizcesi

Hello,

I'm Harun, 20 years old. I was born in Bornova, Izmir, and I have been living in Izmir since I was born. I attended Attaroğlu Primary School for my elementary education. After completing elementary school, I went to Çamkıran Middle School, and then I attended Suphi Koyuncuoğlu Anatolian High School for my high school education. Now, I am a second-year student studying Computer Engineering at Izmir University of Economics.

I started coding in 2020 before the university entrance exam. I began with HTML and continued with CSS. Later, I studied JavaScript for backend development. When I entered university, I received training in Java as a programming language. Additionally, I have worked with different languages and frameworks such as NodeJS, Flutter, Python, MySQL, MongoDB, and Arduino. In the future, I plan to learn new languages and frameworks.

My career goal is to gain experience in various important fields and use that experience to reduce my country's external dependence to some extent. Examples of these fields could be the finance sector, artificial intelligence, and the space industry. However, it's uncertain what the future holds...
 */


/*
<p>Merhabalar,</p>
                    <p>
                        Ben Harun, {year} yaşındayım. İzmir Bornova'da doğdum ve doğduğumdan beri İzmir'de yaşıyorum. İlk okulu Attaroğlu İlkokulu'nda okudum. 
                        İlkokulu bitirdikten sonra Çamkıran Ortaokulu'na gittim ve ortaokuldan sonra da liseyi <b>Suphi Koyuncuoğlu Anadolu Lisesi'nde</b> okudum. 
                        Şimdi ise <b>İzmir Ekonomi Üniversitesi Bilgisayar Mühendisliği</b> 2.sınıf öğrencisiyim. 
                        <br/>
                        <br/>
                        Kodlamaya ilk olarak üniversite sınavından önce 2020 yılında başladım. <b>HTML</b> ile başlayıp <b>CSS</b> ile devam ettim. Daha sonra <b>JavaScript'e </b>
                        çalıştım, backend için. Üniversiteye girdiğimde ise dil olarak <b>Java</b> eğitimi aldım. Artıdan <b>NodeJS</b>, <b>Flutter</b>, <b>Python</b>, <b>MySQL</b>, 
                        <b> MongoDB</b> ve <b>Arduino </b> gibi farklı diller ve frameworkler ile çalıştım. İlerleyen zamanlarda ise yeni dilleri ve frameworkleri öğrenmeyi planlıyorum.  
                        <br/>
                        <br/>
                        Kariyer hedefim, birçok önemli alanda deneyim kazanmak ve bu deneyimleri kullanarak biraz olsun ülkemi dışa bağımlılığını azaltmak. Bu alanlara örnek verecek olursam
                        bunlar; <b>finans sektörü</b>, <b>yapay zeka</b> ve <b>uzay endüstrisi</b> gibi alanlar olabilir. Ama geleceğin ne getireceği belli olmaz...
                    </p>
                    */