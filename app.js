
// Welcome message 
alert('Welcome to our Energy Solutions site')

// asking for electrical consumption
var eleConsumption= prompt("Please enter your monthly electrical consumption in KWh")
console.log(eleConsumption+"KWh per month");



// asking for the type of service needed
var typeOfService = prompt('what is the type of the service you need EPC or O&M ?');

if (typeOfService=="EPC") {document.write('<h3> Send us your contact details for our EPC services </h3>'); document.write(' <img src="https://img.forconstructionpros.com/files/base/acbm/fcp/image/2019/02/GettyImages_xavierarnau.5c70703e85023.png?auto=format%2Ccompress&fit=crop&h=288&q=70&w=512" alt="EPC" style="width:300px; height:250px">')}

else if(typeOfService=="O&M")
{document.write('<h3> Send us your contact details for our O&M services </h3>'); document.write('<img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLdNDDTQHTxMu1c0mKWuvU_lKihs9ltabjwQ&usqp=CAU" alt="O&M" style="width:300px; height:250px">')}

else {document.write('<h2> Try again, please use capital letters')}

// make sure the I have the prompt response shows in console
console.log(typeOfService);

confirm ("you are inetesrted in our services")
