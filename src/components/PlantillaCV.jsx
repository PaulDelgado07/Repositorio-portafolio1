function PlantillaCV() {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom right, #8896aeff, #f4faff)",
        height: "100vh",
        padding: "40px 20px",
        fontFamily: "Segoe UI, Arial, sans-serif",
      }}
    >
      <div
        style={{
    width: "100%",           // ocupa todo el ancho
    minHeight: "100vh",      // ocupa toda la altura
    background: "white",
    padding: "40px",
    borderRadius: "0px",     // opcional, para que no se vea como caja
    boxShadow: "none",       // opcional, si quieres full pantalla
  }}
      >
        {/* ==============================
            CABECERA
        =============================== */}
        <header
          style={{
            marginBottom: "40px",
            borderBottom: "3px solid #bcd4ff",
            paddingBottom: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "40px",
              margin: "0",
              color: "#003366",
              fontWeight: "700",
            }}
          >
            Paul David Delgado Vergara
          </h1>

          <p style={{ fontSize: "18px", color: "#444", marginTop: "10px" }}>
            Estudiante de Ciencia de Datos y Desarrollo. Apasionado por crear
            soluciones útiles que unan tecnología, visión analítica y diseño.
          </p>
        </header>

        {/* ==============================
            SECCIÓN — CONTACTO
        =============================== */}
        <div style={sectionStyle}>
          <h2 style={titleStyle}>Contacto</h2>
          <p><strong>Teléfono:</strong> +593 0967792173</p>
          <p><strong>Correo:</strong> pauldaviddv19@gmail.com</p>
        </div>

        {/* ==============================
            SECCIÓN — SOBRE MÍ
        =============================== */}
        <div style={sectionStyle}>
          <h2 style={titleStyle}>Sobre mí</h2>
          <p>
            Soy estudiante de Ciencias de Datos e Inteligencia Artificial con
            interés en el desarrollo web, análisis de datos y construcción de
            soluciones tecnológicas que aporten valor. Me enfoco en aprender,
            construir y mejorar continuamente.
          </p>
        </div>

        {/* ==============================
            SECCIÓN — PROYECTOS (ahora arriba de Experiencias)
        =============================== */}
        <div style={sectionStyle}>
          <h2 style={titleStyle}>Proyectos</h2>

          <div style={projectCard}>
            <h3 style={{ marginBottom: "10px" }}>
              1. Construcción de un Data Warehouse usando AdventureWorks,
              Pentaho Data Integration (PDI) y PostgreSQL
            </h3>

            <p style={{ marginBottom: "15px" }}>
              Diseño e implementación de un Data Warehouse corporativo usando
              AdventureWorks como sistema fuente y PDI para los procesos ETL.
              Incluye modelado en estrella, carga de datos y KPIs.
            </p>

            <a
              href="https://github.com/lorint/AdventureWorks-for-Postgres?tab=readme-ov-file"
              target="_blank"
              rel="noopener noreferrer"
              style={btnPrimary}
            >
              Ver repositorio en GitHub
            </a>

            <br /><br />

            <a
              href="https://github.com/PaulDelgado07/MiPrimerRepo/tree/0a158a9c94fbad220cb404e4784c1f9da9736fc8/Proyecto%20del%201er%20Parcial%20Almacenes%20de%20datos"
              target="_blank"
              rel="noopener noreferrer"
              style={btnSecondary}
            >
              Ver carpeta del proyecto
            </a>

            <br /><br />

            <h3 style={{ marginBottom: "10px" }}>
              2. Proyecto de Programación de Turnos de personal PL Entera
            </h3>

            <p style={{ marginBottom: "15px" }}>
              Desarrollé una solución de optimización basada en Programación Lineal Entera
              para resolver el problema de planificación de personal en supermercados.
              El objetivo principal fue lograr una asignación óptima de turnos que garantice
              la cobertura horaria mínima requerida, utilizando la menor cantidad de empleados
              contratados. Esta aplicación de Investigación de Operaciones es esencial
              para mejorar la eficiencia operativa, disminuir costos laborales y asegurar
              un alto nivel de servicio.
            </p>

            <a
              href="https://github.com/PaulDelgado07/MiPrimerRepo/blob/dc55e6a3331eb36d82ca284702ac745f29b5aad7/Proyecto%20de%20programaci%C3%B3n%20de%20turnos%20de%20personal%20PL%20Entera.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={btnSecondary}
            >
              Documento
            </a> 
          </div>
        </div>

        {/* ==============================
            SECCIÓN — EXPERIENCIAS
        =============================== */}
        <div style={sectionStyle}>
          <h2 style={titleStyle}>Experiencias</h2>

          <div style={expCard}>
            <h3 style={{ marginBottom: "8px" }}>
              Charla FLISOL – Universidad Católica del Ecuador
            </h3>
            <p style={{ marginBottom: "5px" }}>
              Automatización CI/CD con Git: Comparativa entre plataformas
              libres y propietarias. Analicé flujos de automatización,
              despliegue continuo y herramientas modernas de integración.
            </p>
          </div>

          <div style={expCard}>
            <h3 style={{ marginBottom: "8px" }}>
              Charla: Construcción de arquitecturas escalables de IA
            </h3>
            <p style={{ marginBottom: "5px" }}>
              Uso de LangGraph para implementar agentes de IA modulares,
              escalables y con manejo avanzado de estados.
            </p>
          </div>

          <div style={expCard}>
            <h3 style={{ marginBottom: "8px" }}>
              Charla: Configuración blazingly fast con Neovim
            </h3>
            <p style={{ marginBottom: "5px" }}>
              Configuración de entornos ultra rápidos para desarrollo,
              optimización con plugins, LSPs y flujos automatizados.
            </p>
          </div>

          <div style={expCard}>
            <h3 style={{ marginBottom: "8px" }}>
              Taller Análisis de datos de digrama gráfico
            </h3>
            <p style={{ marginBottom: "5px" }}>
              Taller de Aprendizaje Automático para predecir temperatura corporal como variable
              de sistemas de climatización más eficientes. Variables utilizadas:
              edad, peso, altura, temperatura corporal, temperatura ambiente, humedad,
              foto, fecha y hora.
            </p>
          </div>

          <div style={expCard}>
            <h3 style={{ marginBottom: "8px" }}>
              Habilidades técnicas complementarias
            </h3>
            <p style={{ marginBottom: "5px" }}>
              Manipulación y armado de conectores RJ45 (cabeza de cable Ethernet) con estándares T568A/T568B para redes estructuradas.
            </p>
          </div>
        </div>

        {/* ==============================
            SECCIÓN — HABILIDADES (Burbujas)
        =============================== */}
        <div style={sectionStyle}>
          <h2 style={titleStyle}>Habilidades Técnicas</h2>

          <div style={bubbleGrid}>
            <div style={bubbleCard}>
              <h3>Lenguajes</h3>
              <ul>
                <li>Python</li>
                <li>JavaScript</li>
                <li>Java</li>
                <li>SQL</li>
              </ul>
            </div>

            <div style={bubbleCard}>
              <h3>Frameworks</h3>
              <ul>
                <li>React</li>
                <li>Vite</li>
              </ul>
            </div>

            <div style={bubbleCard}>
              <h3>Bases de Datos</h3>
              <ul>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
              </ul>
            </div>

            <div style={bubbleCard}>
              <h3>Análisis de Datos</h3>
              <ul>
                <li>Power BI</li>
                <li>Excel Avanzado</li>
                <li>SPSS</li>
              </ul>
            </div>

            <div style={bubbleCard}>
              <h3>Herramientas</h3>
              <ul>
                <li>Git</li>
                <li>Docker</li>
                <li>VSCode</li>
                <li>Pentaho</li>
                <li>Máquinas Virtuales</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==============================
   ESTILOS REUTILIZABLES
=============================== */

const sectionStyle = {
  marginBottom: "40px",
};

const titleStyle = {
  color: "#004a99",
  borderBottom: "2px solid #c8dcff",
  paddingBottom: "6px",
  marginBottom: "20px",
};

const bubbleGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "20px",
};

const bubbleCard = {
  background: "#f5f9ff",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
};

const projectCard = {
  background: "#eef4ff",
  padding: "25px",
  borderRadius: "14px",
  boxShadow: "0 2px 14px rgba(0,0,0,0.1)",
};

const expCard = {
  background: "#f2f6ff",
  padding: "18px",
  borderRadius: "10px",
  marginBottom: "15px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
};

const btnPrimary = {
  display: "inline-block",
  background: "#005bce",
  color: "white",
  padding: "12px 20px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "600",
};

const btnSecondary = {
  display: "inline-block",
  background: "#003d80",
  color: "white",
  padding: "10px 18px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "600",
};

export default PlantillaCV;
