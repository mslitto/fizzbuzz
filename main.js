let i = 0
let interval

const result = document.getElementById('result')
const title = document.getElementById('title')

const startBtn = document.getElementById('start')

const stopBtn = document.getElementById('stop')
//animation


//interval
const imgF = document.getElementById('fizz')
const imgB = document.getElementById('buzz')

const imgFB = document.getElementById('fizzbuzz')
const startInterval = () => {
    startBtn.style.backgroundColor = '#f14592'


    if(interval){return}

    interval = setInterval(() =>{
        if (i >= 100){
            clearInterval(interval)
            interval = null
            i =0
        } 

        result.innerHTML = i
        title.innerHTML = '...'


        if(i === 0){
        } else if(i % 15 === 0){
            //console.log('FizzBuzz')
            result.innerHTML = i
            title.innerHTML = `FIZZ BUZZ`
            imgFB.classList.add('animate3')
            setTimeout(()=> imgFB.classList.remove('animate3'), 1000)
            title.classList.add('animateFont')
            setTimeout(()=> title.classList.remove('animateFont'), 1000)


        } else if (i % 5 === 0){
            //console.log('Buzz')
            result.innerHTML = i
            title.innerHTML = `BUZZ`
            imgB.classList.add('animate2')
            setTimeout(()=> imgB.classList.remove('animate2'), 1000)

        } else if(i % 3 === 0){
            //console.log('Fizz')
            result.innerHTML = i
            title.innerHTML = `FIZZ`
            imgF.classList.add('animate1')
            setTimeout(()=> imgF.classList.remove('animate1'), 1000)



        }else{
            //console.log(i)
        }
        i++
    }, 1000)

}

const stopInterval = () => {
    if(!interval){return}
    clearInterval(interval)
    interval = null
    startBtn.style = ''

}

const resetInterval = () => {
    i = 0
    result.innerHTML = i
    startBtn.style = ''
}

const debugBtn = document.getElementById('debug')

debugBtn.addEventListener('click', () =>{
   for (let i = 0; i < 100; i++) {
    console.log(i)
}
})

const countBtn = document.getElementById('counter')


countBtn.addEventListener('click', () =>{
i++
result.innerHTML = i

})


startBtn.addEventListener('click', startInterval)

stopBtn.addEventListener('click', stopInterval)

resetBtn =  document.getElementById('reset')

resetBtn.addEventListener('click', resetInterval)

