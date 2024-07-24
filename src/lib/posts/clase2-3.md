# Introducción

Las bases de datos pueden tener múltiples tablas. En la última clase, vimos una base de datos de libros preseleccionados o nominados para el Premio Internacional Booker. Ahora veremos que esa base de datos tiene muchas tablas diferentes dentro de ella: para libros, autores, editores, y más.


Las tablas tienen algunas relaciones entre ellas, por lo tanto llamamos a la base de datos una base de datos relacional. Mira la lista de tablas en longlist.db e intenta imaginar las relaciones entre ellas. Algunos ejemplos son:

- Los autores escriben libros.
- Los editores publican libros.
- Los libros son traducidos por traductores.

Considera nuestro primer ejemplo. Aquí tienes una instantánea de las tablas de autores y libros con las columnas de nombre de autor y título del libro:

<img src="/p6.jpg" alt="tabla" width="60%">

# ¿Cómo podemos saber quién escribió qué libro?

Solo mirando estas dos columnas, ¿cómo podemos saber quién escribió qué libro? Incluso si asumimos que cada libro está alineado junto a su autor, solo mirando la tabla de autores no nos daría información sobre los libros escritos por ese autor.

Algunas posibles formas de organizar libros y autores son…

- **El sistema de honor**: la primera fila en la tabla de autores siempre corresponderá a la primera fila en la tabla de libros. El problema con este sistema es que uno puede cometer un error (agregar un libro pero olvidar agregar su autor correspondiente, o viceversa). Además, un autor puede haber escrito más de un libro o un libro puede estar coescrito por varios autores.

- **Volver a un enfoque de una tabla**: Este enfoque podría resultar en redundancia (duplicación de datos) si un autor escribe varios libros o si un libro es coescrito por varios autores. A continuación, se muestra una instantánea del enfoque de una tabla con algunos datos redundantes.

