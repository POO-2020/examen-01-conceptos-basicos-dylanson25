import Huesped from "./Huesped.js"
import Reservacion from "./Reservacion.js"
export default class Hotel {
    constructor() {
        this.nombre = 'BUENA VENTURA'
        this.reservaciones = new Array()
    }
    getNumHuespedes() {
        return ``
    }
    getAgregarReservacion(reservacion) {
        this.reservaciones.push(reservacion)
    }
    listarReservacion() {
        this.reservaciones.forEach((res, i) => {
            console.log(`- ${this.reservaciones[i].print()}`)
        })
    }
    print() {
        return this.listarReservacion()
    }

}
