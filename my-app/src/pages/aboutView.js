

export default function AboutView({ view }){
    return(
        <>
            <main className="container-fluid d-flex vh-100  justify-content-center align-items-center" id="about" style={{backgroundColor: view.main_color, color: view.third_color}}>
                <div className="container h-auto vw-70">
                    <h3>Hakkımda</h3>
                    <br/>
                    <p>Merhabalar,</p>
                    <p>
                        Ben Harun, 20 yaşındayım. İzmir Bornova'da doğdum ve doğduğumdan beri İzmir'de yaşıyorum. İlk okulu Attaroğlu İlkokulu'nda okudum. 
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
                </div>
            </main>
        </>
    )
};


/*
İngilizcesi

Hello,

I'm Harun, 20 years old. I was born in Bornova, Izmir, and I have been living in Izmir since I was born. I attended Attaroğlu Primary School for my elementary education. After completing elementary school, I went to Çamkıran Middle School, and then I attended Suphi Koyuncuoğlu Anatolian High School for my high school education. Now, I am a second-year student studying Computer Engineering at Izmir University of Economics.

I started coding in 2020 before the university entrance exam. I began with HTML and continued with CSS. Later, I studied JavaScript for backend development. When I entered university, I received training in Java as a programming language. Additionally, I have worked with different languages and frameworks such as NodeJS, Flutter, Python, MySQL, MongoDB, and Arduino. In the future, I plan to learn new languages and frameworks.

My career goal is to gain experience in various important fields and use that experience to reduce my country's external dependence to some extent. Examples of these fields could be the finance sector, artificial intelligence, and the space industry. However, it's uncertain what the future holds...
 */