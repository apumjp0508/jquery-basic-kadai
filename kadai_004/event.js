$(window).on('load',()=>{
    console.log('loadイベントが発生しました');
});
//イベントがいつ発生するか注意；

$(function(){
   
    $(window).on('scroll',()=>{
        console.log('scrollイベントが発生しました');
    });
});