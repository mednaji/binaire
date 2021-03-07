$(function(){
   $("#input1").keyup(
   	function() {
   		var v=$("#input1").val(),l=v.length,r=0,j,i,t=Array(),n=parseInt(v);
         j=1;i=0;
       
       do{ t[i]=j; j=j*2; /*console.log(t[i]);*/ i++; }while(j<=n);
         r="";i=t.length-1;
          do{
          if(n>=t[i]){ r+="1"; n=n-t[i];}
          else {r+="0";   }  
           console.log("t= "+t[i]);
           console.log("i= "+i);i--;
        }while(i>=0)  
        $("#input2").val(r);
       
   	});

   $("#input2").keyup(
    function() {
      var v=$("#input2").val(),l=v.length,r=0,j,i,t=Array(),n=parseInt(v);
         j=1;i=0;
       

          for ( i =l-1 ; i>=0; i--) {
                 if(v[i]==1) r=r+j;
                 if(v[i]!=1 && v[i]!=0 ) {r="erreur"; i=0;}
                 j=j*2;
                }
            
        $("#input1").val(r);
       
    });

});

