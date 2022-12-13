const cont_2 = document.querySelector('.myText');
const slider = document.querySelector('.scrollxDiv');
const s_wid = slider.offsetWidth;
let win_wid = window.innerWidth;
let s_move_max = (s_wid - (win_wid/2)) * -1;
let s_pos = 0;


cont_2.addEventListener('wheel',function(e){
    e.preventDefault;
    if(e.deltaY < 0 && s_pos >= 0){
        setTimeout(()=>{
            cont_2.style.top = `100%`;
        },500);
        return;
    }
    move_slider(e.deltaY);
    on_indicator();
});

function move_slider(amount){
    s_pos -= amount;
    if(s_pos < s_move_max){
        s_pos = s_move_max;
        return;
    }else if(s_pos > 0){
        s_pos = 0;
        return;
    }
    slider.style.transform = `translateX(${s_pos}px)`;
    li_upDown(amount);
    
}

