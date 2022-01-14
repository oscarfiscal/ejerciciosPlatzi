var myCar = {
    marca: "Ford",
    modelo: "Mustang",
    anio: "2015",
    color: "Rojo",
    motor: "V8",
    detail:function(){
        console.log("Marca: " + this.marca + " Modelo: " + this.modelo + " Año: " + this.anio + " Color: " + this.color + " Motor: " + this.motor);
    }
} 

function car(marca, modelo, anio, color, motor){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.color = color;
    this.motor = motor;
   
}
 var newCar = new car("Ford", "Mustang", "2015", "Rojo", "V8");
 var newCar2 = new car("tesla", "Mustang", "2035", "Azul", "V19");

 /////////////////// reto agregar nuevos objetos a funcion constructora////////////////////////////
 var marks= ['tesla', 'Mazda', 'Ford', 'Nissan', 'Honda', 'Toyota', 'Hyundai', 'Mitsubishi', 'Kia', 'Mazda']
var cars = []

    
    function Car(mark, model, year) {
        this.mark = mark
        this.model = model
        this.year = year
    }
    
    for (var i = 0; i < 30; i++)
    cars.push(new Car(marks[Math.floor(Math.random() * marks.length)], `Model ${i % 10}`, 1999 + i % 10))
    
    console.log(cars)   
