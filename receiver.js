function receivers(resulted)
{

//input key
string_key1 = document.getElementById("seckey1").value;

if (string_key1 =='')
{
	alert("Missing key !");
}
else
{
// Checking the case here  
//Case 1: the sequence of the packets received is 0, 1, 2 and 3
//Case 2: the sequence of the packet received is 1, 0, 3 and 2
//Case 3: the sequence of the packet received is 3, 2, 1 and 0 

	
var sequence = document.getElementById("sequence");

var sequences = sequence.options[sequence.selectedIndex].value;

var rinput =[];

// setting up the cases 2 and 3 by hardcoding 
// default case is Case 1 which can decrypt data of any size
// Case 2 and Case 3 can decrypt only 4 packets of 272 bytes only
if (sequences =="Case 1")
{
	//Case 1: the sequence of the packets received is 0, 1, 2 and 3
rinput = resulted;	
}
else if (sequences =="Case 2")
{
	//Case 2: the sequence of the packet received is 1, 0, 3 and 2

	rinput[0] = resulted[1];
	rinput[1] = resulted[0];
	rinput[2] = resulted[3];
	rinput[3] = resulted[2];
}
else if(sequences =="Case 3")
{ //Case 3: the sequence of the packet received is 3, 2, 1 and 0 
	rinput[0] = resulted[3];
	rinput[1] = resulted[2];
	rinput[2] = resulted[1];
	rinput[3] = resulted[0];

}	

// blocks size at receiver end

var blocksize = resulted.length;

// initial state of RC4 
 for (ir=0;ir<256;ir++)
  { 
  t[ir]=ir; 
  } 

 // calling ksa function -->
 ksar(); 
var ptext = [];
var ptext1 = [];
var messhash = [];

 var first =0,last =0;
 var scb = 0;
 
 // compare the states of sender and receiver and perform PRGA and IPRGA multiple times
  for( a=0; a<blocksize;a++)
 {
	 var sca ="";
	 var ctexte ="";
	 var otp ="";
	 for(w=0;w<272;w++)
	 {  
		 if(w<4){	
		 // Extract the counter value from sender
		 sca+= String.fromCharCode((rinput[a][0].charCodeAt(w) ));
		 }
		 if(w>=4)
		 {// extract the 268 byte cipher from sender
		 ctexte += String.fromCharCode((rinput[a][0].charCodeAt(w) ));
		 }
	 }
 if((Number(sca)-scb )==0)
 {
	ptext = prgar(first,last);
	first = ptext[1];
	last = ptext[2];
	 var cipherst = ptext[0];
	
	for(r=0;r<268;r++)
 {// decode tp generate text along with hash function
  otp += String.fromCharCode((ctexte.charCodeAt(r) )^ cipherst[r][0]);
 }
 messhash.push([otp]);   
	scb = scb +1;
 }
 else if ((Number(sca)-scb)>0)
 {
	 for (fr=0;fr<(Number(sca)-scb);fr++)
	 {
		ptext = prgar(first,last);
		first = ptext[1];
		last = ptext[2];		
	 }
scb = (Number(sca));
	ptext = prgar(first,last);
			first = ptext[1];
		last = ptext[2];
		var cipherst = ptext[0];	
	for(r=0;r<268;r++)
 {
  otp += String.fromCharCode((ctexte.charCodeAt(r) )^ cipherst[r][0]);
 }
	messhash.push([otp]);
		scb = scb +1;
 }
  else if ((Number(sca)-scb)<0)
 {
	 for (fr=0;fr<(scb-Number(sca));fr++)
	 {
		ptext1 = iprga(first,last);
		first = ptext1[0];
		last = ptext1[1];		
	 }

	 scb = (Number(sca));
	ptext = prgar(first,last);
			first = ptext[1];
		last = ptext[2];
		var cipherst = ptext[0];	
	for(r=0;r<268;r++)
 {
  otp += String.fromCharCode((ctexte.charCodeAt(r) )^ cipherst[r][0]);
 }
		messhash.push([otp]);
		scb = scb +1;
 }
 }
 
 // Print message with hash
 var printhashmessage ='';
 // Print message
 var printmessage = '';
 // Print sender hash value
 var printsendhash ='';
 // Print receiver hash value
 var printrechash ='';
 
 for(ii=0;ii<blocksize;ii++)
 {
	 printhashmessage += "</br> Packet " + ii+" : "+ messhash[ii] +"</br></br>";
	 var sendhashed ='';
	 var textwithouthash ='';
	 var rechashed = ' ';
	 for(ai=0;ai<268;ai++)
	 {
		 if (ai <252)
		 { // extract the message
			 textwithouthash = textwithouthash + String.fromCharCode((messhash[ii][0].charCodeAt(ai)));
		 }
		 else 
		 { // extract the hash value of the message
			 sendhashed = sendhashed + String.fromCharCode((messhash[ii][0].charCodeAt(ai)));
		 }
	 }	 
	 rechashed = hashCoded(textwithouthash); // find hash of the received message.Therfter the hash message from sender and receiver can be matched to confirm the sender
	 printmessage = printmessage +"</br> Packet " + ii +": "+textwithouthash+"</br></br>";
	 printsendhash  = printsendhash +"</br> Packet " + ii +": "+sendhashed+"</br></br>";
     printrechash  = printrechash + "</br> Packet " + ii +": "+rechashed+"</br></br>";

 }
 
document.getElementById("messhashtext").innerHTML = 'Message Hash text:'+printhashmessage ;
document.getElementById("sendhashtext").innerHTML = 'Sender Hash Value:'+printsendhash ;
document.getElementById("rechashtext").innerHTML = 'Receiver Hash Value:'+printsendhash ;
document.getElementById("ntext").innerHTML = 'Decoded Message :'+printmessage ;
}
}
// hash code function
function hashCoded(textwithouthash){
// external java script code
md5(textwithouthash);
var hash = md5.create();
hash.update(textwithouthash);
hash.hex();
var hashed = hash.array();
var ka ='';
for(i=0;i<hashed.length;i++)
{
 ka+=String.fromCharCode(hashed[i]);
}
return ka;
}


// Function for Swap 


function swapr (k,l)
{
var temp =t[k];
t[k]=t[l];
t[l]=temp;
}

 