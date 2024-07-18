<script>
	// Aquí puedes añadir lógica de Svelte si es necesario
</script>

<div class="container">
	<h1>Instalación (-con PowerShell-) de Node.js usando FNM</h1>
	<pre>
        <code>
# instalamos fnm (Fast Node Manager)
winget install Schniz.fnm

# descargamos e instalamos Node.js
fnm use --install-if-missing 22

# verificamos la version de instalación
node -v # probablemente obtendremos esta respuesta `v22.5.0`

# verificamos la version de npm
npm -v # probablemente obtendremos esta respuesta `10.8.2`
        </code>
    </pre>
</div>

<style>
	.container {
		background-color: #121212;
		color: #ffffff;
		padding: 20px;
		border-radius: 8px;
		font-family: Arial, sans-serif;
		max-width: 100%;
		box-sizing: border-box;
	}
	pre {
		background-color: #1e1e1e;
		padding: 15px;
		border-radius: 8px;
		overflow-x: auto;
		width: 100%;
		box-sizing: border-box;
	}
	code {
		color: #d4d4d4;
		font-size: 14px;
		font-family: Consolas, 'Courier New', monospace;
	}
	@media (max-width: 600px) {
		.container {
			padding: 10px;
		}
		pre {
			padding: 10px;
		}
		code {
			font-size: 12px;
		}
	}
</style>

