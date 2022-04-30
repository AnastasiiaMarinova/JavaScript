function checkage (age_1) {
    let age_2 = 18
    let age_3 = 61
    if (age_1 < age_2) { 
      console.log("You dont have access cause your age is", age_1 , "its less than" , age_2)
    }
      else if (age_1 >= age_2 && age_1 < age_3) { 
        console.log("welcome")
      }
    
    else if  (age_1 > age_3) {
      console.log("Keep calm and look Culture channel")
    } 
    
    else { 
      console.log("Technical work")
    }}

checkage(17)
checkage(18)
checkage(61)