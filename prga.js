//PRGA For sender
function prga(first,last)
{
i=first;
j=last;
var res = [];
for(m=0;m<268;m++)
{
i = (i + 1) % 256;
j = (j + s[i]) % 256;
swap(i, j);
k = (s[i] + s[j]) % 256;
res.push([s[k]]);
}	
return [res,i,j];
}
// PRGA For receiver
function prgar(first,last)
{
i=first;
j=last;
var res = [];
for(m=0;m<268;m++)
{
i = (i + 1) % 256;
j = (j + t[i]) % 256;
swapr(i, j);
k = (t[i] + t[j]) % 256;
res.push([t[k]]);
}	
return [res,i,j];
}