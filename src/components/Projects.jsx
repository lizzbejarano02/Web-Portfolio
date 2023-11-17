import mascota from "../assets/img/MascotaFeliz.jpeg"
import pedido from "../assets/img/Pedidos.jpeg"

export const Projects = () => {

    

    return (
        <section className="projects" id="projects">
        <h2>Projects</h2>
        <div className="tarjets">
        <div className="project">
      <div className="projects-card">
        <img src={mascota} alt="" className="card-img" />
      </div>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Mascota Feliz</h3>
          <h4 className="card-subtitle">.Net - C# - CSS</h4>
          <p className="card-text">Veterinary Project</p>
          <div className="bottom-git"><a className="git" href="https://github.com/lizzbejarano02/White-hats-G-6" target="_blanck">GITHUB REPO</a>
        </div></div>
      </div>
      </div>

      <div className="project">
      <div className="projects-card">
        <img src={pedido} alt="" className="card-img" />
      </div>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Pedidos</h3>
          <h4 className="card-subtitle"> JavaScript - Angular - Bootstrap</h4>
          <p className="card-text">Draft Orders</p> 
          <div className="bottom-git"><a className="git"href="https://github.com/lizzbejarano02/FinalPedidos" target="_blanck">GITHUB REPO</a></div>
          
        </div>
      </div>
      </div>
      </div>
           
        </section>
    )
}

export default Projects