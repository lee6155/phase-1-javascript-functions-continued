
function saturdayFun (activity= 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function (activity= 'go to the office') {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective (visual = "*") {
    return function (adjective = "special") {
        return `You are ${visual}${adjective}${visual}!`
    }
}