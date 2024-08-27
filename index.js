const log4js = require('log4js');
const logger = log4js.getLogger("app");
//Importamos libreria y sacamos objeto logger
logger.level = "info";

logger.debug("Iniciando la app en modo de pruebas.");
logger.info("Usuario ha iniciado sesion");
logger.warn("Falta el archivo config de la app");
logger.error("No se pudo ejecutar la accion");
logger.fatal("No se pudo iniciar la app.")

function sumar(x, y){
    return x+y;
}
// Todo lo que quiero exportar a cualquier lado de la aplicacion para eso uso exports
// Require para importar

module.exports = sumar;