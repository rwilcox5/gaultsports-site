dabrank = [{"name":"Old Dominion","dab":1.95242334071,"conf":"Conference USA"},{"name":"Syracuse","dab":1.8618585707,"conf":"ACC"},{"name":"St. John's","dab":1.68482186745,"conf":"Big East"},{"name":"St. Bonaventure","dab":1.48556858856,"conf":"Atlantic 10"},{"name":"San Diego State","dab":1.34344532462,"conf":"Mountain West"},{"name":"USC","dab":0.985089038905,"conf":"Pac-12"},{"name":"Penn State","dab":0.835946514624,"conf":"Big Ten"},{"name":"North Carolina State","dab":0.434999684581,"conf":"ACC"},{"name":"Boise State","dab":0.389699764557,"conf":"Mountain West"},{"name":"Rutgers","dab":-0.526407704964,"conf":"Big Ten"},{"name":"Purdue","dab":5.2334553222,"conf":"Big Ten"},{"name":"Michigan State","dab":4.99150473788,"conf":"Big Ten"},{"name":"Virginia","dab":3.85986036581,"conf":"ACC"},{"name":"Texas Tech","dab":3.8493524335,"conf":"Big 12"},{"name":"Kansas","dab":3.55176514152,"conf":"Big 12"},{"name":"Villanova","dab":2.89173624009,"conf":"Big East"},{"name":"Duke","dab":2.12383260182,"conf":"ACC"},{"name":"West Virginia","dab":1.37125162951,"conf":"Big 12"},{"name":"Cincinnati","dab":-0.762457166138,"conf":"American Athletic Conference"},{"name":"Texas A&M","dab":-2.33019320478,"conf":"SEC"},{"name":"Creighton","dab":1.82138978927,"conf":"Big East"},{"name":"Xavier","dab":1.40979549924,"conf":"Big East"},{"name":"Virginia Tech","dab":1.29230727204,"conf":"ACC"},{"name":"Florida State","dab":1.22906164485,"conf":"ACC"},{"name":"Clemson","dab":1.02153152499,"conf":"ACC"},{"name":"Miami (FL)","dab":0.729617788867,"conf":"ACC"},{"name":"Maryland","dab":0.431342453766,"conf":"Big Ten"},{"name":"North Carolina","dab":-0.10520536634,"conf":"ACC"},{"name":"Michigan","dab":-0.279824251438,"conf":"Big Ten"},{"name":"Arkansas","dab":-0.503086641434,"conf":"SEC"},{"name":"Seton Hall","dab":1.67790541768,"conf":"Big East"},{"name":"Arizona","dab":1.46049234955,"conf":"Pac-12"},{"name":"TCU","dab":1.3594986032,"conf":"Big 12"},{"name":"Louisville","dab":0.99956042473,"conf":"ACC"},{"name":"Wichita State","dab":0.825098828603,"conf":"American Athletic Conference"},{"name":"UNLV","dab":0.641047074566,"conf":"Mountain West"},{"name":"Auburn","dab":-0.32081494492,"conf":"SEC"},{"name":"Nevada","dab":-0.357855192817,"conf":"Mountain West"},{"name":"Kansas State","dab":-0.502394891598,"conf":"Big 12"},{"name":"Minnesota","dab":-0.615862261866,"conf":"Big Ten"}];
function runRating(dabType){

      nrows = 10;
      var table = document.getElementById("dabTable");
      table.innerHTML = "<thead><tr><th>Rk</th><th>School</th><th>Conf</th><th>DAB</th></tr></thead>";

      var ii = 0;
      if (dabType==0){
        for (i=0;i<nrows;i++){
          table.insertRow(i+1); 
          if (i%2==0){table.rows[i+1].style.background = "rgba(230, 235, 237, 0.25)";}
          else {table.rows[i+1].style.background = "rgba(255, 255, 255, 0.25)";}
          table.rows[i+1].style.border = "solid 1px rgba(210, 215, 217, 0.75)";
          table.rows[i+1].style.borderWidth = "1px 0px 1px 0px";
          table.rows[i+1].insertCell(0); table.rows[i+1].cells[0].innerHTML = i+45;
          table.rows[i+1].insertCell(1); table.rows[i+1].cells[1].innerHTML = dabrank[i]['name'];
          table.rows[i+1].insertCell(2); table.rows[i+1].cells[2].innerHTML = dabrank[i]['conf'];
          table.rows[i+1].insertCell(3); table.rows[i+1].cells[3].innerHTML = dabrank[i]['dab'].toFixed(2);

        }
    }
    else if (dabType==1){
        for (i=0;i<nrows;i++){
          table.insertRow(i+1); 
          if (i%2==0){table.rows[i+1].style.background = "rgba(230, 235, 237, 0.25)";}
          else {table.rows[i+1].style.background = "rgba(255, 255, 255, 0.25)";}
          table.rows[i+1].style.border = "solid 1px rgba(210, 215, 217, 0.75)";
          table.rows[i+1].style.borderWidth = "1px 0px 1px 0px";
          table.rows[i+1].insertCell(0); table.rows[i+1].cells[0].innerHTML = i+1;
          table.rows[i+1].insertCell(1); table.rows[i+1].cells[1].innerHTML = dabrank[i+10]['name'];
          table.rows[i+1].insertCell(2); table.rows[i+1].cells[2].innerHTML = dabrank[i+10]['conf'];
          table.rows[i+1].insertCell(3); table.rows[i+1].cells[3].innerHTML = dabrank[i+10]['dab'].toFixed(2);

        }
    }
    else if (dabType==4){
        for (i=0;i<nrows;i++){
          table.insertRow(i+1); 
          if (i%2==0){table.rows[i+1].style.background = "rgba(230, 235, 237, 0.25)";}
          else {table.rows[i+1].style.background = "rgba(255, 255, 255, 0.25)";}
          table.rows[i+1].style.border = "solid 1px rgba(210, 215, 217, 0.75)";
          table.rows[i+1].style.borderWidth = "1px 0px 1px 0px";
          table.rows[i+1].insertCell(0); table.rows[i+1].cells[0].innerHTML = i+12;
          table.rows[i+1].insertCell(1); table.rows[i+1].cells[1].innerHTML = dabrank[i+20]['name'];
          table.rows[i+1].insertCell(2); table.rows[i+1].cells[2].innerHTML = dabrank[i+20]['conf'];
          table.rows[i+1].insertCell(3); table.rows[i+1].cells[3].innerHTML = dabrank[i+20]['dab'].toFixed(2);

        }
    }
    else if (dabType==8){
        for (i=0;i<nrows;i++){
          table.insertRow(i+1); 
          if (i%2==0){table.rows[i+1].style.background = "rgba(230, 235, 237, 0.25)";}
          else {table.rows[i+1].style.background = "rgba(255, 255, 255, 0.25)";}
          table.rows[i+1].style.border = "solid 1px rgba(210, 215, 217, 0.75)";
          table.rows[i+1].style.borderWidth = "1px 0px 1px 0px";
          table.rows[i+1].insertCell(0); table.rows[i+1].cells[0].innerHTML = i+28;
          table.rows[i+1].insertCell(1); table.rows[i+1].cells[1].innerHTML = dabrank[i+30]['name'];
          table.rows[i+1].insertCell(2); table.rows[i+1].cells[2].innerHTML = dabrank[i+30]['conf'];
          table.rows[i+1].insertCell(3); table.rows[i+1].cells[3].innerHTML = dabrank[i+30]['dab'].toFixed(2);

        }
    }

      if (document.getElementById('outputType').value=='Markdown'){
        markdownQBs();
      }
      if (document.getElementById('outputType').value=='HTML'){
        htmlQBs();
      }

}



function markdownTable(){
  var table = document.getElementById("dabTable");
  var mdown = '|Rank|Name|Att|Comp|Yards|TD|INT|Rating|Year|<br />|---:|---|---:|---:|---:|---:|---:|---:|---:|';
  for (i=0;i<table.rows.length-1;i++){
     mdown+='<br>|';
     mdown += (i+1).toString();
     mdown+='|';
     mdown+= table.rows[i+1].cells[1].innerHTML;
     mdown+='|';
     for (ii=0;ii<7;ii++){mdown += table.rows[i+1].cells[ii+2].innerHTML; mdown += '|';}
  }
  table.innerHTML = '';
  var markdown = document.getElementById("markdown_spot");
  markdown.innerHTML = mdown;
}

function htmlQBs(){
  var table = document.getElementById("qbTable");
  var htmlstr = "<pre>&lt;table&gt;&lt;thead&gt;&lt;tr&gt;&lt;th&gt;Rk&lt;/th&gt;&lt;th&gt;Name&lt;/th&gt;&lt;th&gt;Att&lt;/th&gt;&lt;th&gt;Cmp&lt;/th&gt;&lt;th&gt;Yds&lt;/th&gt;&lt;th&gt;TD&lt;/th&gt;&lt;th&gt;INT&lt;/th&gt;&lt;th&gt;Rating&lt;/th&gt;&lt;th&gt;Year&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt;</pre>";
  for (i=0;i<table.rows.length-1;i++){
     htmlstr+='<pre>&lt;tr&gt;';
     htmlstr += '&lt;td&gt;'+(i+1).toString()+'&lt;/td&gt;';
     htmlstr += '&lt;td&gt;'+table.rows[i+1].cells[1].innerHTML+'&lt;/td&gt;';
     for (ii=0;ii<7;ii++){htmlstr += '&lt;td&gt;'+table.rows[i+1].cells[ii+2].innerHTML+'&lt;/td&gt;'; }
     htmlstr += '&lt;/tr&gt;</pre>';
  }
  htmlstr += '<pre>&lt;/table&gt;</pre>';
  table.innerHTML = '';
  var markdown = document.getElementById("markdown_spot");
  markdown.innerHTML = htmlstr;
}

