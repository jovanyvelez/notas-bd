
# <span class="header">Notas de Clase - Sesión 1: Fundamentos de Bases de Datos.</span>

<div class="dark">


## 1. Introducción a las Bases de Datos.
  * ### ¿Qué es una base de datos?
    + Una <span class="n">base de datos</span> es un conjunto organizado de datos que se almacena y se gestiona
      electrónicamente
    + Permite almacenar, recuperar y gestionar información de manera eficiente.

  * ### Importancia de las bases de datos
    + <span class="n"> Organización </span>: Mantiene los datos organizados.
    + <span class="n"> Acceso rápido </span>: Facilita el acceso y recuperación de información.
    + <span class="n"> Seguridad </span>: Protege los datos contra accesos no autorizados y pérdidas.

## 2. Tipos de Bases de Datos
  * ### Bases de datos relacionales.
    + Organizan los datos en <span class="n">tablas</span> que están relacionadas entre si.
    + Utilizan <span class="n">SQL</span> (Structured Query Language) como lenguaje de consulta (para la gestión de los datos).
    + <span class="n">Ejemplo</span>> SQlite, MySQL, PostgreSQL, Oracle, etc.

  * ### Bases de datos no relacionales (NoSQL).
    + No organizan los datos en tablas.
    + Utilizan motores específicos diseñados para su gestión.
    + <span class="n">Ejemplo</span>> MongoDB, Cassandra, Redis, etc.

## 3. Modelo Relacional.
  * ### Componentes de una base de datos.
    + <span class="n">Tablas</span>: almacenan los datos, organizados en filas y columnas. 
        Ejemplo: Tabla de Clientes, Tabla de Productos, Tabla de Compras, etc.
    + Cada tabla puede contener una clave primaria y una clave externa.
    + Reglas: describen las operaciones que se pueden realizar sobre los datos. Ejemplo: <span class="n">Operaciones CRUD (Create, Read, Update, Delete)</span>.
## 4. Componentes de una base de datos relacional.
    * <span class="n">Motores de bases de datos</span>: son los motores que se utilizan para gestionar las bases de datos, también conocidos como DBMS (Database Management System).
        Ejemplo: SQLite, MySQL, PostgreSQL, Oracle, etc.
    * <span class="n">Usuarios</span>: Son quienes interactúan con la base de datos. Entre ellos encontramos los administradores que son quienes se encargan de gestionar las bases de datos y los "usuarios" que son quienes interactuan con la base de datos a través de aplicaciones.

## 5. SQL
  
<p class="espacio">
    SQL significa Lengua de consulta estructurada. Es un idioma utilizado para interactuar con las bases de datos, a través del cual puede crear, leer, actualizar y eliminar datos en una base de datos. SQL     
        tiene algunas palabras clave que se pueden utilizar para interactuar con la base de datos, y poder hacer preguntas de datos dentro de una base de datos.
    En esta lección, aprenderemos a escribir algunas preguntas simples de SQL.
</p> 

* Uso de la sentencia <span class="n">SELECT</span> y la sentencia <span class="n">WHERE</span>.

</div>





<style lang="postcss">
    .n {
        font-weight: bold
    }

    .dark {

        @apply bg-slate-800;
        @apply px-5;
        color: #E0E0E0;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .header {
        @apply text-blue-500;
    }

    .espacio {
        @apply ml-10;
    }



</style>