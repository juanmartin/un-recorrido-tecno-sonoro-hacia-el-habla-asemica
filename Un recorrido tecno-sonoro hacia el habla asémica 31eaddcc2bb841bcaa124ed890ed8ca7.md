# Un recorrido tecno-sonoro hacia el habla asémica

> Trabajo Final de Grado para la Licenciatura en Artes Electrónicas de la Universidad de Tres de Febrero
> 

> por Juan Martín Sesali Maydana. Con la tutoría de mi amigo y referente Leandro Garber.
> 
- **Agradecimientos:**
    
    - A mi mamá, Marisa Maydana, por encontrar esta carrera en un momento clave en mi vida. Por su apoyo amoroso incondicional y la confianza en mis delirios.
    - A Lean, por guiarme en este camino.
    - A Gallardo, espacio donde descubrí la felicidad nerdeando con amigxs. A toda la crew: Pilu, Polo, Fran, Peli, +.
    - A Gala Lucía González Barrios, amiga, colega, referente, y compañera de tecno-aventuras a lo largo de todos estos años.
    - A Tomás Ciccola y Nahuel Rodrigues, amigos, hermanos con quien compartí un sinfin de experiencias.
    - A Margarita Molfino, mi referente en materia de la sensibilidad corporal.
    - A Violeta Guitart, por todo su amor y ayuda teórica en este último tramo.
    - A toda la gente increíble que conocí en o gracias a la UNTREF.
    //PASAR A PÁRRAFO
    

> Dedicado a mi viejo, Jorge A. Sesali (1958-2020).
> 

# Índice

# Abstract

Este trabajo investiga el concepto del *habla asémica*, el habla sin sentido semántico, a través de la exploración y aplicación de diversas tecnologías incluyendo inteligencia artificial. Centrándose en la sonoridad del lenguaje, se plantea una aventura tecnológica que parte de la idea de crear un sintetizador de habla asémica que puede generar habla que se asemeja a varias lenguas sin contenido semántico, es decir, sin decir nada concretamente. El desarrollo también aborda la posibilidad de mezclar o interpolar lenguas y explorar lo que existe *entre* ellas a través de la inyección de datos en el espacio latente de una red neuronal o mezclando dinámicamente fragmentos de audio de voces habladas. A través de la investigación y el desarrollo de software, se busca proporcionar una nueva forma de entender los aspectos sonoros formales que identifican a un lenguaje particular.

# Introducción

## Corpus Artístico???

completar

La operación recurrente que realizo en las piezas y obras que hice a lo largo de mi carrera es la de despojar de sentido -o de al menos el sentido conocido o cotidiano- a la mirada que tenemos sobre el mundo, sus cosas, la existencia. Al liberar el contenido semántico de las cosas, da lugar a re-generar el sentido, desde una perspectiva nueva.

mi cuerpo de obra relacionado a mirar las cosas desde otro punto de vista, proponiendo una mirada despojada de sentido *o del sentido conocido/cotidiano* para volver a generar un nuevo sentido desde esta perspectiva "virgen”.

obras afines que hice:

- museo mar anamorfismos

[No son señales](https://www.juanm.art/in/projects/nosonseniales)

- parallax cryptography web

[Parallax-Cryptography](https://www.juanm.art/in/projects/paracrypt)

SIMBOLOS ARBITRARIOS LENGUAJE.

- 
- serie alineaciones fotos no publicadas
- patentes (mensajes)

[Instagram (@patentepatente)](https://www.instagram.com/patentepatente)

- sonido que no se percibe y solo se percibe cuando se detiene: fenomeno heladera. se hizo en PD para materia de varchausky.

entonces el desafío final es despojar el lenguaje de sentido (y por eso es mi tesis de grado) porque el lenguaje es el medio fundamental/principal a través del cual producimos sentido. el mundo de las ideas platónico no sería posible sino por el lenguaje. si bien existen símbolos y otras formas de comunicar algún sentido, todo termina siendo explicado por el lenguaje en su medio visual o sonoro.

ver si este párrafo va acá aparte o en propósito y motivación.

## Propósito y Motivación

El sonido en el habla comenzó a interesarme a partir de un viaje en el que recorrí varios países europeos. Escuchar a la gente a mi alrededor despertó una inquietud acerca de cómo sonaban los distintos idiomas. Grabando material y mediante una escucha reducida comencé a establecer ciertas relaciones entre lenguas que, en un plano geográfico y/o cultural, no tenían relación alguna. ¿Qué sucedería si se plantea un mapa donde las distancias entre territorios estén representadas acorde a la similitud de sus *fonemas*? Siendo fonemas una unidad mínima de sonido para formar palabras.

Resulta curioso cuando las personas pueden identificar los idiomas sin saber hablarlos; quizás escuchando música de algún lugar, TV o cualquier material donde se escuche gente hablando, algunas personas logran identificar correctamente qué idioma están escuchando. ¿Por qué sucede esto? **¿Qué características de una lengua sintetizan su identidad?** ¿Cuáles son los aspectos que los vuelven *familiares*?

Me interesa en particular el habla que no hace sentido, así como existe la escritura asémica, por qué no pensar en *habla asémica*, como un balbuceo. Entre estas preguntas e inquietudes, más el uso de tecnologías de inteligencia artificial surge la idea de crear un *sintetizador de habla asémica*, es decir, habla que carezca de sentido, lo cual lo diferencia de un texto a habla (TTS) en el que el usuario escribe un texto y luego es reproducido por una voz sintetizada. Este software sería capaz de generar habla que nos remita a cierta lengua que el usuario pueda elegir, incluso la posibilidad de *mezclar* varias, sin ingresar contenido semántico. La mezcla consistiría en la interpolación dentro de la red neuronal generadora buscando lo que hay dentro del *espacio latente* luego de haber sido entrenada con grandes datasets de audio clasificado en cada lengua. De esta manera podríamos establecer la *forma* conocida, o familiar, y la *forma* desconocida, que viene de esta interpolación.

Quizás esta tecnología pueda dar al menos un acercamiento a conocer los aspectos formales sonoros que identifican a un lenguaje particular, y además descubrir qué hay, por ejemplo, *entre* algunos idiomas en los que intuitivamente podemos hallar similitudes como fonemas coincidentes o aquellos que sean completamente ajenos entre sí. ¿Qué sucede entre lenguas? ¿Esos resultados nos serán familiares? ¿Por qué? ¿Qué otras preguntas pueden llegar a surgir a partir de escuchar estos nuevos sonidos?

El proyecto pretende investigar este aspecto y así generar espacios para resultados concretos como el software de habla propuesto anteriormente, recreación de voces como familiares y la propia, performances de *sono-lenguas,* piezas sonoras, instalaciones, personajes virtuales que las hablen, entre otros. Esta exploración propone un recorrido donde sus ramas se retroalimenten con estos resultados para continuar profundizando, generando un mapa o mejor aún, una red de conocimiento.

## Alcance de la investigación

En principio este trabajo fue pensado como un recorrido análogo al de una investigación artística, guiado por intereses personales acerca del lenguaje y su sonoridad. El objetivo material fue el desarrollo de un software capaz de generar *habla asémica*, es decir, aquella que simule habla humana eliminando el contenido semántico y dejando sólo su sonoridad.

A partir de este desarrollo como guía del proceso, se espera -y se celebra- la emergencia de resultados o salidas tanto materiales como teóricas. Este escrito es el relato del recorrido que fue dándose teniendo como objetivo dicho software, incluyendo las ideas y los desafíos que surgieron, los experimentos y sus pequeñas piezas, y por supuesto este mismo texto como parte de una obra en constante evolución y proceso que no concluye con el fin de esta narración, sino que es puntapié para seguir investigando.

# Estado de la Cuestión

// REVISAR REDUNDANCIA EN EL CONTENIDO //

Este trabajo realiza una operación de interpelación al imaginario de quienes lo experimentan, buscando empatizar con ciertos sectores de nuestra memoria para evocar una sensación de familiaridad, acoplarse a una parte de nuestra experiencia que no alcanza a ser racionalizada. Ese lugar intermedio es de sumo interés para mi trabajo. A continuación, daré a conocer algunas referencias que considero relevantes para llevar a cabo este experimento, parte del camino de la investigación, incluyendo aspectos técnicos -tanto tecnológicos como teóricos del habla y la lengua- que lo posibilitan, experiencias tangenciales al objeto de estudio, y algunas referencias dentro del campo del arte sonoro donde podría inscribirse este desarrollo.

### Tecnología involucrada y su aplicación en desarrollos creativos vinculados al arte

La generación de audio por inteligencia artificial (IA) ha experimentado un rápido avance en los últimos años, lo que ha llevado al desarrollo de diversas tecnologías disponibles en este campo. Estas tecnologías aprovechan algoritmos de aprendizaje automático y modelos de redes neuronales entrenados con grandes cantidades de datos de voz para generar pronunciación, entonación y cadencia similares a las de un hablante humano. Esto ha abierto nuevas posibilidades en áreas como asistentes virtuales, audiolibros, narración de texto y accesibilidad. Además permiten realizar tareas como la eliminación de ruido de grabaciones, la separación de fuentes de audio, la mejora de calidad de audio y la conversión de voz a diferentes estilos y timbres.

Las tecnologías de conversión texto a voz (TTS, por sus siglas en inglés) también han experimentado mejoras significativas gracias a la IA. Estos sistemas pueden convertir texto escrito en voz de forma automatizada y natural, lo que ha impulsado aplicaciones como audiolibros, asistentes virtuales y sistemas de accesibilidad. En el marco de mi investigación elimino la parte del texto en la generación de habla, ya que no existe dimensión semántica en el habla a generar.

### Dataset

Un dataset de audio es de vital importancia para la generación de habla humana mediante inteligencia artificial. Este tipo de dataset consiste en una colección de grabaciones de voz humana que se utilizan para entrenar modelos de generación de habla.

La calidad y la diversidad del dataset son aspectos cruciales. Es importante que el dataset contenga una amplia variedad de voces, acentos, géneros y edades para garantizar que el modelo pueda generar habla que sea representativa de la diversidad humana. Además, es necesario contar con una alta calidad de grabación para capturar los detalles y matices del habla, incluso aunque no tenga la necesidad de alcanzar un nivel de especificidad que permita inteligibilidad y sentido en la posterior generación de muestras de habla.

Uno de los desafíos principales al trabajar con un dataset de audio para la generación de habla humana es el problema de variación de canal. Este problema se refiere a las diferencias acústicas y de calidad que surgen debido a las variaciones en el sistema y los entornos de grabación y demás condiciones técnicas. Estas variaciones pueden afectar la calidad del habla generada, quizás provocando ruido indeseado.

Para abordar el problema de variación de canal, es importante recopilar un dataset que contemple una amplia gama de condiciones de grabación. Esto implica capturar grabaciones en diferentes entornos, utilizando diferentes micrófonos y configuraciones técnicas. Además, se pueden aplicar técnicas de preprocesamiento y normalización para reducir las variaciones no deseadas en el audio y garantizar una mayor consistencia en los datos. Es importante controlar estas condiciones en la mayor medida posible para que el modelo sea capaz de generalizar sobre las características del habla, y descartar las variables de entorno.

### Técnicas específicas Tecnologías de generación de audio por inteligencia artificial

Para entrar en detalle acerca de las técnicas disponibles, haré una breve descripción centrada en la generación de sonido de cada una de las investigadas:

- Generative Adversarial Networks (GAN)

Las GAN son redes neuronales que consisten en un generador y un discriminador. El generador crea muestras de audio a partir de ruido aleatorio, mientras que el discriminador evalúa la autenticidad de las muestras generadas. Una ventaja de las GAN es su capacidad para generar muestras de audio de alta calidad y realistas. Sin embargo, pueden ser difíciles de entrenar y pueden sufrir de inestabilidad en el aprendizaje. [(Goodfellow et al., 2014)](https://www.zotero.org/google-docs/?BPDIgP).

- **Autoencoders**

Los autoencoders son redes neuronales que aprenden a comprimir y descomprimir datos. En el contexto del audio pueden aprender a representar características de audio en un espacio de menor dimensión y generar nuevas muestras de audio. Una ventaja de los autoencoders es su capacidad para aprender representaciones compactas y generar muestras de audio con coherencia estructural a través del recorrido del espacio latente, que es esta representación en la mínima dimensión posible para luego generar las nuevas muestras. Sin embargo, la calidad del audio generado puede no ser tan alta como en otras técnicas más avanzadas. [(Bengio et al., 2013)](https://www.zotero.org/google-docs/?2xQwzm)

Aún así, esta será la técnica elegida para el desarrollo del software central de este trabajo. Recorrer la representación comprimida de un modelo entrenado -su espacio latente- puede resultar en audios de habla donde las características principales del idioma sean evidentes, pero nunca llegarán a ser lo suficientemente específicas para expresar contenido semántico. Por último, pero no por eso menos importante, esta técnica es bastante eficiente en cuanto a recursos por lo que su costo y tiempo de entrenamiento son accesibles en el marco de esta investigación.

- Stable Diffusion

El Stable Diffusion es un enfoque que utiliza modelos generativos de difusión para la generación de audio. Se basa en la difusión de un proceso estocástico en el tiempo para generar muestras de audio realistas. Una ventaja del Stable Diffusion es su capacidad para generar muestras de audio de alta calidad y con mayor diversidad. Sin embargo, su implementación puede ser compleja y requerir una mayor capacidad computacional. [(Rombach et al., 2022)](https://www.zotero.org/google-docs/?4Wt8nj)

- WaveNet

WaveNet es un modelo generativo basado en redes neuronales recurrentes que utiliza una arquitectura de onda a onda para generar audio de alta calidad. Una ventaja de WaveNet es su capacidad para generar audio extremadamente realista y detallado, capturando incluso pequeñas variaciones en el sonido. Sin embargo, su entrenamiento y generación son computacionalmente intensivos, lo que puede requerir recursos significativos. [(Oord et al., 2016)](https://www.zotero.org/google-docs/?iM6gtl).

- Transformadores

Los modelos basados en transformadores, como GPT (Generative Pre-trained Transformer), se han aplicado con éxito a la generación de audio. Utilizan una atención global sobre el contexto para generar secuencias de audio coherentes y realistas. Como ventaja de los transformadores es su capacidad para capturar relaciones de largo alcance en el audio y generar muestras de alta calidad. Sin embargo, pueden requerir una gran cantidad de datos de entrenamiento y tiempo computacional. [(Vaswani et al., 2017)](https://www.zotero.org/google-docs/?tFHNDX).

- Variational Autoencoders (VAE)

Los VAE son modelos generativos que permiten aprender y muestrear el espacio latente de una distribución de datos. En el contexto del audio, los VAE se han utilizado para generar nuevos sonidos y efectos de sonido creativos. Los VAE poseen gran capacidad para generar muestras de audio diversas y explorar el espacio latente de manera controlada. Sin embargo, pueden generar muestras de menor calidad en comparación con otras técnicas más avanzadas. [(Kingma & Welling, 2022)](https://www.zotero.org/google-docs/?0npyeW).

- Redes Generativas de Flujos (Generative Flows)

Esta técnica se basa en el aprendizaje de transformaciones invertibles que mapean una distribución simple a una distribución de audio más compleja. Las redes generativas de flujos pueden generar muestras de audio de alta calidad y permiten un muestreo y manipulación más flexible del espacio de audio. Una ventaja de las redes generativas de flujos es su capacidad para generar muestras de audio realistas y permitir una mayor manipulación creativa. Sin embargo, su entrenamiento puede ser computacionalmente costoso. [(Papamakarios et al., 2021)](https://www.zotero.org/google-docs/?K3KCJi).

### Casos de aplicación

**Granma MagNet** [(Akten, n.d.)](https://www.zotero.org/google-docs/?Mnuh5z) es un proyecto de síntesis de audio profundo con redes neuronales. Su objetivo no es crear sonidos que sean indistinguibles de los datos de entrenamiento (es decir, capaces de pasar una "prueba de Turing de audio"), sino crear sonidos que sean de alguna manera reminiscentes de los datos de entrenamiento, pero también novedosos y no humanos, pero aún interesantes, y, lo más importante, permitir a un usuario humano manipular de manera expresiva y significativa la salida en tiempo real.

No sólo es interesante este proyecto por la generación de sonidos que hagan referencia a su entrada al sistema, sino por la acción de interpolar naturalmente entre sonidos con la ayuda de IA, lo cual es un recurso que aplica a mi investigación en la búsqueda de nuevos lenguajes que existan *en el medio* de otros preexistentes.

**Dadabots** [(*Dadabots*, n.d.)](https://www.zotero.org/google-docs/?WReq2I) es un proyecto de generación de música a través de herramientas de IA. Con modelos de aprendizaje automático, específicamente SampleRNN han logrado recrear estilos clásicos de *música humana* como punk, hard rock, metal, hardcore, math rock, entre otros. Esto es debido a que ciertos géneros musicales poseen sonoridades bien distinguibles y relativamente fáciles de generalizar. Con tan solo alimentar los modelos con influencias del estilo, ciertos géneros son reproducibles de manera fiel. Fueron de los primeros en realizar este tipo de operaciones con tanta precisión, y además publican sus papers en investigación acerca del asunto. La relevancia de este proyecto es que es uno de los primeros antecedentes de generación de audio tan fiel a su fuente, cumpliendo su objetivo, publicando en el ámbito académico y compartiendo su código en su GitHub para poder recrearlo.

**Wekinator** [(Wekinator, n.d.)](https://www.zotero.org/google-docs/?yQPOjV) es un software creado por Rebecca Fiebrink en 2009 que permite a los usuarios entrenar modelos de aprendizaje automático en tiempo real para crear aplicaciones interactivas y sistemas de control personalizados. Su enfoque en la interactividad y la creatividad lo hace especialmente adecuado para procesos creativos en música, arte, diseño interactivo y performance, ofreciendo a los artistas y diseñadores nuevas formas de explorar la interacción humano-máquina.

Este software fue uno de los primeros encuentros que tuve con IA y vale la pena mencionarlo ya que en el campo de las artes electrónicas podría considerarse como una navaja suiza de la inteligencia artificial, dado que de manera muy intuitiva uno puede *mapear* gestos desde alguna entrada como una cámara o sensor hacia datos fácilmente traducibles en audio, imagen o la interacción con actuadores físicos.

**AudioStellar** es un software de exploración de *constelaciones* conformadas por una gran cantidad de muestras de sonido. Puede utilizarse tanto como un visualizador para encontrar rápidamente los *samples* que uno necesita para la realización de piezas sonoras, simplemente organización visual, o mejor aún, como herramienta performática gracias a sus intuitivos y creativos modos de recorrer estos espacios sonoros.

En principio debe generarse el mapa basado en una colección de muestras -preferentemente de corta duración- a través de alguno de los algoritmos de clasificación disponibles. Una vez terminado el proceso, el software muestra cada sonido como un punto en un mapa bidimensional. La idea es que estén organizados por similitud, es decir, por características tímbricas que los ubican en un área cercana. Por ejemplo, cortes de voces -vocal chops- estarían en un sector lejos de otros como golpes de batería.

Imagino este software como una utilidad para un posible output de mi trabajo. La idea de organizar fonemas, sin importar el lenguaje, en un mapa resulta en una clara forma de visibilizar cercanías o lejanías entre sonidos de distintos idiomas. ¿Qué escucharemos al recorrerlos en las novedosas formas que propone este software? ¿Podríamos pensar en nuevas sonoridades lingüísticas a partir de organizar recorridos a través de fonemas provenientes de diferentes idiomas?

### Cultura popular

En el ámbito de la música popular, las voces sintetizadas han desempeñado un papel importante en la creación de estilos musicales únicos y reconocibles. Estas voces sintéticas, generadas mediante el uso de hardware y software de síntesis de voz, han sido utilizadas por diversos artistas para agregar un elemento distintivo a sus producciones musicales.

Un ejemplo destacado de la incorporación de voces sintetizadas en la música popular es el grupo alemán Kraftwerk. Pioneros en el género de la música electrónica, utilizaron voces robotizadas y sintetizadas en muchas de sus canciones. Su álbum icónico "Autobahn" (1974) presenta voces sintetizadas que aportan a su estética futurista y mecánica, complementando su estilo musical innovador.

Otro ejemplo relevante es el dúo francés Daft Punk. Con su enfoque único en la música electrónica y el uso de voces robóticas, Daft Punk ha logrado crear un sonido único y reconocible en algunos de sus éxitos como "Around the World" y "Harder, Better, Faster, Stronger".

La utilización de voces sintetizadas en la música popular permite a los artistas explorar nuevas formas de expresión y crear atmósferas únicas en sus composiciones. Al eliminar las limitaciones vocales humanas tradicionales, las voces sintéticas ofrecen un amplio abanico de posibilidades creativas y permiten a los músicos experimentar con diferentes estilos y géneros musicales. ¿Cómo podríamos insertar una nueva herramienta de generación de habla sintética, que no apele al significado si no a una pura propiedad morfológica del lenguaje en aporte a su estética?

Probablemente conozcan el videojuego **Los Sims** lanzado en el año 2000. Fue desarrollado por Maxis Studios y publicado por Electronic Arts. En este juego de simulación de vida, los personajes se expresan y conversan entre sí utilizando un idioma que no existe, con reminiscencias a una combinación de varios que sí existen.

En los videojuegos y otras ficciones encontramos repetidas iteraciones de esta operación, pero considero este caso bien claro y lo suficientemente insertado en el imaginario colectivo para darle especial relevancia. Que sea parte de nuestro imaginario, por ejemplo, en las generaciones que lo jugamos, es importante para el reconocimiento de este tipo de sonoridades. Lo mismo ocurre con los idiomas del mundo.

Una idea interesante es que cuanto más abstracta sea una representación, más se puede insertar en eso la propia subjetividad. Cuanto más detalle se agregue, menos lugar queda a la intuición y la imaginación. ¿Cuál es el punto de equilibrio entre abstracción y especificidad que necesitamos para reconocer un idioma y que al mismo tiempo permita que nuestra creatividad complete los huecos semánticos?

### Lingüística

Comenzando por el universo textual, es relevante mencionar la escritura asémica, que es una forma de escritura que se caracteriza por su falta de contenido semántico o legibilidad convencional. El mismo recurso que trataré en este trabajo en la dimensión sonora. Esta se trata de una forma de expresión en la que los trazos, símbolos y gestos de la escritura se utilizan para crear una experiencia estética y emocional en lugar de transmitir un significado lingüístico claro.

**"The Sounds of the World's Languages" Peter Ladefoged e Ian Maddieson (2018)**

Elegí este texto como referencia en el estudio de la fonética y la fonología [(Ladefoged & Maddieson, 1996)](https://www.zotero.org/google-docs/?d042SC). En principio me resultó interesante entender la cuestión técnica del lenguaje para tener herramientas a la hora de trabajar con el mismo. Pasaré a explicar brevemente estas dos materias de estudio.

El estudio de la fonética y la fonología no solo ayuda a entender cómo los sonidos se producen en el habla humana, sino también cómo los idiomas se diferencian entre sí. Cada idioma tiene su propio conjunto de sonidos distintivos, y la fonética y la fonología nos permiten identificar y comparar estos sonidos.

La fonética se enfoca en la producción de sonidos individuales, lo que significa que podemos identificar y comparar los sonidos de diferentes idiomas. Por ejemplo, la pronunciación de la "r" en español es diferente a la pronunciación de la "r" en inglés. Además, algunos idiomas tienen sonidos que no existen en otros idiomas. Por ejemplo, el idioma Xhosa hablado en Sudáfrica tiene tres clics distintos que no existen en otros idiomas.

Por otro lado, la fonología se enfoca en cómo los sonidos se combinan para formar palabras y oraciones, lo que significa que podemos identificar patrones distintivos en diferentes idiomas. Por ejemplo, en inglés, la palabra "cat" tiene una estructura silábica CV (consonante-vocal), mientras que en español, la palabra "gato" tiene una estructura silábica VCV (vocal-consonante-vocal). La fonología también puede ayudar a identificar características distintivas en diferentes idiomas, como la distinción entre consonantes sonoras y sordas en alemán.

En general, el estudio de la fonética y la fonología es crucial para distinguir y comparar diferentes idiomas. Al identificar los sonidos distintivos y los patrones de sonidos en diferentes idiomas, podemos entender mejor cómo se diferencian y cómo se relacionan entre sí. Esta comprensión es esencial para la comunicación efectiva entre personas que hablan diferentes idiomas, así como para la investigación y el aprendizaje de idiomas adicionales.

**Gramática Generativa de Noam Chomsky**

La Gramática Generativa, propuesta por Noam Chomsky en la década de 1950 [(Chomsky, 2002)](https://www.zotero.org/google-docs/?enHCw6), es un enfoque teórico dentro de la lingüística que busca describir y explicar la estructura de los lenguajes humanos. Se basa en la idea de que la capacidad para adquirir y producir lenguaje es innata en los seres humanos y se rige por reglas gramaticales universales.

En el marco de la Gramática Generativa, Chomsky introdujo el concepto de una "gramática generativa-transformacional", que consta de varios componentes. El componente fonológico se ocupa de los sonidos del lenguaje, el componente léxico aborda el significado de las palabras, y el componente sintáctico se centra en la estructura y la formación de las oraciones.

La Gramática Generativa se basa en el principio de que existen reglas subyacentes que gobiernan la estructura y la formación de las oraciones en todos los idiomas. Estas reglas se representan a través de una notación formal llamada "gramática generativa-transformacional", que describe las estructuras y las transformaciones que ocurren en el proceso de generación del lenguaje.

Una de las características fundamentales de la Gramática Generativa es la noción de "competencia lingüística". Según Chomsky, cada hablante nativo posee una competencia innata para su idioma materno, que se refiere al conocimiento inconsciente de las reglas gramaticales que rigen el lenguaje. Por otro lado, la "actuación lingüística" se refiere al uso real y observable del lenguaje en la comunicación diaria.

Chomsky también introdujo la noción de "gramática transformacional-generativa" como una forma de describir y explicar las transformaciones que ocurren en la generación y comprensión de las oraciones. Estas transformaciones permiten a los hablantes modificar las estructuras de las oraciones para expresar diferentes significados o relaciones gramaticales.

### Arte Sonoro

Como referencias propias del arte sonoro, me gustaría comenzar mencionando la estrategia principal de este trabajo: la desterritorialización del sonido. Este recurso es un concepto que ha ganado relevancia en el ámbito del arte sonoro. Se refiere al proceso mediante el cual el sonido se separa de su contexto habitual y permite que adquieran nuevas significaciones, liberándose de las limitaciones geográficas y convenciones tradicionales que lo sitúan y los vuelven reconocibles en categorías, como el lenguaje o la música.

En este sentido, el Arte Sonoro se convierte en un espacio de experimentación y exploración, donde se puede trabajar con cualquier tipo de sonido, ya sea generado por instrumentos convencionales, objetos cotidianos, grabaciones de campo, sonidos electrónicos, generados por IA, o el habla. La desterritorialización del sonido desafía las categorías establecidas y permite la creación de paisajes sonoros resignificados.

Al desterrar el sonido de su contexto original, el Arte Sonoro invita a la audiencia a cuestionar y reflexionar sobre su relación con el sonido y su entorno. Se rompen las barreras entre lo natural y lo artificial, generando nuevos diálogos y perspectivas sobre el papel del sonido en nuestras vidas. También representa una liberación creativa y conceptual del sonido, permitiendo su recontextualización y reinterpretación. A través de este proceso, se exploran nuevas formas de expresión y nos invitan a cuestionar nuestras percepciones y experiencias auditivas.

En la filosofía de Gilles Deleuze y Félix Guattari, la desterritorialización se refiere a un proceso en el que algo rompe o trasciende sus límites o restricciones habituales. En el contexto del sonido, la desterritorialización implica la liberación y desvinculación de los sonidos de su contexto original, permitiendo nuevas posibilidades y significados.

En su obra "Mil mesetas: Capitalismo y esquizofrenia" [(Deleuze et al., 2020)](https://www.zotero.org/google-docs/?6pSoJ3), Deleuze y Guattari discuten la idea de la desterritorialización en relación con la música y el sonido. Argumentan que la música, a través de la desterritorialización del sonido, puede abrir nuevos espacios y modos de expresión. Según ellos, la música puede "crear un nuevo agenciamiento del sonido, un desterritorializante que desaloje al sonido de su territorio habitual" (Deleuze y Guattari, 1980).

En el campo del arte sonoro, la desterritorialización del sonido implica la exploración de nuevas formas de producción y percepción del sonido, y la creación de paisajes sonoros que desafían las convenciones tradicionales de la música. Los artistas sonoros utilizan técnicas y tecnologías para liberar el sonido de sus confines originales, permitiendo su transformación y recontextualización.

**Archivo P.A.I.S.** de Nicolás Varchausky es un archivo de artista que explora las tensiones entre sonido y sentido en la voz hablada, sus perspectivas diversas de enunciación y contextos de sentido. [(Varchausky, n.d.)](https://www.zotero.org/google-docs/?8iUfMQ). Está organizado en 4 colecciones: La Voz del Mercado, La Voz de las Instituciones, La Voz De Dios y La Voz del Arte. Similar a un dataset de grabaciones urbanas, pero diferenciándose en su estructura y presentación, este trabajo me resulta afín dado que trata sobre la voz en su modo más puro y primitivo, de su *musicalidad* dadas sus características de entonación y enunciación, variación tímbrica, tono. Su búsqueda yace en la intermodulación entre sentido y sonido [(*Archivo P.A.I.S.*, n.d.)](https://www.zotero.org/google-docs/?WLYJ0t).

El trabajo de Nicolás despierta algunas preguntas: ¿Se podrá separar del todo el contenido semántico al generar nuevas voces sintéticas? ¿Qué pasa con la entonación-intención? ¿Será inevitable comprender algo aunque no hayan palabras reales? ¿Comprenderán lo mismo distintas personas a partir de una misma frase ficticia, supuestamente despojada de sentido?

**Éramos la humanidad** es un proyecto audiovisual de Mateo Amaral que utiliza distintos sistemas de inteligencia artificial y motores de videojuegos para imaginar un futuro posthumano. En este futuro, los Entes -seres híbridos entre inteligencia artificial y vida orgánica- habitan un extraño ciberespacio entre estructuras incompresibles y restos de la cultura humana.

La instalación consiste en la superposición de dos ecosistemas, uno virtual y otro vegetal. Mientras que los escenarios y personajes digitales aparecen proyectados en las paredes, en el suelo hay montículos de tierra donde crecen plantas y del techo cuelgan raíces, lianas y líquenes. En la intersección, la luz de la proyección se encuentra con los cuerpos vegetales produciendo dibujos flotantes. El ecosistema virtual es generado en tiempo real por un motor de  videojuegos que se juega a sí mismo o una obra de teatro improvisada por criaturas fantasmales. El programa sintetiza entornos a partir de la combinación de distintos elementos y luego puebla esos entornos con personajes dotados de inteligencia artificial.

Lo particular que me interesó de la obra de Mateo es que sus entes-personajes hablan un idioma desconocido, pero a la vez familiar. Este es el punto al que deseo llegar. En su caso fue gracias a entrenar con pocas *épocas* sus modelos de generación de voz, de manera que nunca llegaron a *aprender el idioma* del todo, sino que quedaron truncos, eternamente balbuceando en su universo cibernético. El problema aquí es que no se puede *tunear* el idioma a asimilarse, sino que tomó muestras de audio aleatorias para su modelo, de manera que es virtualmente imposible rastrear su origen.

Por último, me gustaría hacer mención a una obra fundacional en el arte sonoro, que hasta he recreado en 2016 durante mi cursada de la materia Psicoacústica dictada por Eleonora Rapán. Se trata de **"I am sitting in a room"** del compositor experimental Alvin Lucier (1969). En esta pieza, Lucier explora la relación entre el sonido, el espacio y la tecnología de grabación. La relación con mi trabajo es que esta pieza realiza la operación opuesta a la planteada en mi experimento sonoro.

La obra comienza con una grabación de la voz de Lucier diciendo: "I am sitting in a room different from the one you are in now. I am recording the sound of my speaking voice...". Esta grabación inicial se reproduce y se vuelve a grabar en la habitación una y otra vez. Con cada repetición, la resonancia y las características acústicas de la habitación se realzan y amplifican, mientras que la voz original se va desvaneciendo y transformando en una textura sonora más abstracta. A medida que la pieza avanza, los aspectos más reconocibles de la voz se vuelven borrosos y se disuelven en el sonido del espacio mismo. Al contrario al objetivo sonoro de mi software, que será partir de audio totalmente entendible a otro que no lo es, pero hace referencia a aquel que fue, y además en este caso eliminamos la componente del espacio acústico.

# El lenguaje y el sentido

## Linguistica

Los sonidos de las lenguas son el resultado de la combinación de diferentes rasgos fonéticos, como el modo, el punto y la fuerza de articulación, la duración, la amplitud y la frecuencia, la coarticulación, la asimilación, la armonía vocálica y la suprasegmentalidad. 

Cada lengua tiene un sistema sonoro propio, que se caracteriza por tener ciertos sonidos y no otros, y por organizarlos de ciertas formas y no otras. Por lo tanto, podemos identificar cada idioma sin saber hablarlo a partir de escuchar sus sonidos si prestamos atención a algunas características que hacen que reconozcamos un idioma de otro. 

La **fonética** y la **fonología** son dos disciplinas de la lingüística que se dedican al estudio de los sonidos de la lengua. La fonética estudia el inventario de los sonidos de una lengua con arreglo a las diferencias articulatorias perceptibles; por ejemplo, distingue entre la “b” de rombo y la “b” de robo [**1**](https://bing.com/search?q=Fon%C3%A9tica+y+Fonolog%C3%ADa). La fonética trata del análisis de los sonidos del habla y cómo se producen esos sonidos. [Un Sonido es el fenómeno producido al vibrar las cuerdas vocales del aparato fonador **2**](https://www.gramaticas.net/2014/07/fonetica-y-fonologia.html). [Los sonidos pueden ser clasificados según su punto de articulación (bilabiales, labiodentales, interdentales, etc.), modo de articulación (oclusivo, fricativo, africado, etc.), actuación de las cuerdas vocálicas (sordo o sonoro) y camino del aire (nasal u oral) **2**](https://www.gramaticas.net/2014/07/fonetica-y-fonologia.html).

[La fonología, en cambio, estudia los elementos fónicos, o unidades, que componen una lengua desde el punto de vista de su función en el sistema de comunicación lingüístico](https://www.diccionariodedudas.com/fonetica-y-fonologia/) [**1](https://bing.com/search?q=Fon%C3%A9tica+y+Fonolog%C3%ADa)[3](https://www.diccionariodedudas.com/fonetica-y-fonologia/)**. La fonología trata de la organización de los sonidos del habla para formar significados. [Un fonema es la abstracción (imagen mental) de los sonidos del habla humana **2**](https://www.gramaticas.net/2014/07/fonetica-y-fonologia.html). [Los fonemas pueden ser vocálicos o consonánticos y se clasifican según su punto y modo de articulación **2**](https://www.gramaticas.net/2014/07/fonetica-y-fonologia.html).

Un ejemplo en español sería el sonido de la letra “c” que puede tener un sonido suave como en “cereza” o un sonido fuerte como en “casa”. En inglés, un ejemplo sería el sonido de la letra “t” que puede tener un sonido suave como en “water” o un sonido fuerte como en “top”.

Los humanos tienen la capacidad innata de reconocer diferentes idiomas debido a la capacidad del cerebro para procesar y distinguir entre diferentes patrones de sonidos.

<aside>
💡 Para recopilar esta información, además de Google, Bing Chat y ChatGPT, utilicé un libro llamado "The Sounds of the World's Languages" por Peter Ladefoged y Ian Maddieson (2018), pero me di cuenta que esta era una tarea teórica muy ambiciosa para el alcance de este proyecto, que pretende comprender características del lenguaje en base a la experiencia de escucha. Sin embargo, comprender estos conceptos básicos colaboró luego a poder trabajar con el lenguaje como material concreto, como concepto modulador de los sonidos a generar.

</aside>

## Torre de Babel

![**Pieter Bruegel el Viejo - La Torre de Babel (Rotterdam)**](Un%20recorrido%20tecno-sonoro%20hacia%20el%20habla%20ase%CC%81mica%2031eaddcc2bb841bcaa124ed890ed8ca7/Untitled.png)

**Pieter Bruegel el Viejo - La Torre de Babel (Rotterdam)**

// COMPLETAR 

## Sinsentido

Lógica del Sentido

sound of nonsense, 

alicia en el pais de las maravillas

A lo largo de este trabajo tomo el sinsentido como un recurso estético que utilizo en distintos niveles de mi investigación. Me refiero al sentido propio de esta investigación, de mi carrera, del constante accionar en cada paso de cada experimento. Entrando a la materialidad: el sentido sonoro por sí mismo, el nuevo sentido que genera el sinsentido, un relato que no tiene sentido pero puede ser interpretado y genera imágenes que tienen sentido en un mundo cuyas reglas del sentido son otras.

El prefijo negativo de *sin-sentido* propone una falta, pero como se plantea en "The Sound of Nonsense” también es *meta-sentido* y es que esto refiere a una nueva estrategia, una decisión arbitraria, diferente [(Elliott & Bull, 2017)](https://www.notion.so/Un-recorrido-tecno-sonoro-hacia-el-habla-as-mica-31eaddcc2bb841bcaa124ed890ed8ca7?pvs=21). No es lo opuesto al sentido, es otra cosa. Esto va en línea con el trabajo de escritores del sinsentido, como Lewis Carrol, conocido por su famosa obra “Alicia en el país de las maravillas”. Me atrevo a mencionar al movimiento del *Realismo Mágico*, que conocí gracias a Gabriel García Márquez, en donde las reglas del juego parecen cambiar por completo a nuestro universo pero allí son parte de la cotidianeidad. Me gustaría decir que es nuestra versión latinoamericana del sinsentido.

Richard Elliot no logra una definición concreta del sinsentido por lo que establece cinco pautas de a qué se refiere con sinsentido en su texto. Me quedo con dos de ellas, y el entramado entre todas:

> Destaco las que me interesan:
> 
> - **Aquello que introduce una lógica alterada incluso cuando se utiliza un lenguaje *norma*. Sería el reino de [Lewis] Carroll y sus seguidores o de la comedia Goonesca.**
> - Lo que se mantiene dentro de un régimen sintáctico «normal» pero introduce fallos y otras estrategias disruptivas y juega con la lógica de la semántica. Los escritores y músicos modernistas y posmodernistas estarían entre los ejemplos de este tipo.
> - **Lo que surge de alterar la sintaxis para crear magia, confusión o verdad. Incluiría recortes, permutaciones y otras estrategias que juegan con la lógica de la sintaxis.**
> - Lo que roza o se solapa con lo absurdo. Esto incluiría el drama Beckettiano y la canción Dylanesca.
> - Lo que utiliza códigos o términos que sólo entienden los especialistas o los iniciados. Para los no especialistas o ajenos al tema, sólo se trata de «tonterías», lo que comúnmente se conoce como jerga. Esto incluye el lenguaje de moda, como el jazz jive, la jerga del hip-hop, los términos subculturales, ciertos discursos académicos y el Shipping Forecast de la BBC.
> 
> Entre ellos se encuentra el momento del sinsentido, ese espacio de desconcierto entre dos o más modos de significado en el que la búsqueda de sentido se convierte en un intercambio de códigos.
> 

Quizás se vea borroso el borde entre el sinsentido y la fantasía, pero la fantasía adhiere a un sistema de reglas y lógicas que se respetan a lo largo de su desarrollo. El sinsentido, por otro lado, desafía constantemente cualquier atisbo de regla que se establezca. Está más cerca de un mecanismo que permite el lenguaje: poder decir cualquier cosa, armar estructuras de palabras que no suelen ir juntas, casi como si la materialidad de un juego de encastrar piezas sean palabras, o incluso mejor: letras. 

<aside>
🤔 Es aleifuv una emuuef forma dkljelkeaji orden ojfodj palabras qe mve letras unoe j d ap.

</aside>

Y no pasa nada. Como si fuera simplemente *otra* *forma* de armar una oración, sólo porque se puede.

imagen AI con los keyframes hechos en chatgpt

surrealismo 

caosmosis: tipo de orden que surge de la caotización de las cosas.

del caos pueden emerger un conjunto de relaciones que reordenan el orden

lenguaje: tiene una relación con el sentido. puede decir lo que pasa. crea sentido, por qué lo crea? el sentido es lo que verdaderamente pasa.

# Desarrollo Técnico

## Camino y Objetivos

Como mencioné anteriormente, este trabajo surge de la idea de generar un software de habla que *no diga nada.* Para eso necesitaba realizar un desarrollo que logre en **tiempo real** generar sonidos, similar a un instrumento, pero de habla. El puntapié para el comienzo del desarrollo fue la búsqueda de modelos de machine learning que puedan generalizar la voz y devolvernos sonidos, similar a lo que hace un sistema TTS, con la diferencia de que yo no quería darle contenido semántico, y tampoco debía *hablar correctamente,* es decir, hacer sentido en su dicción. Solamente buscaba *que suene como si hablara*, pero que no haya palabras reconocibles por dilucidar en lo que se dice.

## Colaboración con LLMs

Hoy en día contamos con una herramienta que fue fundamental para el avance de la investigación, tanto para realizar preguntas generales guía, búsqueda de referencias, y sobretodo especificidades dentro del desarrollo más duro. Se trata de los modelos grandes de lenguaje, o por sus siglas en inglés, LLMs. Me parece de suma relevancia mencionar esta herramienta dado que este es un desarrollo principalmente práctico cuyo concepto subyacente principal es el lenguaje.

Los modelos de lenguaje basados en transformadores, como los LLMs (Large Language Models), son parte de los **modelos fundacionales** en inteligencia artificial. Estos modelos revolucionaron el procesamiento del lenguaje natural al introducir arquitecturas de transformadores, como el modelo GPT (Generative Pre-trained Transformer). Los LLMs son pre-entrenados en grandes cantidades de datos textuales, lo que les permite una comprensión profunda del lenguaje. Posteriormente, se pueden ajustar para tareas específicas, como traducción, resumen de texto o generación de texto y respuesta a preguntas. Su capacidad para entender y generar lenguaje humano ha impulsado avances significativos en aplicaciones de procesamiento de lenguaje natural, y su adaptabilidad los convierte en componentes clave en una amplia gama de aplicaciones y servicios basados en texto (Vaswani et al., 2023).

Principalmente utilicé la versión gratuita de [ChatGPT](https://chat.openai.com/), desarrollado por [OpenAI](https://openai.com/), que en este momento es el modelo `gpt-3.5-turbo`. Está entrenado con información recopilada de todo internet hasta septiembre de 2021. Comprendí que si se le da contexto y se le define un rol responde de manera muy precisa. Sobretodo en tareas pequeñas y específicas, pero también como puntapié inicial hacia las sub-investigaciones que fui llevando a cabo a lo largo del proceso.

Dada la limitación del modelo gratuito de OpenAI, también recurrí a otros LLMs como [Bing Chat](https://www.bing.com/), de [Microsoft](https://www.microsoft.com/), que cuenta con la habilidad de buscar en internet, de hecho, es un buscador similar a [Google](https://www.google.com/), pero con *quien* uno puede establecer una conversación donde afinar sus resultados. El gigante de internet Google también cuenta con [Bard](https://bard.google.com/chat), pero de momento se encuentra en una etapa experimental, muy revisada por humanos y con poco soporte en idiomas que no sean inglés. Por último probé [LLaVA](https://llava.hliu.cc/): Large Language and Vision Assistant, que si bien promete y es de código abierto, no cuenta con conversaciones que pueda almacenar en hilos de contexto como sí lo hace ChatGPT, teniendo que iniciar nuevas conversaciones en cada sesión de uso.

## Autoencoder

Leandro Garber me recomendó que un buen experimento inicial es entrenar un modelo con la arquitectura **Autoencoder**, en particular uno desarrollado por Pablo Riera **// ADD REFE paper? //.**  Al ser alimentado con audio de idiomas hablados, tuvimos la hipótesis de que este podría generalizar lo suficiente sus características como para luego generar nuevos resultados sonoros sin necesidad de contenido semántico, quedándose sólo con la prosodia de la lengua.

### Introducción al modelo

Un Autoencoder es una arquitectura de redes neuronales artificiales utilizado en tareas de procesamiento de datos, como la reducción de dimensionalidad y la reconstrucción de información. Se puede pensar como una especie de función que toma datos de entrada, los reduce a una forma más compacta en un espacio de representación interno y luego intenta reconstruir los datos originales a partir de esta representación interna. La idea principal detrás de estos es aprender una representación eficiente de los datos de entrada.

Consiste en las siguientes partes:

![Untitled](Un%20recorrido%20tecno-sonoro%20hacia%20el%20habla%20ase%CC%81mica%2031eaddcc2bb841bcaa124ed890ed8ca7/Untitled%201.png)

1. **Capa de Codificación (Encoder)**: En la primera parte del modelo, llamada el codificador (encoder), los datos de entrada se transforman en una representación interna más compacta. Esta capa reduce la dimensionalidad de los datos, capturando las características más importantes.
2. **Espacio Latente (Latent Space)**: Es la parte del medio, la representación interna o intermedia de los datos que se encuentra entre el codificador y el decodificador. En este espacio latente, las características más importantes de los datos de entrada se capturan de una manera más compacta y abstraída. Es decir, en lugar de describir cada detalle de los datos, el espacio latente representa características más significativas y abstractas. Un espacio latente bien entrenado permite operaciones que permiten explorar y manipular las características subyacentes de los datos de entrada de manera más eficiente.
3. **Capa de Decodificación (Decoder)**: El decodificador (decoder) es la representación interna que se utiliza para intentar reconstruir los datos originales. El objetivo es que la reconstrucción sea lo más fiel posible a las generalidades de los datos de entrada.

Para entrenar el Autoencoder, se utiliza una **función de pérdida** que mide la diferencia entre los datos de entrada y la reconstrucción. El modelo ajusta sus parámetros para minimizar esta pérdida, lo que significa que aprenderá a crear representaciones internas útiles.

El Autoencoder es útil en varias aplicaciones como la eliminación de ruido en datos, la generación de datos similares a los de entrada y la detección de anomalías. Al comprimir la información en una representación interna puede ser útil para simplificar datos complejos y hacer que sea más fácil trabajar con ellos o identificar patrones importantes.

La exploración del espacio latente en un modelo de Autoencoder se asemeja a recorrer un intrincado sistema de *caminos* en busca de información relevante. Los datos de entrada son como un gran mapa con numerosos senderos, y el Autoencoder actúa como un cartógrafo que reduce la complejidad del mapa, resaltando rutas esenciales en un espacio latente. Al seguir estos caminos, se puede navegar de manera eficiente a través de las características más importantes de los datos, como si fueran flujos de información, permitiendo una comprensión más profunda y la capacidad de generar nuevos datos relacionados a los que entraron.

### Dataset

Entrenar una red neuronal implica enseñar al modelo a realizar una tarea específica mediante la exposición a datos de entrada y salidas correspondientes. Durante el proceso de entrenamiento, los pesos y las conexiones entre las neuronas de la red se ajustan iterativamente para minimizar la diferencia entre las predicciones del modelo y las respuestas reales en el conjunto de datos. Este ajuste se realiza utilizando algoritmos de optimización que buscan optimizar la función de pérdida, que mide la discrepancia entre las predicciones del modelo y los resultados reales.

Un dataset, o conjunto de datos, es una colección de ejemplos de entrada y sus correspondientes salidas que se utiliza para entrenar, validar o probar un modelo de machine learning. En el contexto de entrenar una red neuronal sirve como la fuente de información que el modelo utiliza para aprender patrones y realizar predicciones. Este conjunto de datos suele dividirse en conjuntos de entrenamiento, validación y prueba. El conjunto de entrenamiento se utiliza para ajustar los parámetros del modelo, el conjunto de validación para afinar hiperparámetros –valores internos del modelo– y evitar el sobreajuste, y finalmente, el conjunto de prueba para evaluar el rendimiento general del modelo en datos no vistos durante el entrenamiento. La calidad y representatividad del dataset son cruciales para el éxito del entrenamiento y el rendimiento del modelo en situaciones del mundo real. 

El primer Dataset con el que trabajé fue [common_language](https://huggingface.co/datasets/common_language). Está compuesto por grabaciones de voz de idiomas seleccionados cuidadosamente de la base de datos [Mozilla CommonVoice](https://commonvoice.mozilla.org/). La duración total de las grabaciones de audio es de 45.1 horas (1 hora de material para cada idioma). Está destinado a entrenar sistemas de identificación de idiomas.

A continuación algunos ejemplos de los archivos incluidos en el dataset. Son archivos `.wav`, es decir que no tienen pérdida de calidad:

[common_voice_fr_19598591.wav](Un%20recorrido%20tecno-sonoro%20hacia%20el%20habla%20ase%CC%81mica%2031eaddcc2bb841bcaa124ed890ed8ca7/common_voice_fr_19598591.wav)

[common_voice_fr_19598240.wav](Un%20recorrido%20tecno-sonoro%20hacia%20el%20habla%20ase%CC%81mica%2031eaddcc2bb841bcaa124ed890ed8ca7/common_voice_fr_19598240.wav)

[Ejemplos de la carpeta de francés.](Un%20recorrido%20tecno-sonoro%20hacia%20el%20habla%20ase%CC%81mica%2031eaddcc2bb841bcaa124ed890ed8ca7/common_voice_fr_19140964.wav)

Ejemplos de la carpeta de francés.

Nótese que los fragmentos están dichos por diferentes personas, con distintas calidades y condiciones de grabación. Esto se debe a que es necesaria esta variabilidad para enriquecer el modelo, que logre generalizar el habla y la voz humana, pero a ninguna voz en particular.

Para entrenar el Autoencoder debía alimentarlo con un sólo archivo de audio. El dataset cuenta con una carpeta por idioma con pequeños fragmentos, por lo que con el siguiente comando en la terminal de la computadora logré concatenar inmediatamente todos los archivos de una carpeta en un archivo de audio único:

```bash
# Los archivos están nombrados de la siguiente forma:
# common_voice_<lang>_<número>.wav
# Por ejemplo: common_voice_fr_19140964.wav
$ sox common_* frances.wav
# Obtengo `frances.wav` como resultado.
```

`sox` es una utilidad para manipular audio desde la consola, funciona en macOS, Linux y Windows. De esa forma evité el trabajo manual de concatenar todos los archivos.

[Archivo de audio mp3 61.8kbps VBR para fines demostrativos, pero se utilizó el wav para entrenar el modelo.](Un%20recorrido%20tecno-sonoro%20hacia%20el%20habla%20ase%CC%81mica%2031eaddcc2bb841bcaa124ed890ed8ca7/french.mp3)

Archivo de audio mp3 61.8kbps VBR para fines demostrativos, pero se utilizó el wav para entrenar el modelo.

Lo mismo pero para el Español:

[common_voice_es_18681301.wav](Un%20recorrido%20tecno-sonoro%20hacia%20el%20habla%20ase%CC%81mica%2031eaddcc2bb841bcaa124ed890ed8ca7/common_voice_es_18681301.wav)

[common_voice_es_19125377.wav](Un%20recorrido%20tecno-sonoro%20hacia%20el%20habla%20ase%CC%81mica%2031eaddcc2bb841bcaa124ed890ed8ca7/common_voice_es_19125377.wav)

[common_voice_es_19602100.wav](Un%20recorrido%20tecno-sonoro%20hacia%20el%20habla%20ase%CC%81mica%2031eaddcc2bb841bcaa124ed890ed8ca7/common_voice_es_19602100.wav)

Y su versión concatenada:

[Archivo convertido a mp3 con ffmpeg a 61.7kbps VBR.](Un%20recorrido%20tecno-sonoro%20hacia%20el%20habla%20ase%CC%81mica%2031eaddcc2bb841bcaa124ed890ed8ca7/spanish.mp3)

Archivo convertido a mp3 con ffmpeg a 61.7kbps VBR.

Al solicitarle [inferencia](https://www.notion.so/Un-recorrido-tecno-sonoro-hacia-el-habla-as-mica-31eaddcc2bb841bcaa124ed890ed8ca7?pvs=21) al modelo para generar nuevos sonidos a partir del entrenamiento con los mostrados anteriormente, los resultados no eran muy favorables para mi investigación por su alto nivel de ruido, por lo que decidí buscar videos en YouTube de Podcasts o conversaciones. Encontré voces limpias de gente con buena calidad de grabación, sentí que con estos el modelo podría generalizar voces más nítidas.

- Podcast en francés. mp3 55.7kbps VBR para fines demostrativos:
    
    [Audio extraído de [https://www.youtube.com/watch?v=N55d9mPm_HA](https://www.youtube.com/watch?v=N55d9mPm_HA)](Un%20recorrido%20tecno-sonoro%20hacia%20el%20habla%20ase%CC%81mica%2031eaddcc2bb841bcaa124ed890ed8ca7/french-clean.mp3)
    
    Audio extraído de [https://www.youtube.com/watch?v=N55d9mPm_HA](https://www.youtube.com/watch?v=N55d9mPm_HA)
    
- Japonés:
    
    [Audio extraído de [https://www.youtube.com/watch?v=trySjnuJfJY](https://www.youtube.com/watch?v=trySjnuJfJY)](Un%20recorrido%20tecno-sonoro%20hacia%20el%20habla%20ase%CC%81mica%2031eaddcc2bb841bcaa124ed890ed8ca7/japanese-clean.mp3)
    
    Audio extraído de [https://www.youtube.com/watch?v=trySjnuJfJY](https://www.youtube.com/watch?v=trySjnuJfJY)
    

### Entrenamiento

Para entrenar el modelo preparé un Colab con el código a ejecutar y un entorno donde ejecutarlo, que podía ser la nube (Google) o mi computadora. Luego de realizar unos *benchmarks* -pruebas de rendimiento- observé que mi computadora sería un poco más rápida que los recursos que ofrece el *free tier* de Google Colab. Así que instalé Anaconda para montar un entorno con la versión requerida de Python y todas las dependencias requeridas para poder ejecutar mi propio Colab, incluso la configuración de seguridad y redes para poder acceder remotamente desde cualquier lado, como si tuviera mi propia nube en mi casa, manteniendo la soberanía de mi sistema computacional.

Realicé el entrenamiento con los archivos de audio concatenados que armé en la etapa del dataset. Esto resultó en modelos *uni-lengua* ya que sólo podrían generalizar habla en una sola lengua. Por esto fue que el siguiente paso fue realizar un proceso de entrenamiento con dos lenguas que, como explicaré [más adelante](https://www.notion.so/Un-recorrido-tecno-sonoro-hacia-el-habla-as-mica-31eaddcc2bb841bcaa124ed890ed8ca7?pvs=21), podría generar una cruza interesante. Concatené una conversación en Francés con otra en Japonés como dataset para luego generar un modelo *multi-lengua* o en este primer caso bilingüe.

### Espacio Latente

La idea es explorar este espacio para encontrar nuevos [*caminos*](https://www.notion.so/Un-recorrido-tecno-sonoro-hacia-el-habla-as-mica-31eaddcc2bb841bcaa124ed890ed8ca7?pvs=21) que extraigan las características principales del sonido con el que fue entrenado el modelo. Con caminos me refiero a datos en serie de tantas dimensiones como tenga el espacio latente –números– que representan esta exploración, y al ser decodificados generan nueva información con las características principales de sus datos de entrada.

En principio, junto con Leandro Garber, pensamos en enviar datos aleatorios de caminos posibles para comenzar a ver qué había en ese espacio latente. Para eso armamos un pequeño patch en Pure Data para enviar los valores en tiempo real al modelo y que este genere audio a partir de los datos de entrada.

### Escuchar el modelo en tiempo real

El [**2ASMRSynth**](https://github.com/pabloriera/2ASMRS) también programado por Pablo Riera es un sintetizador basado en [JUCE](https://juce.com/) para generar inferencia sonora en tiempo real a partir de un modelo de tipo [`torchscript`](https://pytorch.org/docs/stable/jit.html). En esencia, uno carga el modelo en el sintetizador y puede mover los parámetros dentro del espacio latente y escucharlo en tiempo real, como un instrumento. La sonoridad de este instrumento dependerá del modelo cargado.

![Captura de pantalla del 2ASMRSynth corriendo en Linux Mint.](Un%20recorrido%20tecno-sonoro%20hacia%20el%20habla%20ase%CC%81mica%2031eaddcc2bb841bcaa124ed890ed8ca7/Untitled%202.png)

Captura de pantalla del 2ASMRSynth corriendo en Linux Mint.

Cada *fader* del instrumento representa una de las dimensiones del espacio latente, y al moverlos le estamos asignando valores a cada una. La parte del decodificador del modelo genera la salida de audio. Mover estos valores manualmente, por ejemplo con el mouse, no resulta interesante ya que se debe orquestar un movimiento coordinado de todos los parámetros para que la salida haga *sentido*. Por supuesto que cuenta con la posibilidad de ser controlado mediante el protocolo MIDI.

Pablo desarrolló y probó este instrumento en una distribución de Linux basada en Debian. Yo, en cambio, intenté compilar el software en distintas plataformas. Primero en mi computadora de buenos recursos que corre Windows, me parecía que también aportaría al mundo open source si luego podía compartir mi camino haciéndolo andar en una nueva plataforma. Allí me encontré con problemas propios de arquitecturas y matemáticas de bajo nivel que se escapan del alcance de esta investigación, por lo que abandoné ese camino. Continué con WSL (una forma de ejecutar Linux adentro de Windows), pero las capacidades de routeo interno MIDI que necesito no están desarrolladas al momento de este trabajo, por lo que también tuve que dejar este camino. Luego probé Raspbian (Debian) en Raspberry Pi, pensando que sería útil esta plataforma para montajes compactos, simples y económicos en cuanto a recursos, pero la arquitectura ARM de los procesadores de RPi no están muy bien soportados en JUCE en este momento, y el procesador y la memoria RAM no son óptimos para este trabajo; otro camino trunco.

Finalmente instalé una máquina virtual en mi computadora con Windows, probé varios softwares de virtualización, primero VirtualBox por ser open source, pero que no utiliza los recursos de la máquina de forma óptima y por ende corría lento. Luego VMWare, que corre mejor, a la que le instalé Linux Mint, y todo funcionó de maravilla. El archivo de audio y video de esta investigación está grabada con ese entorno virtual.

Con el modelo [multi-lengua](https://www.notion.so/Un-recorrido-tecno-sonoro-hacia-el-habla-as-mica-31eaddcc2bb841bcaa124ed890ed8ca7?pvs=21) la idea fue alimentar las dimensiones del espacio latente con los datos de entrenamiento de un modelo entrenado en Francés anteriormente. La pregunta era ¿qué pasaría si a un modelo bilingüe le hago *hablar* uno de los idiomas que conoce?

[JF-MODEL_japanese-fantasmagorico.mp3](Un%20recorrido%20tecno-sonoro%20hacia%20el%20habla%20ase%CC%81mica%2031eaddcc2bb841bcaa124ed890ed8ca7/JF-MODEL_japanese-fantasmagorico.mp3)

JF-MODEL_japanese-fantasmagorico.mp3

Este audio es el resultado de alimentar el modelo bilingüe con los datos de entrenamiento que representan los movimientos dentro del espacio latente para segmento de habla en Francés.

- el problema de la fase

- Intentos de explorar otros modelos a través de Max/MSP

El sintetizador de Pablo Riera es una excelente idea y herramienta para lograr inferencia en tiempo real de un modelo sonoro, pero no estaba alcanzando los resultados que quería, por lo que investigué alternativas en otros entornos donde tuviera más control de las partes involucradas, sin tiempos de compilación ni plataformas específicas, procesamiento y código en tiempo real: entra Miller Puckette. Busqué *cajitas* desarrolladas en Max/MSP o PureData.

### Observaciones

Primeras pruebas

Dado este audio:

[Audio original alimentado a la red.](Un%20recorrido%20tecno-sonoro%20hacia%20el%20habla%20ase%CC%81mica%2031eaddcc2bb841bcaa124ed890ed8ca7/common_voice_es_19609042.wav)

Audio original alimentado a la red.

Se reconstruyó el siguiente audio directamente desde el código. Para eso se insertan en el espacio latente del modelo los mismos valores que devuelve el entrenamiento. Resultando en:

[Audio reconstruido.](Un%20recorrido%20tecno-sonoro%20hacia%20el%20habla%20ase%CC%81mica%2031eaddcc2bb841bcaa124ed890ed8ca7/reconstructed.mp3)

Audio reconstruido.

![Espectrograma del resultado reconstruido.](Un%20recorrido%20tecno-sonoro%20hacia%20el%20habla%20ase%CC%81mica%2031eaddcc2bb841bcaa124ed890ed8ca7/predicted_spectrogram.png)

Espectrograma del resultado reconstruido.

![Camino del espacio latente de 4 dimensiones que genera el audio reconstruido.](Un%20recorrido%20tecno-sonoro%20hacia%20el%20habla%20ase%CC%81mica%2031eaddcc2bb841bcaa124ed890ed8ca7/Z_latent_score.png)

Camino del espacio latente de 4 dimensiones que genera el audio reconstruido.

Las siguientes pruebas consisten en cargar los modelos entrenados en el sintetizador *2ASMRSynth* y luego alimentar los parámetros del modelo (nótese el errático movimiento de los faders) con una lista de cada valor en el tiempo. En el siguiente ejemplo son 8 listas, una para cada dimensión del espacio latente representada en los faders.

- Completar.

[French 8 dim](https://drive.google.com/file/d/1xKMgiRHJ8iejAhcU1RUt8BafiqYWJBiq/view?usp=drive_link)

French 8 dim

Para lograr esto se desarrolló un patch de Pure Data con el que se cargan los valores numéricos de un archivo de texto (generado durante la etapa de entrenamiento) y se *mapean* o traducen a controles MIDI (rango de 0-127).

[**French4dim_drunkYlatent**](https://drive.google.com/file/d/1s8pfhotzjgofhLQ3mdZndm4c3Y6cGPVc/view?usp=sharing)

**French4dim_drunkYlatent**

- explicar como al alimentarlo con los datos extraidos del entrenamiento, sí suena como lo que se le dio de entrada.

Esta herramienta que posibilita la ejecución en tiempo real del modelo trae un problema inherente de su método de control: el protocolo MIDI está limitado a valores de 0-127. Esta resolución no es lo suficientemente precisa para *expresar* la voz en cada una de sus variables internas del espacio latente. Como resultado sonoro se genera un sonido fantasmagórico poco definido.

# Crisis

Luego de haber aprendido lo suficiente acerca del workflow y las tecnicalidades de la tecnología de inteligencia artificial con la que encaré el proyecto (el Autoencoder de Riera), llegué a resultados que no eran exactamente los que esperaba. Por un momento me detuve a contemplar mi fracaso. Empecé a dudar de si lo que había pensado –crear un sinsentido a partir de un modelo lógico– tenía sentido, pero mi instinto me obligaba a probarlo para poder llegar a esta conclusión. 

Inmediatamente, así como fabulé este desarrollo y sus resultados, comencé a hilar un plan B más elemental, uno que quizás tendría que haber sido la primera prueba, pero mi predicción acerca del resultado sonoro era que no iba a ser muy preciso, o escalable, o lo que en mi imaginario buscaba. Esta alternativa consiste en separar audios de habla en fonemas. Un **fonema** es la unidad básica de sonido en un idioma o sistema de comunicación. Representa un sonido distintivo que puede cambiar el significado de una palabra en ese idioma. Los fonemas son elementos abstractos que forman parte del sistema fonológico de una lengua y se utilizan para distinguir palabras y su significado. Pueden variar de un idioma a otro y a menudo se representan con símbolos fonéticos en la lingüística para describir cómo se pronuncian en el habla.

// PARRAFO CON LA NUEVA IDEA EXPLICANDO AUDIOSTELLAR

Sería interesante poder 

Estos recortes vocales, audios segmentados en fonemas, o pequeñas porciones, serían importados en AudioStellar, lo cual brinda dos resultados/piezas que me interesa observar. Por un lado, un mapa de sonidos que quizás estén re-ordenados por sus cualidades sonoras y no por grupos de idiomas, trazando una cartografía diferente en el espacio sonoro que en el geográfico. Además y principalmente, la capacidad de recorrer estos fonemas de las diversas formas que ofrece AudioStellar, haciendo que estos suenen de manera concatenada, por lo que formarían habla. 

La distribución de los fonemas en el mapa 2D de AudioStellar es lo que define esta experiencia. Hete aquí el *trade-off*: una cartografía diferente a la geopolítica de las lenguas versus la interpolación de idiomas al recorrer los bordes entre grupos de fonemas. Paso a explicar:

- Si los fonemas se agrupan geopolíticamente, ie. por idioma, será posible recorrer un idioma específico a través de sus fonemas, sin hacer sentido, pero utilizando contenido -sonidos- propios de un sólo idioma. Esto nos da la ventaja de también poder escuchar qué hay en los bordes de cada grupo de fonemas e interpolar entre idiomas cercanos.
- Si se agrupan por sus características sonoras, se podrán contemplar fonemas similares de los distintos idiomas, se barren las barreras geopolíticas, trazando un mapa donde el sonido hace nuestro sentido (ref sound of nonsense), es nuestra fuente de verdad y no vamos a interpolar entre idiomas sino entre sonidos de diferentes orígenes, agrupados por sus cualidades similares. Así encontramos una nueva [*Cartografía Mundial del Habla*](https://www.notion.so/Un-recorrido-tecno-sonoro-hacia-el-habla-as-mica-31eaddcc2bb841bcaa124ed890ed8ca7?pvs=21).

## Separación en fonemas

La tarea de separación en fonemas de los archivos de audio con los que contaba podría hacerse de varias maneras. En primer lugar, manualmente. Esto tardaría demasiado tiempo y esfuerzo, además de que quien realice la tarea debería conocer muy en detalle el idioma y su construcción fonética. Siguiendo el modus operandi habitual actual, la primera intuición fue consultarle a ChatGPT acerca del estado de la cuestión frente a este objetivo. Existen múltiples herramientas de software dedicado en materia lingüística. Entre los que fueron sugeridos se encuentran:

1. **Herramientas de Fonética**:
    - **Praat** es un software de fonética ampliamente utilizado que permite realizar diversos análisis fonéticos. Es útil para anotar los límites de los fonemas y extraer información detallada sobre los mismos.
    - **CMU Sphinx (Pocketsphinx)** es un sistema de reconocimiento de voz de código abierto muy utilizado que incluye herramientas de fonética. Permite convertir audio en secuencias de fonemas y cuenta con envoltorios de Python disponibles.
    - **VOSK** es una relativamente nueva herramienta de ASR (Automatic Speech Recognition) conocida por su velocidad y eficiencia. Utiliza modelos de deep learning y está diseñada para aplicaciones modernas de ASR. Una ventaja de Vosk es que sus modelos tienen un tamaño en general pequeño, lo que la hace adecuada para aplicaciones con espacio de almacenamiento limitado. Además, Vosk admite múltiples idiomas y ofrece modelos pre-entrenados para varios de ellos. Es muy valorada por su facilidad de uso y proporciona integraciones con Python, lo que la hace accesible para desarrolladores.
    - **eSpeak** es un sintetizador de voz compacto y de código abierto que se puede utilizar para la fonetización del habla. Proporciona anotaciones fonéticas.
    - **Phonetisaurus** es un fonetizador basado en transductores finitos (FST) que puede generar secuencias de fonemas a partir de texto.
2. **Sistemas de Reconocimiento Automático del Habla (ASR)**:
    
    Automatic Speech Recognition es una tecnología que permite a las computadoras implementar sistemas de procesamiento del lenguaje para convertir el habla humana en texto escrito de manera automática. El proceso implica el análisis de las señales de audio para identificar y transcribir las palabras y frases habladas en un formato legible por máquinas. Para lograr esto, utilizan algoritmos y modelos de lenguaje entrenados previamente con grandes conjuntos de datos de audio y texto transcritos emparejados.
    
    Los sistemas ASR como Kaldi, Mozilla DeepSpeech y el ASR de Google se pueden utilizar para transcribir audio en fonemas. Estos sistemas son más complejos pero ofrecen transcripciones detalladas a nivel de fonema.
    
3. **Software de Anotación de Fonemas**:
    
    Existe software como Audacity, una herramienta gratuita y de código abierto para la edición de audio, que se puede utilizar para anotar manualmente los tiempos de los límites de los fonemas. Este proceso puede ser laborioso, pero brinda un control preciso sobre las anotaciones. Otro encontrado fue Sonic Visualizer, de similares características.
    
4. **Servicios de Transcripción Fonética**:
    
    Si no es factible realizar la anotación manual, se puede considerar el uso de servicios de transcripción o contratar lingüistas que puedan transcribir los fonemas.
    

Elegí **VOSK**, dado que ofrecía una metodología de trabajo más amigable y rápida, de fácil instalación y barato en cuanto a recursos computacionales, mayor documentación y comunidad, más modelos entrenados disponibles para su descarga y uso. Así como una persona debe conocer el idioma para trabajarlo, el software también debe contar con modelos entrenados para realizar tareas analíticas sobre el mismo de manera coherente. 

VOSK es una kit de herramientas para el reconocimiento de voces. Tiene una interfaz a través de Python, por lo que hacía muy conveniente el desarrollo de scripts para automatizar el proceso de fonetización de los archivos de audio de larga duración de habla en cada lengua recopilados. Comencé iterando **prompts** –conversando– con ChatGPT para el desarrollo del script en cuestión. Este debería tomar un archivo de audio en cualquier formato como entrada y devolver en una carpeta todos los segmentos de fonemas separados cada uno en un nuevo archivo de audio corto –de la duración del fonema–. Este proceso de iteración de desarrollo fue relativamente rápido pero a la vez curioso.

La conversación pasó por varias etapas, fue larga pero rápida y eficaz ya que primero necesitaba entender las diferencias entre dichas herramientas y luego ir generando el código del programa. Esta *charla* fue en inglés ya que el mayor caudal de información de entrenamiento para este LLM está en inglés, por ende, las probabilidades de que los resultados sean más precisos aumenta utilizando este idioma. Paso a narrar una versión resumida de esta conversación donde surge el resultado del programa que utilicé finalmente:

1. Pedí que genere el código necesario para realizar mi objetivo:
    
    > generate a script that would chop audio into phonemes using a combination of VOSK and ffmpeg. Its input would be an audio file containing speech in any language and it should output multiple audio files in a folder, each containing one phoneme of the initial audio file.
    > 
2. En principio comprendió su tarea, pero el script retornaba timestamps –marcas de tiempo– en formato de texto, de manera que habría que hacer el trabajo de separarlos manualmente.
    
    > I need the output to be audio files, not text. Also modify the code so that I can pass the input audio_file and model_path as parameters.
    > 
    
    To segment an audio file into phoneme audio files using Vosk and allow for input parameters, you can modify the code as follows. This code will take the input audio file, Vosk model path, and an output directory as parameters and save phoneme segments as separate audio files:
    
    - <Código>
        
        ```python
        import os
        import vosk
        import wave
        import shutil
        
        def segment_audio_to_phonemes(audio_path, model_path, output_dir):
            # Initialize the Vosk recognizer with the model
            model = vosk.Model(model_path)
            recognizer = vosk.KaldiRecognizer(model, 16000)
        
            # Open the audio file
            wf = wave.open(audio_path, 'rb')
        
            # Initialize variables
            results = []
            data = wf.readframes(4000)  # Read audio data in chunks
            segment_count = 0
        
            # Create the output directory if it doesn't exist
            os.makedirs(output_dir, exist_ok=True)
        
            while len(data) > 0:
                recognizer.AcceptWaveform(data)
                data = wf.readframes(4000)
        
                if recognizer.FinalResult():
                    # Get the final recognition result
                    result = recognizer.Result()
                    results.append(result)
        
                    # Save the phoneme segment as a separate audio file
                    phoneme_audio = recognizer.GetWaveform()
                    output_path = os.path.join(output_dir, f'segment_{segment_count}.wav')
                    with wave.open(output_path, 'wb') as outwf:
                        outwf.setnchannels(1)
                        outwf.setsampwidth(2)
                        outwf.setframerate(16000)
                        outwf.writeframes(phoneme_audio)
        
                    segment_count += 1
        
            return results
        
        def main(audio_file, model_path, output_dir):
            phoneme_results = segment_audio_to_phonemes(audio_file, model_path, output_dir)
        
            for i, result in enumerate(phoneme_results):
                print(f"Segment {i + 1}: {result}")
        
        if __name__ == "__main__":
            # Provide the input audio file, Vosk model path, and output directory as command-line arguments
            input_audio_file = "your_audio.wav"  # Replace with your audio file
            vosk_model_path = "path/to/your/model"  # Replace with the path to the Vosk model
            output_directory = "output_phoneme_segments"  # Replace with your desired output directory
        
            # Clear the output directory if it already exists
            if os.path.exists(output_directory):
                shutil.rmtree(output_directory)
        
            main(input_audio_file, vosk_model_path, output_directory)
        
        ```
        
    
    Make sure to provide the appropriate values for `input_audio_file`, `vosk_model_path`, and `output_directory` when running the script. The script will create separate audio files for each phoneme segment in the specified output directory.
    
3. No era exactamente lo que necesitaba, y el código daba errores de funciones inexistentes, como si hubiera inventado partes de una librería que no existe. Aceptó su error y corrigió el código, acercándose bastante al resultado, pero aún con problemas que le hice saber, incluso dándole la pista del *sample rate* donde yo pensaba que radicaba el problema:
    
    > two problems I have found:
    - the segment text of all results is always empty.
    - the chopped audio files seem to be in slow motion, I guess it was because of the sample rate being wrong, but maybe there's some other reason since we're now using pydub to automatically detect it. 
    can you fix these?
    also add a print for the sample rate to be able to check if it was detected correctly.
    > 
    
    I apologize for the issues. Let's address them and add a print statement to display the detected sample rate. Also, it's possible that the Vosk model used for segmentation may not provide phoneme-level output. You may need to use a different model that provides more granular results. Here's the updated script:
    
    - <Código>
        
        ```python
        import os
        import vosk
        import wave
        import shutil
        import argparse
        from pydub import AudioSegment
        
        def get_sample_rate(audio_path):
            # Use pydub to load the audio file and obtain its sample rate
            audio = AudioSegment.from_file(audio_path)
            return audio.frame_rate
        
        def segment_audio_to_phonemes(audio_path, model_path, output_dir):
            # Get the sample rate of the input audio file
            sample_rate = get_sample_rate(audio_path)
            print(f"Detected sample rate: {sample_rate}")
        
            # Initialize the Vosk recognizer with the model and the detected sample rate
            model = vosk.Model(model_path)
            recognizer = vosk.KaldiRecognizer(model, sample_rate)
        
            # Open the audio file
            wf = wave.open(audio_path, 'rb')
        
            # Initialize variables
            results = []
            data = wf.readframes(4000)  # Read audio data in chunks
            segment_count = 0
        
            # Create the output directory if it doesn't exist
            os.makedirs(output_dir, exist_ok=True)
        
            phoneme_segments = {}  # Store phoneme boundaries and audio data
            phoneme_start = 0  # Start time of the current phoneme segment in milliseconds
        
            while len(data) > 0:
                recognizer.AcceptWaveform(data)
                data = wf.readframes(4000)
        
                if recognizer.FinalResult():
                    # Get the final recognition result, which includes phonemes
                    result = recognizer.Result()
                    results.append(result)
        
                    # Extract the end time of the phoneme from the audio frame position
                    phoneme_end = wf.tell() / sample_rate * 1000  # Calculate the end time of the phoneme in milliseconds
                    phoneme_duration = phoneme_end - phoneme_start
        
                    # Store the phoneme boundaries and audio data
                    phoneme_segments[segment_count] = {
                        "start": phoneme_start,
                        "end": phoneme_end,
                        "duration": phoneme_duration,
                    }
        
                    phoneme_start = phoneme_end
                    segment_count += 1
        
            # Save the phoneme segments as separate audio files
            wf = wave.open(audio_path, 'rb')  # Reopen the audio file
            for segment_number, boundaries in phoneme_segments.items():
                start_frame = int(boundaries["start"] / 1000 * sample_rate)
                end_frame = int(boundaries["end"] / 1000 * sample_rate)
        
                # Extract the audio data for the phoneme segment
                wf.setpos(start_frame)
                audio_data = wf.readframes(end_frame - start_frame)
        
                # Save the phoneme segment as an audio file
                output_path = os.path.join(output_dir, f'segment_{segment_number}.wav')
                with wave.open(output_path, 'wb') as outwf:
                    outwf.setnchannels(1)
                    outwf.setsampwidth(2)
                    outwf.setframerate(sample_rate)
                    outwf.writeframes(audio_data)
        
            return results
        
        def main(args):
            phoneme_results = segment_audio_to_phonemes(args.input_audio_file, args.vosk_model_path, args.output_directory)
        
            for i, result in enumerate(phoneme_results):
                print(f"Segment {i + 1}: {result}")
        
        if __name__ == "__main__":
            parser = argparse.ArgumentParser(description="Segment audio into phoneme audio files using Vosk.")
            parser.add_argument("input_audio_file", type=str, help="Path to the input audio file.")
            parser.add_argument("vosk_model_path", type=str, help="Path to the Vosk model.")
            parser.add_argument("output_directory", type=str, help="Directory to save phoneme audio segments.")
        
            args = parser.parse_args()
            main(args)
        
        ```
        
    
    This updated script should display the detected sample rate, and it retains the functionality to segment the audio into phonemes and save them as audio files. If you encounter issues with the phoneme segment text being empty, you may need to investigate whether the chosen Vosk model provides phoneme-level recognition results.
    
4. Supuestamente debía generarme, además de los segmentos de audio, texto de los fonemas separados, pero esto nunca lo logró, así que descarté ese resultado ya que sólo me interesaban los resultados sonoros para el experimento. El problema fue que tampoco solucionó los resultados de audio que parecían estar en *slow motion.* 
    
    > As I mentioned, the files that the script outputs seem to be pitched down, or slow motion. I need the output wav files to playback at the same pitch as the input file. It seems like the playback speed is wrong.
    > 
    
    Esta vez no hizo nada más que agregar un comentario en el código. Un código comentado no es computado por el intérprete de Python, es sólo una aclaración para el programador humano.
    
    `# Save the phoneme segment as an audio file with the same sample rate`
    
    > you didn't change any code, just a comment, that doesn't change the result. Please correct yourself.
    > 
    
    Esta vez no cambió **nada**.
    
    > you are still not addressing the issue
    > 
    
    I apologize for any confusion. To ensure that the output audio files maintain the same pitch and playback speed as the input audio, you should also copy the input audio's sample width and number of channels when saving the phoneme segments. Here's the corrected code:
    
    - <Código>
        
        ```python
        # VOSK_phoneme_slicer.py
        
        import os
        import vosk
        import wave
        import shutil
        import argparse
        from pydub import AudioSegment
        
        def get_audio_properties(audio_path):
            # Use pydub to load the audio file and obtain its properties
            audio = AudioSegment.from_file(audio_path)
            return audio.frame_rate, audio.sample_width, audio.channels
        
        def segment_audio_to_phonemes(audio_path, model_path, output_dir):
            # Get the properties of the input audio file
            sample_rate, sample_width, channels = get_audio_properties(audio_path)
            print(f"Detected sample rate: {sample_rate}")
        
            # Initialize the Vosk recognizer with the model and the detected sample rate
            model = vosk.Model(model_path)
            recognizer = vosk.KaldiRecognizer(model, sample_rate)
        
            # Open the audio file
            wf = wave.open(audio_path, 'rb')
        
            # Initialize variables
            results = []
            data = wf.readframes(4000)  # Read audio data in chunks
            segment_count = 0
        
            # Create the output directory if it doesn't exist
            os.makedirs(output_dir, exist_ok=True)
        
            phoneme_segments = {}  # Store phoneme boundaries and audio data
            phoneme_start = 0  # Start time of the current phoneme segment in milliseconds
        
            while len(data) > 0:
                recognizer.AcceptWaveform(data)
                data = wf.readframes(4000)
        
                if recognizer.FinalResult():
                    # Get the final recognition result, which includes phonemes
                    result = recognizer.Result()
                    results.append(result)
        
                    # Extract the end time of the phoneme from the audio frame position
                    phoneme_end = wf.tell() / sample_rate * 1000  # Calculate the end time of the phoneme in milliseconds
                    phoneme_duration = phoneme_end - phoneme_start
        
                    # Store the phoneme boundaries and audio data
                    phoneme_segments[segment_count] = {
                        "start": phoneme_start,
                        "end": phoneme_end,
                        "duration": phoneme_duration,
                    }
        
                    phoneme_start = phoneme_end
                    segment_count += 1
        
            # Save the phoneme segments as separate audio files
            wf = wave.open(audio_path, 'rb')  # Reopen the audio file
            for segment_number, boundaries in phoneme_segments.items():
                start_frame = int(boundaries["start"] / 1000 * sample_rate)
                end_frame = int(boundaries["end"] / 1000 * sample_rate)
        
                # Extract the audio data for the phoneme segment
                wf.setpos(start_frame)
                audio_data = wf.readframes(end_frame - start_frame)
        
                # Save the phoneme segment as an audio file with the same properties as the input audio
                output_path = os.path.join(output_dir, f'segment_{segment_number}.wav')
                with wave.open(output_path, 'wb') as outwf:
                    outwf.setnchannels(channels)
                    outwf.setsampwidth(sample_width)
                    outwf.setframerate(sample_rate)
                    outwf.writeframes(audio_data)
        
            return results
        
        def main(args):
            phoneme_results = segment_audio_to_phonemes(args.input_audio_file, args.vosk_model_path, args.output_directory)
        
            for i, result in enumerate(phoneme_results):
                print(f"Segment {i + 1}: {result}")
        
        if __name__ == "__main__":
            parser = argparse.ArgumentParser(description="Segment audio into phoneme audio files using Vosk.")
            parser.add_argument("input_audio_file", type=str, help="Path to the input audio file.")
            parser.add_argument("vosk_model_path", type=str, help="Path to the Vosk model.")
            parser.add_argument("output_directory", type=str, help="Directory to save phoneme audio segments.")
        
            args = parser.parse_args()
            main(args)
        
        ```
        
    
    This corrected code ensures that the output audio files maintain the same sample width and number of channels as the input audio, preserving the pitch and playback speed. Please try running this updated code, and let me know if it resolves the issue.
    

En resumen, la conversación con ChatGPT para generar el código, como si fuera un empleado *ad-honorem* de la investigación, pasó por varias etapas. En principio, al no lograr el objetivo requerido, se fue corrigiendo el pedido para alinearlo con este. Luego, la aparición de errores propios del código, como métodos –funciones– que no existen o se llaman de otra forma, y por último un problema sobre los audios generados que no eran generados con el sample rate correcto. 

Finalmente, corrí el último [script sugerido](https://www.notion.so/Un-recorrido-tecno-sonoro-hacia-el-habla-as-mica-31eaddcc2bb841bcaa124ed890ed8ca7?pvs=21) sobre uno de los audios de mi dataset para realizar la separación de los archivos de audio. VOSK necesita el archivo del modelo específico para comprender el idioma con el que va a trabajar, por suerte cuentan con varios idiomas ya entrenados y [disponibles](https://alphacephei.com/vosk/models) para su descarga y uso. A continuación algunos de los resultados:

- El audio original a recortar fue de la [conversación en francés](https://www.notion.so/Un-recorrido-tecno-sonoro-hacia-el-habla-as-mica-31eaddcc2bb841bcaa124ed890ed8ca7?pvs=21) descargada de YouTube referido anteriormente.
- Algunos recortes:

[segment_0.wav](Un%20recorrido%20tecno-sonoro%20hacia%20el%20habla%20ase%CC%81mica%2031eaddcc2bb841bcaa124ed890ed8ca7/segment_0.wav)

[segment_2.wav](Un%20recorrido%20tecno-sonoro%20hacia%20el%20habla%20ase%CC%81mica%2031eaddcc2bb841bcaa124ed890ed8ca7/segment_2.wav)

[segment_1.wav](Un%20recorrido%20tecno-sonoro%20hacia%20el%20habla%20ase%CC%81mica%2031eaddcc2bb841bcaa124ed890ed8ca7/segment_1.wav)

[segment_3.wav](Un%20recorrido%20tecno-sonoro%20hacia%20el%20habla%20ase%CC%81mica%2031eaddcc2bb841bcaa124ed890ed8ca7/segment_3.wav)

Al analizar los resultados, los segmentos de fonemas tienen la misma corta duración, lo cual me dio sospechas, sin embargo parecen ser unidades básicas de la lengua en cuestión. Imaginé de inmediato que debía conseguir el modelo para todos los idiomas que quisiera integrar en mi sistema, y si no estaban disponibles habría que generarlos mediante entrenamiento. Comencé a pensar en otras alternativas para realizar esta separación de forma más homogénea en los idiomas, dado que además, no los conozco a todos como para juzgar si los resultados generados serían correctos.

# Conversaciones con colegas

Luego de las últimas pruebas y experimentaciones sobre la separación de fonemas, surgió la necesidad de extender la mano hacia colegas que trabajaron con tecnologías aledañas en busca de estrategias alternativas para acercarse al resultado sonoro deseado en el principio de esta investigación. **ArchiVoz** es un proyecto derivado de [**Intercambios Transorgánicos**](https://intercambiostransorganicos.org/), grupo de investigación radicado en UNTREF dirigido por [**Gala Lucía González Barrios**](https://gala.bio/), del cual fui parte entre 2014 y 2018, quedando vinculado en forma de consultor externo para necesidades técnicas puntuales. Se puede encontrar más información en el Trabajo Final de Grado de Gala //AGREGAR REFE ZOTERO//.
Gala dio el puntapié inicial para hablar con dos investigadores de su equipo con experiencia en tecnologías basadas en inteligencia artificial para la generación de audio, específicamente, de habla generado por sistemas TTS –texto a habla–.

## ArchiVoz

### **Matías Di Bernardo**

Matías Di Bernardo es miembro activo de [ArchiVoz](https://intercambiostransorganicos.org/archivoz/) involucrado en el desarrollo técnico con tecnologías de inteligencia artificial para la generación de voces. Específicamente, trabajó en tomar un modelo TTS llamado [Tacotron](https://pytorch.org/hub/nvidia_deeplearningexamples_tacotron2/) y realizar [fine-tuning](https://www.notion.so/Un-recorrido-tecno-sonoro-hacia-el-habla-as-mica-31eaddcc2bb841bcaa124ed890ed8ca7?pvs=21) para extrapolar un modelo que originalmente habla inglés, al idioma español.
Teniendo en cuenta que existen referencias *performáticas* de personas imitando idiomas eliminando el contenido semántico //\{REFE AL VIDEO} //, una de las ideas fue combinar estos *semi-idiomas* inventados con su par existente para formar un dataset con el que alimentar un modelo. La hipótesis es que esto funcionaría como una suerte de fine-tuning del modelo a la inversa, es decir, que en lugar de ir en dirección a ajustar la precisión de algún acento, idioma, género de esa voz, se busca deformar su semántica, y preservar –o no– el resto de las características.

La cuestión principal que se rescató del encuentro fue que el problema de recorrer un espacio latente de manera aleatoria, o incluso arbitraria, para generar inferencia sobre el modelo y resulte en sonidos similares a la voz era muy baja. Esto se debe a que los modelos de inteligencia artificial funcionan como una caja negra. Encontrar los caminos dentro de una red neuronal que generen las piezas sonoras deseadas es como encontrar una aguja en un pajar. Quizás entrenando el modelo lo suficiente de manera que logre generalizar la voz humana al punto que sin importar qué camino neuronal se tome siempre encontremos semejanza con el habla es una pregunta de investigación dentro del campo de la inteligencia artificial que requiere mucho más tiempo, recursos y trabajo que excede esta instancia. Esto es una motivación para continuar, no para detenerse. Los modelos que logran estos espacios latentes ricos de referencias son masivos. Por ejemplo, DALL-E o Stable Diffusion // **REFES** //, en momentos primitivos del proceso de inferencia ya logran dibujar bordes de objetos, es decir, diferenciar figura-fondo.
**//REFE IMAGEN BLANCO Y NEGRO figura fondo// // O SAMPLING STEPS //**

El desarrollo de un modelo que logre semejante nivel de riqueza en su espacio latente es tarea de grandes equipos y/o empresas que reciben un alto caudal de inversión. Por suerte existen modelos open-source de este calibre que podrían ajustarse a las necesidades de este proyecto, pero para especular estos resultados debemos realizar las pruebas correspondientes, y entrenar para mover estos modelos también es computacionalmente caro si buscamos un cambio radical en sus resultados.

### **Sebastían Sosa Welford**

Por otro lado, Sebastián Sosa Welford que ya no es parte activa de Intercambios Transorgánicos, al momento de este escrito se desarrolla como asistente de investigadores de CONICET realizando tareas técnicas sobre el trabajo con voces. Sebastián hizo hincapié en que el problema en cuestión no está allanado en el campo de estudio de la generación de voces por computadora ya que lo que la ciencia que impulsa esta tecnología busca resolver otro problema, que en esta época ya está bastante bien logrado. Se trata de generar voces que hablen a la perfección cada idioma, inclusive, muchos idiomas con la misma voz. Un ser artificial políglota, que conoce de emociones y sus entonaciones, acentos de distintas regiones, y hasta puede *encarnar* el género que se le solicite.

Un concepto propuesto por Sosa cuando escuchó la descripción del proyecto es el de la "prosodia macro-dinámica del lenguaje". Este término enmarcado dentro de la lingüística resulta muy apropiado para la descripción de la forma, la cadencia, el ritmo y demás aspectos formales del habla que dejan de lado la semántica.

Una de las tareas de Sebastián en su trabajo fue realizar la anotación de timestamps –marcas de tiempo– que indiquen en qué momento comienza y termina una sílaba. Para ello, utilizó Praat, aquel software especializado en el análisis de habla a través de la fonética desarrollado en la Universidad de Amsterdam, sumado a un script en Python que llama a las funciones de dicha aplicación para realizar las operaciones necesarias para la separación en estas unidades del lenguaje. Este punto en común sumó otro enfoque distinto de cómo realizar una tarea que ya se había realizado anteriormente, aunque la separación fue con fonemas, tanto con otra herramienta para el trabajo con voces –VOSK– como con AudioStellar, que sólo detectaba transientes en el audio como límites de separación.

El joven investigador advirtió que la separación de un audio de lenguaje hablado en unidades más básicas como sílabas o fonemas es una tarea cuasi-subjetiva por el hecho de que depende de cada idioma y de cada hablante. Además, la precisión de dónde comienzan y terminan estas unidades puede ubicarse infinitamente antes o después de los que propone cualquier software de análisis lingüístico, inclusive si esta tarea se realiza manualmente por un actor humano.
Dentro de los sistemas TTS, para preparar un modelo debe ser entrenado con un dataset que contenga texto y su componente sonora, en otras palabras, una voz que habla y el texto de lo que dice de manera que la información está emparejada. Una idea que surge en esta conversación es que estas dos versiones de la *misma* información **no** coincidan. Si se entrena un modelo con información "incorrecta" suponemos que vamos a tener un sistema impredecible, que al pedirle que diga algo, dirá otra cosa. Desde luego que es de suma importancia este *des-emparejamiento*, cómo se logre, qué texto corresponderá con qué sonido de habla, tan importante como si se quisiera hacer un TTS funcional en cualquier idioma. Pero también es importante tener en cuenta, a propósito de este proyecto, que la sonoridad de esa voz sería similar a la que le fue dada. ¿Aprenderá siempre igual? ¿Tendrán siempre coincidencias erróneas al ponerlo a prueba? Quizás dependa qué nivel de aprendizaje se alcance, con cuánta precisión pueda representar estas nuevas relaciones entre texto y sonido.

Ambos investigadores habían centrado su trabajo en las tecnologías de text-a-habla –TTS– que habían sido descartadas en un principio por la necesidad de inserción de texto. Esta operación tiene una relación muy directa con el sentido, ya que las voces generadas hablarían lo que se les pida... Entra Mateo Amaral.

## **Mateo Amaral**

[Mateo Amaral](https://mateoamaral.com/) fue el último convocado en estos encuentros. Es artista visual con énfasis en nuevos medios, colabora con su hermano para el desarrollo técnico de la generación de mundos virtuales generativos, con personajes que hablan en una extraña lengua con similitudes a varias de las que conocemos, sobretodo inglés.

Su principal fuente de sonidos de voces son las tecnologías TTS, utilizadas de forma novedosa. Utilizó servicios como [Uberduck](https://www.uberduck.ai/) y [Musicfy](https://musicfy.lol/). La estrategia fue alimentar estos sistemas con *cualquier cosa*. En lugar de insertar texto legible, reconocible, y en un idioma en particular, lo único respetado fue nuestro teclado occidental como medio a escribir un sinsentido de caracteres para que el sistema los vocalice.

Por otro lado también intentaron entrenar un modelo de Tacotron, pero incluso comprando créditos computacionales en la nube de Google para poder prepararlo rápidamente con mayor poder de cómputo, llegaron lejos de sus resultados esperados. Se sintieron abrumados por la tecnología y la falta de documentación de aquel entonces en esta materia y prefirieron dedicar sus energías a la generación de entornos 3D y personajes autogenerativos, incluyendo sus comportamientos en los escenarios que propone Mateo.

<aside>
❗ Una aclaración importante es que, como se ya se ha visto, los objetivos planteados se basan en predicciones de sus resultados. Estas hipótesis vienen del conocimiento de estas tecnologías y sus posibilidades, pero dada la naturaleza de estos sistemas, sus resultados pueden ser impredecibles. Conocer las internas de un modelo, en esencia matemático, puede ser una tarea insondable para un humano. La predictibilidad de las inferencias generadas por modelos de inteligencia artificial depende en gran medida de varios factores, como el tipo y tamaño del modelo, la calidad de los datos de entrenamiento y la naturaleza de la tarea en cuestión. En este caso, la generación de audio semejante a una voz –que puede ser de cualquier forma– es de naturaleza muy poco predecible, a diferencia de, por ejemplo, la traducción automática de un texto, que sabiendo el idioma, podemos adelantarnos al resultado.

</aside>

---

# Desarrollo Técnico pt. 2: Text-to-Speech

## Tacotron y FastSpeech

- allanar el camino con ambas tecnologías
- pruebas con collab tacotron

- buscar herramientas ya logradas online: ttsmaker
Párrafo explicando nueva forma de llegar:

Al llegar a [TTSmaker.com](http://TTSmaker.com) y gracias a la charla con Mateo, la idea de no involucrar texto me pareció caduca. Haciendo pruebas con todas las herramientas online que encontré, ideé un flujo que me pareció interesante en cuanto a proceso y sus resultados. Escribir sus instrucciones como *performance informática* es un nuevo devenir de este proceso que describo a continuación. Invito y celebro su interpretación y modificación.

## Instrucciones para un experimento TTS *(Experimento #31)*

1. [https://www.randomtextgenerator.com/](https://www.randomtextgenerator.com/) en esta pagina hacer texto en idioma
    1. Si no está el idioma, translate.google.com
    2. Revisar el texto generado utilizando un traductor como el mencionado, para ver su contenido. En lo posible que no repita tantas palabras, ni que haga sentido. Si hay coherencia en las oraciones pero el contenido del mensaje es surreal, vale para los propósitos de esta investigación.
2. Pasar por [https://thinkzone.wlonk.com/Gibber/GibGen.htm](https://thinkzone.wlonk.com/Gibber/GibGen.htm)
    1. Revisar Gibberish Level. Probar en 3. Si el texto no parece muy coherente, o está muy mezclado (juzgado a partir de una noción del idioma) o el resultado sonoro “no coincide tanto con el imaginario de esa lengua” subir un punto.
3. Generar habla con [https://ttsmaker.com/](https://ttsmaker.com/)
    1. Probar distintas voces
    2. Intentar que el audio resultante esté entre 30 y 40 segundos
4. La estructura de carpetas para la organización de sonidos resultantes podría ser la siguiente
    
    ![Untitled](Un%20recorrido%20tecno-sonoro%20hacia%20el%20habla%20ase%CC%81mica%2031eaddcc2bb841bcaa124ed890ed8ca7/Untitled%203.png)
    
    O bien generalizando:
    
    ```bash
    + <Carpeta de un idioma>
    	- Textos.txt # Documento de texto que contiene el texto que es reproducido por el TTS.
    	- ttsmaker-file-<fecha> <número>.wav # Donde número corresponde al párrafo dentro del archivo de texto.
    + <Otra carpeta de otro idioma>
    	- Textos.txt
    	- ttsmaker-file-<fecha> <número>.wav
    ...
    # Tantos como idiomas se deseen agregar.
    ```
    
5. Un ejemplo del contenido de los archivos de texto es:
    
    ```
    1
    De se so soubemos matada pentadessem. Alimindo comedefez os mas obederraderetado se muda no te se. Cum ques emponge janter. Cartessa esta notimido ho qua te conros te confuncido filigas tu vidos as be. Aponge as manda noivem em te ha olvempesfacominar mente mando. Carra endos ha. Alimpros has manar as em. Apos manteis avellam expleto se cape. Sei irrana dosa pitadadaveo nosa noivo. De mausoube. Papantao. Bar larra cape. La pendivido do imeta seguessemo procebo erra em erradomina neliguietticahindo 
    
    2
    Ja sr litterato tolica patuscadas tratado por sujeitava. Vintens nervoso um fio. Entribue aos mal. Caminhar arreligioso vao rez inda vao religioso vao rez acces levantado ser que estincoes le fez accento tem nos affligioso dor sujeitae. Esmeros tento causara identes. Fazendo pe. Caminhava rajadas um oh fechava. Nos affligir symbolica documentes. Fazenda vao esmeros teu rez accesso um oh fechava. Retento por evitae. Esmerossas trando paiol vereram tal esta vae evidento companto tolica documento t
    ```
    
6. Recortar archivos de audio con AudioStellar o [`VOSK-phoneme-slicer.py`](https://www.notion.so/Un-recorrido-tecno-sonoro-hacia-el-habla-as-mica-31eaddcc2bb841bcaa124ed890ed8ca7?pvs=21) para generar segmentos pequeños, uno por cada fonema.
**NOTA**: En este caso, utilicé exclusivamente **AudioStellar** para esta tarea dado que este separa a partir de transientes. Esta estrategia única para todos los idiomas permite cierta homogeneidad de cómo los analizamos, sin considerar reglas específicas de cada uno. Caso contrario, se debería conseguir un modelo entrenado por cada lengua –o desarrollarlo– para realizar una separación de fonemas específica debido a que no todos tienen las mismas reglas fonéticas. Esto complejiza y alarga bastante la tarea y no aporta considerablemente al resultado final sonoro.
Armé un nuevo script para utilizar los métodos que AudioStellar utiliza en su código para realizar los recortes. Para esto Leandro me indicó en qué parte del código de ASt se encuentran estas funcionalidades y tomé lo que necesitaba para armar el siguiente script:
    - `slicer_onset.py`
        
        ```python
        # SEPARATE AUDIOS INTO SEGMENTS FOR EACH LANGUAGE FILE.
        # TFG AAEE jaunmatrin
        
        # REQUIRES LIBROSA 0.9.1 NOT HIGHER
        # Python 3.10
        
        import os
        import librosa
        import numpy as np
        import scipy.io.wavfile
        import os
        
        dir = "./ElevenLabs-JM-test"
        
        supportedFileTypes = ["wav", "mp3"]
        
        def findOnsetsAndCut(window_max, window_avg, delta, backtrack):
            global onset_frames, onset_times, times
        
            hop_length = 512
            o_env = librosa.onset.onset_strength(y=segmento, sr=sr)
            times = librosa.times_like(o_env, sr=sr)
        
            window_max_final = window_max * sr // hop_length
            window_avg_final = window_avg * sr // hop_length
        
            onset_frames = librosa.onset.onset_detect(
                onset_envelope=o_env,
                sr=sr,
                hop_length=hop_length,
                backtrack=backtrack,
                delta=delta,
                # wait=0,
                pre_avg=window_avg_final,
                post_avg=window_avg_final + 1,
                pre_max=window_max_final,
                post_max=window_max_final + 1,
            )
        
            onset_times = librosa.frames_to_time(onset_frames, sr)
        
        def loadFile(filename):
            global x, sr, segmento
        
            target = filename
            if not os.path.isfile(target):
                return
            else:
                x, sr = librosa.load(target, sr=None)
        
            segmento = x
        
        def fadeNormalizeSave(
            folder,
            fadeSamples=1000,
            normalize=True,
        ):
            segmentoFade = np.copy(segmento)
        
            for f in range(1, len(onset_frames)):
                sampleFinish = librosa.core.frames_to_samples(onset_frames[f])
        
                j = fadeSamples
                for i in np.arange(sampleFinish - fadeSamples, sampleFinish + 1):
                    segmentoFade[i] *= j / fadeSamples
                    j -= 1
        
            filePath = os.path.dirname(audioFilePath)
            if not os.path.exists(folder):
                os.mkdir(folder)
        
            for i in range(len(onset_frames) - 1):
                timeF = librosa.core.frames_to_samples(onset_frames[i])
                timeT = librosa.core.frames_to_samples(onset_frames[i + 1])
                filename, ext = os.path.splitext(audioFile)
                archivoAGuardar = f"{filename}_{i}.wav"
                segmentoAGuardar = segmentoFade[timeF:timeT]
        
                if normalize:
                    segmentoAGuardar = np.array(
                        (segmentoAGuardar / np.max(np.abs(segmentoAGuardar)))
                    )
        
                scipy.io.wavfile.write(archivoAGuardar, sr, segmentoAGuardar)
        
        def process_folder(input_folder):
            global audioFilePath, audioFile
            for root, dirs, files in os.walk(input_folder):
                for file in files:
                    if os.path.splitext(file)[1][1:].lower() in supportedFileTypes:
                        audio_file = os.path.join(root, file)
                        audioFile = audio_file
                        audioFilePath = audio_file
                        process_audio_file(audio_file)
        
        def process_audio_file(audio_file):
            loadFile(audio_file)
            if segmento.size > 0:
                findOnsetsAndCut(window_max, window_avg, delta, backtrack)
                if onset_frames.any():
                    folder = os.path.dirname(audio_file)
                    print("folder: ", folder)
                    folder_name = os.path.basename(folder)
                    print("folder_name: ", folder_name)
                    # output_folder = os.path.join(folder, folder_name + "_slices")
                    output_folder = folder
                    print("output_folder: ", output_folder)
                    os.makedirs(output_folder, exist_ok=True)
                    fadeNormalizeSave(output_folder, fade, normalize)
        
        if __name__ == "__main__":
            print("Onset Detection Slicer")
            input_folder = dir
            window_max = 0.10
            window_avg = 0.05
            delta = 0.10
            backtrack = True
            fade = 1000
            normalize = True
        
            print("processing folder: ", input_folder)
            process_folder(input_folder)
        
        ```
        
    
    De esta forma, con la estructura de carpetas del paso anterior, se generarían las *tajadas* de cada idioma en lote, de forma programática, en cuestión de minutos. Sólo se debe especificar los siguientes parámetros en el script, que son los mismos que ofrece la interfaz de AudioStellar:
    
    - Ver parámetros:
    Para mayor información, revisar la documentación de `librosa` [aquí](https://librosa.org/doc/main/generated/librosa.onset.onset_detect.html#librosa.onset.onset_detect).
        
        ```python
        input_folder = dir # Directorio contenedor de las carpetas de idiomas
        window_max = 0.10
        window_avg = 0.05
        delta = 0.10
        backtrack = True
        fade = 1000
        normalize = True
        ```
        
7. Crear mapa en AudioStellar utilizando **MFCC**, algoritmo que ignora características de pitch –ideal para voces de diferentes personas– pero conserva características tímbricas –prosodia– de manera que agrupe los fonemas sin importar quien lo *diga*. MFCC es el algoritmo más cercano a una subjetividad perceptiva del sonido.
8. Experimentar.

AGREGAR RECORRIDOS CON LAS FUNCIONALIDADES DE AST VIDEO

<aside>
💡 Este experimento es altamente escalable, es decir que cuanto más largos, o más archivos generados por el TTS se utilicen, habrá mayor riqueza de fonemas, más contenido por idioma. La cantidad de lenguas, y cuáles, dependerá de la búsqueda sonora del experimento.

</aside>

### Consideración sobre idiomas con ideogramas

El Chino, por ejemplo, está compuesto por ideogramas, por lo que mezclar sus caracteres no hace mucho *sentido*. Es decir que no podemos inventar, al menos con este tipo de herramientas, palabras que no existan a la hora de ser pronunciadas. Quizás la oración no tenga sentido pero las palabras que la componen sí, y esto es diferente a los otros casos dado el algoritmo utilizado en la herramienta que convierte texto a *gibberish* (ver código fuente en el mismo [sitio web](https://thinkzone.wlonk.com/Gibber/GibGen.htm)).

Una estrategia para mezclar el texto y evitar sonidos repetidos es borrar caracteres aleatorios en el texto a reproducir, por lo que se sugiere generar uno largo al cual se le puedan eliminar fragmentos hasta lograr el efecto y la duración deseada.

### Alternativa a paso 1 y 2

Cuando el generador de texto aleatorio no ofrece determinado idioma, y si se traduce textualmente no favorece a la sonoridad *conocida* conviene utilizar ChatGPT –u otro modelo de lenguaje– para generar texto en el idioma deseado.

Por ejemplo, para turco esta fue la conversación con ChatGPT:

- generate a random turkish text of 100 words
    
    > Certainly, here's a random 100-word gibberish text in Turkish:
    > 
    > 
    > "Gibberish metinleri, yabancı dillerin seslerini taklit eden ilginç bir yolculuğa davet ediyor. Zıpır zıpır harf sıralamaları, düşünce dünyasını farklı bir evrene taşıyor. Bu tuhaf dilin anlamı yok, ama onun sesleri ve ritmi şaşırtıcı derecede gerçekçi. Kuşlar zıpırdıyor, rüzgar zıpırdıyor ve güneş yavaşça batıyor. Bu yazıları anlamasanız bile, zıplamak istediğiniz hissine kapılacaksınız. Haydi, zıplayalım ve bu dilin sırlarını keşfedelim. Zıpır zıpır zıp, zıpır zıpır zıp, zıpır zıpır zıp!"
    > 
    > Bu yazı tamamen anlamsızdır ve Türkçe ile ilgisi yoktur, ama ses ve harf sıralamaları Türkçeyi taklit etmektedir.
    > 
- make it sound more turkish not so gibberish
    
    > Certainly, here's a 100-word text in Turkish that may not be gibberish but is still non-sensical:
    > 
    > 
    > "Bugün güzel bir gün. Güneş parlıyor, kuşlar cıvıl cıvıl şarkılar söylüyor. Etrafta yeşil tepeler ve mavi gökyüzü ile huzur dolu bir manzara var. İnsanlar güler yüzlü, sokaklarda gezip dolaşıyorlar. Ama aynı zamanda, kırmızı armutlar dökülüyor ağaçlardan ve şeftali çiçekleri kışın açıyor. Her şey müthiş bir uyum içinde, ama aslında bu tamamen hayal ürünü bir dünya. Biraz daha yakından bakınca, aniden yeşil elma yağmurunun yağdığını ve çikolata çiçeklerinin gülümsediğini göreceksiniz. Her şey mümkün bu harika dünyada."
    > 
    > This text is constructed to sound more like a coherent passage in Turkish, even though the content is still nonsensical.
    > 
- make another one, emphasizing how turkish it may sound when spoken aloud
    
    > Certainly, here's a 100-word text in Turkish that emphasizes the Turkish language's phonetic and rhythmic qualities when spoken aloud:
    > 
    > 
    > "Gün doğar, kuşlar kanat çırpar, rüzgar hafifçe eserken, doğanın melodisi kulakları çınlatacak kadar güzeldir. Denizin dalgaları sahile vurur, çocuklar gülerek oynar, yaşamın ritmi hızlıca akar. Köyde simitçiler simitlerini taze taze satar, çaycılar çaylarını demler ve çay bardaklarını birer birer dizerek servis eder. Sohbetler kahkahalarla dolup taşar, tüm renkler birbirine karışır ve gülüşler yürekleri ısıtır. Her bir kelime, her bir hece, bu güzel dili konuşurken sanki birer nota gibi çalar. Türkçe, kulaklara hoş gelen bir şarkıdır."
    > 
    > This text aims to capture the phonetic and rhythmic qualities of the Turkish language when spoken aloud, while the content remains non-sensical.
    > 

Los últimos dos ejemplos son los que luego pasé por TTSmaker y utilizados en el experimento de la cartografía con ASt.

[Exploración manual con *units* de AudioStellar.](https://drive.google.com/file/d/1ni5xYik7aKoKLQKXgf6DeqWNqAbPl6hG/view?usp=drive_link)

Exploración manual con *units* de AudioStellar.

## AudioStellar + PureData

Habiendo recorrido las nuevas [Cartografías Mundiales del Habla](https://www.notion.so/Un-recorrido-tecno-sonoro-hacia-el-habla-as-mica-31eaddcc2bb841bcaa124ed890ed8ca7?pvs=21) con las unidades provistas por AudioStellar, conversando con un amigo que fue parte de su equipo de desarrollo, [Tomas Ciccola](https://szgy.ahh.red/) me sugiere la idea de investigar nuevas formas de recorrer mi mapa mediante [OSC](https://www.notion.so/Un-recorrido-tecno-sonoro-hacia-el-habla-as-mica-31eaddcc2bb841bcaa124ed890ed8ca7?pvs=21) ya que dicho software provee una [API](https://www.notion.so/Un-recorrido-tecno-sonoro-hacia-el-habla-as-mica-31eaddcc2bb841bcaa124ed890ed8ca7?pvs=21) para ser [controlado con este protocolo](https://gitlab.com/ayrsd/audiostellar/-/blob/units/OSC_Documentation.md).

El mapa 2D de fragmentos de voces está categorizado en Clusters: conjunto de sonidos que pueden ser agrupados tanto por cercanía (ajustable con ciertos parámetros para definir sus características) o por la carpeta donde estos archivos residen. Dado que tenía una carpeta por idioma, mis clusters estaban agrupados por idioma 👍. A su vez, están desparramados por todo el mapa ya que la distribución de cada punto -sonido- estaba dada por su *parecido tímbrico* para determinar la cercanía entre sí. Esto permitía que tenga la posibilidad de recorrerlos con las unidades de AudioStellar de manera espacial, como hice antes, o bien, llamar por cluster mediante OSC.

```yaml
/play/cluster [clusterName] [[index]] [[volume]]
# Play a sound from a cluster named clusterName. If index is not present AudioStellar will choose a random one; note that the index will cycle through the number of sounds in the cluster. Volume is optional and is between [0,1].
```

Comencé a bocetar una aplicación utilizando [Plug Data](https://plugdata.org/), una versión moderna de [Pure Data](https://puredata.info/) implementada con [JUCE](https://www.notion.so/Un-recorrido-tecno-sonoro-hacia-el-habla-as-mica-31eaddcc2bb841bcaa124ed890ed8ca7?pvs=21). La idea era enviar estos mensajes hacia AudioStellar para poder reproducir los sonidos de cada idioma con determinada frecuencia de disparo, de manera que pueda *simular habla* mezclada al concatenar los fragmentos de voces.

[https://drive.google.com/file/d/1r0gbmMcFY4lDBztvNtyfK41DhlXasLIc/view?usp=drive_link](https://drive.google.com/file/d/1r0gbmMcFY4lDBztvNtyfK41DhlXasLIc/view?usp=drive_link)

// continuar

## Máquina Probabilística *(Experimento #32)*

En esta nueva iteración sobre el primer experimento con TTS, consideré algunos factores que favorecerían al resultado sonoro que busqué desde el comienzo.

- Texto generado por ChatGPT en estilo nonsensical, ha demostrado ser bueno generando relatos sinsentido reminiscentes a alicia en el país de las maravillas. Sintácticamente correcto, pero historias delirantes.
- genero de las voces, mismo texto, a dos voces. nueva CURADURÍA TÍMBRICA DE VOCES.
- largo de los audios
- menor cantidad de word shuffling, sinsentido sólo en el contenido, pero palabras reales.
- segmentos de habla más largos en slicer audiostellar
- poner a prueba la maquina2 con estas nuevas condiciones
- observaciones.
- Para Guaraní se encontró este modelo: [https://huggingface.co/facebook/mms-tts-grn](https://huggingface.co/facebook/mms-tts-grn) sólo provee 1 voz de hombre.
- no inventa idiomas, genera conversaciones y multitudes.

[https://drive.google.com/file/d/1PmvJszNEmjLkqitroxBEGfrv-eUTSuGu/view?usp=drive_link](https://drive.google.com/file/d/1PmvJszNEmjLkqitroxBEGfrv-eUTSuGu/view?usp=drive_link)

HISTORIA SIEMPRE LA MISMA:

> *En una galaxia muy, muy lejana, los pingüinos bailan tango con sandías y estrellas fugaces como luces de neón cubiertas de chocolate. El sol es como una gran naranja y la luna es como un gran algodón de azúcar. Los ríos fluyen con jarabe de arce y las nubes parecen pasteles de limón. Los peces saltan del agua y tocan el piano mientras las mariposas pintan dibujos en sus alas. Las carreteras están cubiertas de chocolate derretido y las casas tienen techos hechos a medida. Las estrellas fugaces se convierten en caramelos de frambuesa y los mosquitos tocan el violín en mitad de la noche. Todo esto es parte de un dulce sueño donde las olas del mar están hechas de salsa de caramelo y las estrellas brillan como caramelos de diamantes. De las nubes llueven macarrones y el atardecer es como un cuadro de chocolate. Es un mundo de imaginación, donde los arcoíris son la escalera hacia los sueños celestiales y los atardeceres saben a mil helados diferentes. Los barcos flotan en los ríos con caramelo y las montañas se convierten en pasteles dulces.*
> 
- add video de cambios 2024

## Mi propia voz *(Experimento #33)*

A partir de los resultados sonoros de los experimentos anteriores, mi inquietud por el habla asémica crece aún más, como si esquivara cualquier forma de conclusión y ese universo se expandiera hacia un sinfín de posibilidades. Me di cuenta que necesitaba emparejar los timbres de las voces si quería realmente comenzar a *inventar idiomas*. Pero, ¿qué timbre? ¿qué voz sería la que represente este nuevo lenguaje vocalizado por computadora? Por supuesto la respuesta apareció de inmediato, la mía. De aquí surgen dos posibilidades:

- A partir de los fragmentos de audio del experimento anterior, encontrar algún sistema Speech-to-Speech que transforme esas voces generadas por TTSMaker a mi propia voz, de manera que el contenido *a-semántico* sea extraído de esos audios, incluyendo la cadencia, la entonación, las palabras y la pronunciación, pero no el timbre, que será el de mi voz.
- Clonar mi propia voz y luego con ese modelo inferir (generar audio a partir del modelo) los textos que había generado como recurso fuente para los TTS.

De cualquiera de estas maneras lograría obtener muchos fragmentos de la misma persona (yo) hablando una gran cantidad de idiomas con la posibilidad de mezclarlos de forma temporal pero no morfológica. Esta distinción es importante para aclarar que estos últimos 3 experimentos pueden dar un acercamiento a esta invención de idiomas con una operación 

Finalmente decidí pagar ElevenLabs… 

COMPLETAR

También tomé la decisión de quedarme con la [fantasiosa historia](https://www.notion.so/Un-recorrido-tecno-sonoro-hacia-el-habla-as-mica-31eaddcc2bb841bcaa124ed890ed8ca7?pvs=21) inventada por ChatGPT. Cada una de las versiones no fue traducida sino que le pedía nuevamente el texto en el idioma que quisiera luego reproducir con mi voz clonada. En los experimentos anteriores había textos de otros generadores de *gibberish* pero para este caso quería mantener este sinsentido en el relato, dándole más sentido a este gesto. Este relato fue pedido en los 29 idiomas que proporciona el modelo **Eleven Multilingual v2** (árabe, búlgaro, chino, croata, checo, danés, holandés, inglés, filipino, finlandés, francés, alemán, griego, hindi, indonesio, italiano, japonés, coreano, malayo, polaco, portugués, rumano, ruso, eslovaco, español sueco, tamil, turco, ucraniano).

Settings del modelo: **Stability** entre 35% y 50%, **Similarity** entre 75% y 90%, **Style Exaggeration** 0% (porque no afecta en modo TTS, sí en modo STS), **Speaker Boost** encendido.

## Las voces de mi gente

COMPLETAR clone la voz de amigues. 

clonar voz 2x de wsp? 

clonar la voz de mi viejo

## Generador de subtítulos en tiempo real

[Subtitle generator](https://codepen.io/jaunmatrin/pen/gOqgmgx)

[https://codepen.io/jaunmatrin/pen/gOqgmgx](https://codepen.io/jaunmatrin/pen/gOqgmgx)

# Análisis del algoritmo cartógrafo

[Exploración manual en AudioStellar, evaluando algoritmo MFCC.](https://drive.google.com/file/d/1QwicLDBVO5t_YAx4S1HWOblirh6Jc4eh/view?usp=drive_link)

Exploración manual en AudioStellar, evaluando algoritmo MFCC.

// qué onda la similitud de idiomas en el mapa? tener en cuenta que este se exploró en modo mapa, en los experimentos anteriores el mapa casi que ni importaba porque se exploraba por OSC por idioma.

# Uso no convencional de las herramientas

ttsmaker + gibberish generators / tacotron / el autoencoder?

# El valor estético del habla

La experiencia de escuchar hablar idiomas que no conocemos deja automáticamente el contenido semántico fuera de la ecuación. Esto hace que no podamos considerar otra cosa que su sonoridad. Prestaremos atención a lo extraño, a la emocionalidad, nuestras diferencias, al timbre de la voz, a los sonidos que esta genera, qué hace ese aparato fonador para generar esos sonidos, casi como un instrumento musical.

// agregar aspecto sensible

# Cómo comunico mi hacer

Así como noto que hay idiomas entre idiomas, observo la distancia entre las *matemágicas* complejas y los resultados sonoros, las matrices y métodos de clases de librerías y los espectrogramas generados. ¿Dónde me encuentro? ¿es acaso la intersección perfecta entre las ganas de hacer ruido y la manía del niñx que quiere desarmar y armar de nuevo un aparato a su manera? aquí me encuentro como artista investigador en la intersección del arte y la ciencia, de la búsqueda estética y la técnica.

# Enseñarle a hablar a una computadora

Trabajar con -para mí- nuevas tecnologías, en este caso de inteligencia artificial, desarrollar y entrenar modelos de redes neuronales, requiere de un entendimiento total, holístico, acerca de cómo funciona la arquitectura y todos los componentes del sistema. En otros casos, para otro tipo de desarrollos, he notado que no hace falta tener el conocimiento completo acerca de las tecnologías en cuestión. Por ejemplo, a la hora de realizar un frontend en Javascript, uno no necesita entender qué sucede en la memoria de la computadora, o qué partes corren dentro de la GPU o del CPU, simplemente le pedimos un botón que al ser presionado dará resultado a determinado comportamiento o acción. Esta abstracción de alto nivel permite concentrarse en una idea más general, más elevada, más afín a la creación y a la experiencia.

Mi trabajo pretende proponer una experiencia, es decir una situación en la que se interpelen los sentidos y así poder compartir *sensaciones*. Verme involucrado en tareas de bajo nivel para resolver un problema matemático generó que me sienta alejado de la situación que deseo presentar. El trabajo con estos modelos no siempre resulta en un *error* de sintaxis que detiene el programa sino con resultados válidos pero *semánticamente incorrectos.* Esto me trae a la cuestión del sentido como metáfora del hacer. 

# Devenires auxiliares

## gla 1.0b –Mención CCEBA–

[https://drive.google.com/file/d/12xkWZWs5wQlyENe7-0yCX_c96YhYxh2e/view?usp=sharing](https://drive.google.com/file/d/12xkWZWs5wQlyENe7-0yCX_c96YhYxh2e/view?usp=sharing)

## Qué dice? —TTS—

pruebas tacotron uberduck 

## Subtitle Generator

[https://codepen.io/jaunmatrin/pen/gOqgmgx](https://codepen.io/jaunmatrin/pen/gOqgmgx)

## Salida

No concluye, sino genera devenires.

---

# Glosario

A continuación, algunas definiciones específicas de las cuestiones técnicas abordadas en este trabajo.

## Asémico

Sin sentido, que no provee contenido dentro del mensaje. Se utiliza especialmente al referirse al uso de canales de comunicación gráficos o sonoros –verbales– que expresan ideas sino que se centran en el aspecto formal del mismo.

## TTS

Sistemas de conversión de texto a habla, por sus siglas en ingles: Text-to-Speech.

- capaz no hace falta porque está explicado
    
    ## Modelo
    
    Modelo de red neuronal creado con tecnologías de inteligencia artificial, machine learning y deep learning. Su funcionamiento es similar a las redes neuronales biológicas, pero expresadas en forma de un modelo matemático que contiene nodos (que contienen un valor y aristas (con peso).
    
    $$
    c_i = \sum_{j=1}^{T_x} \alpha_{ij}h_j
    \alpha_{ij} = \frac{\exp(e_{ij})}{\sum_{k=1}^{T_x} \exp(e_{ik})}
    e_{ij} = a(s_{i-1}, h_j)
    $$
    
    ## Dataset
    
    Conjunto de información recopilada y ordenada de manera tal que pueda ser alimentada a un modelo de inteligencia artificial y este aprenda a partir de la misma para luego generalizar la información y *comprenderla*. Así poder inferir nuevos resultados.
    
    ## Espacio Latente
    

## Fine-Tuning

Es el proceso de ajustar un modelo de inteligencia artificial pre-entrenado en un conjunto de datos específico y relacionado para adaptarlo a una tarea específica, generalmente mediante el ajuste de los pesos de las capas del modelo.

## Inferencia

Se refiere al proceso de utilizar un modelo de inteligencia artificial entrenado para realizar predicciones o generar resultados a partir de nuevos datos de entrada, una vez que el modelo ha sido entrenado y ajustado.

## Transientes

Son los sonidos que ocurren brevemente durante una señal de audio, como los clics, los golpes o los ruidos repentinos, que tienen una duración corta en comparación con la señal total.

## OSC

Es un protocolo de comunicación para la transmisión de mensajes de control entre dispositivos y software de audio en tiempo real, utilizado para la comunicación y el control en aplicaciones musicales, de arte sonoro y multimedia. Apareció como una alternativa moderna con mayor flexibilidad y resolución que el protocolo MIDI.

## API

Es un conjunto de reglas y protocolos que permiten que diferentes piezas de software se comuniquen entre sí, facilitando la interacción y el intercambio de datos entre aplicaciones y sistemas informáticos de manera estandarizada y programática.

# Bibliografía

traer de zotero

Akten, M. (n.d.). *Grannma MagNet – Granular Neural Music & Audio with Magnitude Networks (2018) – Memo Akten | Mehmet Selim Akten | The Mega Super Awesome Visuals Company*. Retrieved 19 June 2023, from https://www.memo.tv/works/grannma-magnet/

*Archivo P.A.I.S.: Cuatro hipótesis de trabajo – nicolás varchausky*. (n.d.). Retrieved 21 June 2023, from https://www.varchausky.com.ar/archivo-pais/archivo-p-a-i-s-cuatro-hipotesis-de-trabajo/

Bengio, Y., Courville, A., & Vincent, P. (2013). Representation Learning: A Review and New Perspectives. *IEEE Transactions on Pattern Analysis and Machine Intelligence*, *35*(8), 1798–1828. https://doi.org/10.1109/TPAMI.2013.50

Chomsky, N. (2002). *Syntactic Structures*. Mouton de Gruyter. https://books.google.com.ar/books?id=a6a\_b-CXYAkC

*Dadabots*. (n.d.). Retrieved 21 June 2023, from https://dadabots.com/science.php

Deleuze, G., Guattari, F., & Vázquez, J. (2020). *Mil mesetas: Capitalismo y esquizofrenia*. Editorial Pre-Textos. https://books.google.com.ar/books?id=k1d9zgEACAAJ

Goodfellow, I., Pouget-Abadie, J., Mirza, M., Xu, B., Warde-Farley, D., Ozair, S., Courville, A., & Bengio, Y. (2014). Generative Adversarial Nets. In Z. Ghahramani, M. Welling, C. Cortes, N. Lawrence, & K. Q. Weinberger (Eds.), *Advances in Neural Information Processing Systems* (Vol. 27). Curran Associates, Inc. https://proceedings.neurips.cc/paper_files/paper/2014/file/5ca3e9b122f61f8f06494c97b1afccf3-Paper.pdf

Kingma, D. P., & Welling, M. (2022). *Auto-Encoding Variational Bayes*.

Ladefoged, P., & Maddieson, I. (1996). *The Sounds of the World’s Languages*. Wiley. https://books.google.com.ar/books?id=h1byJz\_rWUcC

Oord, A. van den, Dieleman, S., Zen, H., Simonyan, K., Vinyals, O., Graves, A., Kalchbrenner, N., Senior, A. W., & Kavukcuoglu, K. (2016). WaveNet: A Generative Model for Raw Audio. *CoRR*, *abs/1609.03499*. http://arxiv.org/abs/1609.03499

Papamakarios, G., Nalisnick, E., Rezende, D. J., Mohamed, S., & Lakshminarayanan, B. (2021). *Normalizing Flows for Probabilistic Modeling and Inference*.

Rombach, R., Blattmann, A., Lorenz, D., Esser, P., & Ommer, B. (2022). *High-Resolution Image Synthesis with Latent Diffusion Models*.

Varchausky, N. (n.d.). *Archivo P.A.I.S.* Retrieved 21 June 2023, from http://archivopais.org/

Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, Ł., & Polosukhin, I. (2017). Attention is All you Need. In I. Guyon, U. V. Luxburg, S. Bengio, H. Wallach, R. Fergus, S. Vishwanathan, & R. Garnett (Eds.), *Advances in Neural Information Processing Systems* (Vol. 30). Curran Associates, Inc. https://proceedings.neurips.cc/paper_files/paper/2017/file/3f5ee243547dee91fbd053c1c4a845aa-Paper.pdf

Wekinator. (n.d.). *Wekinator | Software for real-time, interactive machine learning*. Retrieved 21 June 2023, from http://www.wekinator.org/

Elliott, R., & Bull, M. (2017). *The Sound of Nonsense*. Bloomsbury Academic. [https://books.google.com.ar/books?id=4rU7DwAAQBAJ](https://books.google.com.ar/books?id=4rU7DwAAQBAJ)