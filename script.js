setInterval(() => {
    let time = new Date
    let clock = document.getElementById("clock")
    clock.innerHTML = time.toLocaleTimeString()
  }, 1000)