export default class Huesped{
    /**
     * 
     * @param {string} nombre nombre de la persona que se va a registar 
     * @param {string} genero genero de la persona que se registrara 
     */
    constructor(nombre, genero){
        this.nombre = nombre
        this.genero = genero
    }
    getDescricionH(){
        return`${this.nombre} (${this.genero})`
    }
}