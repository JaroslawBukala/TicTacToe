// I have used information from the next class https://www.dropbox.com/home/JB22110005667/Web%20Development%20Bootcamp/T21?preview=WD+T21+-+Introduction+to+OOP+II+-+Classes.pdf

//create a class Shoes
class Shoes{
    //create storage  variable for a database
    static shoesDatabase = []
    //create constructor
    constructor(name, productCode, quantity, valuePerItem){
        this.name = name
        this.productCode = productCode
        this.quantity = quantity
        this.valuePerItem = valuePerItem
        //information used from website https://stackoverflow.com/questions/52377344/javascript-array-of-instances-of-a-class
        //Push the class instances into the shoesDatabase
        Shoes.shoesDatabase.push(this)
        }

            //Create a class method to allow a user to search for a record using the shoe name as the key
            shoesFindSpecific(name){
              let productCode = 0
              let quantity = 0
              let valuePerItem = 0
              for(let i = 0; i< Shoes.shoesDatabase.length; i++){
                if(Shoes.shoesDatabase[i].name == name){
                  productCode = Shoes.shoesDatabase[i].productCode
                  quantity = Shoes.shoesDatabase[i].quantity
                  valuePerItem = Shoes.shoesDatabase[i].valuePerItem
                }
              }
              alert(`You have located ${name}, product code is ${productCode}, quantity is ${quantity}, value per item is ${valuePerItem}.`)
            }


            // I have used information from another lesson https://www.dropbox.com/home/JB22110005667/Web%20Development%20Bootcamp/T21/Support%20files?preview=email.js
            //Create a class method to allow a user to update the array
            addUpdate(userChoice){
            //  let userChoice = ""
              while(userChoice != "5"){
                userChoice = prompt("What would you like to do:\n 1. Change the name of the shoe\n 2. Change product code\n3. Change quantity\n4. Change value per item\n5. quit?");
                if(userChoice == "1"){
                  this.name = prompt('What is the new name?')
                  break
                }else if(userChoice == "2"){
                  this.productCode = Number.parseFloat(prompt('What is the updated product code?'))
                  break
                }else if(userChoice == "3"){
                  this.quantity = Number.parseFloat(prompt('What is the updated quantity?'))
                  break
                }else if(userChoice == "4"){
                  this.valuePerItem = Number.parseFloat(prompt('What is the updated value per item?'))
                  break
                }else if(userChoice == "5"){
                  alert("Goodbye")
                }else{
                  alert("Oops - incorrect input")
                  
                }
              }
            }
            //Create a class method to allow a user to search for the lowest value per item amongst the five shoe types
            shoesMinValue(){
            let shoesValue = []
            let min = 0
            let shoesMinValueName = ''
                for(let i = 0; i< Shoes.shoesDatabase.length; i++){
                  shoesValue.push(Shoes.shoesDatabase[i].valuePerItem)

                  }
                     for(let i = 0; i< Shoes.shoesDatabase.length; i++){
                      min = Math.min(...shoesValue)
                      if(Shoes.shoesDatabase[i].valuePerItem == min){
                        shoesMinValueName = Shoes.shoesDatabase[i].name
                        
                      }
                    }
                    alert(`The lowest value per item belongs to ${shoesMinValueName} and the value is ${min}.`)
                }
       
            //Create a class method to allow a user to search for the biggest value per item amongst the five shoe types
            shoesMaxValue(){
            let shoesMaxValue = []
            let max = 0
            let shoesMaxValueName = ''
              for(let i = 0; i< Shoes.shoesDatabase.length; i++){
                shoesMaxValue.push(Shoes.shoesDatabase[i].valuePerItem)
                }
                   for(let i = 0; i< Shoes.shoesDatabase.length; i++){
                    max = Math.max(...shoesMaxValue)
                    if(Shoes.shoesDatabase[i].valuePerItem == max){
                      shoesMaxValueName = Shoes.shoesDatabase[i].name
                      
                    }
                  }
                  alert(`The highest value per item belongs to ${shoesMaxValueName} and the value is ${max}.`)
              }

            //Sort the array in an ascending, alphabetical order
            shoesOrderAscending(){
                Shoes.shoesDatabase.sort()
                console.log(Shoes.shoesDatabase)
              }
}

//create five instances of the shoe Class
athleticShoes = new Shoes('Athletic Shoes', 1, 8, 50)
balletFlats = new Shoes('Ballet Flats', 2, 7, 30)
boatShoes = new Shoes('Boat Shoes', 3, 6, 100) 
brogueShoes = new Shoes('Brogue Shoes', 4, 5, 10)
clogs = new Shoes('clogs', 5, 4, 60)


//create logic for the user deciding which instance of the Class to updates
let userChoice = "";
while(userChoice != "6"){
	userChoice = prompt(`Which shoes would you like to update?:\n 1. ${athleticShoes.name}\n 2. ${balletFlats.name}\n3. ${boatShoes.name}\n4. ${brogueShoes.name}\n5. ${clogs.name}\n6. quit?`);
	if(userChoice == "1"){
		athleticShoes.addUpdate(athleticShoes.name)
	}else if(userChoice == "2"){
		balletFlats.addUpdate(balletFlats.name)
	}else if(userChoice == "3"){
		boatShoes.addUpdate(boatShoes.name)
	}else if(userChoice == "4"){
		brogueShoes.addUpdate(brogueShoes.name)
	}else if(userChoice == "5"){
		clogs.addUpdate(clogs.name)
	}else if(userChoice == "6"){
		alert("Goodbye");
	}else{
		alert("Oops - incorrect input");
		
	}
}

//get the minimum value across five instances
boatShoes.shoesMinValue()
//get the maximum value across five instances
balletFlats.shoesMaxValue()
//call a method to get the specific record by its' name
boatShoes.shoesFindSpecific(prompt('Enter the name of the shoes to find all details about them'))
//call method to order the array of objects in an ascending alpabetical order
clogs.shoesOrderAscending()