# Prueba técnica React Native

## Realizado por

Alex Ulloa

## Librerías utilizadas

- **fontawesome** íconos
- **react-navigation** navegación entre pantallas
- **react-query** consultas al API
- **axios** cliente HTTP
- **react-native-config** variables de entorno
- **react-native-reanimated** animación, para los skeleton

## Antes de empezar

Copiar el archivo `.env.template` en un archivo `.env` con los valores
solicitados

> **Nota**: Asegurese de haber completado el setup de react native
> [React Native - Setup](https://reactnative.dev/docs/environment-setup)

En caso de ejecutar el proyecto en iOS, se debe instalar los `pods` necesarios,
con el siguiente comando

```bash
cd ios && pod install && cd ..
```

## Scripts disponibles

```bash
yarn android # Ejecutar la aplicación en android
```

```bash
yarn ios # Ejecutar la aplicación en iOS
```

```bash
yarn start # Ejecuta el servidor metro
```

```bash
yarn test # Ejecutar las pruebas unitarias
```

```bash
yarn test:watch # Ejecutar las pruebas escuchando los cambios
```

```bash
yarn test:coverage # Mostrar informe del coverage de pruebas
```
