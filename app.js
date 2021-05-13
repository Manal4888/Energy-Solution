

// Welcome message 
alert('Welcome to our Energy Solutions website')

// asking for electrical consumption
var eleConsumption= prompt("Please enter your monthly electrical consumption in KWh")
console.log(eleConsumption+"KWh per month");



 /* Replace this part by Decleration Function

// asking for the type of service needed
var typeOfService = prompt('what is the type of the service you need?');
// keep asking until the value match EPC or O&M
while (typeOfService !="EPC" && typeOfService !="O&M")
{typeOfService=prompt('Could you please choose between EPC or O&M?')}

// show a picture related to the selected Service and ask for contact details 

if (typeOfService=="EPC") 
{ document.write('<h3> Send us your contact details for our EPC services </h3>'); 
document.write(' <img src="https://img.forconstructionpros.com/files/base/acbm/fcp/image/2019/02/GettyImages_xavierarnau.5c70703e85023.png?auto=format%2Ccompress&fit=crop&h=288&q=70&w=512" alt="EPC" style="width:300px; height:250px">')}

if (typeOfService=="EPC") {document.write('<h3> Send us your contact details for our EPC services </h3>'); document.write(' <img src="https://img.forconstructionpros.com/files/base/acbm/fcp/image/2019/02/GettyImages_xavierarnau.5c70703e85023.png?auto=format%2Ccompress&fit=crop&h=288&q=70&w=512" alt="EPC" style="width:300px; height:250px">')}


else if(typeOfService=="O&M")
{document.write('<h3> Send us your contact details for our O&M services </h3>'); document.write('<img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLdNDDTQHTxMu1c0mKWuvU_lKihs9ltabjwQ&usqp=CAU" alt="O&M" style="width:300px; height:250px">')}


/* this part has been removed to add while loop above

else {document.write('<h2> Try again, please use capital letters')}
 make sure the I have the prompt response shows in console
console.log(typeOfService);*/




function selectTypeOfService ()
{
  var typeOfService = prompt('what is the type of the service you need?');
  
  while (typeOfService !="EPC" && typeOfService !="O&M")
{typeOfService=prompt('Could you please choose between EPC or O&M?')}

if (typeOfService=="EPC") 
{ result1='<h3> Send us your contact details for our EPC services </h3>'; 
result2=' <img src="https://img.forconstructionpros.com/files/base/acbm/fcp/image/2019/02/GettyImages_xavierarnau.5c70703e85023.png?auto=format%2Ccompress&fit=crop&h=288&q=70&w=512" alt="EPC" style="width:300px; height:250px">'}

else if(typeOfService=="O&M")
{result1='<h3> Send us your contact details for our O&M services </h3>'; 
result2='<img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLdNDDTQHTxMu1c0mKWuvU_lKihs9ltabjwQ&usqp=CAU" alt="O&M" style="width:300px; height:250px">'}
  
console.log(typeOfService);
return result1, result2}

selectTypeOfService() // call the function
document.write(result1,result2) //show the results


confirm ("is this your first time visiting our website?")


/* Replace this part by Function Expression

confirm ("is this your first time visiting website ?")

var ratingFactor=0;
ratingFactor=prompt (" Please rate our website ");

for (var i=0; i < ratingFactor ; i++ ){ 
<<<<<<< HEAD
{if(ratingFactor>5){ratingFactor=5}}
  document.write( '<img src="https://www.energylivenews.com/wp-content/uploads/2014/06/Smiley-face-emoticon-575.jpg"style="width:70px"'); 
  document.write( '<h5 style="color:blue";"background-color:blue"> Good </h5>');
      
  console.log(ratingFactor); }
  */


var showRating=function() { 

var ratingFactor = prompt(" Please rate our website ,see below");

if (ratingFactor > 5){
  ratingFactor = 5;
  }
var result3 ='';
var result4 ='';

for (var i = 0; i < ratingFactor ; i++ ) { 
  result3 += '<img src="https://www.energylivenews.com/wp-content/uploads/2014/06/Smiley-face-emoticon-575.jpg" width="50px">';

  result4 += '<h5 style="color:blue";"background-color:blue"> Good </h5>';
}
document.write(result3,result4);
return result3, result4
  }
showRating()





  
  






 






