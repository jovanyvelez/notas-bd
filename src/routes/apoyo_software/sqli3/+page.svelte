<script>
	// Aquí puedes añadir lógica de Svelte si es necesario
</script>

<div class="header">
    <h1>Cómo Instalar Sqlite3 en Windows</h1>
</div>

<div class="container">
    <main>
        <h2>Instrucciones para descarga en Windows</h2>
        <ol>
            <li>
                <p>Descargamos el paquete <a href="https://sqlite.org/2024/sqlite-tools-win-x64-3460000.zip" target="_blank">Sqlite3</a> en tu sistema operativo.</p>
            </li>
            <li>
                <p>Descomprimimos el paquete y a continuación, la carpeta creada la renombramos con el nombre <code>sqlite</code>.</p>
            </li>
            <li>
                <p>Movemos la carpeta anterior al directorio raíz de Windows <code>c:\</code></p>
            </li>
            <li>
                <p>Nos quedará el directorio <code>c:\sqlite</code>.</p>
            </li>
        </ol>
        
        <h2>Instrucciones para Crear Variable de Entorno en Windows</h2>
        
        <h3>Paso 1: Abrir el Panel de Control del Sistema</h3>
        <ol>
            <li>
                <p><b>Abre el Panel de Control:</b> Presiona <code>Windows + R</code> para abrir el cuadro de diálogo Ejecutar. Escribe <code>control</code> y presiona Enter para abrir el Panel de Control.</p>
            </li>
            <li>
                <p>Haz clic en <b>Sistema</b>. Luego en el panel izquierdo, haz clic en <b>Configuración avanzada del sistema</b>.</p>
            </li>
        </ol>

        <h3>Paso 2: Variables de Entorno</h3>
        <ol>
            <li>
                <p><b>Abre las Variables de Entorno:</b> En la ventana <b>Propiedades del sistema</b>, haz clic en el botón <b>Variables de entorno...</b> en la parte inferior.</p>
            </li>
            <li>
                <p><b>Crear una Nueva Variable de Entorno:</b> En la sección <b>Variables del sistema</b>, haz clic en <b>Nueva...</b>.</p>
            </li>
            <li>
                <p><b>Configurar la Variable de Entorno:</b> En la ventana <b>Nueva variable de entorno</b>, ingresa lo siguiente:</p>
                <ul>
                    <li><b>Nombre de la variable:</b> <code>SQLITE_HOME</code></li>
                    <li><b>Valor de la variable:</b> <code>c:\sqlite</code></li>
                </ul>
                <p>Haz clic en <b>Aceptar</b>.</p>
            </li>
        </ol>

        <h3>Paso 3: Añadir al PATH del Sistema</h3>
        <ol>
            <li>
                <p><b>Editar la Variable PATH:</b> En la misma ventana de <b>Variables de entorno</b>, busca la variable llamada <code>Path</code> en la sección <b>Variables del sistema</b>. Selecciona <code>Path</code> y haz clic en <b>Editar...</b>.</p>
            </li>
            <li>
                <p><b>Añadir el Nuevo Directorio al PATH:</b> En la ventana <b>Editar variable de entorno</b>, haz clic en <b>Nuevo</b>. Ingresa <code>%SQLITE_HOME%</code> como el nuevo valor. Haz clic en <b>Aceptar</b> para cerrar todas las ventanas.</p>
            </li>
        </ol>

        <h3>Paso 4: Verificar la Configuración</h3>
        <ol>
            <li>
                <p><b>Abrir una Ventana de Comandos:</b> Presiona <code>Windows + R</code>, escribe <code>cmd</code> y presiona Enter para abrir una ventana de comandos.</p>
            </li>
            <li>
                <p><b>Verificar la Variable de Entorno:</b> Escribe <code>echo %SQLITE_HOME%</code> y presiona Enter. Deberías ver <code>c:\sqlite</code> como salida. Escribe <code>sqlite3</code> y presiona Enter. Deberías ver la consola de SQLite3 si todo está configurado correctamente.</p>
                <p>Para salir de la consola de SQLite3, escribe <code>.exit</code> y luego presiona Enter.</p>
            </li>
        </ol>

        <h2>Resumen de los Pasos:</h2>
        <ol>
            <li>Abre el Panel de Control y accede a <b>Configuración avanzada del sistema</b>.</li>
            <li>En <b>Variables de entorno...</b>, crea una nueva variable llamada <code>SQLITE_HOME</code> con el valor <code>c:\sqlite</code>.</li>
            <li>Edita la variable <code>Path</code> y añade <code>%SQLITE_HOME%</code>.</li>
            <li>Verifica la configuración en una ventana de comandos.</li>
        </ol>

        <p>¡Listo! Hemos configurado una variable de entorno en Windows que apunta al directorio <code>c:\sqlite</code>, permitiendo que SQLite3 sea accesible desde cualquier lugar en la línea de comandos.</p>
    </main>
</div>

<style>
	body {
		margin: 0;
		padding: 0;
		background-color: #121212;
		color: #ffffff;
		font-family: Arial, sans-serif;
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
	}
	.header {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 20px;
		background-color: #1e1e1e;
		width: 100%;
		box-sizing: border-box;
	}
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 20px;
		max-width: 1000px;
		width: 100%;
		box-sizing: border-box;
	}
	main {
		width: 100%;
		background-color: #1e1e1e;
		padding: 20px;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		box-sizing: border-box;
	}
	h1, h2, h3 {
		color: #00d8ff;
		margin-top: 20px;
	}
	p {
		line-height: 1.6;
		margin-bottom: 10px;
		color: #ffffff; /* Ajuste para mejorar legibilidad */
	}
	ol {
		margin: 20px 0;
		padding-left: 20px;
	}
	li {
		margin-bottom: 10px;
		color: #ffffff; /* Ajuste para mejorar legibilidad */
	}
	code {
		background-color: #333;
		padding: 2px 4px;
		border-radius: 4px;
		color: #00d8ff;
	}
	a {
		color: #00d8ff;
		text-decoration: none;
		transition: color 0.3s ease;
	}
	a:hover {
		color: #ffffff;
	}
	@media (max-width: 600px) {
		.container {
			padding: 10px;
		}
		main {
			padding: 10px;
		}
		h1, h2, h3 {
			font-size: 1.2em;
		}
		code {
			font-size: 0.9em;
		}
	}
</style>

