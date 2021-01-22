'use strict';

const {
  create,
  list,
  get
} = require('./crud');



module.exports.create = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  try {
    var data = JSON.parse(event.body);
  } catch (e) {
    return {
      statusCode: 403,
      body: JSON.stringify({
        detalle: `Formato de entrada inválido`,
      })
    }
  }


  try {
    const result = await create(data);
    return{
      body: JSON.stringify({
        detalle: `Vehículo creado correctamente: ${result.id}`,
      })
    };

  } catch (e) {
    return{
      statusCode: 403,
      body: JSON.stringify({
        detalle: `Error al crear vehículo: ${e}`,
      })
    };
  }

};


module.exports.list = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  try {
    const result = await list();
    
    return{
      body: JSON.stringify({
        cantidad: result.Items.length,
        //TODO:IMPLEMENTAR ANTERIOR
        //TODO:IMPLEMENTAR SIGUIENTE
        resultados: result.Items,
      })
    };
  } catch (e) {
    return{
      statusCode: 500,
      body: JSON.stringify({
        detalle: `Error al listar vehículos: ${e}`,
      })
    };
  }
}

module.exports.get = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  try {
    const {id} = event.pathParameters;
    const result = await get(id);

    if(result && result.Item){
      return{
        body: JSON.stringify(
          result.Item
        )
      };
    }else{
      return{
        statusCode: 404,
        body: JSON.stringify({
          detalle: `No encontrado`,
        })
      };
    }
    
  } catch (e) {
    return{
      statusCode: 500,
      body: JSON.stringify({
        detalle: `Error al otener vehículo: ${e}`,
      })
    };
  }

}