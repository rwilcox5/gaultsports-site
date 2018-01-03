
function genRPI(wRec,wOpp,wOppOpp,hAdv,winType,teamwp,teamopp,teamadjwp,teamoppwp,teamoppoppwp,teamrpi){
	var teamactwp = [];
  for (idx=0;idx<allplayed.length;idx++){
          i = allplayed[idx];
          wins = 0;
          games = 0;
          opponents = [];
          adjgames = 0;
          adjwins = 0;
          actgames = 0;
          actwins = 0;
          for (iidx=1;iidx<i.length/4;iidx++){
                  
                  ii = [i[iidx*4-3],i[iidx*4-2],i[iidx*4-1],i[iidx*4]];
                  actgames+=1;
                  if (winType=='Won-Loss'){
                    games += 1;
                    if (ii[0]=='@'){
                            
                            if (ii[2]>ii[3]){adjwins +=1.0+hAdv; adjgames +=1.0+hAdv; opponents.push([ii[1],0]); wins +=1;}
                            else {adjgames +=1.0-hAdv; opponents.push([ii[1],1]);}
                    }
                    else if (ii[0]=='vs.'){
                            
                            if (ii[2]>ii[3]){adjwins +=1.0; adjgames += 1.0; opponents.push([ii[1],0]); wins +=1;}
                            else {adjgames += 1.0; opponents.push([ii[1],1]);}
                    }
                    else{
                            
                            if (ii[2]>ii[3]){adjwins +=1.0-hAdv; adjgames += 1.0-hAdv; opponents.push([ii[1],0]); wins +=1;}
                            else {adjgames += 1.0+hAdv; opponents.push([ii[1],1]);}
                    }
                  }
                  else if (winType=='Pythagorean'){
                    games += ii[3];
                    if (ii[0]=='@'){
                            
                            if (ii[2]>ii[3]){adjwins +=(1.0+hAdv)*ii[2]; adjgames +=(1.0+hAdv)*ii[3]; opponents.push([ii[1],ii[3],ii[2]]); wins +=ii[2]; actwins +=1;}
                            else {adjwins +=(1.0-hAdv)*ii[2]; adjgames +=(1.0-hAdv)*ii[3]; opponents.push([ii[1],ii[3],ii[2]]); wins +=ii[2];}
                    }
                    else if (ii[0]=='vs.'){
                            
                            if (ii[2]>ii[3]){adjwins +=1.0*ii[2]; adjgames += 1.0*ii[3]; opponents.push([ii[1],ii[3],ii[2]]); wins +=ii[2]; actwins +=1;}
                            else {adjwins +=1.0*ii[2]; adjgames += 1.0*ii[3]; opponents.push([ii[1],ii[3],ii[2]]); wins +=ii[2];}
                    }
                    else{
                            
                            if (ii[2]>ii[3]){adjwins +=(1.0-hAdv)*ii[2]; adjgames +=(1.0-hAdv)*ii[3]; opponents.push([ii[1],ii[3],ii[2]]); wins +=ii[2]; actwins +=1;}
                            else {adjwins +=(1.0+hAdv)*ii[2]; adjgames +=(1.0+hAdv)*ii[3]; opponents.push([ii[1],ii[3],ii[2]]); wins +=ii[2];}
                    }
                  }

          }
          teamwp.push([i[0],wins,games]);
          teamactwp.push([i[0],actwins,actgames]);
          teamopp.push([i[0],opponents]);
          teamadjwp.push([i[0],adjwins*adjwins*1./(adjwins*adjwins+adjgames*adjgames)]);
  }

  for (idx=0;idx<teamopp.length;idx++){
          i = teamopp[idx];
          oppwp = 0.;
          opptot = 0.;
          for (iidx=0;iidx<i[1].length;iidx++){
                  ii = i[1][iidx];
                  for (iiidx=0;iiidx<teamwp.length;iiidx++){
                          iii = teamwp[iiidx];
                          if (iii[0]==ii[0]){
                                  if (iii[2]>1){
                                          if (winType=='Won-Loss'){
                                            oppwp += (iii[1]-ii[1])*1./(iii[2]-1.);
                                            opptot += 1.;
                                          }
                                          else if (winType=='Pythagorean'){
                                            if (iii[2]-ii[2]>0 && iii[1]-ii[1]>0){
                                              oppwp += (iii[1]-ii[1])*(iii[1]-ii[1])*1./((iii[1]-ii[1])*(iii[1]-ii[1])+(iii[2]-ii[2])*(iii[2]-ii[2]));
                                              opptot += 1.;
                                            }
                                            else{
                                              console.log(iii);
                                            }
                                          }
                                  }

                                  break
                          }
                  }
          }
          if (opptot>1){teamoppwp.push([i[0],oppwp*1./opptot]);}
  }

  for (idx=0;idx<teamopp.length;idx++){
          i = teamopp[idx];
          oppwp = 0.;
          opptot = 0.;
          for (iidx=0;iidx<i[1].length;iidx++){
                  ii = i[1][iidx];
                  for (iiidx=0;iiidx<teamoppwp.length;iiidx++){
                          iii = teamoppwp[iiidx];
                          if (iii[0]==ii[0]){
                                  oppwp += iii[1];
                                  opptot += 1.;

                                  break
                          }
                  }
          }
          if (opptot>1){teamoppoppwp.push([i[0],oppwp*1./opptot]);}
  } 

  for (i=0;i<teamwp.length;i++){
          tname = teamwp[i][0];
          teamopp = -1;
          teamoppopp = -1;
          for (ii=0;ii<teamoppwp.length;ii++){
                  if (tname==teamoppwp[ii][0]){teamopp=teamoppwp[ii][1];}
          }
          for (ii=0;ii<teamoppoppwp.length;ii++){
                  if (tname==teamoppoppwp[ii][0]){teamoppopp=teamoppoppwp[ii][1];}
          }
          if (teamopp != -1 && teamoppopp != -1){
                  teamrpi.push([tname,(teamadjwp[i][1]*wRec+teamopp*wOpp+teamoppopp*wOppOpp)*(1./(wRec+wOpp+wOppOpp)),(teamopp*wOpp+teamoppopp*wOppOpp)*(1./(wOpp+wOppOpp)),teamadjwp[i][1],teamopp,teamoppopp,teamactwp[i][1],teamactwp[i][2]-teamactwp[i][1]])
          }
  }

  unsorted = true;
  while (unsorted){
          unsorted = false;
          for (i=0;i<teamrpi.length-1;i++){
                  if (teamrpi[i][1]<teamrpi[i+1][1]){
                          holdrpi = teamrpi[i];
                          teamrpi[i]=teamrpi[i+1];
                          teamrpi[i+1]=holdrpi;
                          unsorted = true;
                  }
          }
  }
  return teamrpi;
}

function runRating(){
      var teamwp = [];
      var teamopp = [];
      var teamadjwp = [];
      var teamoppwp = [];
      var teamoppoppwp = [];
      var teamrpi = [];
      
      var table = document.getElementById("rpiTable");
      wRec = Math.min(document.getElementById('wRec').value,1.);
      wOpp = Math.min(document.getElementById('wOpp').value,1.000);
      wOppOpp = Math.min(document.getElementById('wOppOpp').value,1.000);
      hAdv = Math.min(document.getElementById('hAdv').value,1.000);
      teamrpi = genRPI(wRec,wOpp,wOppOpp,hAdv,'Pythagorean',teamwp,teamopp,teamadjwp,teamoppwp,teamoppoppwp,teamrpi);
      table.innerHTML = "<thead><tr><th>Rk</th><th>School</th><th>RPI</th><th>SOS</th><th>Rec.</th></tr></thead>";
      for (i=0;i<25;i++){ console.log(allteams[teamrpi[i][0]],teamrpi[i][1],teamrpi[i][2],teamrpi[i][3],teamrpi[i][4],teamrpi[i][5],teamrpi[i][6],teamrpi[i][7]);}
      nrows = Math.min(document.getElementById('nRows').value,1000);
      var ii = 0;
      for (i=0;i<nrows;i++){

        table.insertRow(i+1); 
        if (i%2==0){table.rows[i+1].style.background = "rgba(230, 235, 237, 0.25)";}
        else {table.rows[i+1].style.background = "rgba(255, 255, 255, 0.25)";}
        table.rows[i+1].style.border = "solid 1px rgba(210, 215, 217, 0.75)";
        table.rows[i+1].style.borderWidth = "1px 0px 1px 0px";
        table.rows[i+1].insertCell(0); table.rows[i+1].cells[0].innerHTML = i+1;
        table.rows[i+1].insertCell(1); table.rows[i+1].cells[1].innerHTML = allteamnames[teamrpi[i][0]];
        table.rows[i+1].insertCell(2); table.rows[i+1].cells[2].innerHTML = teamrpi[i][1].toFixed(4);
        table.rows[i+1].insertCell(3); table.rows[i+1].cells[3].innerHTML = teamrpi[i][2].toFixed(4);
        table.rows[i+1].insertCell(4); table.rows[i+1].cells[4].innerHTML = teamrpi[i][6].toString()+'-'+teamrpi[i][7].toString();

      }
      headerRow = ['Rk','School','RPI','SOS','Rec.'];

      if (document.getElementById('outputType').value=='Markdown'){
        markdownQBs(headerRow);
      }
      if (document.getElementById('outputType').value=='HTML'){
        htmlQBs(headerRow);
      }

}

function toDefault(defaultType){
  if (defaultType=='NFL'){

  }
  else if (defaultType=='NCAA'){

  }
  else if (defaultType=='Fantasy'){

  }
}


function markdownQBs(headerRow){
  var table = document.getElementById("rpiTable");
  var mdown = '|';
  for (i=0;i<headerRow.length;i++){
  		mdown += headerRow[i]+'|';
	}
	mdown += '<br>|';
	for (i=0;i<headerRow.length;i++){
  		mdown += ':---|';
	}


  for (i=0;i<table.rows.length-1;i++){
     mdown+='<br>|';
     mdown += (i+1).toString();
     mdown+='|';
     mdown+= table.rows[i+1].cells[1].innerHTML;
     mdown+='|';
     for (ii=0;ii<3;ii++){mdown += table.rows[i+1].cells[ii+2].innerHTML; mdown += '|';}
  }
  table.innerHTML = '';
  var markdown = document.getElementById("markdown_spot");
  markdown.innerHTML = mdown;
}

function htmlQBs(headerRow){
  var table = document.getElementById("rpiTable");
  
  var htmlstr = "<pre>&lt;table&gt;&lt;thead&gt;&lt;tr&gt;";
  	for (i=0;i<headerRow.length;i++){
  		htmlstr += '&lt;th&gt;'+headerRow[i]+'&lt;/th&gt;';
	}
  htmlstr += "&lt;/tr&gt;&lt;/thead&gt;</pre>";
  for (i=0;i<table.rows.length-1;i++){
     htmlstr+='<pre>&lt;tr&gt;';
     htmlstr += '&lt;td&gt;'+(i+1).toString()+'&lt;/td&gt;';
     htmlstr += '&lt;td&gt;'+table.rows[i+1].cells[1].innerHTML+'&lt;/td&gt;';
     for (ii=0;ii<3;ii++){htmlstr += '&lt;td&gt;'+table.rows[i+1].cells[ii+2].innerHTML+'&lt;/td&gt;'; }
     htmlstr += '&lt;/tr&gt;</pre>';
  }
  htmlstr += '<pre>&lt;/table&gt;</pre>';
  table.innerHTML = '';
  var markdown = document.getElementById("markdown_spot");
  markdown.innerHTML = htmlstr;
}


