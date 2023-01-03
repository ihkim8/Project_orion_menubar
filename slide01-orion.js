$(function(){
  const visual = $("#brandVisual>ul>li");
  // visual.css("background-color","yellow")
  const button=$("#buttonList>li");
  let current =0; //현재 
  let btnIdx=0; //클릭한 페이저 버튼의 인덱스
  // console.log(visual, button);
  let id; //setInvervalId
  const speed=3000;
  //버튼클릭함수
  button.click(function(){
    //jquery this
    //javascript jquery적용되는 $(this) 제이쿼리 객체로 만들어 제이쿼리 함수를 알아들을 수 있게. 
    let btnIdx=$(this).index();
    //선택된 것만 적용하기
    //1.다 지우고 걔만 적용
    button.removeClass("on");
    $(this).addClass("on");
    move()
    // console.log(btnIdx)
    // current=current+1;
    // console.log("버튼:"+current);
  });
  //시간마다실행 setInterval(함수,시간간격)이 들어갈 자리
  timer();
  function timer(){
    id=setInterval(function(){
      let next = current +1; //0+1
      // console.log(visual.length);
      if (next == visual.length){
        next = 0;
      }
      console.log(next);
      button.eq(next).trigger("click");
      // move(next);
      // console.log(current++)
    },speed)
  };
  //이동 슬라이드 이동시켜주는 역할만 함. 
  move();
  function move(){
      if(current==btnIdx)return;//이게 트루면 밑에 거 다 취소. 호출한 지점으로 다시 돌려 보낸다.
      //console.log("무브"+current);
      let cu=visual.eq(current);
      let ne=visual.eq(btnIdx); //의미 파악
      cu.css("left","0").stop().animate({left:"-100%"});
      ne.css("left","100%").stop().animate({left:"0%"});
      current=btnIdx //이거 쓰면 무한 반복 됨. cu에서 ne로 넘어갈 수 있게 됨.
  }
  //clearInterval
  clearAuto();
  function clearAuto(){
    $("#brandVisual, #buttonList, .controls").mouseenter(function(){
      clearInterval(id)
    })
    $("#brandVisual, #buttonList, controls").mouseleave(function(){
      timer();
    })
  }
  
  //좌우컨트롤버튼
  controls()

  function controls(){
    $('.controls .next').click(function(){
      btnIdx=btnIdx+1;
      if(btnIdx == visual.length){
        btnIdx=0;
      }
      button.removeClass("on");
      button.eq(btnIdx).addClass("on");
      
      let cu=visual.eq(current);
      let ne=visual.eq(btnIdx); //의미 파악
      cu.css("left","0").stop().animate({left:"-100%"});
      ne.css("left","100%").stop().animate({left:"0%"});
      current=btnIdx
    })
  }

  
  function controls(){
    $('.controls .prev').click(function(){
      // console.log(btnIdx=btnIdx-1);
      btnIdx=btnIdx-1;
      if(current == 0){
        btnIdx=visual.length-1;
      }
      button.removeClass("on");
      button.eq(btnIdx).addClass("on");
      
      let cu=visual.eq(current);
      let pr=visual.eq(btnIdx); //의미 파악
      cu.css("left","0").stop().animate({left:"100%"});
      pr.css("left","-100%").stop().animate({left:"0%"});
      current=btnIdx
    })
  }

});
//jQuery

//javascript

// const visual=document.querySelectorAll
// document.addEventListner("DOMContentLoaded",function(){const visual=document.querySelector("#brandVisual>ul>li")
// visual.style.backgroundColor="white";})

// const visual=document.querySelectorAll

//document.addEventListner("DOMContentLoaded",function(){const visual=document.querySelector("#brandVisual>ul>li")
// visual.style.backgroundColor="white";});
// 
//여러개 요소를 전달받아야 할 때는 querySelectorAll을 적용시켜야 함. querySelector로는 불충분