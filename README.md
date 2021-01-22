# API VEHÍCULOS

Ejemplo de implementación utilizando AWS, Lambdas, Serverless, Api Gateway y DynamoDB. 

## Instalación

***Requiere configuración de credenciales AWS.**

Instalar paquetes npm.

```bash
npm install
```

Despliegue

```bash
sls deploy
```

## Uso

***Se ha modificado el valor ID, de numérico a cadena.**

###### Listar

```bash
#GET
https://hqb8188jzi.execute-api.us-east-2.amazonaws.com/dev/
```

###### Buscar por ID

```bash
#GET
https://hqb8188jzi.execute-api.us-east-2.amazonaws.com/dev/mQPsDnQr6QAr23rutSCtF8
```

###### Crear 

```bash
#POST
https://hqb8188jzi.execute-api.us-east-2.amazonaws.com/dev/
```

```javascript
//BODY EJEMPLO
{
    "capacidad_carga": "50000",
    "consumibles": "2 months",
    "costo_en_creditos": "150000",
    "tripulacion": "46",
    "longitud": "36.8",
    "fabricante": "Corellia Mining Corporation",
    "velocidad_maxima_atmosfera": "30",
    "modelo": "Digger Crawler",
    "nombre": "Sand Crawler",
    "pasajeros": "30",
    "pilotos": [],
    "peliculas": [
        "https://swapi.py4e.com/api/films/1/"
    ],
    "url": "https://swapi.py4e.com/api/vehicles/4/",
    "clase_vehiculo": "wheeled"
}
```



## Autor
Edgar Medina




