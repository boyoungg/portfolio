$(window).scroll(function(){
    var scrollTopValue = $(window).scrollTop();

    //intro scroll
    var sectionIntro= $('#sec1').offset();

    if(scrollTopValue >= sectionIntro.top + 1100){
        $('#scrollText').css({
            'opacity' : 0
        });

        
        $('.wave-text-1').css({
            'opacity' : 0 ,
            'letter-spacing' :'40rem',
            'filter': 'blur(40px)'
        });
    }
    else if(scrollTopValue >= sectionIntro.top + 500){
        $('#scrollText').css({
            'opacity' : 1
        });
        $('#firstSpan').html('변화를');

        $('.wave-text').css({
            'letter-spacing': '40rem',
            'opacity' : 0,
            'filter': 'blur(40px)'
        });

        $('.wave-text-1').css({
            'opacity' : 1 ,
            'letter-spacing': '0',
            'filter': 'blur(0px)'

        });
    }
    else if(scrollTopValue >= sectionIntro.top){
        $('#scrollText').css({
            
            'opacity' : 1
        });
        $('#firstSpan').html('파동을');
        $('.wave-text').css({
            'opacity' : 1 ,
            'letter-spacing': '0',
            'filter': 'blur(0px)'
        });
        
        $('.wave-text-1').css({
            'letter-spacing': '40rem',
            'opacity' : 0 ,
            'filter': 'blur(40px)'
        });
    } else if(scrollTopValue < sectionIntro.top){
                
        $('#scrollText').css({
            'opacity' : 0
        });

        
        $('.wave-text').css({
            'opacity' : 0 ,
            'letter-spacing': '20rem',
            'filter': 'blur(40px)'
        });

        $('.wave-text-1').css({
            'opacity' : 0 ,
        });
    }   


    var sectionMyPage= $('#sec4').offset();
    var lastPage= $('#sec5').offset();


    var xs = -0.625 * scrollTopValue + 5500;

    if(scrollTopValue > sectionMyPage.top){
        $('.myText').css({
            'left' : xs
        })
    }

    
    if(scrollTopValue > lastPage.top - 1700){
        $('.myText').css({
            'left' : '-85px'
        })
    }

});
