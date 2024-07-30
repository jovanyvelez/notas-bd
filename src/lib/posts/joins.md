<script>
	import { createHighlighter } from 'shiki';
  let code = $state('');


  const code1 = `
  SELECT * FROM sea_lions
    JOIN migrations ON migrations.id = sea_lions.id;

`
  const code2 = `
  SELECT * FROM sea_lions
    LEFT JOIN migrations ON migrations.id = sea_lions.id;

`
  const code3 = `
  SELECT * FROM sea_lions
    NATURAL JOIN migrations;


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


**JOIN**

    Esta palabra clave nos permite combinar dos o más tablas.

    Para entender cómo funciona JOIN, consideremos una base de datos de leones marinos y sus patrones de migración. Aquí hay una muestra de la base de datos.

    <img src="https://cs50.harvard.edu/sql/2024/notes/1/images/p69.jpg" alt="imagen" width="100%">

    Para averiguar qué tan lejos viajó el león marino Spot, o responder preguntas similares sobre cada león marino, podríamos usar subconsultas. Alternativamente, podríamos unir las tablas de leones marinos y migraciones de tal manera que cada león marino también tenga su información correspondiente como una extensión de la misma fila.
Podemos unir las tablas en el ID del león marino (el factor común entre las dos tablas) para asegurarnos de que las filas correctas estén alineadas entre sí.

{@render codigo(code1)}

Observa que:

    La palabra clave ON se usa para especificar qué valores coinciden entre las tablas que se están uniendo. No es posible unir tablas sin valores coincidentes.
    Si hay algún ID en una tabla que no esté presente en la otra, esta fila no estará presente en la tabla unida. Este tipo de unión se llama INNER JOIN.

Algunas otras formas de unir tablas que nos permiten retener ciertos IDs que no coinciden son LEFT JOIN, RIGHT JOIN y FULL JOIN. Cada una de estas es un tipo de OUTER JOIN.
Un LEFT JOIN prioriza los datos en la tabla de la izquierda (o primera).

{@render codigo(code2)}

Esta consulta retendría todos los datos de los leones marinos de la tabla sea_lions, la tabla de la izquierda. Algunas filas en la tabla unida podrían estar parcialmente vacías. Esto sucedería si la tabla de la derecha no tuviera datos para un ID en particular.
De manera similar, un RIGHT JOIN retiene todas las filas de la tabla de la derecha (o segunda). Un FULL JOIN nos permite ver la totalidad de todas las tablas.
Como podemos observar, un OUTER JOIN podría llevar a valores vacíos o NULL en la tabla unida.
Ambas tablas en la base de datos de leones marinos tienen la columna id. Dado que el valor sobre el cual estamos uniendo las tablas tiene el mismo nombre de columna en ambas tablas, en realidad podemos omitir la sección ON de la consulta al unir.

{@render codigo(code3)}

Observa que el resultado no tiene una columna id duplicada en este caso. Además, esta unión funciona de manera similar a un INNER JOIN.

**Preguntas**

    **En la base de datos de leones marinos, ¿cómo se crean los IDs? ¿Provienen de la tabla sea_lions o de la tabla migrations?**

    El ID de cada león marino probablemente provino de investigadores que rastrean los patrones de migración de estos leones marinos. Es decir, los IDs no se generaron en ninguna de las tablas, sino que se asignaron en la fuente de los datos.

    **Si estamos tratando de unir tres tablas, ¿cómo podemos saber cuáles son las tablas izquierda y derecha?**

    Para cada declaración JOIN, la primera tabla antes de la palabra clave es la izquierda. La que está involucrada en la palabra clave JOIN es la tabla derecha.

    **Cuando unimos tablas, ¿se guarda la tabla unida resultante? ¿Podemos referenciarla más tarde sin unir nuevamente?**

    De la manera en que estamos usando JOIN, el resultado es una tabla temporal o un conjunto de resultados. Puede ser utilizado durante la duración de la consulta.

    **Hay muchos tipos diferentes de JOIN. ¿Hay uno predeterminado que debamos usar?**

    El tipo más simple — solo JOIN — es en realidad un INNER JOIN y ese es el predeterminado para SQL.



