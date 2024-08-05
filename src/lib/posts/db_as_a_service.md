# Qué es DBaaS (Database as a Service)

Una base de datos como servicio, o DBaaS, es un servicio de computación en la nube que permite a los usuarios acceder y utilizar software de base de datos sin comprar y configurar hardware, instalar software o administrar el propio sistema (tomado de www.ibm.com).

## Beneficios

En comparación con la implementación de un sistema de gestión de bases de datos en un servidor, DBaaS ofrece  importantes beneficios financieros, operativos y estratégicos:


- Ahorro de costos: Poner la infraestructura para la gestión de bases de datos es costoso; ampliarlo según sea necesario es costoso y a menudo se sobredimensiona. Con DBaaS, se paga un cargo periódico predecible basado en los recursos necesarios.

- Escalabilidad: Puedes proporcionar de forma rápida y fácilmente capacidad de almacenamiento y computación en el tiempo de ejecución si lo necesitas, y puedes reducir tu grupo de bases de datos durante los tiempos de uso no pico para ahorrar costos.

- Gestión más simple y menos costosa: Para gestionar y mantener una base de datos en las instalaciones de por ejemplo, un servidor, se necesita un equipo administrativo  interno (-personas-). Con DBaaS, el proveedor de la nube lo gestiona todo (aunque puedes elegir manejar ciertos aspectos tú mismo si lo deseas). DBaaS reduce la carga administrativa referida a la gestión de bases de datos sobre el  personal de TI existente y los libera para trabajar en aplicaciones e innovación. 

- Seguridad de datos y aplicaciones: Los proveedores de bases de datos en la nube suelen ofrecer seguridad de nivel empresarial, incluyendo características como cifrado por defecto de datos en reposo y controles de gestión de identidad y acceso integrados. Algunos también cumplen normas específicas de cumplimiento regulatorio.

- Riesgo reducido: Las ofertas de DBaaS de los principales proveedores de la nube típicamente incluyen un acuerdo de nivel de servicio (SLA) que garantiza una cierta cantidad de tiempo de actividad.

## Qué vamos a necesitar hoy para implementar DBaaS y continuar hasta finalizar el año?

1. Una cuenta de github, para poner el código de nuestro proyecto final y poderlo desplegar en la nube.
2. Una base base de datos en la nube.
    - Para nuestro caso vamos a utilizar turso que es un servicio que nos proporciona una capa gratiuta, la cual usaremos para los datos de nuestro proyecto.
3. Finalmente vamos a utilizar un servicio para desplegar nuestra aplicación en la web.
    - se conoce como "Platform as a Service" (PaaS). PaaS proporciona una plataforma que permite a los desarrolladores crear, implementar y gestionar aplicaciones sin tener que preocuparse por la infraestructura subyacente. Este tipo de servicio incluye herramientas y servicios que facilitan el desarrollo y despliegue de aplicaciones, como entornos de desarrollo, sistemas de gestión de bases de datos, herramientas de despliegue continuo, entre otros.
    
    Vercel, en particular, se especializa en el despliegue de aplicaciones web frontend, ofreciendo capacidades de despliegue continuo y optimización de rendimiento. Por lo anterior es la opción que vamos a utilizar.

# Vamos a realizar ejercicios de creación de bases de datos y operaciones crud en nuestra base de datos en la nube

