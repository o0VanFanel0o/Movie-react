# Movie Dashboard

Aplicación web desarrollada con **React** y **Vite** para explorar películas, buscar títulos, ver detalles en un modal y guardar películas favoritas.

Este proyecto forma parte de mi portafolio como desarrollador frontend. El objetivo principal fue practicar consumo de APIs, manejo de estado, rutas, persistencia con `localStorage`, manejo de errores, variables de entorno y despliegue en Vercel.

---

## Demo en vivo

[Ver proyecto en Vercel](AGREGA_AQUI_TU_LINK_DE_VERCEL)

---

## Vista previa

Próximamente se agregará una captura o demo del proyecto.

---

## Funcionalidades

- Mostrar películas en tendencia usando la API de TMDB.
- Buscar películas por nombre.
- Ver detalles de una película en un modal.
- Agregar películas a favoritos.
- Eliminar películas de favoritos.
- Guardar favoritos usando `localStorage`.
- Página dedicada para favoritos.
- Búsqueda dentro de la página de favoritos.
- Estado de carga mientras se obtienen películas.
- Manejo de errores si falla la petición a la API.
- Estado vacío cuando no hay resultados.
- Imágenes de respaldo si una película no tiene poster o backdrop.
- Rating seguro cuando la API no devuelve calificación.
- Diseño responsive.
- Deploy en Vercel.

---

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- React Router
- CSS
- TMDB API
- localStorage
- Vercel
- Git / GitHub

---

## Estructura del proyecto

```bash
src/
│
├── components/
│   ├── movie/
│   │   ├── MovieCard.jsx
│   │   ├── MovieModal.jsx
│   │   └── TrendingCarrusel.jsx
│   │
│   └── navigation/
│       ├── Favorites.jsx
│       ├── FloatingNav.jsx
│       └── SearchBar.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── FavoritesPage.jsx
│   └── MovieDetail.jsx
│
├── services/
│   └── api.js
│
├── styles/
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## Variables de entorno

Este proyecto usa la API de TMDB.

Para ejecutar el proyecto localmente, crea un archivo `.env` en la raíz del proyecto:

```env
VITE_TMDB_API_KEY=tu_api_key
```

También se incluye un archivo de ejemplo:

```bash
.env.example
```

Importante: el archivo `.env` no debe subirse a GitHub.

En Vite, las variables que se usan en el frontend deben comenzar con:

```txt
VITE_
```

Por eso la variable se llama:

```txt
VITE_TMDB_API_KEY
```

---

## Configuración en Vercel

Como el archivo `.env` no se sube a GitHub, la variable de entorno debe agregarse manualmente en Vercel.

En Vercel:

```txt
Project → Settings → Environment Variables
```

Agregar:

```txt
Name:
VITE_TMDB_API_KEY

Value:
tu_api_key_real_de_TMDB
```

Después de agregar la variable, se debe hacer un nuevo deploy:

```txt
Deployments → Redeploy
```

---

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/o0VanFanel0o/Movie-react.git
```

Entrar a la carpeta del proyecto:

```bash
cd Movie-react
```

Instalar dependencias:

```bash
npm install
```

Ejecutar el servidor de desarrollo:

```bash
npm run dev
```

---

## Scripts disponibles

Ejecutar el proyecto en modo desarrollo:

```bash
npm run dev
```

Revisar errores o problemas de calidad en el código:

```bash
npm run lint
```

Crear una versión optimizada para producción:

```bash
npm run build
```

Previsualizar la versión de producción localmente:

```bash
npm run preview
```

---

## Flujo de trabajo usado

Durante el desarrollo del proyecto se usó un flujo basado en terminal:

```bash
npm run lint
npm run build
git status
git diff
git add
git commit -m "mensaje del cambio"
git push
```

Esto ayudó a revisar los cambios antes de subirlos y a mantener commits más claros.

---

## Lo que aprendí

Con este proyecto practiqué:

- Crear una aplicación React con Vite.
- Dividir la interfaz en componentes reutilizables.
- Pasar información entre componentes usando props.
- Manejar estado con `useState`.
- Ejecutar efectos secundarios con `useEffect`.
- Consumir una API externa usando `fetch`.
- Manejar estados de carga, error y resultados vacíos.
- Usar React Router para separar páginas.
- Guardar información en `localStorage`.
- Evitar que la app se rompa si la API devuelve datos incompletos.
- Usar variables de entorno en Vite.
- Configurar variables de entorno en Vercel.
- Hacer deploy de una aplicación React.
- Usar Git y GitHub desde la terminal.
- Mejorar un proyecto pensando en portafolio.

---

## Problemas resueltos durante el desarrollo

Durante el desarrollo se corrigieron varios puntos importantes:

- Se arreglaron errores de lint.
- Se eliminó `.env` del tracking de Git.
- Se creó `.env.example`.
- Se agregaron estados de carga, error y resultados vacíos.
- Se agregaron imágenes de respaldo para posters y backdrops.
- Se protegió el rating cuando la API no devuelve calificación.
- Se hizo funcional la búsqueda dentro de favoritos.
- Se limpiaron archivos sobrantes del template inicial de Vite.
- Se configuró correctamente la variable de entorno en Vercel.

---

## Mejoras futuras

- Crear una página dedicada de detalles usando `/movie/:id`.
- Mejorar la accesibilidad del modal.
- Permitir cerrar el modal con la tecla `Escape`.
- Agregar soporte de teclado para las tarjetas de películas.
- Agregar debounce en la búsqueda.
- Agregar filtros por género o categoría.
- Mejorar detalles visuales en mobile.
- Agregar pruebas básicas.
- Mejorar el diseño de la página de favoritos.
- Agregar screenshots o gif al README.

---

## Autor

Desarrollado por **Abraham Guevara**.

- GitHub: [@o0VanFanel0o](https://github.com/o0VanFanel0o)