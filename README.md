# Dog App

Aplicación web para explorar razas de perros usando la API pública de Dog API. Permite consultar razas, ver detalles de cada una y navegar por los grupos a los que pertenecen.

## Vista General

Dog App está construida con Next.js App Router, TypeScript y Tailwind CSS. La interfaz usa una paleta configurable desde `app/globals.css`, con estilos centralizados para mantener una identidad visual consistente.

## Funcionalidades

- Listado paginado de razas.
- Detalle individual de cada raza.
- Información de vida, peso, grupo e hipoalergenicidad.
- Vista de grupos con listado paginado de razas relacionadas.
- Estados de carga reutilizables.
- Página de error personalizada.
- Paleta visual configurable con variables CSS.
- Iconos de paginación con `lucide-react`.

## Tecnologías

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React
- Dog API

## Requisitos

- Node.js 20 o superior recomendado.
- npm.

## Configuración

Crear un archivo `.env` en la raíz del proyecto:

```env
DOG_API_BASE_URL=https://dogapi.dog/api/v2
```

## Instalación

```bash
npm install
```

## Ejecutar en Desarrollo

```bash
npm run dev
```

Abrir:

```text
http://localhost:3000
```

## Scripts

```bash
npm run dev
```

Inicia el servidor de desarrollo.

```bash
npm run build
```

Genera la build de producción.

```bash
npm run start
```

Ejecuta la app compilada.

```bash
npm run lint
```

Ejecuta ESLint.

## Rutas

| Ruta | Descripción |
| --- | --- |
| `/breeds` | Listado paginado de razas |
| `/breeds/[id]` | Detalle de una raza |
| `/groups/[id]` | Razas relacionadas a un grupo |

## Estructura

```text
app/
  breeds/
    page.tsx
    loading.tsx
    [id]/
      page.tsx
      loading.tsx
  groups/
    [id]/
      page.tsx
      loading.tsx
  globals.css
  error.tsx

components/
  breeds/
  groups/
  ui/

services/
  breeds.service.ts
  groups.service.ts

types/
  breed.types.ts
  group.types.ts
```

## Personalización de Colores

La paleta se modifica desde `app/globals.css`:

```css
:root {
  --app-bg: #fbf5ff;
  --app-surface: #ffffff;
  --app-text: #2f2638;
  --app-heading: #19111f;
  --app-muted: #6f607c;
  --app-border: #e9d8f3;
  --app-accent: #8d3fc2;
  --app-accent-soft: #f1e1ff;
  --app-primary: #7f3bb2;
}
```

Los componentes usan clases como `bg-app-bg`, `text-app-accent` y `border-app-border`, por lo que cambiar esos valores actualiza el tema de la aplicación.

## API

Este proyecto consume:

```text
https://dogapi.dog/api/v2
```

Endpoints usados:

- `/breeds`
- `/breeds/:id`
- `/groups/:id`

## Build

Antes de subir o desplegar:

```bash
npm run build
```

Si el build finaliza correctamente, la app está lista para deploy.
