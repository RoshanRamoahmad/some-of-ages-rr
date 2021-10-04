// stared with 0
let sum_of_agrs = 0
// ask user how many people
let number_of_people = game.askForNumber("how many people in the class?")
for (let index = 0; index < number_of_people; index++) {
    // count all old and add to tattle and repeat  
    sum_of_agrs += game.askForNumber("how old you")
}
// last answer. 
game.splash("The sum of all the ages is", sum_of_agrs)
