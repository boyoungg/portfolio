// $('#waveText').click(function(){
//     $("#toggleText").html('가장 자연스러운 나의 모습이 공간(활동)에 따라 </br> 변화하여 전파되어 일정하게 나아가고 주기적으로 변화하는 모습을 시각적으로 표현');
// });

$('#waveText').on('click', function(){
    $('#toggleText').html() == "가장 자연스러운 나의 모습이 공간(활동)에 따라 <br> 변화하여 전파되어 일정하게 나아가고 변화하는 모습을 시각적으로 표현" ? $('#toggleText').html('어떤 물리량이 주기적으로 변화하면서<br>변화가 공간을 따라 전파되어 나가는 것을 의미한다') : $('#toggleText').html('가장 자연스러운 나의 모습이 공간(활동)에 따라 <br> 변화하여 전파되어 일정하게 나아가고 변화하는 모습을 시각적으로 표현');
});

let pic = document.querySelector(".waveAni");
let picNo = document.querySelector("#BtnText");

let i = 0;

document.querySelector(".Btnright").addEventListener('click', function(idx) {

    if (idx) {
        if (i == 5) return;
        i++;  
    }

    if( i == 1 ){
        $('.-01').addClass('full');

        $('.workTitle').html(`<a href="codeReview02.html">TOM HARDY <span id="viewmm">VIEW MORE -></span></a>`);

        $('.workscript').html("1학년 2학기 직무수행평가2로 제작한 배우 톰하디 소개 페이지 입니다.<br>HTML,CSS를 이용하여 작업하였고 JAVASCRIPT를 배우지 않았던 시기라<br>간단한 JQUERY를 사용하여 TAB 페이지를 만들었습니다.");

        $('.year').html("작업기간 : 2021.11.19 - 12.09");
        $('.Contribution').html("기여도 : 100%");

        $('.-k01').html("#자바스크립트 없는");
        $('.-k02').html("#HTML / CSS");
        $('.-k03').html("#addClass");

        $(".thumImg").attr("src", './img/workthum_06.png');

    }
    if( i == 2 ){
        $('.-02').addClass('full');

        $('.workTitle').html(`<a href="codeReview03.html">JEJU MAP <span id="viewmm">VIEW MORE -></span></a>`);

        $('.workscript').html("제주도를 주제로 제주도 지역 별 관광명소 및 놀거리, 음식을 소개하는<br>여행지도 웹 사이트를 제작하였습니다. HTML, CSS, JS를 이용하였고<br>JQUERY UI를 활용하여 스티커북 페이지를 제작하였습니다.");

        $('.year').html("작업기간 : 2022.04.07 - 04.21");
        $('.Contribution').html("기여도 : 100%");

        $('.-k01').html("#마우스따라 돌아가는 귤");
        $('.-k02').html("#MOUSE EVENT");
        $('.-k03').html("#스티커북");

        $(".thumImg").attr("src", './img/workthum_02.png');
        
    }
    if( i == 3 ){
        $('.-03').addClass('full');

        $('.workTitle').html(`<a href="codeReview04.html">SEE : SAW <span id="viewmm">VIEW MORE -></span></a>`);

        $('.workscript').html("프로젝트 팀작업으로 제작한 SEE:SAW 웹 페이지입니다<br>JAVASCRIPT를 이용하여 스크롤 이벤트와 Slick Slide 라이브러리를 활용하였고<br>간단한 기획,디자인,전반적인 프로그래밍 작업과 팀장을 맡아 진행하였습니다.");

        $('.year').html("작업기간 : 2022.03.14 - 06.20");
        $('.Contribution').html("기여도 : 프로그래밍 100% , 기획 30% , 디자인 30%");

        $('.-k01').html("#SLICK SLIDE");
        $('.-k02').html("#SCROLL EVENT");
        $('.-k03').html("#팀작업 프로젝트");

        $(".thumImg").attr("src", './img/workthum_03.png');

    }
    if( i == 4 ){
        $('.-04').addClass('full');

        $('.workTitle').html(`<a href="codeReview04.html">MANG-O <span id="viewmm">VIEW MORE -></span></a>`);

        $('.workscript').html("졸업작품 팀작업으로 제작한 MANG-O의 웹 페이지입니다<br>팀장과 개발자로 참여하였고 JS, CSS를 이용하여 인터렉션을 작업하였습니다<br>JAVASCRIPT를 이용하여 망생테스트와 결과를 제작하였습니다.");

        $('.year').html("작업기간 : 2022.09.05 - 11.27");
        $('.Contribution').html("기여도 : 프로그래밍 100% , 기획 20% , 디자인 10%");

        $('.-k01').html("#CSS ANIMATION");
        $('.-k02').html("#SCROLL EVENT");
        $('.-k03').html("#MBTI TEST");

        $(".thumImg").attr("src", './img/workthum_04.png');

    }
    if( i == 5 ){
        $('.-05').addClass('full');

        $('.workTitle').html(`<a href="codeReview04.html">PUBG : BATTLEGROUND DESTON <span id="viewmm">VIEW MORE -></span></a>`);

        $('.workscript').html("배틀그라운드의 신규 콘텐츠 DESTON을 주제의 클론코딩 작업물입니다<br>CANVAS를 이용하여 스크롤 마다 이미지 로딩 이벤트를 사용하였고<br>CSS와 JQUERY를 활용하여 인터렉션에 집중한 페이지입니다.");

        $('.year').html("작업기간 : 2022.11.28 - 12.15");
        $('.Contribution').html("기여도 : 100%");

        $('.-k01').html("#CANVAS SCROLL");
        $('.-k02').html("#FLIP CARD");
        $('.-k03').html("#인터렉션 포인트");

        $(".thumImg").attr("src", './img/workthum_05.png');

    }

});

document.querySelector(".BtnLeft").addEventListener('click', function(idx) {

    if (idx) {
        if (i == 0) return;
        i--;
    }
    if( i == 0 ){
        $('.-01').removeClass('full');
        
        $('.workTitle').html(`<a href="codeReview01.html">PORTFOLIO WORK <span id="viewmm">VIEW MORE -></span></a>`);

        $('.workscript').html("2021년 코딩을 처음 접하고 난 후<br>웹 프로그래밍을 공부하며 차곡차곡 발전하는 모습을<br>하단 WAVE 인터렉션으로 표현하였습니다.");

        $('.year').html("-");
        $('.Contribution').html("-");

        $('.-k01').html("#WAVE INTERACTION");
        $('.-k02').html("#CLICK EVENT");
        $('.-k03').html("#WORK PAGE");

        $(".thumImg").attr("src", './img/workthum_01.png');

    }

    if( i == 1 ){
        $('.-02, .-03, .-04, .-05').removeClass('full');
        $('.-01').addClass('full');

        $('.workTitle').html(`<a href="codeReview02.html">TOM HARDY <span id="viewmm">VIEW MORE -></span></a>`);

        $('.workscript').html("1학년 2학기 직무수행평가2로 제작한 배우 톰하디 소개 페이지 입니다.<br>HTML,CSS를 이용하여 작업하였고 JAVASCRIPT를 배우지 않았던 시기라<br>간단한 JQUERY를 사용하여 TAB 페이지를 만들었습니다.");

        $('.year').html("작업기간 : 2021.11.19 - 12.09");
        $('.Contribution').html("기여도 : 100%");

        $('.-k01').html("#자바스크립트 없는");
        $('.-k02').html("#HTML / CSS");
        $('.-k03').html("#addClass");

        $(".thumImg").attr("src", './img/workthum_06.png');
    }
    if( i == 2 ){
        $('.-01, .-03, .-04, .-05').removeClass('full');
        $('.-02').addClass('full');

        $('.workTitle').html(`<a href="codeReview03.html">JEJU MAP <span id="viewmm">VIEW MORE -></span></a>`);

        $('.workscript').html("제주도를 주제로 제주도 지역 별 관광명소 및 놀거리, 음식을 소개하는<br>여행지도 웹 사이트를 제작하였습니다. HTML, CSS, JS를 이용하였고<br>JQUERY UI를 활용하여 스티커북 페이지를 제작하였습니다.");

        $('.year').html("작업기간 : 2022.04.07 - 04.21");
        $('.Contribution').html("기여도 : 100%");

        $('.-k01').html("#마우스따라 돌아가는 귤");
        $('.-k02').html("#MOUSE EVENT");
        $('.-k03').html("#스티커북");

        $(".thumImg").attr("src", './img/workthum_02.png');

    }
    if( i == 3 ){
        $('.-02, .-01, .-04, .-05').removeClass('full');
        $('.-03').addClass('full');

        $('.workTitle').html(`<a href="codeReview04.html">SEE : SAW <span id="viewmm">VIEW MORE -></span></a>`);

        $('.workscript').html("프로젝트 팀작업으로 제작한 SEE:SAW 웹 페이지입니다<br>JAVASCRIPT를 이용하여 스크롤 이벤트와 Slick Slide 라이브러리를 활용하였고<br>간단한 기획,디자인,전반적인 프로그래밍 작업과 팀장을 맡아 진행하였습니다.");

        $('.year').html("작업기간 : 2022.03.14 - 06.20");
        $('.Contribution').html("기여도 : 프로그래밍 100% , 기획 30% , 디자인 30%");

        $('.-k01').html("#SLICK SLIDE");
        $('.-k02').html("#SCROLL EVENT");
        $('.-k03').html("#팀작업 프로젝트");

        $(".thumImg").attr("src", './img/workthum_03.png');

    }
    if( i == 4 ){
        $('.-02, .-03, .-01, .-05').removeClass('full');
        $('.-04').addClass('full');

        $('.workTitle').html(`<a href="codeReview04.html">MANG-O <span id="viewmm">VIEW MORE -></span></a>`);

        $('.workscript').html("졸업작품 팀작업으로 제작한 MANG-O의 웹 페이지입니다<br>팀장과 개발자로 참여하였고 JS, CSS를 이용하여 인터렉션을 작업하였습니다<br>JAVASCRIPT를 이용하여 망생테스트와 결과를 제작하였습니다.");

        $('.year').html("작업기간 : 2022.09.05 - 11.27");
        $('.Contribution').html("기여도 : 프로그래밍 100% , 기획 20% , 디자인 10%");

        $('.-k01').html("#CSS ANIMATION");
        $('.-k02').html("#SCROLL EVENT");
        $('.-k03').html("#MBTI TEST");

        $(".thumImg").attr("src", './img/workthum_04.png');

        
    }
    if( i == 5 ){
        $('.-02, .-03, .-04, .-01').removeClass('full');
        $('.-05').addClass('full');
        
        $('.workTitle').html(`<a href="codeReview04.html">PUBG : BATTLEGROUND DESTON <span id="viewmm">VIEW MORE -></span></a>`);

        $('.workscript').html("배틀그라운드의 신규 콘텐츠 DESTON을 주제의 클론코딩 작업물입니다<br>CANVAS를 이용하여 스크롤 마다 이미지 로딩 이벤트를 사용하였고<br>CSS와 JQUERY를 활용하여 인터렉션에 집중한 페이지입니다.");

        $('.year').html("작업기간 : 2022.11.28 - 12.15");
        $('.Contribution').html("기여도 : 100%");

        $('.-k01').html("#CANVAS SCROLL");
        $('.-k02').html("#FLIP CARD");
        $('.-k03').html("#인터렉션 포인트");

        $(".thumImg").attr("src", './img/workthum_05.png');

    }

});

$("#BtnText").click(function(){
    console.log
    $('#BtnText ul').toggleClass("block");
});

$("#work01").click(function(){
    $('.-02, .-03, .-04, .-01').removeClass('full');
    $('.-05').addClass('full');
        
    $('.workTitle').html(`<a href="codeReview04.html">PUBG : BATTLEGROUND DESTON <span id="viewmm">VIEW MORE -></span></a>`);

    $('.workscript').html("배틀그라운드의 신규 콘텐츠 DESTON을 주제의 클론코딩 작업물입니다<br>CANVAS를 이용하여 스크롤 마다 이미지 로딩 이벤트를 사용하였고<br>CSS와 JQUERY를 활용하여 인터렉션에 집중한 페이지입니다.");

    $('.year').html("작업기간 : 2022.11.28 - 12.15");
    $('.Contribution').html("기여도 : 100%");

    $('.-k01').html("#CANVAS SCROLL");
    $('.-k02').html("#FLIP CARD");
    $('.-k03').html("#인터렉션 포인트");

    $(".thumImg").attr("src", './img/workthum_05.png');

});


$("#work02").click(function(){
    $('.-02, .-03, .-05, .-01').removeClass('full');
    $('.-04').addClass('full');

    $('.workTitle').html(`<a href="codeReview04.html">MANG-O <span id="viewmm">VIEW MORE -></span></a>`);

    $('.workscript').html("졸업작품 팀작업으로 제작한 MANG-O의 웹 페이지입니다<br>팀장과 개발자로 참여하였고 JS, CSS를 이용하여 인터렉션을 작업하였습니다<br>JAVASCRIPT를 이용하여 망생테스트와 결과를 제작하였습니다.");

    $('.year').html("작업기간 : 2022.09.05 - 11.27");
    $('.Contribution').html("기여도 : 프로그래밍 100% , 기획 20% , 디자인 10%");

    $('.-k01').html("#CSS ANIMATION");
    $('.-k02').html("#SCROLL EVENT");
    $('.-k03').html("#MBTI TEST");

    $(".thumImg").attr("src", './img/workthum_04.png');

});


$("#work03").click(function(){
    $('.-02, .-05, .-04, .-01').removeClass('full');

    $('.-03').addClass('full');

    $('.workTitle').html(`<a href="codeReview04.html">SEE : SAW <span id="viewmm">VIEW MORE -></span></a>`);

    $('.workscript').html("프로젝트 팀작업으로 제작한 SEE:SAW 웹 페이지입니다<br>JAVASCRIPT를 이용하여 스크롤 이벤트와 Slick Slide 라이브러리를 활용하였고<br>간단한 기획,디자인,전반적인 프로그래밍 작업과 팀장을 맡아 진행하였습니다.");

    $('.year').html("작업기간 : 2022.03.14 - 06.20");
    $('.Contribution').html("기여도 : 프로그래밍 100% , 기획 30% , 디자인 30%");

    $('.-k01').html("#SLICK SLIDE");
    $('.-k02').html("#SCROLL EVENT");
    $('.-k03').html("#팀작업 프로젝트");

    $(".thumImg").attr("src", './img/workthum_03.png');

});


$("#work04").click(function(){
    $('.-05, .-03, .-04, .-01').removeClass('full');

    $('.-02').addClass('full');

    $('.workTitle').html(`<a href="codeReview03.html">JEJU MAP <span id="viewmm">VIEW MORE -></span></a>`);

    $('.workscript').html("제주도를 주제로 제주도 지역 별 관광명소 및 놀거리, 음식을 소개하는<br>여행지도 웹 사이트를 제작하였습니다. HTML, CSS, JS를 이용하였고<br>JQUERY UI를 활용하여 스티커북 페이지를 제작하였습니다.");

    $('.year').html("작업기간 : 2022.04.07 - 04.21");
    $('.Contribution').html("기여도 : 100%");

    $('.-k01').html("#마우스따라 돌아가는 귤");
    $('.-k02').html("#MOUSE EVENT");
    $('.-k03').html("#스티커북");

    $(".thumImg").attr("src", './img/workthum_02.png');

});


$("#work05").click(function(){
    $('.-02, .-03, .-04, .-05').removeClass('full');

    $('.-01').addClass('full');
        
    $('.workTitle').html(`<a href="codeReview02.html">TOM HARDY <span id="viewmm">VIEW MORE -></span></a>`);

    $('.workscript').html("1학년 2학기 직무수행평가2로 제작한 배우 톰하디 소개 페이지 입니다.<br>HTML,CSS를 이용하여 작업하였고 JAVASCRIPT를 배우지 않았던 시기라<br>간단한 JQUERY를 사용하여 TAB 페이지를 만들었습니다.");

    $('.year').html("작업기간 : 2021.11.19 - 12.09");
    $('.Contribution').html("기여도 : 100%");

    $('.-k01').html("#자바스크립트 없는");
    $('.-k02').html("#HTML / CSS");
    $('.-k03').html("#addClass");

    $(".thumImg").attr("src", './img/workthum_06.png');
});

$("#work06").click(function(){
    $('.-01, .-02, .-03, .-04, .-05').removeClass('full');
     
    $('.workTitle').html(`<a href="codeReview01.html">PORTFOLIO WORK <span id="viewmm">VIEW MORE -></span></a>`);

    $('.workscript').html("2021년 코딩을 처음 접하고 난 후<br>웹 프로그래밍을 공부하며 차곡차곡 발전하는 모습을<br>하단 WAVE 인터렉션으로 표현하였습니다.");

    $('.year').html("-");
    $('.Contribution').html("-");

    $('.-k01').html("#WAVE INTERACTION");
    $('.-k02').html("#CLICK EVENT");
    $('.-k03').html("#WORK PAGE");

    $(".thumImg").attr("src", './img/workthum_01.png');

});