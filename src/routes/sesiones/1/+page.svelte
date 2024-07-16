<a href="/" class="link link-primary my-5">Atras</a>

<main class="flex flex-col">
	<h1 class="text-3xl text-center font-semibold">Clase 1</h1>
</main>
<h1 class="text-3xl font-bold">Notas de Clase - Sesión 1: Fundamentos de Bases de Datos.</h1>


<h2 class="text-2xl font-semibold my-5">1. Introducción a las Bases de Datos.</h2>
<h3 class="text-xl my-2 font-semibold">Que es una base de datos?</h3>
<p>
	Una <span class="n">base de datos</span> es un conjunto organizado de datos que se almacena y se gestiona
	electrónicamente
</p>

<p> Permite almacenar, recuperar y gestionar información de manera eficiente.</p>

<h3 class="text-xl my-2 font-semibold">Importancia de las bases de datos</h3>

<p><span class="font-semibold"> Organización </span>: Mantiene los datos organizados.</p>

<p><span class="font-semibold"> Acceso rápido </span>: Facilita el acceso y recuperación de información.</p>

<p><span class="font-semibold"> Seguridad </span>: Protege los datos contra accesos no autorizados y pérdidas.</p>

<h3 class="text-xl my-2 font-semibold">Tipos de bases de datos</h3>

<p class="font-semibold"> Bases de datos relacionales.</p>
<p>Organizan los datos en
<span class="font-semibold">tablas</span>
que están relacionadas entre si.</p> 
<p> Utilizan <span class="font-semibold">SQL</span> (Structured Query Language)
como lenguaje de consulta (para la gestión de los datos).</p>
<p>Algunos de los motores de bases de datos de este tipo de bases de datos son: SQlite, MySQL, PostgreSQL, Oracle, etc. </p>

<p class="font-semibold mt-5"> Bases de datos no relacionales (NoSQL).</p>
No organizan los datos en tablas. 
Utilizan motores específicos diseñados para su gestión. <span class="n">Ejemplo</span>> MongoDB, Cassandra, Redis, etc. 

<p class="font-semibold my-5 text-xl"> Modelo Relacional.</p>

<p class="font-semibold">Componentes de una base de datos:</p>
    <p class="ml-4"> <span class="font-semibold">Tablas</span>: almacenan los datos, organizados
    en filas y columnas. Ejemplo: Tabla de Clientes, Tabla de Productos, Tabla de Compras, etc. + Cada
    tabla puede contener una clave primaria y una clave externa.</p>

    <p class="ml-4"><span class="font-semibold">Reglas:</span> describen las operaciones que
    se pueden realizar sobre los datos. Ejemplo:
    <span class="n">Operaciones CRUD (Create, Read, Update, Delete)</span>. 
    </p>

    <p class="ml-4"> <span class="font-semibold">Motores de bases de datos</span>: son los motores que se  utilizan para gestionar las bases de datos, también conocidos como DBMS (Database Management
        System). Ejemplo: SQLite, MySQL, PostgreSQL, Oracle, etc.
    </p>

    <p class="ml-4">  <span class="font-semibold">Usuarios</span>: Son
    quienes interactúan con la base de datos. Entre ellos encontramos los administradores que son
    quienes se encargan de gestionar las bases de datos y para otro tipo de "usuarios" que son quienes interactuan con
    la base de datos a través de aplicaciones.

</p>

<h3 class="text-xl my-2 font-semibold">Lenguaje SQL</h3>

<p>
    SQL significa Lenguaje de consulta estructurada. Es un idioma utilizado para interactuar con las bases de datos, 
    a través del cual puede crear, leer, actualizar y eliminar datos en una base de datos.
    tiene algunas palabras clave que se pueden utilizar para interactuar con la base de datos, y
    es un idioma de consulta que se puede utilizar para hacer preguntas de datos dentro de una base de datos.
</p>
<p>
    En esta lección, aprenderemos a escribir algunas preguntas simples de SQL.
</p>

<p class="text-red-500"> Warning: los comandos SQL que aprenderemos, siempre por convención, se escribirán en mayúsculas.</p>

<p class="my-5"><span class="font-semibold">SELECT</span></p>