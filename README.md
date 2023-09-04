# Instrucciones para Ejecutar un Proyecto Expo en un Emulador de Dispositivo Móvil

A continuación, se proporcionan instrucciones claras sobre cómo ejecutar un proyecto Expo en un emulador de dispositivo móvil. Asegúrate de tener instaladas todas las dependencias especificadas en el archivo `package.json` antes de comenzar.

## Dependencias

Asegúrate de que las siguientes dependencias estén instaladas en tu proyecto. Puedes instalarlas utilizando npm.

```json
"dependencies": {
  "@react-navigation/native": "^6.1.7",
  "@react-navigation/native-stack": "^6.9.13",
  "@types/react": "~18.2.14",
  "expo": "~49.0.8",
  "expo-status-bar": "~1.6.0",
  "nativewind": "^2.0.11",
  "react": "18.2.0",
  "react-native": "0.72.4",
  "react-native-heroicons": "^3.2.0",
  "react-native-reanimated": "~3.3.0",
  "react-native-safe-area-context": "4.6.3",
  "react-native-screens": "~3.22.0",
  "react-native-svg": "^13.9.0",
  "typescript": "^5.1.3"
},
"devDependencies": {
  "@babel/core": "^7.20.0",
  "tailwindcss": "^3.3.2"
}
```

## Pasos para Ejecutar el Proyecto

Sigue estos pasos para ejecutar tu proyecto Expo en un emulador de dispositivo móvil:

### 1. Instalación de Expo

Si aún no has instalado Expo CLI globalmente, puedes hacerlo utilizando npm o yarn:

```bash
npm install -g expo-cli
# o
yarn global add expo-cli
```

### 2. Instalación de Dependencias

Ejecuta el siguiente comando para instalar las dependencias del proyecto desde la misma carpeta:

```bash
npm install
```

### 3. Iniciar el Proyecto Expo

Ejecuta el siguiente comando para iniciar tu proyecto Expo desde la carpeta del projecto:

```bash
expo start
# o
npm start
```

Esto abrirá una ventana en tu navegador con un código QR que puedes escanear con la aplicación Expo Go en tu dispositivo móvil o emulador.

### 4. Configurar Emulador

Si deseas ejecutar el proyecto en un emulador de dispositivo móvil, asegúrate de tener el emulador configurado en tu sistema. Puedes usar emuladores como Android Studio (para Android) o Xcode (para iOS)
para ello tendras que descargar dichos programas y configurar los emuladores.

### 5. Ejecutar en el Emulador

- Para ejecutar en un emulador Android, abre Android Studio, inicia un emulador Android y selecciona la opción "Run on Android device/emulator" desde la ventana del navegador Expo.
- Para ejecutar en un emulador iOS, abre Xcode, inicia un emulador iOS y selecciona la opción "Run on iOS simulator" desde la ventana del navegador Expo.

### 6. Visualizar la Aplicación

Tu aplicación Expo se ejecutará en el emulador seleccionado, y podrás interactuar con ella.

¡Listo!
