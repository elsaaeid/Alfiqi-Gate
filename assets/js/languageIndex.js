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
   document.getElementById("title").innerHTML = "بوابة الفقي";
   document.getElementById("p").innerHTML = "يروي الفقي في محاضراته أنه سافر إلى كندا مع زوجته وهو لا يملك شيئًا وعمل في أقل الوظائف في أحد الفنادق رغم نجاحه في الفندق قبل سفره إلى كندا ، ثم تخرج في وقت قصير جدًا حتى وصل إلى كندا. أصبح مديرًا لأكبر الفنادق في كندا. حصل على العديد من الشهادات الدولية ودكتوراه في علوم التنمية البشرية ، ويقول إبراهيم الفقي على موقعه الشخصي على الإنترنت إنه قام بتأليف علمين جديدين مسجلين باسمه: علم الطاقة البشرية وعلم ديناميكيات التكيف العصبي . (وتجدر الإشارة إلى أن العلوم لا تتكون)";
   document.getElementById("findBook").innerHTML = "ابحث عن كتابك المفضل";
   document.getElementById("about").innerHTML = "حول";
   document.getElementById("achieve").innerHTML = "الإنجازات";
   document.getElementById("books").innerHTML = "الكتب المفضلة";
   document.getElementById("videos").innerHTML = "الفديوهات المفضلة";
   document.getElementById("list").innerHTML = "قائمة";
   document.getElementById("mySearch").placeholder = "..بحث";
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
     document.getElementById("title").innerHTML = "al-Fiqi Gate";
     document.getElementById("p").innerHTML = " Al-Fiqi tells in his lectures that he traveled to Canada with his wife while he owned nothing and worked in the least jobs in a hotel despite his success in the hotel before he traveled to Canada, then he graduated in a very short time until he became the manager of the largest hotels in Canada. He obtained many international certificates and a doctorate in the science of human development, and Ibrahim El-Feki says on his personal website that he has authored two new sciences registered in his name: the science of human energy and the science of dynamics of neural adaptation. (It should be mentioned that sciences are not composed)";
   document.getElementById("findBook").innerHTML = "Find your favorite book";
   document.getElementById("about").innerHTML = "About";
   document.getElementById("achieve").innerHTML = "The achievements";
   document.getElementById("books").innerHTML = "Favorite books";
   document.getElementById("videos").innerHTML = "Favorite videos";
   document.getElementById("list").innerHTML = "List";
   document.getElementById("mySearch").placeholder = "Search..";
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
