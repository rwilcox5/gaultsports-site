var allpitches = [110,63,57,9.651721194671376,10.270843838685984,95.4,100,22,75,10.332311429918388,10.6451982506223,94.5,300,78,100,-0.2151480908421492,5.062527641760852,86.5,100,35,86,9.846834635196565,12.15737922434916,94.9,111,60,53,6.644670589854552,13.28938174754856,96.1,100,40,100,9.841693089676571,12.45977187932316,97.0,100,11,100,7.193505013637232,10.771196173234069,95.3,111,63,72,7.27928837792334,10.743319241829395,95.4,110,42,82,6.291162097245335,7.270904066126424,95.6,400,1,100,7.445417496675444,8.692552381068264,88.3,411,27,78,7.988005222940879,5.644047225544932,88.1,100,100,16,8.481726676818791,10.743267601707409,94.2,110,79,69,8.484594086545044,9.936117789893688,96.2,311,8,61,-1.77374640645876,6.548746937670804,86.9,300,0,0,-1.406604148855692,3.342367756800216,86.3,311,52,100,-1.5235253289197281,2.8850341553386203,87.2];
var allabs = [0,14,595885,8,6,2,453943,8,8,2,452104,8,11,3,458731,8,16,0,0,0];
var num_abs = 4;
var nabsc = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var returnabs = [];
for (i=0;i<200;i++){returnabs.push(0);}
function getData(){
var i; var iii = 0; var iiii;
for (i=0;i<num_abs;i++){
if (iii<100){
if (2==2){
returnabs[2*iii]=i*4;returnabs[2*iii+1]=i*4+4;for (iiii=allabs[i*4+3];iiii<30;iiii++){        nabsc[iiii]+=1;}
iii++;}}}
return iii;}
function sendAb(i){
return allabs[returnabs[2*i+1]]-allabs[returnabs[2*i]];
}
function sendAge(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*6];
}
function sendX(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*6+1];
}
function sendY(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*6+2];
}
function sendXM(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*6+3];
}
function sendYM(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*6+4];
}
function sendVel(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*6+5];
}
function sendInn(i){
        return nabsc[i];
}
function sendBatter(i){
        var abn = returnabs[2*i];
        return allabs[abn+2];
}
function sendEvent(i){var abn = returnabs[2*i]; return allabs[abn+1];}