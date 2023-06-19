let hour = document.querySelector('.wraper .display .hour')
let min = document.querySelector('.wraper .display .min')
let second = document.querySelector('.wraper .display .second')
let resetBtn = document.querySelector('.wraper .operations .reset')
let startBtn = document.querySelector('.wraper .operations .start')
let stopBtn = document.querySelector('.wraper .operations .stop')
let s = 0, m = 0, h = 0
let timer = null

let setTime = () => {
    hour.innerHTML = `${h.toString().padStart(2, '0')} : `
    min.innerHTML = `${m.toString().padStart(2, '0')} : `
    second.innerHTML = `${s.toString().padStart(2, '0')}`
}

resetBtn.addEventListener('click', () => {
    clearInterval(timer)
    hour.innerHTML = `00 : `
    min.innerHTML = `00 : `
    second.innerHTML = `00`
    s = 0
    m = 0
    h = 0
})

stopBtn.addEventListener('click', () => {
    clearInterval(timer)
    setTime()
})

let stopwatch = () => {
    s++
    if (s == 60) {
        s = 0
        m++
        if (m == 60) {
            m = 0
            h++
        }
    }
    setTime()
}

startBtn.addEventListener('click', () => {
    if (timer !== null) {
        clearTimeout(timer)
    }
    timer = setInterval(stopwatch, 1000)
})