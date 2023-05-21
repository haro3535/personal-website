
export default function ProjectsView(){

    return(
        <main id='projectsView' className="projects">
        <div className="projectDiv">
          <h1 className="ph1">Projelerim</h1>
          <p className="pp">Yazılar burada olacak</p>
          <button className="pbutton btn btn-outline-primary">Hepsini Gör</button>
        </div>
        <div className="projectGalary mb-2">
            <div className="pElements pLeft"><h3>Sol</h3></div>
            <div className="pElements pMiddle"><h3>Orta</h3></div>
            <div className="pElements pRight"><h3>Sağ</h3></div>
          </div>
      </main>
    )
}