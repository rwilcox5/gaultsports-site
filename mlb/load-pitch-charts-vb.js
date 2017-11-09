
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(0);
}

function loadJS(){
		pid = getQueryVariable('pid');
		bid = getQueryVariable('bid');
		if (pid != 0){
			
		    var filename = '/mlb/pitchers/pitch-charts-vb-'+pid.toString()+'-'+bid.toString()+'.js';
	        var fileref=document.createElement('script');
	        fileref.setAttribute("type","text/javascript");
	        fileref.setAttribute("src", filename);
	        document.getElementsByTagName("head")[0].appendChild(fileref);

	    }

}

loadJS();