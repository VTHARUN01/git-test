const content = document.querySelector("#container")
const input = document.querySelector('input')
const reset = document.querySelector('#reset')
const slsSort = document.querySelector('#bubbleSort')
const array = []

input.addEventListener('input', () => {
    for (let i = 0; i < array.length; i++) {
        let spa = document.querySelector('span')
        spa.remove()
    }
})

input.addEventListener('click', () => {
    for (let i = 0; i < input.value; i++) {
        let span = document.createElement('span')
        span.id = `span${i}`;
        array[i] = random()
        span.style.height = `${2 * array[i]}px`
        container.append(span)
        span.style.width = `${100 / input.value}%`

    }
})
slsSort.addEventListener('click', () => {

    for (let i = 0; i < array.length; i++) {
        let a = i;
        for (let j = i; j < array.length; j++) {
            if (array[a] < array[j]) {
                a = j;
            }
        }
        let spani = document.querySelector(`#span${i}`)
        let spana = document.querySelector(`#span${a}`)
        let temp = array[a];
        array[a] = array[i];
        array[i] = temp;
        temp = spana.style.height;
        spana.style.height = spani.style.height;
        spani.style.height = temp;
    }
})
function animation() {
}
function random() {
    return Math.floor(Math.random() * 50) + 1
}
console.log('HI')