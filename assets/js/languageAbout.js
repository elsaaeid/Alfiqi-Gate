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
   document.getElementById("title").innerHTML = "من هو ابراهيم الفقي؟";
   document.getElementById("p1").innerHTML = "إبراهيم محمد السيد الفقي (5 أغسطس 1950-10 فبراير 2012) خبير في التنمية البشرية ومعالجة اللغات الطبيعية ورئيس مجلس إدارة المركز الكندي للتنمية البشرية ومؤسس ورئيس مجلس الإدارة. من مجموعة شركات إبراهيم الفقي الدولية ، والتي تتكون من (المركز الكندي للطاقة البشرية ، المركز الكندي لبيولوجيا التنويم المغناطيسي ، المركز الكندي للتنمية البشرية ، المركز الكندي للبرمجة اللغوية العصبية). هو دكتور في الميتافيزيقيا. له عدة كتب مترجمة إلى ثلاث لغات (الإنجليزية ، الفرنسية ، العربية). قام بتدريب أكثر من 600000 شخص في محاضراته حول العالم. ومن مؤلفاته كتابه (إدارة الوقت: المفاتيح العشرة للنجاح).";
   document.getElementById("p2").innerHTML = "ولد إبراهيم محمد السيد الفقي في حي فيكتوريا بالإسكندرية. فاز بالبطولة المصرية في تنس الطاولة لعدة سنوات ومثل مصر مع المنتخب الوطني في بطولة العالم لتنس الطاولة بألمانيا الغربية عام 1969. وفي حياته المهنية ، ارتقى الفقي في الوظائف حتى رتبة مدير قسم في قطاع الفندقة بفندق فلسطين بالإسكندرية حصل على الدرجة الثالثة في سن الخامسة والعشرين. هاجر إلى كندا لدراسة الإدارة ، وبدأ هناك كمنظف أطباق وبواب في مطعم وحمال كرسي ومنظف مائدة في فندق."
   document.getElementById("about").innerHTML = "حول";
   document.getElementById("achieve").innerHTML = "الإنجازات";
   document.getElementById("books").innerHTML = "الكتب المفضلة";
   document.getElementById("videos").innerHTML = "الفيديوهات المفضلة";
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
     document.getElementById("title").innerHTML = "Who is Ibrahim al-Fiqi?";
     document.getElementById("p1").innerHTML = "Ibrahim Mohamed El-Sayed El-Feki (August 5, 1950 - February 10, 2012), expert in human development and NLP and Chairman of the Board of Directors of the Canadian Center for Human Development, and founder and Chairman of the Board of Directors of the Ibrahim El-Feki International Group of Companies, which consists of (the Canadian Center for Human Energy Power, the Canadian Center for Hypnosis Biology, Canadian Center for Human Development, Canadian Center for Neuro-Linguistic Programming). He is a doctor of metaphysics. He has several books translated into three languages ​​(English, French, Arabic). He has trained more than 600,000 people in his lectures around the world. Among his books is his book (Time Management: The Ten Keys to Success).";
   document.getElementById("p2").innerHTML = "Ibrahim Mohamed El-Sayed El-Feki was born in the Victoria district of Alexandria. He won the Egyptian championship in table tennis for several years and represented Egypt with the national team in the World Table Tennis Championships in West Germany in 1969. In his professional life, El-Feki rose in jobs up to the rank of department manager in the hotel sector At the Palestine Hotel in Alexandria, he reached the third degree at the age of twenty-five. He immigrated to Canada to study management, and began there as a dish-cleaner and as a janitor in a restaurant, chair porter, and table cleaner in a hotel."
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
