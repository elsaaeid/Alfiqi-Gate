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
   document.getElementById("title").innerHTML = "ما هي انجازات ابراهيم الفقي؟";
   document.getElementById("p1").innerHTML = "للفقي العديد من الكتب ، بعضها تُرجم إلى الإنجليزية والفرنسية والعربية والكردية والإندونيسية ، وله العديد من الكتب المتوفرة في المكتبة والأرشيف الوطني الكندي. وهي تتألف من عشرة عناوين ، نُشرت جميعها خلال التسعينيات من القرن الماضي. تراوحت موضوعاتهم ترتيبًا زمنيًا من التعامل مع تقنيات المبيعات من خلال فن الإدارة الناجحة إلى الكتابة عن التطوير الذاتي والنجاح بشكل عام ، ومن أبرز كتبه:";
   document.getElementById("p2").innerHTML = "1-قوة التفكير"
   document.getElementById("p3").innerHTML = "2- البرمجة اللغوية العصبية وفن التواصل اللامحدود"
   document.getElementById("p4").innerHTML = "3-مفاتيح النجاح العشرة"
   document.getElementById("p5").innerHTML = "4-قوة ضبط النفس"
   document.getElementById("p6").innerHTML = "5- قوة المحبة والمغفرة"
   document.getElementById("p7").innerHTML = "6- حياة بلا ضغوط"
   document.getElementById("p8").innerHTML = "7-إدارة الوقت"
   document.getElementById("p9").innerHTML = "8-تحكم في حياتك"
   document.getElementById("p10").innerHTML = "9- أيقظ إمكاناتك وخلق مستقبلك"
   document.getElementById("p11").innerHTML = "10- قيادة السحر"
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
     document.getElementById("title").innerHTML = "What are the achievements of Ibrahim El-Feki?";
     document.getElementById("p1").innerHTML = "Al-Fiqi has several books, some of which have been translated into English, French, Arabic, Kurdish and Indonesian, and he has several books available in the Library and the National Archives of Canada. They consist of ten titles, all of which were published during the nineties of the last century. Their topics ranged chronologically from dealing with sales techniques through the art of successful management to writing about Self-development and success in general, among his most prominent books:";
   document.getElementById("p2").innerHTML = "1-The power of thinking";
   document.getElementById("p3").innerHTML = "2-neural linguistic programming and the art of unlimited communication"
   document.getElementById("p4").innerHTML = "3-the ten keys to success"
   document.getElementById("p5").innerHTML = "4-The power of self-control"
   document.getElementById("p6").innerHTML = "5-The power of love and forgiveness"
   document.getElementById("p7").innerHTML = "6-A life without stress"
   document.getElementById("p8").innerHTML = "7-time management"
   document.getElementById("p9").innerHTML = "8-Take control of your life"
   document.getElementById("p10").innerHTML = "9-Awaken your potential and create your future"
   document.getElementById("p11").innerHTML = "10-Driving magic"
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
