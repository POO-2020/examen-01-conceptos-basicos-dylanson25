import Huesped from "./Huesped.js"
import Reservacion from "./Reservacion.js"
import Hotel from "./Hotel.js"
export default class Main {
    constructor() { }

    testHuesped() {
        let huesped = new Huesped('Juanito perez Gonzales', 'Masculino')
        console.log(huesped. getDescricionH())
    }

    testReservacion() {
        let reservacion = new Reservacion(12, 3)
        let huesped1 = new Huesped('Juanito peres gonzales', 'Masculino')
        let huesped2 = new Huesped('Juanita piña gomez', 'femenina')
        console.log(reservacion.getFechaFormatoCorto())
        reservacion.addHuesped(huesped1)
        reservacion.addHuesped(huesped2)
        console.log(reservacion.getNumHuespedes())
        console.log(reservacion.print())
    }

    testHotel() {

        let reservacion = new Reservacion(14, 3)
        reservacion.addHuesped(new Huesped('Juan Pérez Gomez', 'Masculino'))

        let reservacion2 = new Reservacion(15,  3)
        reservacion2.addHuesped(new Huesped('Juana de arco', 'Femenina'))
        reservacion2.addHuesped(new Huesped('los tigres del norte', 'Masculinos'))
        
        let reservas = new Hotel('hotel')
        reservas.getAgregarReservacion(reservacion)
        reservas.getAgregarReservacion(reservacion2)
        console.log(reservas.print())
    }
}

let app = new Main()
app.testHuesped()
app.testReservacion()
app.testHotel()

