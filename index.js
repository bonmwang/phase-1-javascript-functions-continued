function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = '*') {
    return function(adjective = 'special') {
        return `You are ${flair}${adjective}${flair}!`;
    };
}

// example 1: saturdayFun
console.log(saturdayFun()); // This Saturday, I want to roller-skate!
console.log(saturdayFun('bake a cake')); // "This saturday I want to bake!""

// example 2: mondayWork
console.log(mondayWork()); // "This Monday, I will go to the office"
console.log(mondayWork('work from home')); // "This Monda, I will work from home."

// example 3: wrapAdjective
const encouragingPromptFunction = wrapAdjective('!!!');
console.log(encouragingPromptFunction('amazing')); // "You are !!!amaizing!!!""
console.log(encouragingPromptFunction()); // "You are !!!special!!!"
console.log(wrapAdjective('%')('a dedicated programmer')); // "You are a %dedicated programmer%"