var timeUpdate = setInterval(clock, 1000)

function clock() {

    let data = new Date
    let hours = document.getElementById('hours')
    let minutes = document.getElementById('minutes')
    let seconds = document.getElementById('seconds')

    let h = data.getHours()
    let m = data.getMinutes()
    let s = data.getSeconds()

    if (h < 10) {
        h = '0' + h
    }
    if (m < 10) {
        m = '0' + m
    }

    if (s < 10) {
        s = '0' + s
    }

    hours.innerHTML = h
    minutes.innerHTML = m
    seconds.innerHTML = s
}
