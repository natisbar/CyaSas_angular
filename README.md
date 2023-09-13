Arquitectura de la Aplicación Angular
Esta aplicación Angular sigue una estructura organizada y modular que facilita el desarrollo, mantenimiento y escalabilidad del código. A continuación, se presenta una descripción detallada de la arquitectura utilizada:

Estructura de Carpetas
src: Esta carpeta principal contiene todo el código fuente de la aplicación.

1. app: En esta carpeta, se encuentran los archivos centrales de la aplicación.

  core: En esta carpeta, se alojan funcionalidades y servicios esenciales que se comparten en toda la aplicación. Incluye componentes clave como la barra de navegación (navbar) y el pie de página (footer) que se utilizan de manera uniforme en todos los features de la aplicación. Además, aquí se encuentra el archivo HttpGeneralService.ts, que proporciona funcionalidades de servicio HTTP general para realizar peticiones y gestionar respuestas de manera eficiente. Además, dentro de la carpeta core, se organizó un servicio personalizado para el uso de modales con SweetAlert2, que facilita la presentación de mensajes y alertas de manera consistente en toda la aplicación. 

  feature: Esta carpeta agrupa las diferentes características de la aplicación en módulos independientes. Cada módulo representa una característica específica, como "Cliente," "Contacto," "Home," "Nosotros" y "Servicios".

  shared: Contiene componentes, servicios y otros recursos compartidos entre diversas partes de la aplicación. Actualmente solo relaciona el módulo `SharedModule`, que importa y exporta los módulos `CommonModule` y `CarouselModule`. Estos módulos compartidos se utilizan en todos los componentes de la carpeta `feature` y proporcionan funcionalidades esenciales para la construcción de componentes y la implementación de un carrusel de imágenes y texto en la aplicación.

2. assets: En esta carpeta, se almacenan recursos estáticos como imágenes, estilos y archivos de configuración. Estos archivos son estáticos y no cambian durante la ejecución de la aplicación.

3. environments: Aquí se gestionan las configuraciones específicas para diferentes entornos, como desarrollo y producción. El archivo environment.ts define variables cruciales, como endpoints utilizados para realizar peticiones POST a formularios de Google.

Lazy Loading
Implementamos Lazy Loading en nuestra aplicación para mejorar la eficiencia y el rendimiento. Cada característica, como "Cliente," "Contacto," "Home," "Nosotros" y "Servicios," se carga de forma independiente cuando el usuario accede a esa sección en particular. Esto optimiza el tiempo de carga inicial de la aplicación al cargar solamente los módulos necesarios en el momento adecuado.

Configuración del Entorno
La carpeta environments es vital para gestionar las configuraciones específicas del entorno. En particular, el archivo environment.ts juega un papel importante al definir los endpoints utilizados para consumir peticiones POST en formularios de Google. Esta estructura nos permite mantener un control preciso de las configuraciones en diferentes etapas del desarrollo.

Esta arquitectura Angular está diseñada para ser modular, escalable y fácil de mantener, lo que garantiza una experiencia de desarrollo y usuario fluida. Con la descripción anterior, se está proporcionando una visión general de cómo está organizada la aplicación y cómo se han implementado las mejores prácticas de desarrollo.
