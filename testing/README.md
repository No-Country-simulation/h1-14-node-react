<img align="right" width="250" src="https://github.com/user-attachments/assets/702f2c28-37a4-4aff-bc6f-9c4c4f05d777">

# Testeando Justina.io

## ¿Qué encontraremos en la sección de testing?

- Testing manual:
    - Documentación general.
    - Plan de pruebas.
    - Historias de usuario, criterios de aceptación y validaciones.
    - Casos de prueba.
    - Reporte de resultados obtenidos de casos de prueba y de pruebas de accesibilidad.
    - Reporte de defectos.
- Testing automation:
    - Solo se ha automatizado el testeo de la landing page.


## Manual

Como parte de la implementación de pruebas manuales, se ha comenzado con el desarrollo de las Historias de usuario de la aplicación, las cuales han definido las funcionalidades a implementar.

A partir de allí, se han creado los criterios de aceptación para cada una de ella, y luego las validaciones para poder comenzar con el diseño del plan de prueba y luego de los casos de prueba.

En el proceso de desarrollo, se han realizado cambios en las historias de usuario en reiteradas ocaciones, para poder ir cumpliendo con los requerimientos del cliente y de los staskgolders. Lo que ha llevado a rehacer los diseños de los casos de prueba en varias oportunidades. Llevando a no poder implementarlos para la totalidad de las funcionalidades y requiriendo implementar pruebas exploratorias, más que la ejecución de los casos creados.

Así mismo, se puede observar la documentación general explicada y desarrollada en el archivo "Documentación QA". Y las implementaciones en los archivos:
- Plan de pruebas.
- Historias de usuario y criterios de aceptación.
- Validaciones.
- Caso de prueba (Frontend).
- Pruebas de accesibilidad.
- Reporte de defectos.


## Automation 

Se ha comenzado a implementar la automatización de pruebas de frontend utilizando Selenium y testNG. A la fecha de entrega del proyecto solo se ha alcanzado a implementar pruebas en la landing page, quedando pendiente la implementación para el resto de las funcionalidades.

Se ha creadotambién un espacio de trabajo y las colecciones relacionadas en Postman, para el desarrollo de pruebas automatizadas de la API, pero no se ha logrado completar con los scripts y los datos de pruebas para ejecutarlas. Así mismo se han desarrollado pruebas individuales en Postman para testear funcionalidades individuales y especificas.
Para acceder al mismo, se puede realizar a través del siguiente `ID: 9a4e6eb6-4062-4e13-b033-2965eff8afec`

### ¿Cómo ejecutar las pruebas web?

#### Requerimientos:
- Java 17
- Maven

#### Pasos:
    1. Primero debes clonar el proyecto localmente. Abrirlo en tu IDE de preferencia.
    2. Abre la consola y accede dentro del directorio "testing/Automation" del proyecto.
    3. Ejecuta el comando 
    `mvn  test`
    4. Los test se ejecutarán y verás los resultados obtenidos en pantalla.
    5. Se creará el archivo "extentReport.html" en el cual podrás abrir en cualquier navegador y observarás los resultados obtenidos de la ejecución, y en el caso de ocurrir alguna falla, se presentarán los detalles y capturas de pantalla relacionadas.


