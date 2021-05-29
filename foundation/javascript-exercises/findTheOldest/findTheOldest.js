let findTheOldest = function(array) {
   
return array.reduce((oldest,currentPerson) => {
    const oldestAge = learnAge(oldestPerson.yearOfBirth,oldest.yearOfBirth)
    const currentAge = learnAge(currentPerson.yearOfBirth,currentPerson.yearOfBirth)
    return oldestAge < currentAge ? currentPerson : oldest
})

}

const learnAge =(birth, death) => {
    if(!death){
        death= new Date().getFullYear();
    }
    return death-birth;
}

module.exports = findTheOldest
