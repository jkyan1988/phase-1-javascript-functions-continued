function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`

}

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(star = '*') {
    return function (part1 = 'a hard worker') {
    return `You are ${star}${part1}${star}!`
}
}
