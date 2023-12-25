document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('#button').onclick = () => {

        document.querySelector('.answer').style.top = "0";

        click.play();
        bagrAudoi.play();
        bagrAudoi.loop = true;
    };

    document.querySelector('.x').onclick = () => {

        document.querySelector('.answer').style.top = "-100vh";

        click.play();
        bagrAudoi.pause();
    };
    const tR = document.querySelector('#translate');
    const textP = document.querySelector('.text');
    
    const bagrAudoi = new Audio('./images/audio.mp3');
    const click = new Audio('./images/click.mp3');

    const english = ["Embrace life's journey with positivity. Every challenge is a chance to grow, and every moment holds the potential for joy. Keep moving forward with resilience and make the most of each day."]
    const somali = ["Ku soo dhawoow safarka nolosha si wanaagsan. Caqabad kastaa waa fursad ay ku koraan, daqiiqad kastana waxay haysaa awoodda farxadda. Horey ugu soco adkeysi oo ka faa'iidayso maalin kasta."]

    tR.onclick = () => {

        if(textP.innerHTML == english, tR.innerHTML === 'Somali'){
            textP.innerHTML = somali,
            tR.innerHTML = 'English'
        } else {
            textP.innerHTML = english,
            tR.innerHTML = 'Somali';
        }

        click.play();
    };

});