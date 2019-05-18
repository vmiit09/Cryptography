// KSA For sender
function ksa ()
 {
  var j =0,k;
  
   for (i=0;i<256;i++)
        {
		k = string_key.charCodeAt(i % string_key.length);
		  j = (j + s[i] + k) % 256;

         swap(i, j); // Calling swap funtion        
        }
}  
// KSA For receiver
function ksar ()
 {
  var j =0,k;
   for (i=0;i<256;i++)
        {
		k = string_key1.charCodeAt(i % string_key1.length);
		  j = (j + t[i] + k) % 256;
         swapr(i, j); // Calling swap funtion        		
        }
}  