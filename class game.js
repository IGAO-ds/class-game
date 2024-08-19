class Player{
    constructor(name, age, type){
       this.name = name
       this.age = age
       this.type = type 
          
       
    }
     attack(){
       let attack1
       switch(this.type){
        case "Soldier":
            attack1 = "fuzil"
        break

        case "Police":
            attack1 = "revolver"
        break

        case "outlaw":
            attack1 = "faca"
        break

        case "shooter":
            attack1 = "sniper"
        break
       }
       console.log(`THE ${this.type} ATTACKED USING ${attack1}`)

     } 

    


}

let playerGame = new Player("Igor", 20, "Soldier")

playerGame.attack()