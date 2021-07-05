import { Link } from 'react-router-dom';
import '../../assets/css/style.css';
import "../../assets/css/flexbox.css";
import logo from "../../assets/img/logo.png";
import ba from "../../assets/img/ba.png"


function Home() {
    return (
        <div>
            <header className="topoPrincipal">
            <div className="container">
                <Link to="/"><img src={logo} alt="logo da SP Medical Group" /></Link>

                <nav className="topoPrincipal-nav">
                    <Link to="/">Home</Link>
                    <Link to="eventos">Sobre Nós</Link>
                    <Link to="eventos">Especialidades</Link>
                    <a href="#topoPrincipal-contato">Contato</a>
                    <Link className="topoPrincipal-nav-login" to="login" >Login</Link>
           
          </nav>
        </div>
            </header>

        <section className="conteudoImagem">
        <div>
          <img src={ba} alt="banner principal do site" />
        </div>
        </section>


        <main className="esp">
            <section className="especialidades">
                <div className="flex-center-bt wrap">
                    <div className="card">
                        <img src={ba} alt="banner principal do site" />
                        <h3>CLINICO GERAL</h3>
                    </div>
                    <div className="card">
                        <img src={ba} alt="banner principal do site" />
                        <h3>CLINICO GERAL</h3>
                    </div>
                    <div className="card">
                        <img src={ba} alt="banner principal do site" />
                        <h3>CLINICO GERAL</h3>
                    </div>
                </div>
            </section>
        </main>
            
            
            
            
            <footer className="footer-home">

            <div className="links-footer">
                        <ul className="lis">              
                            <li><a href="#">Unidades</a></li>
                            <li><a href="#">Exames</a></li>
                            <li><a href="#">Especialidades</a></li>
                            <li><a href="#">Convenio</a></li>       
                        </ul>     
            </div>
            <div className="f-logo">
            <img src={logo} alt="logo da SP Medical Group " />
            </div>
                

              

            </footer>

        </div>
    )
}

export default Home;