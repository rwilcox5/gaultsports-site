var allpitches = [100,18,29,-9.029486378472779,6.0244322655439895,93.2,100,0,41,-9.544837850686546,4.626028931712712,93.5,110,10,44,-9.40925545532723,8.417985326126082,93.9,111,5,45,-11.865875923493883,2.254497072866045,93.0,111,61,39,-11.615094353333793,3.152910589807612,92.7,300,1,59,2.6853854635979504,1.291072496246376,84.5,300,3,62,4.660550560789685,0.8013326282505497,82.8,100,100,68,-7.048917328550859,9.601181258751236,94.1,110,38,54,-11.588850757421564,3.4250974937646,92.6,111,64,78,-11.981704933979843,6.43370400150994,93.5,311,100,74,4.040377812462177,6.548011708629804,85.5,310,37,46,3.0094014443385086,6.253069760782235,85.0,100,74,94,-12.600479645310408,8.671008821044897,94.0,300,100,69,2.058891664506796,5.599168641242623,84.7,100,100,100,-11.9946406980438,7.25336590158858,94.8,110,54,74,-11.403113050282409,7.290824936152125,94.1];
var allabs = [0,2,458731,8,4,23,592450,8,5,2,544369,8,10,3,596142,8,16,0,0,0];
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