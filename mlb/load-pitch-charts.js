
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
		year = getQueryVariable('year');
		month = getQueryVariable('month');
		day = getQueryVariable('day');
		if (pid != 0){
			
			if (parseInt(day)<10){day = '0'+day.toString()}
			if (parseInt(month)<10){month = '0'+month.toString()}
		    var filename = '/mlb/pitchers/pitch-charts-'+pid.toString()+'-'+year.toString()+'-'+month.toString()+'-'+day.toString()+'.js';
	        var fileref=document.createElement('script');
	        fileref.setAttribute("type","text/javascript");
	        fileref.setAttribute("src", filename);
	        document.getElementsByTagName("head")[0].appendChild(fileref);

	    }

}

loadJS();