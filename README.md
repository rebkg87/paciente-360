# Patient360
## Reto: Herramienta Digital para la Gestión Integral de Condiciones Crónicas (CRM)

## Índice

- [Descripción del Proyecto](#descripción-del-proyecto)
- [El Reto](#el-reto)
- [Objetivos](#objetivos)
- [Diseño de la Herramienta](#diseño-de-la-herramienta)
- [Requerimientos](#requerimientos)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Tecnologías](#tecnologías)
- [Uso](#uso)
- [Equipo](#equipo)
- [Contacto](#contacto)

## Descripción del Proyecto

La Dra. María, médica de familia, y la enfermera Laura forman un equipo comprometido en su centro de salud, enfrentando el reto de brindar atención integral a pacientes con múltiples condiciones crónicas interconectadas. Entre estas condiciones se incluyen enfermedades Cardiovasculares, Renales y Metabólicas (CRM), como la diabetes, insuficiencia cardíaca, enfermedad renal crónica, esteatohepatitis no alcohólica (EHNA) y obesidad. Estos trastornos no solo coexisten, sino que también se influyen mutuamente, lo que complica la atención integral.

Para apoyar a los profesionales de salud, se propone el diseño de una herramienta digital capaz de gestionar y visualizar estas condiciones de manera holística, permitiendo la identificación de factores de riesgo compartidos, prevención de complicaciones y mejora de la calidad de vida de los pacientes.

Hemos diseñado una aplicación destinada para el personal médico que ayuda al abordaje integral del paciente en la atención primaria. Con una vista sencilla y visual, la aplicación analiza todos los datos duros, antecedentes e históricos del paciente para ofrecer porcentajes de alarma y riesgo en enfermedades CRM, qué elementos están fuera de margen y qué pruebas se recomienda realizar para el seguimiento. 

## El Reto

Diseñar una herramienta digital que permita a los profesionales de atención primaria abordar las múltiples condiciones crónicas de los pacientes de manera integrada. La herramienta debe:

- Visualizar las condiciones CRM de manera completa.
- Identificar factores de riesgo compartidos entre las enfermedades.
- Facilitar la prevención de complicaciones a largo plazo.
- Mejorar la calidad de vida de los pacientes mediante un seguimiento personalizado.

Esta herramienta será fundamental para ayudar a la Dra. María y a Laura a ofrecer una atención más efectiva, mejorando la salud y el bienestar de los pacientes a largo plazo.

## Objetivos

- Crear una plataforma sencilla de usar, accesible para los profesionales de salud.
- Facilitar la visualización de las condiciones de los pacientes en un solo lugar.
- Ofrecer recomendaciones personalizadas basadas en los datos recopilados.
- Mejorar la comunicación y coordinación entre médicos y enfermeras en la atención del paciente.


## Diseño de la Herramienta



- **Dashboard:** Visualización general para el personal sanitario, con información de las visitas programadas para el día, así como recordatorios y alertas sobre seguimiento de pacientes.
- **Pacientes:** Primera pantalla donde se puede realizar búsqueda por DNI o nombre. Al entrar en el paciente concreto, se despliegua una nueva página con la información detallada de dicho paciente: nombre, edat, peso y sexo, junto con un gráfico sencillo con porcentajes de riesgo en enfermedades CRM. Además hay dos elementos para el seguimiento y revisión del paciente: un aviso que indica al personal médico la necesidad de revisión médica teniendo en cuenta factores como: edad, última revisión/visita, peso, resultados médicos; así como un listado de los resultados de análisis y falta de pruebas para confirmar la presencia de enfrmedades CRM.
    - **Gráfico comparativo de resultados:** Visualización gráfica de los resultados de las pruebas realizadas a lo largo del tiempo, con colores cuando estan fuera de rango para indicar en una simple vista qué resultados demandan atención immediata.
    - **Medicamentos:** Tabla con los medicamentos que se está tomando el paciente. 
    - **Historia de pruebas:** El personal médico puede acceder a los resultados.
    - **Historia de visitas:** Información sobre todas las visitas médicas del paciente
- **Calendario:** Programación de visitas y seguimientos médicos.



## Requerimientos

- [Node.js](https://nodejs.org/en)
- [VSC](https://www.w3schools.com/java/java_intro.asp) or tu IDE de preferencia

## Estructura del proyecto

```plaintext
├── RETO-3-PACIENTE-360
│   ├── src/
│   │    ├── components
│   │    │     ├── general
│   │    │     │     ├── Button.jsx
│   │    │     │     ├── Footer.jsx
│   │    │     │     ├── FormInput.jsx
│   │    │     │     ├── LogoutButton.jsx
│   │    │     │     ├── SearchInput.jsx
│   │    │     │     └── Sidebar.jsx
│   │    │     ├── patient
│   │    │     │     ├── riskCard
│   │    │     │     │     ├── RiskCard.jsx
│   │    │     │     │     └── RiskGroup.jsx
│   │    │     │     ├── CheckupTest.jsx
│   │    │     │     └── PatientInfo.jsx
│   │    │     ├── person
│   │    │     │     └── personCard.jsx
│   │    │     ├── risk
│   │    │     │     ├── RiskGraph.jsx
│   │    │     │     ├── RiskPercent.jsx
│   │    │     │     ├── RiskPercentGroup.jsx
│   │    │     │     └── RiskPercentGroupCard.jsx
│   │    │     └── select
│   │    │           ├── filterSelect.jsx
│   │    │           └── filterSelectTitle.jsx
│   │    ├── context
│   │    │     └── userContext.jsx
│   │    ├── customHooks
│   │    │     └── validationSchemas.jsx
│   │    ├── data
│   │    │      ├── healthMetrics.js
│   │    │      └── patients.js
│   │    ├── layout
│   │    │    └── Layout.jsx
│   │    ├── pages
│   │    │    ├── Dashboard.jsx
│   │    │    ├── LoginPage.jsx
│   │    │    ├── Patient.jsx
│   │    │    └── PatientList.jsx
│   │    ├── router
│   │    │    └── index.jsx
│   │    ├── index.scss
│   │    └── main.jsx
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── postcss.config.js
│   ├── package.json
│   ├── tailwind.config.js
│   ├── README.md
└── └── vite.config.js
```


## Tecnologías

**Front:** 
- [React.js](https://react.dev/)
- [JavaScript](https://www.w3schools.com/js/js_intro.asp)
- [TailwindCSS](https://tailwindcss.com/)


## Uso

- Iniciar sesión con cuenta de profesional de salud.
- Crear o seleccionar un paciente.
- Ingresar las condiciones de salud del paciente.
- Recibir recomendaciones personalizadas y seguimiento.

## Equipo de desarrollo

- [Flavia Ferrigno](https://github.com/flaviferri/)
- [Rebeca García](https://github.com/rebkg87)
- [Laura Gil](https://github.com/LauraGDev)
- [Betty Lopez](https://github.com/BettyLopo)
- [Belén Sánchez](https://github.com/Belensanchez1989)


