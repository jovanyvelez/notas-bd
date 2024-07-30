<script>
	import { createHighlighter } from 'shiki';
  let code = $state('');


  const code1 = `
  SELECT title FROM books
    WHERE publisher_id = (
      SELECT id FROM publishers
      WHERE publisher = 'Fitzcarraldo Editions'
    );
`
  const code2 = `
  SELECT rating FROM ratings
    WHERE book_id = (
          SELECT  id FROM books
          WHERE title = 'In Memory of Memory'
    );
`
  const code3 = `
  SELECT AVG(rating) FROM ratings
    WHERE book_id = (
        SELECT id FROM books
          WHERE title = 'In Memory of Memory'
    );
`
const code4 = `
  SELECT name FROM authors
    WHERE id = (
        SELECT author_id FROM authored
          WHERE book_id = (
            SELECT id FROM books
              WHERE title = 'Flights'
          )
    );
`
const code5 = `
  SELECT title FROM books
    WHERE id IN (
      SELECT book_id FROM authored
      WHERE author_id = (
        SELECT id FROM authors
          WHERE name = 'Fernanda Melchor'
      )
    );
`
 const mycodigo = async (code) => {

    const highlighter = await createHighlighter({
      themes: ['poimandres'],
      langs: ['sql'],
    })


    const html = highlighter.codeToHtml(code, { lang: 'sql', theme: 'poimandres' });

    return html

  }


</script>

{#snippet codigo(sql)}
<div style="font-size: 1 rem">
  {#await mycodigo(sql)}
    <!-- promise is pending -->
    <p>waiting for the promise to resolve...</p>
  {:then value}
    <!-- promise was fulfilled or not a Promise -->
     {@html value}
  {:catch error}
    <!-- promise was rejected -->
    <p>Something went wrong: {error.message}</p>
  {/await}
</div>
{/snippet}


## Subconsultas 
Una subconsulta es una consulta dentro de otra consulta. Estas también se llaman
consultas anidadas. Considera este ejemplo para una relación uno-a-muchos. En la tabla de libros,
tenemos un ID para indicar el editor, que es una clave externa tomada de la tabla de editores. Para
averiguar los libros publicados por Fitzcarraldo Editions, necesitaríamos dos consultas: una para
averiguar el `publisher_id` de Fitzcarraldo Editions en la tabla de editores y la segunda para usar
este `publisher_id` para encontrar todos los libros publicados por Fitzcarraldo Editions. Estas dos
consultas se pueden combinar en una usando la idea de una subconsulta.



{@render codigo(code1)}


* Nota que: 
- La subconsulta está entre paréntesis. La consulta que está más lejos dentro de los
paréntesis se ejecutará primero, seguida por las consultas exteriores. 
- La subconsulta está
indentada. Esto se hace según las convenciones de estilo para las subconsultas, con el objetivo de
mejorar la legibilidad. Para encontrar todas las valoraciones de la libro "In Memory of Memory":

Para encontrar todas las valoraciones para el libro "In Memory of Memory", puedes usar la siguiente consulta SQL:

{@render codigo(code2)}

Para seleccionar solo la calificación promedio para el libro "In Memory of Memory", puedes usar la siguiente consulta SQL:

{@render codigo(code3)}

El siguiente ejemplo es para relaciones de muchos a muchos. Para encontrar al(os) autor(es) que escribieron el libro "Flights", se necesitarán tres tablas para consultar: libros, autores y autorizado.

{@render codigo(code4)}

La primera consulta que se ejecuta es la más anidada, que busca el ID del libro "Flights". Luego, se encuentra el ID del autor(es) que escribió "Flights". Finalmente, se utiliza este ID para recuperar el nombre del autor(es)

### IN

La palabra clave "IN" se utiliza para verificar si el valor deseado está en una lista o conjunto de valores dados.

La relación entre autores y libros es de muchos a muchos. Esto significa que es posible que un autor haya escrito más de un libro. Para encontrar los nombres de todos los libros en la base de datos escritos por Fernanda Melchor, se utiliza la palabra clave "IN" de la siguiente manera.

{@render codigo(code5)}

Ten en cuenta que la consulta más interna utiliza el operador "=" en lugar del operador "IN". Esto se debe a que esperamos encontrar solo un autor llamado "Fernanda Melchor".

#### Preguntas

    ** ¿Qué pasa si el valor de una subconsulta no se encuentra? **

    En este caso, la subconsulta no devolverá nada, lo que hará que la consulta externa tampoco devuelva nada. La consulta externa, por lo tanto, depende de los resultados de la subconsulta.

    **¿Es necesario usar cuatro espacios para indentar una subconsulta?**

    No. El número de espacios utilizados para indentar una subconsulta puede variar, al igual que la longitud de cada línea en la consulta. Pero la idea central detrás de dividir consultas y de indentar subconsultas es hacerlas legibles.

    **¿Cómo podemos implementar una relación de muchos a uno entre tablas?**

    Considere la situación en la que un libro es coescrito por múltiples autores. Tendríamos una tabla de autores con múltiples entradas para el mismo ID de libro. Cada una de estas entradas tendría un ID de autor diferente. Vale la pena señalar que los valores de clave foránea pueden repetirse dentro de una tabla, pero los valores de clave primaria son siempre únicos.
