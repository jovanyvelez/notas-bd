<script>
	// Aquí puedes añadir lógica de Svelte si es necesario
</script>

<div class="header">
    <h1>Instalar Node js en Windows</h1>
</div>

<div class="container">
    <main>
        <ul>
            <li>
                <p>
                    <a href="https://nodejs.org/en/download/prebuilt-installer" target="_blank" class="etiquetasA">Vamos a la web de descarga</a>
                </p>
            </li>
            <li>
                <p>Verificamos que esté seleccionada la versión "v20.15.1 (LTS)", "Windows" y "x64"</p>
            </li>
            <li>
                <p>Hacemos clic en el botón verde "Download Node.js v20.15.1" para descargar el archivo</p>
            </li>
			<li>
				<p>
					Doble clic sobre el archivo descargado para instalar. En algún momento pedirá privilegios de
					administración para continuar
				</p>
			</li>
            <li>
                <p>Dar clic en siguiente, siguiente,..., siguiente hasta finalizar el proceso.</p>
            </li>
            <li>
                <p>Verificamos que se instaló correctamente</p>
            </li>
            
                <ul>
                    <li>
                        <p>
                            Para ver la versión de node que acabamos de instalar desde una consola o PowerShell,
                            ejecutar el siguiente comando: <code>node -version</code> y verificamos la versión instalada
                        </p>
                    </li>
                    <li>
                        <p>Desde consola ejecutamos: <code>node</code> y entramos a la consola de node</p>
                    </li>
                    <li>
                        <p>Escribimos <code>Ctrl + D</code> para salir</p>
                    </li>
                </ul>
            
        </ul>
        <p>¡Felicidades! Hemos instalado Node.js</p>
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
	ul, li {
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
