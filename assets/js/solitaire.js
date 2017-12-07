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

function designCard(card_id,card_name){
	document.getElementById(card_id).innerHTML='';
	if (card_name=='blank'){
		var draw = SVG(card_id).size('100%',firstCard);
		var rect = draw.rect(firstCard*118./171., firstCard).attr({ fill: '#303' });
		rect.radius(7);
		var rect = draw.rect(firstCard*118./171.-10, firstCard-10).attr({ fill: '#fff' });
		rect.radius(7);
		rect.move(5,5);
	}
	else if (card_name=='back'){
		var draw = SVG(card_id).size('100%',firstCard);
		var rect = draw.rect(firstCard*118./171., firstCard).attr({ fill: '#505' });
		rect.radius(7);
	}
	else{
		var draw = SVG(card_id).size('100%',firstCard);
		var rect = draw.rect(firstCard*118./171., firstCard).attr({ fill: '#aaa' });
		rect.radius(7);
		var rect = draw.rect(firstCard*118./171.-4, firstCard-4).attr({ fill: '#fff' });
		rect.radius(7);
		rect.move(2,2);
		var text = draw.text(card_name[0].toString()+' of '+card_name[1].toString());
		text.font({
		  family:   'Helvetica'
		, size:     12
		, leading:  '1em'
		});
		text.move(5,0);
		var image = draw.image('cards/bhawkslogo.svg', 50, 50);
		image.move(20,40);
	}
}
function chgBorder(card_name,addBorder){
	if (addBorder){
		document.getElementById(card_name).style.border='solid 3px';
	    document.getElementById(card_name).style.borderRadius='7px';
	}
	else{
		document.getElementById(card_name).style.border='none';
	    document.getElementById(card_name).style.borderRadius='0px';
	}

}

function chgSrc(coli,rowi,card_n,card_suit){

	document.getElementById('card'+coli.toString()+rowi.toString()).src='cards/'+card_n.toString()+'_of_'+card_suit+'.png';
	document.getElementById('card'+coli.toString()+rowi.toString()).style.display='inline-block';
}

function setUpBorder(){

    for (cii=1;cii<6;cii++){
	    for (ii=1;ii<13;ii++){
	    	chgBorder("card"+cii.toString()+ii.toString(),false);
	    }
	}
	chgBorder("upcards",true);
}
function sideToAces(active_suit,active_n){
	active_suit_id = -1;
	for (suitsi=0;suitsi<8;suitsi++){
		if (suits[suitsi][0]==active_suit){active_suit_id = (suitsi)/2; break;}
	}
	if (active_n==allaces[active_suit_id]+1){
		console.log('Okay');
		allaces[active_suit_id]++;
		designCard('aces'+(active_suit_id+1).toString(),[active_n,active_suit]);

		deck.splice(decki,1);
		decki--;
		if (decki>-1){
			document.getElementById('upcards').src='cards/'+deck[decki][0].toString()+'_of_'+deck[decki][1]+'.png';
		}
		else{
			document.getElementById('upcards').src='cards/blank.png';
		}
		
	}
	else{
		console.log('Nope');
	}
}
function downToCols(active_suit,active_n,coli,i,blank_col){
	var target_n =-1;
	if (blank_col){target_n=8} 
	else{target_n =columns[coli-1][i-1][0]-1;}
	if (active_n==target_n){
		var goodsuit = false; var chg_row = i+1;
		if (blank_col){
			chg_row =i;	goodsuit =true;
		}
		else{
			for (suitsi=0;suitsi<8;suitsi++){
				if (suits[suitsi][0]==columns[coli-1][i-1][1] && suits[suitsi][1]==active_suit){goodsuit = true;}
			}
		}
		if (goodsuit){
			console.log('Okay');
			columns[coli-1].push([active_n,active_suit]);
			chgSrc(coli,chg_row,columns[coli-1][chg_row-1][0],columns[coli-1][chg_row-1][1]);
			deck.splice(decki,1);
			decki--;
			if (decki>-1){
				document.getElementById('upcards').src='cards/'+deck[decki][0].toString()+'_of_'+deck[decki][1]+'.png';
			}
			else{
				document.getElementById('upcards').src='cards/blank.png';
			}

		}
		else{console.log('Nope');}
		
	}
	else{
		console.log('Nope');
	}
}
function updateAces(){

	if (active_clicked.length>0){
    	chgBorder("upcards",false);
	    for (cii=1;cii<6;cii++){
		    for (ii=1;ii<13;ii++){
		    	chgBorder("card"+cii.toString()+ii.toString(),false);
		    }
			
		}
    	if (active_clicked[0]==0){
    		sideToAces(active_clicked[1][1],active_clicked[1][0]);    		
    	}
    	else{
    		active_suit = columns[active_clicked[0]-1][columns[active_clicked[0]-1].length-1][1];
    		active_suit_id = -1;
    		for (suitsi=0;suitsi<8;suitsi++){
    			if (suits[suitsi][0]==active_suit){active_suit_id = (suitsi)/2; break}
    		}
    		if (columns[active_clicked[0]-1][columns[active_clicked[0]-1].length-1][0]==allaces[active_suit_id]+1){
				console.log('Okay');
				allaces[active_suit_id]++;
				designCard('aces'+(active_suit_id+1).toString(),columns[active_clicked[0]-1][columns[active_clicked[0]-1].length-1]);

				if (columns[active_clicked[0]-1].length>1){
					chgSrc(active_clicked[0],columns[active_clicked[0]-1].length-1,columns[active_clicked[0]-1][columns[active_clicked[0]-1].length-2][0],columns[active_clicked[0]-1][columns[active_clicked[0]-1].length-2][1]);
					document.getElementById('card'+active_clicked[0].toString()+(columns[active_clicked[0]-1].length).toString()).style.display='none';
				}
				else{
					document.getElementById('card'+active_clicked[0].toString()+(1).toString()).src='cards/blank.png';
				}
				
				columns[active_clicked[0]-1].pop(columns[active_clicked[0]-1].length-1);

    			
    		}
    		else{
    			console.log('Nope');
    		}
    	}
    	active_clicked=[];
    }

}
function colToCol(active_clicked,coli,i,blank_col){
	var target_n = -1;
	var not_blank = -1;
	if (blank_col){target_n =8; not_blank = 0;}
	else{target_n=columns[coli-1][i-1][0]-1; not_blank = 1;}

	if (columns[coli-1].length==i || blank_col){
		if (columns[active_clicked[0]-1][active_clicked[1]-1][0]==target_n){
			var goodsuit = false;
			if (blank_col){goodsuit = true;}
			else{
    			for (suitsi=0;suitsi<8;suitsi++){
    				if (suits[suitsi][0]==columns[coli-1][i-1][1] && suits[suitsi][1]==columns[active_clicked[0]-1][active_clicked[1]-1][1]){goodsuit = true;}
    			}
			}
			if (goodsuit){
				console.log('Okay');
				for (aci=0;aci<columns[active_clicked[0]-1].length-active_clicked[1]+1;aci++){
    				columns[coli-1].push(columns[active_clicked[0]-1][active_clicked[1]-1+aci]);
    				chgSrc(coli,i+aci+not_blank,columns[coli-1][i+aci-1+not_blank][0],columns[coli-1][i+aci-1+not_blank][1]);
				}
				for (aci=0;aci<columns[active_clicked[0]-1].length-active_clicked[1]+1;aci++){
					document.getElementById('card'+active_clicked[0].toString()+(active_clicked[1]+aci).toString()).style.display='none';
				}
				columns[active_clicked[0]-1].splice(columns[active_clicked[0]-1].length-(columns[active_clicked[0]-1].length-active_clicked[1]+1),columns[active_clicked[0]-1].length-active_clicked[1]+1);
				if (active_clicked[1]>1){
					chgSrc(active_clicked[0],active_clicked[1]-1,columns[active_clicked[0]-1][active_clicked[1]-2][0],columns[active_clicked[0]-1][active_clicked[1]-2][1]);
				}
				else{
					document.getElementById('card'+active_clicked[0].toString()+(1).toString()).src='cards/blank.png';
					document.getElementById('card'+active_clicked[0].toString()+(1).toString()).style.display='inline-block';
				}
				
			}
			else{console.log('Nope');}
			
		}
		else{
			console.log('Nope');
		}
	}

}

function setClicker(coli,i){
	document.getElementById("card"+coli.toString()+i.toString()).addEventListener("click", function(){
		chgBorder("upcards",false);
		for (cii=1;cii<6;cii++){
		    for (ii=1;ii<13;ii++){
		    	chgBorder("card"+cii.toString()+ii.toString(),false);
		    }
		}

		if (active_clicked.length==0 || active_clicked[0]==coli){
			if (columns[coli-1].length>0){
			    for (ii=i;ii<13;ii++){
			    	chgBorder("card"+coli.toString()+ii.toString(),true);
			    }
		    	active_clicked = [coli,i];
		    }

	    }
	    else{

	    	if (active_clicked[0]==0){

	    		if (columns[coli-1].length==0){
	    			downToCols(active_clicked[1][1],active_clicked[1][0],coli,i,true);
	    		}
	    		else{
	    			downToCols(active_clicked[1][1],active_clicked[1][0],coli,i,false);
		    		
		    	}
	    	}
	    	else if (active_clicked[0]!=coli){
	    		colToCol(active_clicked,coli,i,columns[coli-1].length==0);	
	    	}
	    	if (active_clicked[0]!=coli){
	    		active_clicked=[];
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
		document.getElementById('upcards').style.display='inline-block';
		document.getElementById('upcards').src='cards/'+deck[decki][0].toString()+'_of_'+deck[decki][1]+'.png';
	}
	active_clicked = [];
	return decki;
}


function firstDeal(){
	

	active_clicked = [];
	allaces = [0,0,0,0];
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
	document.getElementById('upcards').src='cards/blank.png';
	document.getElementById('upcards').width=firstCard*118./171.
	document.getElementById('upcards').style.display='inline-block';


	designCard('aces1','blank');
	designCard('aces2','blank');
	designCard('aces3','blank');
	designCard('aces4','blank');
	


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

