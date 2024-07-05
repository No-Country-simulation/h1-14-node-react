# AppWeb T-Acerco

#### DESCRIPCIÓN DEL PROYECTO

Esta aplicación busca conectar a personas de intereses similares, en una misma localidad, con el fin de aportar a la vida social de la comunidad.

Permite a los usuarios registrar y descubrir eventos, compartir descubrimientos y conocer a otros. 

La plataforma se enriquece con la participación activa de la comunidad, fomentando la exploración y el disfrute de recursos locales.

<details hide>
<summary>

  ## Autores

</summary>
<p>
  
  - [@beatrizlondero](https://github.com/beatrizlondero)
</p>
<p>
  
  - [@veronicaagarcia](https://github.com/veronicaagarcia)
</p>
<p>
  
  - [@melissamolina](https://github.com/MelissaM09)
</p>
<p>
  
  - [@alejandracarlapanizza](https://github.com/mamiehijos)
</p>
<p>
  
  - [@pabloifantidis](https://github.com/jikaidoko)
</p>
<p>
  
  - [@davidlugo](https://github.com/davidlugodev)
</p>
<p>
  
  - [@eduardotrigo](https://github.com/eduardoTrigo)
</p>
<p>
  
  - [@arielgaleppi](https://github.com/ares1001)
</p>
<p>
  
  - [@varayac](https://github.com/varayac)
</p>
<p>
  
  - [@isaacfloresv](https://github.com/IsaacFloresv)
</p>
</details>

<details hide>
<summary>
  
## Tecnologías
</summary>

- Frontend
    - [React](https://react.dev/)
    - [Vite](https://vitejs.dev/)
    - [TailwindCSS](https://tailwindcss.com/)

- Backend
    - [NodeJS](https://nodejs.org/en)
    - [Express](https://expressjs.com/es/)
    - [Postgresql](https://www.postgresql.org/)
    - [Sequelize](https://sequelize.org/)

- UX/UI
    - [Figma](https://www.figma.com/)

- QA
    - [-](-)

- PM
    - [GitHub Project](https://docs.github.com/en/issues/planning-and-tracking-with-projects)
</details>
<details hide>
<summary>
  
## Documentación
</summary>

[Documentación](https://linktodocumentation)

<details hide>
<summary>
  
### Historias de Usuarios
</summary>

#### Usuarios
- Como usuario puedo registrarme en la AppWeb. 
- Ingresando un correo, usuario, contraseña, pais, provincia, ciudad.

- Como usuario puedo modificar mi contraseña, pais, provincia, ciudad.
- Como usuario puedo eliminar mi cuenta.

#### Eventos-Usuarios
- Como usuario puedo ver los eventos que estan cerca de mi zona.
- Como usuario puedo registrar eventos, definiendo la cantidad de personas, la categoria del evento, el lugar y una breve descripcion.
- Como usuario puedo modificar eventos, redefiniendo la cantidad de personas, la categoria, el lugar y la descripcion.
- Como usuario puedo eliminar o cancelar eventos que yo haya registrado.

#### Reacciones-Usuarios
- Como usuario puedo darle me gusta a un evento.
- Como usuario puedo darle no me gusta a un evento. 
- Como usuario puedo confirmar mi asistencia.
- Como usuario puedo retirar mi confirmacion de asistencia. 
- Como usuario puedo marcar como pendiente los eventos a los que todavia no se si podre asistir.

#### Listas-Usuarios
- Como usuario puedo visualizar la lista de eventos que me gustan.
- Como usuario puedo visualizar la lista de eventos que no me gustan.
- Como usuario puedo visualizar la lista de eventos que marque como pendientes.
- Como usuario puedo visualizar la lista de eventos en donde confirme asistencia.
</details>

<details hide>
<summary>
  
## Diccionario de datos de la DB
</summary>

``` sql
Table Users {
  id integer [primary key]
  username varchar [not null, note: "NickName"]
  location_id int [ref: - Locations.id]
  password varchar [not null]
  first_name varchar [not null]
  last_name varchar [not null]
  email varchar
  created_at timestamp
  updated_at timestamp
}

Table UsersEvents {
  id int [primary key]
  user_id int [ref: > Users.id]
  event_id int [ref: > Events.id]
  is_confirmed boolean
}

Table UsersPreferences {
  id int [primary key]
  user_id int [ref: > Users.id]
  preference_id int [ref: > Preferences.id]
}

Table Locations {
  id int [primary key] 
  city varchar(100)
  state varchar(100)
  country varchar(100)
}

Table Categories {
  id int [primary key]
  name varchar(100)
  description varchar(1000)
}

Table Preferences {
  id int [primary key]
  category_id int [ref: > Categories.id] 
  name varchar() [unique]
  description varchar(1000)
}

Table Events {
  id int [primary key]  
  creater_id int [ref: > Users.id]
  name varchar(100)
  address varchar(255)
  description text
  location_id int [ref: > Locations.id]
  preferences_id int [ref: > Preferences.id]
  is_active boolean
}

Table RestrictionEvents {
  id int [primary key]
  event_id int [ref: - Events.id]  
  event_date datetime
  start_date datetime
  end_date datetime
  limit_date timestamp
  permit_child boolean
  permit_pets boolean
  capacity int  
}
```
</details>
</details>
<details hide>
<summary>
  
## FAQ
</summary>
  
### Pregunta 1
#### El problema que aborda: 
#### Respuesta:
Las personas tienen dificultades para encontrar a otros con intereses comunes.

### Pregunta 2
#### Solucion propuesta:
#### Respuesta:
Proporcionar una plataforma para descubrir eventos, compartir experiencias y conocer a otros, fomentando la exploración y el disfrute de los recursos locales.

### Pregunta 3
#### Cual es la población meta:
#### Respuesta:
#### Residentes Locales: 
Personas que viven en una localidad específica y desean conectarse con otros, descubrir eventos y recursos locales.
#### Viajeros y Turistas: 
Aquellos que visitan una localidad y buscan experiencias auténticas, actividades grupales y oportunidades para conocer a personas locales.
#### Exploradores Culturales: 
Individuos interesados en descubrir la cultura, historia y peculiaridades de una localidad.
#### Amantes de la Comunidad: 
Personas que valoran la interacción social, la colaboración y el 
apoyo mutuo dentro de su comunidad
</details>
