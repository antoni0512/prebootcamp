/*var newWindow=window.open( "http://www.google.com","newWindow","height=100,width=200");
newWindow.moveTo(200,150);
newWindow.close();
window.close();*/

// also you can put the above data in a function
/*function window(){
	    var newWindow=window.open( "http://www.google.com","newWindow","height=100,width=200");
        newWindow.moveTo(200,150);
        newWindow.close();
        window.close();
    }*/

// BOM-Navigator Object
 /*function navigatorProp(){

 	    document.write("<br> appCodeName:"+navigator.appCodeName);
 	    document.write("<br> appName:"+navigator.appName);
 	    document.write("<br> platform:"+navigator.platform);
 	    document.write("<br> cookies is enabled:"+navigator.cookieEnabled);
        document.write("<br> product:"+navigator.product);
}

navigatorProp();*/


//BOM-location object

function locationProp(){

	     console.log("href of location:"+location.href);
	     
}