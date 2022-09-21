// code your solution here
function saturdayFun(target = "roller-skate") {
    return (`This Saturday, I want to ${target}!`);
}

function mondayWork(place = "go to the office") {
    return (`This Monday, I will ${place}.`);
}

// function wrapAdjective(flair ='*', adj){
//     let wrappedSentence = function (adj = 'a hard worker'){
//         return `You are ${flair}${adj}${flair}!`
//     }
//     return wrappedSentence;
//     }

// let wrapAdjective = function(style="*") {
//     return function(adjective="special") {
//       return `You are ${style}${adjective}${style}!`
//     }
//   }

function wrapAdjective(flair = "*"){
    return function (wrappedSentence = "a hard worker"){
        return `You are ${flair}${wrappedSentence}${flair}!`;
    };
}
