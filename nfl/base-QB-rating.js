function runRatingBase(){

      compr = document.getElementById('compWeight').value;
      yardr = document.getElementById('yardsWeight').value;
      tdr = document.getElementById('tdWeight').value;
      intr = document.getElementById('intWeight').value;
      nrows = document.getElementById('nRows').value;
      minAtt = document.getElementById('minAtt').value;
      minComp = document.getElementById('compMin').value*100;
      maxComp = document.getElementById('compMax').value*100;
      minYards = document.getElementById('yardsMin').value*100;
      maxYards = document.getElementById('yardsMax').value*100;
      minInt = document.getElementById('intMin').value*100;
      maxInt = document.getElementById('intMax').value*100;
      minTd = document.getElementById('tdMin').value*100;
      maxTd = document.getElementById('tdMax').value*100;
      lengthType = document.getElementById('lengthType').value;
      nweeks = document.getElementById('nweeks').value;
      nrows = Math.min(document.getElementById('nRows').value,1000);
      _makeTable(compr,yardr,tdr,intr,nrows,minAtt,minComp,maxComp,minYards,maxYards,minInt,maxInt,minTd,maxTd,lengthType,nweeks);
      retdouble = _sendTen(5,0);
      var output = document.getElementById("output");
      var outputstr = '<pre>&lt;table&gt;&lt;thead&gt;&lt;tr&gt;&lt;th&gt;Rank&lt;/th&gt;&lt;th&gt;Name&lt;/th&gt;&lt;th&gt;Att.&lt;/th&gt;&lt;th&gt;Comp.&lt;/th&gt;&lt;th&gt;Yards&lt;/th&gt;&lt;th&gt;TD&lt;/th&gt;&lt;th&gt;INT&lt;/th&gt;&lt;th&gt;Rating&lt;/th&gt;&lt;th&gt;Year&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt;';
      
      var ii = 0;
      for (i=0;i<nrows;i++){
        outputstr += "&lt;tr&gt;&lt;td&gt;";
        outputstr += (i+1).toString();
        outputstr += "&lt;/td&gt;&lt;td&gt;";
        outputstr += getQBname(_sendTen(7,i,lengthType));
        outputstr += "&lt;/td&gt;&lt;td&gt;";
        for (ii=0;ii<6;ii++){outputstr += _sendTen(ii,i,lengthType); outputstr += "&lt;/td&gt;&lt;td&gt;";}
        outputstr += (_sendTen(6,i,lengthType)*1./100).toFixed(1);
        outputstr += "&lt;/tr&gt;";

      }
      output.innerHTML = outputstr+'&lt;/table&gt;</pre>';


      runrem= 0;
      allchars = ['_','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','_','_','_','_','_','_','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
      my_string = '';
      back_string = '';
      maxi = Math.trunc(Math.log(retdouble)/Math.log(59));
      for (i=0;i<maxi+1;i++){runrem = retdouble%(59); retdouble=(retdouble-runrem)/59;  back_string +=allchars[runrem];}
      for (i=maxi;i>-1;i--){my_string += back_string[i];}



}