# Desafío para Software Engineers

- Nombre postulante: Matias Agustin Wasiak.
- Link a la app en producción: kimche-countries-challenge.vercel.app

# Pregunta

"La tabla que contiene la información correspondiente a la asistencia diaria de un niño en un colegio tiene 90 millones de filas. Todas las tablas del sistema existen en la misma BDD en MySQL. La lógica del backend que actualiza la información correspondiente al pasar la asistencia tiene un tiempo de servicio p95 de 10 segundos. El equipo está interesado en bajar este tiempo para mejorar la experiencia del usuario (y porque nos gusta pensar en Kimche como un Ferrari). ¿Qué propondrías para enfrentar el problema? Esta pregunta es abierta, no hay respuestas malas. Puedes proponer arquitectura, tecnologías, diseño, etc."

## Respuesta

La forma en la que enfrentaría este problema es realizar un análisis y limpieza de los datos, debido a que quiero comprender el porqué de cada uno y quizás haya datos que sean redundantes o innecesarios.

Lo siguiente es considerar la idea de diseñar una base de datos acorde al análisis previo, esto implica indicar nuevas tablas para reducir la carga/volumen de registros y así sus relaciones.

Es importante hacer una correcta selección de los tipos de campos que tendremos, se podría tener en cuenta el evitar utilizar tipos de datos de longitud variable y utilizar campos de longitud fija en su lugar (VARCHAR, TEXT, etc.) Así como también evitar los valores nulos, debido a que ralentizan el proceso de lectura.

Por último, es realizar una limpieza de datos periódicamente, esto nos ayudará a deshacernos de datos innecesarios, además de optimizar las consultas y scripts de dicha base de datos. Al seguir estas pautas podríamos asegurarnos una considerable reducción del tiempo de respuesta.

## Instrucciones

Debes crear un buscador de países consultando el [siguiente grafo](https://countries.trevorblades.com/). Este código contiene una base para seguir con la aplicación en React y ApolloClient. Queda a disposición tuya cualquier cambio, ya sea de estructura, estilo, etc.

La funcionalidad y estructura debe ser igual, pero el diseño y variantes (por ejemplo, cambiar colores de las cosas) queda a tu gusto. **Considerar que el ícono al lado del nombre de cada país es el emoji**.

Además de esto, se espera que hagas deploy de tu app en el servicio que desees (Heroku, Netlify, AWS, Github Pages, etc).

## Consideraciones

- Se espera que uses buenas prácticas como gitflow (pull requests y commits), orden del código, estructura, eficiencia, etc.
- Puedes dejar comentarios de decisiones que tuviste que tomar y del por qué en este repositorio.
- Se va a considerar un buen diseño de UX/UI.
