<script>
  // Aquí puedes añadir lógica de Svelte si es necesario
</script>

<style>
  .container {
    background-color: #1e1e1e;
    color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    max-width: 800px;
    width: 100%;
    box-sizing: border-box;
    margin: 20px;
  }

  p {
    margin: 15px 0; /* Aumentar el margen vertical */
    font-size: 1em;
    line-height: 1.6; /* Ajustar el espaciado entre líneas */
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  ul > li > p {
    font-weight: bold;
  }

  ul ul {
    margin-top: 10px;
  }

  ul ul li {
    margin-left: 20px;
  }

  .etiquetasA {
    color: #00d8ff;
    text-decoration: none;
    padding: 10px 15px;
    border-radius: 5px;
    background-color: #333;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
  }

  .etiquetasA:hover {
    background-color: #00d8ff;
    color: #1e1e1e;
  }

  @media (max-width: 600px) {
    .container {
      padding: 10px;
    }
    .etiquetasA {
      font-size: 0.9em;
      padding: 8px 12px;
    }
  }
</style>

<div class="container">
  <h1>Notas segundo semestre</h1>
  <p>
    <a href="/sesiones/1" target="_blank" class="etiquetasA">Clase 1 y 2</a>
  </p>

  <p>
    <a href="/sesiones/2" target="_blank" class="etiquetasA">Clase 3 y 4</a>
  </p>

  <ul>
    <li>
      <p>Sotware de apoyo para el curso</p>
      <ul>
        <li>
          <p><a href="/apoyo_software/sqli3" target="_blank" class="etiquetasA">sqli3</a></p>
        </li>
        <li>
          <p><a href="/apoyo_software/nodejs" target="_blank" class="etiquetasA">Node js</a></p>
        </li>
      </ul>
    </li>
  </ul>
</div>

