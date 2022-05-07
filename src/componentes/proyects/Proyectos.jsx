import "./Proyectos.css";

const Proyectos = () => {
  return (
    <div id="proyects" className="container proyects-container">
      <h1 className="proyect-txt">Proyectos:</h1>
      <div className="proyect proyect-1">
        <div className="proyect-img"></div>
        <div className="proyect-info">
          <h1 className="name">Clon Netflix:</h1>
          <h3 className="position">Febrero 2022</h3>
          Tecnologías usadas:
            <span> HTML, CSS, JS, PHP y MySQL</span>
          <h4 className="about">
          Puede ingresar con las siguientes credenciales:
            <div>Rol Usuario:
                <span> usuario: usuario@gmail.com</span>
                <span>| password:  123456</span>
            </div>
          </h4>
          <a target={"blanck"} href="https://germandex.000webhostapp.com/Netflix/movie.html" className="contact-proyect">
            <span>Observar</span>
          </a>
        </div>
      </div>

      <div className="proyect proyect-2">
        <div className="proyect-img"></div>
        <div className="proyect-info">
          <h1 className="name">E-commerce:</h1>
          <h3 className="position">Abril 2022</h3>
          Tecnologías usadas:
          <span> HTML, CSS, JS, PHP, MySQL</span>
          <h4 className="about">
            Puede ingresar con las siguientes credenciales:
            <div>Rol Usuario:
              <span> usuario: user@gmail.com</span>
              <span>| password: user</span>
            </div>
            <div>Rol Admin:
              <span> usuario: admmin@gmail.com</span>
              <span>| password: admin</span>
            </div>
          </h4>
          <a target={"blanck"} href="https://germandex.000webhostapp.com/PROYECTO_FINAL_IHC/index.php" className="contact-proyect">
            <span>Observar</span>
          </a>
        </div>
      </div>

      <div className="proyect proyect-3">
        <div className="proyect-img"></div>
        <div className="proyect-info">
          <h1 className="name">Portafolio:</h1>
          <h3 className="position">Mayo 2022</h3>
          <h4 className="about">
            Tecnologías usadas:
            <li>HTML, CSS, JS Y REACT-JS</li>
          </h4>
          <a target={"blanck"} href="https://62767de0e0a01b02d0df91bf--myport-navidev.netlify.app/" className="contact-proyect">
            <span>Observar</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
