


function getresult(url) {
	$.ajax({
		url: url,
		type: "GET",
		data:  {rowcount:$("#rowcount").val(),"pagination_setting":$("#pagination-setting").val()},
		beforeSend: function(){$("#overlay").show();},
		success: function(data){
		$("#pagination-result").html(data);
		setInterval(function() {$("#overlay").hide(); },500);
		},
		error: function() 
		{} 	        
   });
}
function changePagination(option) {
	if(option!= "") {
		getresult("getresult.php");
	}
}

// main-title animation 

var wrapper = document.getElementsByClassName("main-title")[0];
wrapper.style.opacity="1";
wrapper.innerHTML = wrapper.textContent.replace(/./g,"<span>$&</span>");

var spans = wrapper.getElementsByTagName("span");

for(var i=0;i<spans.length;i++){
  spans[i].style.animationDelay = i*80+"ms";
}  


// end of main-title animation

// popup
$(document).scroll(function() {
    var scroll = $(this).scrollTop();
    if (scroll >= 300) {
      $("#popUp").css("margin-left", "-425px");
      $("#plus").css("margin-left", "0px");
    }
  });
  
  $("#plus").click(function() {
    $("#popUp").css("margin-left", "0px");
    $("#plus").css("margin-left", "-425px");
  });
  
  $("#close").click(function() {
    $("#popUp").css("margin-left", "-425px");
    $("#plus").css("margin-left", "0px");
  });
// end popup

// auto close navbar when click on link
document.querySelectorAll('.nav-item').forEach(link=>{
    link.addEventListener('click', () => {
     

            //Animate Links
             navLinks.classList.remove("open");
             links.forEach(link => {
                 link.classList.remove("fejd"); 
                 hamburger.classList.remove("toggle");
                
                
                
                })

             
             });
       
    })

// end




$(document).ready(function(){

 
 
    $('#comment_form').on('submit', function(event){
     event.preventDefault();
     var form_data = $(this).serialize();
     $.ajax({
      url:"PHP/add_comment.php",
      method:"POST",
      data:form_data,
      dataType:"JSON",
      success:function(data)
      {
       if(data.error != '')
       {
        $('#comment_form')[0].reset();
        $('#comment_message').html(data.error);
        $('#comment_id').val('0');
        load_comment();
       }
      }
     })
    });
   
    load_comment();
   
    function load_comment()
    {
     $.ajax({
      url:"PHP/fetch_comment.php",
      method:"POST",
      success:function(data)
      {
       $('#display_comment').html(data);
      }
     })
    }
   
    $(document).on('click', '.reply', function(){
     var comment_id = $(this).attr("id");
     $('#comment_id').val(comment_id);
     $('#comment_name').focus();
    });
    
   });
   
   

// function incrementBtn() {


//     let element = document.getElementById('incrementTxt');
//     let value = element.innerHTML;

//     ++value;

//     document.getElementById('incrementTxt').innerHTML = value;
// }



// var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();

// today = dd + '/' + mm + '/' + yyyy;
// document.write(today);


// const hello = (element) => {
//     element.hidden = true;
//   }


//   function saveBtn() {



//   }




function myFunction() {
    var x = document.getElementById("centered_nav");
    if (x.className === "rc_nav") {
        x.className += " responsive";
    } else {
        x.className = "rc_nav";
    }
}





// navbar

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-list");
const links = document.querySelectorAll(".nav-list li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fejd");
        
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

const navToggle = document.getElementById('nav-toggle');
const navLink = document.querySelectorAll('.navLink').parentElement;

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
    
});





