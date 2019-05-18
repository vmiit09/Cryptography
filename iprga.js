//IPRGA for receiver
function iprga(first,last)
{
 i = first;
 j = last;

 for(m=0;m<268;m++)
 {
 swapr(i, j);
 j = (j - t[i]+256) % 256;
 i = ((i - 1)+256) % 256;
 k = (t[i] + t[j]) % 256;
 }
 return [i,j];
}