# Muro Interactivo (versión LocalStorage)

Este proyecto funciona **sin backend** ni Firebase. Todo se guarda en el **localStorage** del navegador.

### Funcionalidades
- Ver publicaciones (público)
- Crear cuenta de usuario (se guarda en localStorage con clave en texto plano, solo para demo)
- Iniciar sesión
- Publicar nuevos posts (solo autenticados)

### Uso
```bash
npm install
npm run dev
```

Abre en tu navegador y prueba.

⚠️ Nota: La clave de usuario se guarda en **texto plano** en `localStorage` (no es seguro). Esto es solo para práctica local.
