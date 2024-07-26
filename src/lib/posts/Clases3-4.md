
<script>
    import imagen from './diagrama1.png';
</script>
# Introducción

Las bases de datos pueden tener múltiples tablas. En la última clase, vimos una base de datos de libros preseleccionados o nominados para el Premio Internacional Booker. Ahora veremos que esa base de datos tiene muchas tablas diferentes en su interior, para libros, autores, editoriales, etc.

Las tablas son: 

1. books: Contiene información sobre libros nominados al premio.
2. authors: Contiene información sobre los autores de los libros.
3. publishers: Contiene información sobre los editores de los libros.
4. translators: Contiene información sobre los traductores de los libros (-No todos los libros tienen traductores-).
5. authored: Contiene información sobre los libros escritos por cada autor.
6. translated: Contiene información sobre los libros traducidos por cada traductor.
7. ratings: Contiene información sobre la calificación de los libros por sus lectores. Un lector puede calificar varios libros, pero solo calificar un libro.

Estas tablas tienen algunas relaciones entre ellas, y por eso llamamos a la base de datos una base de datos relacional. Observa la lista de tablas e intenta imaginar las relaciones entre ellas. Algunos ejemplos son:

- Los autores escriben libros.
- Las editoriales publican libros.
- Los libros son traducidos por traductores.

Consideremos nuestro primer ejemplo. Aquí tienes una imagén de las tablas de autores y libros con las columnas de nombre de autor y título del libro.

<img src="https://cs50.harvard.edu/sql/2024/notes/1/images/p6.jpg" alt="tabla" width="60%">

Solo mirando estas dos columnas, ¿cómo podemos saber quién escribió qué libro? Incluso si asumimos que cada libro está alineado junto a su autor, solo mirando la tabla de autores no obtendríamos información sobre los libros escritos por ese autor.

Algunas posibles formas de organizar libros y autores son...

- El sistema de honor: la primera fila en la tabla de autores siempre corresponderá a la primera fila en la tabla de libros. El problema con este sistema es que se puede cometer un error (agregar un libro pero olvidar agregar su autor correspondiente, o viceversa). Además, un autor puede haber escrito más de un libro o un libro puede estar coescrito por múltiples autores.

- Volver a un enfoque de una sola tabla: Este enfoque podría resultar en redundancia (duplicación de datos) si un autor escribe múltiples libros o si un libro está coescrito por múltiples autores. A continuación se muestra una instantánea del enfoque de una sola tabla con algunos datos redundantes.

<img src="https://cs50.harvard.edu/sql/2024/notes/1/images/p8.jpg" alt="tabla" width="60%">

Después de considerar estas ideas, parece que tener dos tablas diferentes es el enfoque más eficiente. Veamos algunas formas diferentes en que las tablas pueden estar relacionadas entre sí en las bases de datos relacionales.

Consideremos este caso, donde cada autor escribe solo un libro y cada libro es escrito por un solo autor. Esto se llama una relación uno a uno.

<img src="https://cs50.harvard.edu/sql/2024/notes/1/images/p10.jpg" alt="tabla" width="60%">

- Por otro lado, si un autor puede escribir múltiples libros, la relación es una relación de uno a muchos.

<img src="https://cs50.harvard.edu/sql/2024/notes/1/images/p11.jpg" alt="tabla" width="60%">

Aquí, vemos otra situación donde no solo un autor puede escribir múltiples libros, sino que los libros también pueden estar coescritos por múltiples autores. Esta es una relación de muchos a muchos.

<img src="https://cs50.harvard.edu/sql/2024/notes/1/images/p12.jpg" alt="tabla" width="60%">

# Diagramas de Entidad-Relación

Acabamos de describir relaciones uno a uno, uno a muchos y muchos a muchos entre tablas en una base de datos. Es posible visualizar tales relaciones usando un diagrama de entidad-relación (ER).

Aquí tienes un diagrama ER para las tablas en longlist.db.



<img src="https://res.cloudinary.com/dqlbbx7ud/image/upload/v1722014240/qx49ntsw9ar7lzjg6lrm.png" alt="ER" width="60%">

Cada tabla es una entidad en nuestra base de datos. Las relaciones entre las tablas, o entidades, están representadas por los verbos que marcan las líneas que conectan las entidades. Cada línea en este diagrama está en la notación de "pie de cuervo" (crow’s foot notation).

- La primera línea con un círculo se parece a un 0 marcado en la línea. Esta línea indica que no hay relaciones.
- La segunda línea con una línea perpendicular se parece a un 1 marcado en la línea. Una entidad con esta flecha debe tener al menos una fila que se relacione con ella en la otra tabla.
- La tercera línea, que se parece a un pie de cuervo, tiene muchas ramas. Esta línea significa que la entidad está relacionada con muchas filas de otra tabla.

<img src="https://cs50.harvard.edu/sql/2024/notes/1/images/p17.jpg" alt="ER" width="60%">

Por ejemplo:

- Leemos la notación de izquierda a derecha. Un autor escribe un libro (o, cada autor puede tener un libro asociado con él).

<img src="https://cs50.harvard.edu/sql/2024/notes/1/images/p18.jpg" alt="ER" width="60%">

Ahora, no solo un autor escribe un libro, sino que un libro también es escrito por un autor.

<img src="https://cs50.harvard.edu/sql/2024/notes/1/images/p19.jpg" alt="ER" width="60%">

Con esta adición, un autor escribe al menos un libro y un libro es escrito por al menos un autor. Dicho de otra manera, un autor puede estar asociado con uno o varios libros y un libro puede ser escrito por uno o varios autores.

<img src="https://cs50.harvard.edu/sql/2024/notes/1/images/p20.jpg" alt="ER" width="60%">

Volvamos a ver el diagrama ER para nuestra base de datos.


<img src="https://res.cloudinary.com/dqlbbx7ud/image/upload/v1722014240/qx49ntsw9ar7lzjg6lrm.png" alt="ER" width="60%">

Al observar las líneas que conectan las entidades de Libro y Traductor, podemos decir que los libros no necesitan tener un traductor. Pueden tener de cero a muchos traductores. Sin embargo, un traductor en la base de datos traduce al menos un libro, y posiblemente muchos.

## Preguntas

- Si tenemos una base de datos, ¿cómo sabemos las relaciones entre las entidades almacenadas en ella?

  Las relaciones exactas entre las entidades realmente dependen del diseñador de la base de datos. Por ejemplo, si cada autor puede escribir solo un libro o varios libros es una decisión que se toma al diseñar la base de datos. Un diagrama ER puede considerarse una herramienta para comunicar estas decisiones a alguien que quiera entender la base de datos y las relaciones entre sus entidades.

- Una vez que sabemos que existe una relación entre ciertas entidades, ¿cómo implementamos eso en nuestra base de datos?

  Pronto veremos cómo podemos usar claves en SQL para relacionar tablas entre sí.


## Claves (Keys)

### Claves Primarias (Primary Keys)

- En el caso de los libros, cada libro tiene un identificador único llamado ISBN. En otras palabras, si buscas un libro por su ISBN, solo se encontrará un libro. En términos de base de datos, el ISBN es una clave primaria: un identificador que es único para cada elemento en una tabla.

<img src="https://cs50.harvard.edu/sql/2024/notes/1/images/p29.jpg" alt="ER" width="60%">

Inspirados en esta idea del ISBN, ¡podemos imaginar asignar identificadores únicos a nuestros editores, autores y traductores! Cada uno de estos identificadores sería la clave primaria de la tabla a la que pertenece.

## Claves Foráneas (Foreign Keys)

- Las claves también ayudan a relacionar tablas en SQL.

  Una clave foránea es una clave primaria tomada de una tabla diferente. Al hacer referencia a la clave primaria de otra tabla, ayuda a relacionar las tablas formando un vínculo entre ellas.

<img src="https://cs50.harvard.edu/sql/2024/notes/1/images/p31.jpg" alt="ER" width="60%">

Observa cómo la clave primaria de la tabla de libros ahora es una columna en la tabla de calificaciones. Esto ayuda a formar una relación de uno a muchos entre las dos tablas: un libro con un título (encontrado en la tabla de libros) puede tener múltiples calificaciones (encontradas en la tabla de calificaciones).

El ISBN, como podemos ver, es un identificador largo. Si cada carácter ocupase un byte de memoria, almacenar un solo ISBN (incluyendo los guiones) tomaría 17 bytes de memoria, ¡lo cual es mucho!

Afortunadamente, no necesariamente tenemos que usar el ISBN como clave primaria. Podemos simplemente construir la nuestra usando números como 1, 2, 3... y así sucesivamente, siempre y cuando cada libro tenga un número único para identificarlo.

Anteriormente, vimos cómo implementar la relación de uno a muchos entre las entidades de libros y calificaciones. Aquí hay un ejemplo de una relación de muchos a muchos.

<img src="https://cs50.harvard.edu/sql/2024/notes/1/images/p40.jpg" alt="ER" width="60%">

Ahora hay una tabla llamada `authored` que mapea la clave primaria de los libros (`book_id`) a la clave primaria de los autores (`author_id`).

## Preguntas

- ¿Pueden los IDs del autor y del libro ser iguales? Por ejemplo, si `author_id` es 1 y `book_id` también es 1 en la tabla `authored`, ¿habrá una confusión?

  Las tablas como `authored` se llaman tablas de “unión” o “junction”. En tales tablas, generalmente sabemos qué clave primaria está referenciada por qué columna. En este caso, dado que sabemos que la primera columna contiene la clave primaria de los autores y la segunda columna contiene la clave primaria de los libros, ¡estaría bien incluso si los valores coinciden!

- Si tenemos muchas tablas de unión como esta, ¿no ocuparían demasiado espacio?

  Sí, hay una compensación aquí. Las tablas como estas ocupan más espacio, pero también nos permiten tener relaciones de muchos a muchos sin redundancias, como vimos anteriormente.

- Al cambiar el ID de un libro o autor, ¿se actualiza el ID en las otras tablas también?

  Un ID actualizado aún necesita ser único. Dado eso, los IDs a menudo se abstraen y rara vez los cambiamos.




