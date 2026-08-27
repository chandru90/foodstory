
jQuery(function($){


$("#generate_recipe").click(function(){


let ingredient=$("#ingredient").val();

let group=$("#group").val();

let foodgroup=$("#foodgroup").val();

let cuisine=$("#cuisine").val();

let portionsize=$("#portionsize").val();



$("#recipe_loading")
.html("Generating...");



$.ajax({

url:recipe_ajax.ajax_url,

method:"GET",

data:{


action:"generate_recipe",

ingredient:ingredient,

group:group,

foodgroup:foodgroup,

cuisine:cuisine,

preferences:
localStorage.getItem("preferences")


},



success:function(data){



$("#recipe_loading").html("");



let recipes=data.recipes || data;



let html="";



recipes.forEach(function(day){



html += `

<div class="recipe-card">

<h2>
📅 ${day.day}
</h2>


`;



let meals =
portionsize==5 ?
[
"breakfast",
"lunch",
"dinner",
"snacks",
"brunch"
]
:
portionsize==4 ?
[
"breakfast",
"lunch",
"dinner",
"snacks"
]
:
[
"breakfast",
"lunch",
"dinner"
];




meals.forEach(function(meal){


let m=day[meal];

if(!m)
return;



html+=`

<div class="meal">


<h3>
🍴 ${meal}
</h3>


<h4>
${m.title}
</h4>


<div>

<h4>
🥗 Ingredients
</h4>


<ul>

${m.ingredients.map(i=>`

<li>
✔ ${i}
</li>

`).join("")}


</ul>


</div>



<div>

<h4>
👨‍🍳 Instructions
</h4>

<p>
${m.instructions}
</p>


</div>



<div>

<h4>
🔥 Calories
</h4>

<p>
${m.calories}
</p>


</div>



</div>

`;




});



html+="</div>";



});



$("#recipe_output")
.html(html);



},



error:function(){

$("#recipe_loading")
.html(
"Unable to connect server"
);

}


});



});



});