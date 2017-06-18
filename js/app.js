document.addEventListener('DOMContentLoaded', function(){
    console.log('DOM!');

    //menu
    var aboutCompany = document.querySelector("#aboutCompany");

    aboutCompany.addEventListener("mouseover",function(){
      aboutCompany.firstElementChild.style.top = "72px";
    });
    aboutCompany.addEventListener("mouseleave",function(){
      aboutCompany.firstElementChild.style.top = "-150px";
    });

    //photo animation
    var photo=document.querySelectorAll(".photo");

    for(var i=0;i<photo.length;i++){
      photo[i].addEventListener("mouseover",function(){
        var caption=this.querySelector(".caption");
        caption.style.bottom="-60px";
      });
      photo[i].addEventListener("mouseleave",function(){
        var caption=this.querySelector(".caption");
        caption.style.bottom="20px";
      });
    }

    //slider
    var arrow_left = document.querySelector(".arrow_left");
    var arrow_right = document.querySelector(".arrow_right");
    var slide = document.querySelectorAll(".slide");
    var index=0;

    for(var i=1;i<slide.length;i++){
      slide[i].style.backgroundImage='url("images/'+i+'.jpeg")';
      slide[i].style.left="-100%";
    }

    arrow_left.addEventListener("click",function(){
      if(index==0){
      }else{
        slide[index].style.left = "-100%";
        index--;
        slide[index].style.left = "0";
      }

    });
    arrow_right.addEventListener("click",function(){
      if(index==6){
      }else{
        slide[index].style.left = "100%";
        index++;
        slide[index].style.left = "0";
      }
    });

    //calculator - drop-down lists
    var Suma=0;
    var sum_panel = document.querySelector('.sum');
    var price=sum_panel.firstElementChild;
    var panel_right=document.querySelector('.panel_right');
    var price_elements=panel_right.children;

   var drop_down = document.querySelectorAll('.drop_down_list');
    for (var i = 0; i < drop_down.length; i++) {
      drop_down[i].addEventListener('click',function(){
        var list_panel=this.querySelector('.list_panel');
        var options=list_panel.children;

        for (var i = 0; i < options.length; i++) {
          options[i].addEventListener('click',function(){
              if((this.innerHTML==='Clair')||(this.innerHTML==='Margarita')||(this.innerHTML==='Selena')){
                var title = document.querySelector('.title');
                var titleValue = price_elements[0];

                if(titleValue.innerHTML!=''){
                  Suma-=parseInt(titleValue.innerHTML);
                }

                if(this.innerHTML==='Clair'){
                  title.innerHTML=this.innerHTML;
                  Suma+=750;
                  price.innerHTML=Suma;
                  titleValue.innerHTML=750;
                }else if(this.innerHTML==='Margarita'){
                  title.innerHTML=this.innerHTML;
                  Suma+=1200;
                  price.innerHTML=Suma;
                  titleValue.innerHTML=1200;
                }else{
                  title.innerHTML=this.innerHTML;
                  Suma+=2500;
                  price.innerHTML=Suma;
                  titleValue.innerHTML=2500;
                }
               

              }else if((this.innerHTML==='Czerwony')||(this.innerHTML==='Czarny')||(this.innerHTML==='Pomarańczowy')){
                  
                var color = document.querySelector('.color');
                var colorValue = price_elements[1];

                color.innerHTML=this.innerHTML;
                Suma+=0;
                price.innerHTML=Suma;
                colorValue.innerHTML=0;
            
                  

              }else{
                var pattern = document.querySelector('.pattern');
                var patternValue = price_elements[2];
                if(patternValue.innerHTML!=''){
                  Suma-=parseInt(patternValue.innerHTML);
                }
                if(this.innerHTML==='Tkanina'){
                   pattern.innerHTML='Tkanina';
                   Suma+=0;
                   price.innerHTML=Suma;
                   patternValue.innerHTML=0;
                 }else{
                   pattern.innerHTML='Skóra';
                   Suma+=300;
                   price.innerHTML=Suma;
                  patternValue.innerHTML=300;
                }

              }

          });
        }




        
      });
    }

    var arrows = document.querySelectorAll('.list_arrow');

    for (var i = 0; i < arrows.length; i++) {
      arrows[i].addEventListener('click',function(){
        if (this.nextElementSibling.style.display == "block") {
          this.style.transform="rotate(0deg)";
          this.nextElementSibling.style.display = "none";
        }else {
          this.style.transform="rotate(180deg)";
          this.nextElementSibling.style.display = "block";
        }
      });
    }

    var checkbox = document.querySelector('#transport');
    var transport = document.querySelector('.transport');
    var transportValue = price_elements[3];

    checkbox.addEventListener('click',function(){
        if (this.checked === true) {
          transport.innerHTML='Transport';
          Suma+=parseInt(this.dataset.transportPrice);
          price.innerHTML=Suma;
          transportValue.innerHTML=this.dataset.transportPrice;

        }else {
          transport.innerHTML='';
          Suma-=parseInt(this.dataset.transportPrice);
          price.innerHTML=Suma;
          transportValue.innerHTML='';

        }
      });


});
