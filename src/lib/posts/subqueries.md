<script>
    console.log("subqueries")
</script>

## Subconsultas

Una subconsulta es una consulta dentro de otra consulta. Estas también se llaman consultas anidadas. Considera este ejemplo para una relación uno-a-muchos. En la tabla de libros, tenemos un ID para indicar el editor, que es una clave externa tomada de la tabla de editores. Para averiguar los libros publicados por Fitzcarraldo Editions, necesitaríamos dos consultas: una para averiguar el `publisher_id` de Fitzcarraldo Editions en la tabla de editores y la segunda para usar este `publisher_id` para encontrar todos los libros publicados por Fitzcarraldo Editions. Estas dos consultas se pueden combinar en una usando la idea de una subconsulta.



SELECT "title" FROM "books"  
  WHERE "publisher_id" = (  
    SELECT "id"  
      FROM "publishers"  
        WHERE "publisher" = 'Fitzcarraldo Editions'  
    );  


Nota que:

- La subconsulta está entre paréntesis. La consulta que está más lejos dentro de los paréntesis se ejecutará primero, seguida por las consultas exteriores.
- La subconsulta está indentada. Esto se hace según las convenciones de estilo para las subconsultas, con el objetivo de mejorar la legibilidad.
Para encontrar todas las valoraciones de la libro "In Memory of Memory":
