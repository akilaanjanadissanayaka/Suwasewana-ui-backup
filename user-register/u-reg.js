// alert("Hello")
function phonenumber(inputtxt)
{
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(inputtxt.value.match(phoneno))
     {
    console.log("correct");
	   return true;
	 }
   else
     {
	   alert("Not a valid Phone Number");
	   return false;
     }
}