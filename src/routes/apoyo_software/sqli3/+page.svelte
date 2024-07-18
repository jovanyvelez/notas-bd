<div style="display: flex; justify-content: center; align-items: center; padding: 20px;">
    <h1>Cómo Instalar Sqlite3 en Windows</h1>
</div>
<div>

</div>
<div class="container">
    <main>
        <h1>Instrucciones para descarga en Windows</h1>
        <ol style="font-size: 12px;">
            <li>
                <h2>
                    Descargamos el paquete <a
                        href="https://sqlite.org/2024/sqlite-tools-win-x64-3460000.zip"
                        target="_blank">Sqlite3</a> en tu sistema operativo.
                </h2>
            </li>
            <li>
                <h2>
                    Descomprimimos el paquete y a continuación, la carpeta creada la renombramos con el nombre
                    sqlite.
                </h2>
            </li>
            <li>
                <h2>Movemos la carpeta anterior al directorio raíz de Windows "c:\"</h2>
            </li>
            <li>
                <h2>Nos quedará el directorio "c:\sqlite".</h2>
            </li>
        </ol>
        <h1>Instrucciones para Crear Variable de Entorno en Windows</h1>
        <h2>Paso 1: Abrir el Panel de Control del Sistema</h2>
        <ol>
            <li>
                <p><b>Abre el Panel de Control:</b></p>
                <p>Presiona <code>Windows + R</code> para abrir el cuadro de diálogo Ejecutar. Escribe <code>control</code> y presiona Enter para abrir el Panel de Control.</p>
            </li>
            <li>
                <p><b>Accede a la Configuración Avanzada del Sistema:</b></p>
                <p>En el Panel de Control, ve a <b>Sistema y Seguridad</b>. Haz clic en <b>Sistema</b>. En el panel izquierdo, haz clic en <b>Configuración avanzada del sistema</b>.</p>
            </li>
        </ol>
        <h2>Paso 2: Variables de Entorno</h2>
        <ol>
            <li>
                <p><b>Abre las Variables de Entorno:</b></p>
                <p>En la ventana <b>Propiedades del sistema</b>, haz clic en el botón <b>Variables de entorno...</b> en la parte inferior.</p>
            </li>
            <li>
                <p><b>Crear una Nueva Variable de Entorno:</b></p>
                <p>En la sección <b>Variables del sistema</b>, haz clic en <b>Nueva...</b>.</p>
            </li>
            <li>
                <p><b>Configurar la Variable de Entorno:</b></p>
                <p>En la ventana <b>Nueva variable de entorno</b>, ingresa lo siguiente:</p>
                <ul>
                    <li><b>Nombre de la variable:</b> <code>SQLITE_HOME</code></li>
                    <li><b>Valor de la variable:</b> <code>c:\sqlite</code></li>
                </ul>
                <p>Haz clic en <b>Aceptar</b>.</p>
            </li>
        </ol>
        <h2>Paso 3: Añadir al PATH del Sistema</h2>
        <ol>
            <li>
                <p><b>Editar la Variable PATH:</b></p>
                <p>En la misma ventana de <b>Variables de entorno</b>, busca la variable llamada <code>Path</code> en la sección <b>Variables del sistema</b>. Selecciona <code>Path</code> y haz clic en <b>Editar...</b>.</p>
            </li>
            <li>
                <p><b>Añadir el Nuevo Directorio al PATH:</b></p>
                <p>En la ventana <b>Editar variable de entorno</b>, haz clic en <b>Nuevo</b>. Ingresa <code>%SQLITE_HOME%</code> como el nuevo valor. Haz clic en <b>Aceptar</b> para cerrar todas las ventanas.</p>
            </li>
        </ol>
        <h2>Paso 4: Verificar la Configuración</h2>
        <ol>
            <li>
                <p><b>Abrir una Ventana de Comandos:</b></p>
                <p>Presiona <code>Windows + R</code>, escribe <code>cmd</code> y presiona Enter para abrir una ventana de comandos.</p>
            </li>
            <li>
                <p><b>Verificar la Variable de Entorno:</b></p>
                <p>Escribe <code>echo %SQLITE_HOME%</code> y presiona Enter. Deberías ver <code>c:\sqlite</code> como salida. Escribe <code>sqlite3</code> y presiona Enter. Deberías ver la consola de SQLite3 si todo está configurado correctamente.</p>
                <p>Para salir de consola de sqlite3, escribe <code>.exit</code> y luego presiona Enter.</p>
            </li>
        </ol>
        <h2>Resumen de los Pasos:</h2>
        <ol>
            <li>Abre el Panel de Control y accede a <b>Configuración avanzada del sistema</b>.</li>
            <li>En <b>Variables de entorno...</b>, crea una nueva variable llamada <code>SQLITE_HOME</code> con el valor <code>c:\sqlite</code>.</li>
            <li>Edita la variable <code>Path</code> y añade <code>%SQLITE_HOME%</code>.</li>
            <li>Verifica la configuración en una ventana de comandos.</li>
        </ol>
        <p>¡Listo! SQLite3 ya está, hemos configurado una variable de entorno en Windows que apunta al directorio <code>c:\sqlite</code>, permitiendo que SQLite3 sea accesible desde cualquier lugar en la línea de comandos.</p>
    </main>
</div>



<style>
    div {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #121212;
        color: #ffffff;
    }
    a {
        color: slategray;
    }
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
    }
    main {
        max-width: 800px;
        width: 100%;
        background-color: #1e1e1e;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    h1, h2 {
        color: #ffffff;
    }
    p {
        line-height: 1.6;
    }
    ol {
        margin: 20px 0;
        padding-left: 20px;
    }
    li {
        margin-bottom: 10px;
    }
    code {
        background-color: #333;
        padding: 2px 4px;
        border-radius: 4px;
        color: #ffffff;
    }
    @media (max-width: 600px) {
        .container {
            padding: 10px;
        }
        main {
            padding: 10px;
        }
    }
</style>