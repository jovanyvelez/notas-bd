# Tarea 1
## Consultas Simples
## Problema a Resolver

Entre 1830 y 1832, el artista japonés Katsushika Hokusai creó 36 impresiones en madera que representan 36 vistas diferentes del Monte Fuji, un volcán en la isla de Honshū, Japón. Entre las obras más famosas de la serie están *Viento Fino, Mañana Clara* y *La Gran Ola de Kanagawa*. Las impresiones se volvieron tan influyentes que otro artista japonés de la época, Utagawa Hiroshige, creó su propia serie de 36 impresiones, cada una mostrando una nueva vista del Fuji.

En `views.db`, encontrarás detalles sobre las 36 impresiones creadas, respectivamente, por Hokusai e Hiroshige. En total, tendrás datos sobre 72 impresiones. Impresiones como estas tienden a ser apreciadas por su estética, no por sus estadísticas, pero la informática ahora ayuda a crear conocimientos numéricos adicionales sobre las obras de arte. Además del título y el autor de cada impresión, encontrarás algunas estadísticas comúnmente usadas en análisis computacional de imágenes: el color promedio de la impresión, su brillo, su contraste y su entropía. En los archivos `.sql` adjuntos, escribe consultas SQL para responder preguntas sobre esta base de datos de 72 impresiones y las estadísticas sobre su composición.

## Esquema

En `views.db` encontrarás una sola tabla, `views`. En la tabla `views`, encontrarás las siguientes columnas:

- `id`: que identifica de manera única cada fila (impresión) en la tabla.
- `print_number`: que identifica el número de la impresión en la serie de Hokusai o Hiroshige.
- `english_title`: que es el título en inglés de la impresión.
- `japanese_title`: que es el título en japonés de la impresión.
- `artist`: que es el apellido del artista de la impresión.
- `average_color`: que es la representación hexadecimal del color encontrado al promediar los colores de cada píxel en la imagen.
- `brightness`: que es un número que corresponde a la claridad u oscuridad general de la imagen.
- `contrast`: que es un número que representa el grado de diferencia entre las áreas claras y oscuras de la imagen.
- `entropy`: que es una medida utilizada para cuantificar la complejidad de la obra de arte.

## Especificación

Para cada una de las siguientes preguntas, debes escribir la respuesta en un único archivo `.sql`. Cada consulta debe producir los resultados especificados por cada problema. Finalmente, cada consulta debe devolver solo los datos necesarios para responder la pregunta.


## Ejercicios


- En `1.sql`, escribe una consulta SQL que pueda interesar a un traductor: lista, el título en japonés y el título en inglés de cada grabado. Asegúrate de que el título en japonés sea la primera columna, seguido por el título en inglés.

- En `2.sql`, escribe una consulta SQL para listar los colores promedio de los grabados de Hokusai que incluyen “river” en el título en inglés. 

- En `3.sql`, escribe una consulta SQL para contar cuántos grabados de Hokusai incluyen “Fuji” en el título en inglés. 

- En `4.sql`, escribe una consulta SQL para contar cuántos grabados de Hiroshige tienen títulos en inglés que se refieren a la “Capital Oriental”. 

- En `5.sql`, escribe una consulta SQL para encontrar el valor de contraste más alto de los grabados de Hokusai. Nombra la columna “Máximo Contraste”.

- En `6.sql`, escribe una consulta SQL para encontrar la entropía promedio de los grabados de Hiroshige, redondeada a dos decimales. Nombra la columna resultante “Entropía Promedio de Hiroshige”.

- En `7.sql`, escribe una consulta SQL para listar los títulos en inglés de los 5 grabados más brillantes de Hiroshige, de mayor a menor brillo.

- En `8.sql`, escribe una consulta SQL para listar los títulos en inglés de los 5 grabados con menos contraste de Hokusai, de menor a mayor contraste. 

- En `9.sql`, escribe una consulta SQL para encontrar el título en inglés y el artista del grabado con mayor brillo.

- En `10.sql`, escribe una consulta SQL para responder una pregunta de tu elección sobre los grabados. La consulta debe:
    - Hacer uso de AS para renombrar una columna.
    - Involucrar al menos una condición, usando WHERE.
    - Ordenar por al menos una columna, usando ORDER BY.