// Условия

var age = prompt("Пожалуйста введите свой возраст")

if (age > 0 && age <= 18) {
    console.log("Вы еще молоды, Вам нужно учиться")
} else if (age > 18 && age <= 50) {
    console.log('Вам нужно работать')
} else if (age > 50 && age <= 59) {
    console.log('Вам скоро на пенсию')
} else if (age > 59 && age <= 150) {
    console.log('Вы пенсионер')
} else {
    alert('Что то пошло не так')
}