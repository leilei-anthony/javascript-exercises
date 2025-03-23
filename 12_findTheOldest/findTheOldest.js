function getAge(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

const findTheOldest = function(arr) {
    return arr.reduce((oldestPerson, currentPerson) => {
        const oldestAge = getAge(
            oldestPerson.yearOfBirth, 
            oldestPerson.yearOfDeath
        );
        const currentAge = getAge(
            currentPerson.yearOfBirth,
            currentPerson.yearOfDeath
        );

        return oldestAge < currentAge ? currentPerson : oldestPerson;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
