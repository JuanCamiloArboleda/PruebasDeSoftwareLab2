# Proyecto de Pruebas de Performance con Gatling

[![Gatling Performance Tests](https://github.com/[tu-usuario]/[tu-repo]/actions/workflows/gatling.yml/badge.svg)](https://github.com/[tu-usuario]/[tu-repo]/actions/workflows/gatling.yml)

Proyecto de pruebas de rendimiento para la aplicación ParaBank utilizando Gatling 3.13.5 y Scala.

## Descripción

Este proyecto contiene 5 historias de usuario no funcionales que evalúan el rendimiento de diferentes endpoints de la API de ParaBank:

### Historias de Usuario

1. **LoginTest** - Tiempo de respuesta en login
   - ✅ ≤ 2s con 100 usuarios concurrentes (carga normal)
   - ✅ ≤ 5s con 200 usuarios concurrentes (carga pico)

2. **TransferTest** - Transferencias simultáneas con escalabilidad
   - ✅ ≥ 150 transacciones/segundo
   - ✅ Sin fallos en las transacciones
   - 📊 Usa feeder CSV con datos de prueba

3. **AccountStatementTest** - Consulta de estados de cuenta
   - ✅ ≤ 3s con 200 usuarios simultáneos
   - ✅ Tasa de error ≤ 1%

4. **LoanRequestTest** - Solicitud de préstamo bajo carga
   - ✅ 150 usuarios concurrentes
   - ✅ Promedio ≤ 5s
   - ✅ Tasa de éxito ≥ 98%

5. **BillPayTest** - Pago de servicios con alta concurrencia
   - ✅ 200 usuarios concurrentes
   - ✅ ≤ 3s por transacción
   - ✅ ≤ 1% de errores

## Requisitos Previos

- Java JDK 17 o superior
- Maven 3.6+
- Conexión a Internet (para acceder a ParaBank)

## Instalación

1. Clona este repositorio:
```bash
git clone [URL-del-repositorio]
cd PruebasDeSoftwareLab2-main
```

2. Compila el proyecto:
```bash
mvn clean test-compile
```

## Ejecución

### Ejecutar todos los tests
```bash
mvn gatling:test -Dgatling.runMultipleSimulations=true
```

### Ejecutar un test específico
```bash
# Login Test
mvn gatling:test -Dgatling.simulationClass=parabank.LoginTest

# Transfer Test
mvn gatling:test -Dgatling.simulationClass=parabank.TransferTest

# Account Statement Test
mvn gatling:test -Dgatling.simulationClass=parabank.AccountStatementTest

# Loan Request Test
mvn gatling:test -Dgatling.simulationClass=parabank.LoanRequestTest

# Bill Pay Test
mvn gatling:test -Dgatling.simulationClass=parabank.BillPayTest
```

## Reportes

Los reportes HTML de Gatling se generan automáticamente en:
```
target/gatling/[nombre-del-test-timestamp]/index.html
```

Abre el archivo `index.html` en tu navegador para ver:
- Estadísticas de respuesta
- Gráficos de rendimiento
- Distribución de tiempos de respuesta
- Tasas de éxito/error

## GitHub Actions

El proyecto incluye un workflow de GitHub Actions que:
- Se ejecuta automáticamente en cada push a `main`
- Se ejecuta en pull requests
- Puede ejecutarse manualmente desde la interfaz de GitHub
- Sube los reportes como artifacts (disponibles por 30 días)

### Ver los resultados
1. Ve a la pestaña "Actions" en GitHub
2. Selecciona la ejecución más reciente
3. Descarga el artifact "gatling-reports"
4. Extrae el ZIP y abre `index.html` en tu navegador

## Estructura del Proyecto

```
.
├── .github/
│   └── workflows/
│       └── gatling.yml          # Configuración de CI/CD
├── src/
│   └── test/
│       ├── resources/
│       │   ├── gatling.conf     # Configuración de Gatling
│       │   ├── logback.xml      # Configuración de logs
│       │   └── transfers.csv    # Datos para TransferTest
│       └── scala/
│           └── parabank/
│               ├── Data.scala                # Datos compartidos
│               ├── LoginTest.scala           # Historia 1
│               ├── TransferTest.scala        # Historia 2
│               ├── AccountStatementTest.scala # Historia 3
│               ├── LoanRequestTest.scala     # Historia 4
│               └── BillPayTest.scala         # Historia 5
├── pom.xml                      # Configuración Maven
└── .gitignore                   # Archivos ignorados por Git
```

## Tecnologías

- **Gatling** 3.13.5 - Framework de pruebas de carga
- **Scala** - Lenguaje de programación
- **Maven** - Gestión de dependencias y build
- **ParaBank API** - Sistema bajo prueba
- **GitHub Actions** - CI/CD

## Notas

- La API de ParaBank es pública y puede tener variabilidad en los tiempos de respuesta
- Los tests están configurados con umbrales realistas para un entorno de pruebas
- Se recomienda ejecutar los tests individualmente para evitar sobrecarga del servidor

## Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.
