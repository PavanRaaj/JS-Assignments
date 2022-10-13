function Rotations( string1,  string2){  
        return (string1.length == string2.length) &&
               ((string1 + string1).indexOf(string2) != -1);
    }

var string1 = "ABCD";
var string2 = "BCDA";
 
 if (Rotations(string1, string2))
   alert("Strings are rotations");
 else
   alert("Strings are not rotations");
 