const number = document.getElementById('advice-number');
const advice = document.getElementById('box__advice');
const dice = document.querySelector('.dice__circle');

const randomAdvice = async () => {
   const API_URL = 'https://api.adviceslip.com/advice'
   try {
    const response = await fetch(API_URL);
    if(response.status === 200){
        const data = await response.json()
   
        const message = data.slip.advice;
        const adviceId = data.slip.id;
     
        number.innerHTML = `${adviceId}`
        advice.innerHTML = `${message}`
    }else if(response.status === 404) {
        console.log('No hemos podido encontrar el consejo en nuestra base de datos');
    }else {
        console.log('Ha habido un problema tecnico, lo resolveremos en breve');
    }
   
   } catch (error) {
    
    console.log(error);
   }
   
}

dice.addEventListener('click', () => {
    randomAdvice();
})