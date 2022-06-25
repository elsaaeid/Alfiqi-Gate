class Translate{
 constructor(){
 document.getElementById("arabic").addEventListener("click",()=>{
 this.translate("arabic");
});
 document.getElementById("english").addEventListener("click",()=>{
 this.translate("english");
});
this.translate();
}
translate(language){
  if(language == "arabic"){
   document.getElementById("arabic").style.cssFloat = "right";
   document.getElementById("english").style.cssFloat = "right";
   document.getElementById("arabic").innerHTML = "عربى";
   document.getElementById("english").innerHTML = "انجليزى";
   document.getElementById("title").innerHTML = "تصفح أفضل الكتب";
   document.getElementById("findBook").innerHTML = "ابحث عن كتابك المفضل";
   document.getElementById("about").innerHTML = "حول";
   document.getElementById("achieve").innerHTML = "الإنجازات";
   document.getElementById("books").innerHTML = "الكتب المفضلة";
   document.getElementById("videos").innerHTML = "الفديوهات المفضلة";
   document.getElementById("list").innerHTML = "قائمة";
   document.getElementById("mySearch").placeholder = "..بحث";
   document.getElementById("book1").innerHTML = "فن وأسرار اتخاذ القرار";
   document.getElementById("book2").innerHTML = "قوة التفكير";
   document.getElementById("book3").innerHTML = "البرمجة اللغوية العصبية";
   document.getElementById("book4").innerHTML = "مفاتيح النجاح العشرة";
   document.getElementById("book5").innerHTML = "أسرار التسويق الاستراتيجي";
   document.getElementById("book6").innerHTML = "قوة ضبط النفس";
   document.getElementById("book7").innerHTML = "أيقظ إمكاناتك وخلق مستقبلك";
   document.getElementById("book8").innerHTML = "تحكم بحياتك";
   document.getElementById("item1").innerHTML = "أيقظ إمكاناتك وخلق مستقبلك";
   document.getElementById("item2").innerHTML = "تحكم بحياتك";
   document.getElementById("item3").innerHTML = "قوة ضبط النفس";
   document.getElementById("item4").innerHTML = "مفاتيح النجاح العشرة";
   document.getElementById("item5").innerHTML = "أسرار التسويق الاستراتيجي";
   document.getElementById("item6").innerHTML = "البرمجة اللغوية العصبية";
   document.getElementById("item7").innerHTML = "قوة التفكير";
   document.getElementById("item8").innerHTML = "فن وأسرار اتخاذ القرار";
  }
  else if(language == "english"){
   document.getElementById("arabic").style.cssFloat = "left";
   document.getElementById("english").style.cssFloat = "left";
   document.getElementById("arabic").innerHTML = "arabic";
   document.getElementById("english").innerHTML = "english";
     document.getElementById("title").innerHTML = "Browse the best books";
   document.getElementById("findBook").innerHTML = "Find your favorite book";
   document.getElementById("about").innerHTML = "About";
   document.getElementById("achieve").innerHTML = "The achievements";
   document.getElementById("books").innerHTML = "Favorite books";
   document.getElementById("videos").innerHTML = "Favorite videos";
   document.getElementById("list").innerHTML = "List";
   document.getElementById("mySearch").placeholder = "Search..";
   document.getElementById("book1").innerHTML = "The art and secrets of decision making";
   document.getElementById("book2").innerHTML = "The power of thinking";
   document.getElementById("book3").innerHTML = "NLP";
   document.getElementById("book4").innerHTML = "strategic marketing secrets";
   document.getElementById("book5").innerHTML = "the ten keys to success";
   document.getElementById("book6").innerHTML = "The power of self-control";
   document.getElementById("book7").innerHTML = "Awaken your potential and create your future";
   document.getElementById("book8").innerHTML = "take control of your life";


   document.getElementById("item1").innerHTML = "Awaken your potential and create your future";
   document.getElementById("item2").innerHTML = "take control of your life";
   document.getElementById("item3").innerHTML = "The power of self-control";
   document.getElementById("item4").innerHTML = "the ten keys to success";
   document.getElementById("item5").innerHTML = "strategic marketing secrets";
   document.getElementById("item6").innerHTML = "NLP";
   document.getElementById("item7").innerHTML = "The power of thinking";
   document.getElementById("item8").innerHTML = "The art and secrets of decision making";
 }
}
}
onlaod = new Translate();
