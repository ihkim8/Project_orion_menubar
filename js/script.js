document.querySelector("#layer button").addEventListener("click", function(){
  document.querySelector("#layer").style.display="none"
})
// document.querySelector("#layer")
// 12월 27일 추가 내용 시작
$(function(){
  var i=0,k=null,repeat;
  function timer(){
    setInterval(function(){
      i++;
      k=i-1;
      if(i==3){
        i=0;
      }
      console.log(i)
      slide()
    },2000)
  }
  timer();
  function slide(){
    $(".main_visual_wrap ul li").eq(i).addClass("on");
    $(".main_visual_wrap ul li").eq(k).removeClass("on");
  }
});
// 12월 27일 추가 내용 끝