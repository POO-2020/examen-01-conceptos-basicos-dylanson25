let cont = 0
export default class Reservacion{
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
    addHuesped(H1){
      this.huespedes.push(H1)
      
      return `RESERVADOS`
    }
    getNumHuespedes(){
      return `los huespedes registrados para la reservación son ${this.huespedes.length}`  
    }
    print(){
        cont = cont = this.huespedes.lenght
        console.log(`- Habitacion: ${this.numH} \n- ${this.getFechaFormatoCorto()}\n- ${this.noches} Noches reservadas`)
        this.huespedes.forEach((hues, i) => {
        console.log(`- ${this.huespedes[i].getDescricionH()}`)
        })
        return'-------------------------------------'
        

    }

}
