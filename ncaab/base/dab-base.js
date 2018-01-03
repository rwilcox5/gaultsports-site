
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

