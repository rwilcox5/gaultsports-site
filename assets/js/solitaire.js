var firstCard =document.getElementById('card11').width*171./118.; var active_clicked = []; var columns = [];
var suits = [['diamonds','clubs'],['diamonds','spades'],['hearts','clubs'],['hearts','spades'],['clubs','diamonds'],['clubs','hearts'],['spades','diamonds'],['spades','hearts']];
var deck = [];
var decki = -1;
var allaces = [0,0,0,0];

for (iii=1;iii<6;iii++){
	setClicker(iii,1);
	for (i=2;i<13;i++){
		document.getElementById('card'+iii.toString()+i.toString()).style.top=(-.9*(i-1)*firstCard).toString()+'px';
		setClicker(iii,i);
	}
}

function setUpBorder(){

    for (cii=1;cii<6;cii++){
	    for (ii=1;ii<13;ii++){
	    	document.getElementById("card"+cii.toString()+ii.toString()).style.border='none';
	    	document.getElementById("card"+cii.toString()+ii.toString()).style.borderRadius='0px';
	    }
	}
	document.getElementById("upcards").style.border='solid 3px';
	document.getElementById("upcards").style.borderRadius='7px';

}

function updateAces(){

	if (active_clicked.length>0){
    	document.getElementById("upcards").style.border='none';
		document.getElementById("upcards").style.borderRadius='0px';
	    for (cii=1;cii<6;cii++){
		    for (ii=1;ii<13;ii++){
		    	document.getElementById("card"+cii.toString()+ii.toString()).style.border='none';
		    	document.getElementById("card"+cii.toString()+ii.toString()).style.borderRadius='0px';
		    }
			
		}
    	if (active_clicked[0]==0){
    		active_suit = active_clicked[1][1];
    		active_suit_id = -1;
    		for (suitsi=0;suitsi<8;suitsi++){
    			if (suits[suitsi][0]==active_suit){active_suit_id = (suitsi)/2; break;}
    		}
    		if (active_clicked[1][0]==allaces[active_suit_id]+1){
				console.log('Okay');
				allaces[active_suit_id]++;
				document.getElementById('aces'+(active_suit_id+1).toString()).src='cards/'+active_clicked[1][0].toString()+'_of_'+active_clicked[1][1]+'.png';
				deck.splice(decki,1);
				decki--;
				if (decki>-1){
					document.getElementById('upcards').src='cards/'+deck[decki][0].toString()+'_of_'+deck[decki][1]+'.png';
				}
				else{
					document.getElementById('upcards').style.display='none';
				}
    			
    		}
    		else{
    			console.log('Nope');
    		}
    	}
    	else{
    		active_suit = columns[active_clicked[0]-1][active_clicked[1]-1][1];
    		active_suit_id = -1;
    		for (suitsi=0;suitsi<8;suitsi++){
    			if (suits[suitsi][0]==active_suit){active_suit_id = (suitsi)/2; break}
    		}
    		if (columns[active_clicked[0]-1][active_clicked[1]-1][0]==allaces[active_suit_id]+1){
				console.log('Okay');
				allaces[active_suit_id]++;

				document.getElementById('aces'+(active_suit_id+1).toString()).src='cards/'+columns[active_clicked[0]-1][active_clicked[1]-1][0].toString()+'_of_'+columns[active_clicked[0]-1][active_clicked[1]-1][1]+'.png';
				document.getElementById('card'+active_clicked[0].toString()+(active_clicked[1]-1).toString()).src='cards/'+columns[active_clicked[0]-1][active_clicked[1]-2][0].toString()+'_of_'+columns[active_clicked[0]-1][active_clicked[1]-2][1]+'.png';
				
				document.getElementById('card'+active_clicked[0].toString()+active_clicked[1].toString()).style.display='none';
				

    			
    		}
    		else{
    			console.log('Nope');
    		}
    	}
    	active_clicked=[];
    }

}

function setClicker(coli,i){
	document.getElementById("card"+coli.toString()+i.toString()).addEventListener("click", function(){
		if (active_clicked.length==0 || active_clicked[0]==coli){
		    document.getElementById("card"+coli.toString()+i.toString()).style.border='solid 3px';
		    document.getElementById("card"+coli.toString()+i.toString()).style.borderRadius='7px';
		    document.getElementById("upcards").style.border='none';
			document.getElementById("upcards").style.borderRadius='0px';
		    for (cii=1;cii<6;cii++){
		    	if (cii!=coli){
				    for (ii=1;ii<13;ii++){
				    	document.getElementById("card"+cii.toString()+ii.toString()).style.border='none';
				    	document.getElementById("card"+cii.toString()+ii.toString()).style.borderRadius='0px';
				    }
				}
			}
		    for (ii=1;ii<i;ii++){
		    	document.getElementById("card"+coli.toString()+ii.toString()).style.border='none';
		    	document.getElementById("card"+coli.toString()+ii.toString()).style.borderRadius='0px';
		    }
		    for (ii=i+1;ii<13;ii++){
		    	document.getElementById("card"+coli.toString()+ii.toString()).style.border='solid 3px';
		    	document.getElementById("card"+coli.toString()+ii.toString()).style.borderRadius='7px';
		    }
	    	active_clicked = [coli,i];
	    }
	    else{
	    	document.getElementById("upcards").style.border='none';
			document.getElementById("upcards").style.borderRadius='0px';
		    for (cii=1;cii<6;cii++){
			    for (ii=1;ii<13;ii++){
			    	document.getElementById("card"+cii.toString()+ii.toString()).style.border='none';
			    	document.getElementById("card"+cii.toString()+ii.toString()).style.borderRadius='0px';
			    }
				
			}
	    	if (active_clicked[0]==0){
	    		if (active_clicked[1][0]==columns[coli-1][i-1][0]-1){
	    			var goodsuit = false;
	    			for (suitsi=0;suitsi<8;suitsi++){
	    				
	    				if (suits[suitsi][0]==columns[coli-1][i-1][1] && suits[suitsi][1]==active_clicked[1][1]){goodsuit = true;}
	    				
	    			}
	    			if (goodsuit){
	    				console.log('Okay');
	    				columns[coli-1].push(active_clicked[1]);
	    				document.getElementById('card'+coli.toString()+(i+1).toString()).src='cards/'+columns[coli-1][i][0].toString()+'_of_'+columns[coli-1][i][1]+'.png';
	    				document.getElementById('card'+coli.toString()+(i+1).toString()).style.display='block';
	    				deck.splice(decki,1);
	    				decki--;
	    				if (decki>-1){
	    					document.getElementById('upcards').src='cards/'+deck[decki][0].toString()+'_of_'+deck[decki][1]+'.png';
	    				}
	    				else{
	    					document.getElementById('upcards').style.display='none';
	    				}

	    			}
	    			else{console.log('Nope');}
	    			
	    		}
	    		else{
	    			console.log('Nope');
	    		}
	    	}
	    	else if (active_clicked[0]!=coli){
	    		if (columns[coli-1].length==i){
		    		if (columns[active_clicked[0]-1][active_clicked[1]-1][0]==columns[coli-1][i-1][0]-1){
		    			var goodsuit = false;
		    			for (suitsi=0;suitsi<8;suitsi++){
		    				
		    				if (suits[suitsi][0]==columns[coli-1][i-1][1] && suits[suitsi][1]==columns[active_clicked[0]-1][active_clicked[1]-1][1]){goodsuit = true;}
		    				
		    			}
		    			if (goodsuit){
		    				console.log('Okay');
		    				for (aci=0;aci<columns[active_clicked[0]-1].length-active_clicked[1]+1;aci++){
			    				columns[coli-1].push(columns[active_clicked[0]-1][active_clicked[1]-1+aci]);
			    				document.getElementById('card'+coli.toString()+(i+1).toString()).src='cards/'+columns[coli-1][i][0].toString()+'_of_'+columns[coli-1][i][1]+'.png';
			    				document.getElementById('card'+coli.toString()+(i+1).toString()).style.display='block';
		    				}
		    				
		    				for (aci=0;aci<columns[active_clicked[0]-1].length-active_clicked[1]+1;aci++){
		    					document.getElementById('card'+active_clicked[0].toString()+(active_clicked[1]-aci).toString()).style.display='none';
		    					columns[active_clicked[0]-1].pop(columns[active_clicked[0]-1].length-1);

		    				}

		    				document.getElementById('card'+active_clicked[0].toString()+(active_clicked[1]-1).toString()).src='cards/'+columns[active_clicked[0]-1][active_clicked[1]-2][0].toString()+'_of_'+columns[active_clicked[0]-1][active_clicked[1]-2][1]+'.png';
		    				

		    			}
		    			else{console.log('Nope');}
		    			
		    		}
		    		else{
		    			console.log('Nope');
		    		}
		    	}
	    	}
	    	if (active_clicked[0]!=coli){
	    		active_clicked=[];
	    		console.log(columns);
	    	}

	    }
	    
	});
}

function dealCard(deck,decki){
	if (decki<deck.length-3){decki+=3;}
	else if (decki<deck.length-1){decki=deck.length-1;}
	else if (decki==deck.length-1){decki=-1;}
	if (decki==-1){document.getElementById('upcards').style.display='none';}
	else{
		document.getElementById('upcards').style.display='block';
		document.getElementById('upcards').src='cards/'+deck[decki][0].toString()+'_of_'+deck[decki][1]+'.png';
	}
	active_clicked = [];
	return decki;
}


function firstDeal(){
	deck = [];
	decki = -1;
	var suit = 'clubs';
	for (fdi=1;fdi<9;fdi++){deck.push([fdi,suit]);}
	suit = 'spades'; for (fdi=1;fdi<9;fdi++){deck.push([fdi,suit]);}
	suit = 'diamonds'; for (fdi=1;fdi<9;fdi++){deck.push([fdi,suit]);}
	suit = 'hearts'; for (fdi=1;fdi<9;fdi++){deck.push([fdi,suit]);}
	

	columns = []; var card = []; var cardindex = 0;
	for (fdi=1;fdi<6;fdi++){
		columns.push([]);
		for (fdii=1;fdii<fdi+1;fdii++){
			cardindex = Math.floor(Math.random() * deck.length);
			card = deck[cardindex];
			deck.splice(cardindex,1);
			columns[fdi-1].push(card);
		}
	}
	document.getElementById("deck").addEventListener("click", function(){
	    decki = dealCard(deck,decki);
	});
	document.getElementById("upcards").addEventListener("click", function(){
	    active_clicked= [0,deck[decki]];
	    setUpBorder();
	});
	document.getElementById("aces1").addEventListener("click", function(){
		updateAces();
	});
	document.getElementById("aces2").addEventListener("click", function(){
		updateAces();
	});
	document.getElementById("aces3").addEventListener("click", function(){
		updateAces();
	});
	document.getElementById("aces4").addEventListener("click", function(){
		updateAces();
	});

	document.getElementById('deck').src='cards/back_of_diamonds.png';
	document.getElementById('upcards').style.display='none';
	document.getElementById('aces1').src='cards/back_of_diamonds.png';
	document.getElementById('aces2').src='cards/back_of_diamonds.png';
	document.getElementById('aces3').src='cards/back_of_diamonds.png';
	document.getElementById('aces4').src='cards/back_of_diamonds.png';


	for (fdi=1;fdi<6;fdi++){
		for (fdii=1;fdii<fdi;fdii++){
			document.getElementById('card'+fdi.toString()+fdii.toString()).src='cards/back_of_diamonds.png';
		}
		document.getElementById('card'+fdi.toString()+fdi.toString()).src='cards/'+columns[fdi-1][fdi-1][0].toString()+'_of_'+columns[fdi-1][fdi-1][1]+'.png';
		for (fdii=fdi+1;fdii<13;fdii++){
			document.getElementById('card'+fdi.toString()+fdii.toString()).style.display='none';
		}
	}
}
firstDeal()

