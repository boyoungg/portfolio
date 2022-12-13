(function(){
    
    //header 
    const header = document.querySelector('header');
    const mainElem = document.querySelector('#sec1');

    //section01-mywave
    const section_1 = document.querySelector('#mainsec');
    const section_2 = document.querySelector('#sec2');
    const section_2_1 = document.querySelector('#sec2-1');
    const section_2_2 = document.querySelector('#sec2-2');
    const section_2_3 = document.querySelector('#sec2-3');
    const section_2_4 = document.querySelector('#sec2-4');
    const section_3 = document.querySelector('#sec3');
    const section_5 = document.querySelector('#sec5');
    const waveDiv = document.querySelector('.circleWaveMotion');

    function headerChange(){

        let mainElemY = mainElem.getBoundingClientRect().top;

        if(mainElemY < window.innerHeight * 0.2){
            header.classList.add('change');
        } else{
            header.classList.remove('change');
        }
    }

    function showValue(){
        let mainElemY1 = mainElem.getBoundingClientRect().top;
        let textElemY = section_2.getBoundingClientRect().top;
        let section_2_1Y = section_2_1.getBoundingClientRect().top;
        let section_2_2Y = section_2_2.getBoundingClientRect().top;
        let section_2_3Y = section_2_3.getBoundingClientRect().top;
        let section_2_4Y = section_2_4.getBoundingClientRect().top;
        let section_3Y = section_3.getBoundingClientRect().top;
        let section_5Y = section_5.getBoundingClientRect().top;


        const textElem = document.querySelector('#sec2 > .firstText');
        const textElem02 = document.querySelector('#sec2-3 > .secondText');
        const textElem03 = document.querySelector('#sec2-4 > .firstText');

        let circleElem = document.querySelector('.animate-circle');
        let wave = document.querySelector('#Layer_1');

        if(textElemY < window.innerHeight / 2 ){
            textElem.classList.add('scrollText');
            circleElem.classList.add('line');
        } 
        else{
            textElem.classList.remove('scrollText');
            circleElem.classList.remove('line');
            textElem02.classList.remove('scrollText');
            textElem03.classList.remove('scrollText');

        }

        if(section_2_1Y < window.innerHeight / 2 ){
            circleElem.classList.add('cicle');
        } 
        else{
            circleElem.classList.remove('cicle');
            textElem02.classList.remove('scrollText');
            textElem03.classList.remove('scrollText');
            
        }

    
        if(section_2_3Y < window.innerHeight / 1.5){

            wave.classList.remove('long');
            textElem.classList.remove('scrollText');
            textElem02.classList.add('scrollText');



        }else if(section_2_2Y < window.innerHeight / 2 ){

            circleElem.classList.add('lineX');
            wave.classList.add('long')
            textElem02.classList.remove('scrollText');
            textElem03.classList.remove('scrollText');
            
        }
        else{
            circleElem.classList.remove('lineX');
            wave.classList.remove('long');
            textElem02.classList.remove('scrollText');
            textElem03.classList.remove('scrollText');
        }

            
        if(section_2_3Y < window.innerHeight / 4){
            circleElem.classList.add('lineX');
            section_2_3.classList.add('wide');
            waveDiv.classList.add('look');

        } else{
            section_2_3.classList.remove('wide');
            textElem03.classList.remove('scrollText');
            waveDiv.classList.remove('look');

        }

        if(section_2_4Y < window.innerHeight / 2){
            textElem02.classList.remove('scrollText');
            textElem03.classList.add('scrollText');
            circleElem.classList.add('lineX');
            //여기 블럭
            $('.lineAni').addClass('rightover');
        } else{
            textElem03.classList.remove('scrollText');
            $('.lineAni').removeClass('rightover');
        }

        if(section_3Y < window.innerHeight / 1){
            textElem03.classList.remove('scrollText');
            circleElem.classList.add('lineX');
        }

    
        /*header line*/

        if(mainElemY1 < window.innerHeight / 3){
            $('.head02').addClass('underline')
        } else{
            $('.head02').removeClass('underline')
        }


        if(section_3Y < window.innerHeight / 3){
            $('.head02').removeClass('underline')
            $('.head03').addClass('underline')
        } else{
            $('.head03').removeClass('underline')
        }

        if(section_5Y < window.innerHeight / 3){
            $('.head02, .head03').removeClass('underline')
            $('.head04').addClass('underline')
        } else{
            $('.head04').removeClass('underline')
        }
        

    }

    window.addEventListener('scroll', function(){
        headerChange();
        showValue();
        // console.log(window.scrollY);
        // console.log(header.getBoundingClientRect().top);
    });

})();