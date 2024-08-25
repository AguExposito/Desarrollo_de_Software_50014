# Desarrollo_de_Software_50014
Para la materia Desarrollo de Software UTN FRM

TP1 HTML:

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>tp1FrontEnd_AgustinExposito50014</title>
</head>
<body>
    <h1>Encabezado Principal</h1>
    <p>La estructura es la siguiente:</p>
    <nav>
        <a href="#Estructura">Ir a Estructura</a>
        <a href="#Encabezado">Ir a Encabezado</a>
        <a href="#Contenido">Ir a Contenido</a>
        <a href="#Enlaces">Ir a Enlaces</a>
        <a href="#Multimedia">Ir a Multimedia</a>
        <a href="#Tablas">Ir a Tablas</a>
        <a href="#Formularios">Ir a Formulario</a>        
    </nav>
    <p>2024 Trabajo Práctico de HTML</p>
    <h4>tp1FrontEnd_AgustinExposito50014</h4>
    <ol style="font-size: 18pt; font-weight: bold;">
        <li id="Estructura">
            <h3>Estructura Básica del Documento HTML</h3>
            <p  style="font-weight:normal; margin-left:-20px;">Este documento HTML tiene una estructura basica que incluye la declaracion de DOCTYPE, etiquetas de metadatos y un título</p>
        </li><br>
        <li id="Encabezado">
            <h3>Encabezados y Propiedades del Texto</h3>
            <h4 style="margin-left:-20px;"><b>Esto es un texto en negrita</b></h4>
            <h4 style="margin-left:-20px;font-weight: normal;"><i>Esto es un texto en cursiva</i></h4>
            <h4 style="margin-left:-20px;font-weight: normal;"><u>Esto es un texto subrayado</u></h4>
            <br>
            <p><i><u> Adicionalmente se muestran todos los encabezados: </u></i></p><!--Adicionalmente muestro todos los encabezados-->
            <h1>Encabezado h1</h1>
            <h2>Encabezado h2</h2>
            <h3>Encabezado h3</h3>
            <h4>Encabezado h4</h4>
            <h5>Encabezado h5</h5>
            <h6>Encabezado h6</h6>
        </li><br>
        <li id="Contenido">
            <h3>Divisiones y Agrupación de Contenido</h3>
            <div>
                <h4>Seción 1</h4>
                <p style="font-weight:normal;">Contenido de la primera sección agrupada en un div.</p>
                <h4>Seción 2</h4>
                <p style="font-weight:normal;">Contenido de la segunda sección agrupada en un div.</p>
            </div>
        </li><br>
        <li id="Enlaces">
            <h3>Enlaces y Listas</h3>
            <p style="font-weight:normal;">Visita nuestro <a href="https://github.com/AguExposito/Desarrollo_de_Software_50014">sitio web</a> para mas información.</p>
            <div style="font-weight:normal;">
                <p>Enlaces internos:</p>
                <ul >
                    <li><a href="#Estructura">Ir a Estructura</a></li>
                    <li><a href="#Multimedia">Ir a Multimedia</a></li>
                    <li><a href="#Formularios">Ir a Formulario</a></li>
                </ul>
                <p>Lista desordenada:</p>
                <ul >
                    <li><p>Primer ítem de una lista desordenada</p></li>
                    <li style="margin-top: -20px;"><p>Segundo ítem de una lista desordenada</p></li>
                </ul>
                <p>Lista ordenada:</p>
                <ol >
                    <li><p>Primer ítem de una lista desordenada</p></li>
                    <li style="margin-top: -20px;"><p>Segundo ítem de una lista desordenada</p></li>
                </ol>
            </div>
        </li><br>
        <li id="Multimedia">
            <h3>Elementos Multimedia</h3>
            <img src="https://media.tenor.com/pPKOYQpTO8AAAAAM/monkey-developer.gif" alt="ComputerMonkey">
            <video controls src="How To Trick A Monkey.mp4.mp4"></video>
            <audio controls>
                <source src="How To Trick A Monkey.mp4.mp4">
            </audio>
        </li><br>
        <li id="Tablas">
            <h3>Tablas</h3>
            <div style="font-weight:normal;">
                <table border="1">
                    <thead>
                        <tr>
                            <th>Columna 1</th>
                            <th>Columna 2</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Dato1</td>
                            <td>Dato3</td>
                        </tr>
                        <tr>
                            <td>Dato2</td>
                            <td>Dato4</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </li><br>
        <li id="Formularios">
            <h3>Formularios</h3>
            <form action="#" method="post">
                <div>
                    <label for="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required>
                    <label for="email">Correo Electrónico:</label>
                    <input type="email" id="email" name="email" required>
                    <label for="mensaje">Mensaje:</label>
                    <textarea id="mensaje" name="mensaje" required></textarea>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </li><br>
    </ol>
</body>


<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="tp2CSS.css">
    <title>tp2CSS_AgustinExposito50014</title>
</head>
<body>
    <div class="titulo">
        <h1>Trabajo Práctico de CSS</h1>
        <blockquote>Agustin Exposito Legajo:50014</blockquote>
    </div>
    <div class="SimpleDiv">       
        <div>
            <h3>Propiedades de Texto en CSS</h3>
            <hr>
            <u><p>Este Párrafo Muestra La Aplicación De Diferentes Propiedades De Texto En CSS Como Alineación, Transformación De Texto Y Decoraciones</p></u>
            <div style="background-color: rgb(230, 230, 230);">
                <blockquote>El buen diseño es obvio. El gran diseño es transparente." - Joe Sparano</blockquote>
            </div>
        </div> 
    </div>
    <div class="SimpleDiv">
        <div>
            <h3>Propiedades de Cajas en CSS</h3>
            <hr>
            <div class="box">
                <p>Esta es una caja con propiedades de padding, margin, border y box-shadow, lo que le da un efecto tridimensional.</p>
            </div>
            <div class="box" style="background-color: #f4ebc9; border-color: #6c664c; border-width: 3.5px;">
                <p>Caja destacada con un borde más grueso y un fondo diferente.</p>
            </div>
        </div> 
    </div>
    <div class="SimpleDiv">
        <div style="padding-bottom: 25px;">
            <h3>Posición Relativa y Absoluta en CSS</h3>
            <hr>
            <div class="relativo" >
                <p>Esta caja tiene posición relativa, lo que significa que se puede ajustar en relación a su posición original.</p>
                <div class="absoluto" >
                    <p>Esta caja tiene posición absoluta dentro de la relativa, y se posiciona respecto a la caja padre.</p>
                </div>
            </div>
        </div> 
    </div>
    <div class="SimpleDiv">
        <div>
            <h3>Principios de Grid en CSS</h3>
            <hr>
            <div class="grid-container">
                <div class="grid-item">
                    <p>Elemento 1</p>
                </div>
                <div class="grid-item">
                    <p>Elemento 2</p>
                </div>
                <div class="grid-item">
                    <p>Elemento 3</p>
                </div>
                <div class="grid-item">
                    <p>Elemento 4</p>
                </div>
            </div>
        </div> 
    </div>
    <div class="SimpleDiv">       
        <div> 
            <h3>Principios de Animaciones en CSS</h3>
            <hr>
            <div class="Animacion">
            </div>
            <div class="Mover">
            </div> 
        </div>
    </div>
</body>
