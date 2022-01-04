// timer
document.addEventListener('DOMContentLoaded', () => {
    const deadline = new Date("Jan 04, 2022 23:00:00").getTime();

    let timerId = null;

    function countdownTimer() {
        const diff = deadline - new Date();
        if (diff <= 0) {
            clearInterval(timerId);
        }
        const hours = diff > 0 ? Math.floor(diff / 1000 / 60/ 60) % 24 : 0;
        const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
        const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
        $hours.textContent = hours < 10 ? '0' + hours : hours;
        $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
        $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    }

    const $hours = document.querySelector('.timer_hours');
    const $minutes = document.querySelector('.timer_minutes');
    const $seconds = document.querySelector('.timer_seconds');

    countdownTimer();

    timerId = setInterval(countdownTimer, 1000);
})

//mask for phone number
document.addEventListener('DOMContentLoaded', () => {
    const inputElement = document.querySelector('[data-mask="phone"]');
    if (!inputElement) return;
    const maskOptions = {
        mask: '+{8}(000)000-00-00'
    }
    IMask(inputElement, maskOptions);
})

//order date
document.addEventListener('DOMContentLoaded', () => {
    const today = new Date();

    const day = today.getDay() + 1;
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    const currentDate = ('0' + day + '.' + '0' + month + '.' + year)
    
    document.getElementById('order_date').innerHTML = 'Order date :' + ' ' + currentDate;
})