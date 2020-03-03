import Huesped from "./Huesped.js"
class Reservacion{
     /**
      * 
      * @param {numer} numH numero de habitación 
      * @param {number} noches numero de noches que se va a quedar
      */
    constructor(numH, noches){
        this.numH = numH
        this.fechalle = new Date()
        this.noches = noches
        this.huespedes = new Array()
    }
    getFechaFormatoCorto(){
        return`Fecha de llegada: ${this.fechalle.getDate()}/${this.fechalle.getMonth()}/${this.fechalle.getFullYear()}`
    }
    addHuesped(){
      let H1 = new Huesped('Juanito Perez Gonzales', 'masculino')
      this.huespedes.push(H1)
      let H2 = new Huesped('Juanita Piña Gallardo', 'masculino')
      this.huespedes.push(H2)
      
      return `RESERVADOS`
    }
    getNumHuespedes(){
      return `los huespedes registrados para la reservación son ${this.huespedes.length}`  
    }
    print(){
        console.log(`- Habitacion: ${this.numH} \n- ${this.getFechaFormatoCorto()}\n- ${this.noches} Noches reservadas`)
        this.huespedes.forEach((hues, i) => {
        console.log(`- ${this.huespedes[i].getDescricionH()}`)
        })

    }

}
/*let app = new Reservacion(4,12)
console.log(app.getFechaFormatoCorto())
console.log(app.addHuesped())
console.log(app.getNumHuespedes())
console.log(app.print())
*/