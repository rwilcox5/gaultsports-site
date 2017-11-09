var allpitches = [100,3,19,-9.94465965554892,4.942773720742865,93.4,100,100,47,-10.808873275224725,4.340485133561773,93.5,110,2,46,-11.52700606895334,3.921436722962148,93.3,210,88,42,10.191503383124935,0.8614197884702011,83.4,211,100,61,10.713398307825422,2.11670437996666,83.1,200,100,86,10.127676106961516,1.8614207760474453,83.4,100,100,92,-10.281169422343007,4.13114804074094,94.5,100,0,0,-9.553619455360506,5.177168617156642,93.8,110,42,11,-4.633542318457998,11.120898507784194,93.5,111,74,59,-10.558158769101599,5.2548529261445776,94.2,211,100,54,11.332907710802997,-1.772114121656037,82.4,211,83,14,10.738078512870192,1.2359019452228575,83.1,211,93,43,9.49487550657425,1.534728120331307,84.0,110,77,70,-7.750896088309398,3.4344895377403035,94.1,211,69,50,12.82707771875397,1.4889996993470866,82.8];
var allabs = [0,3,669720,9,5,3,570731,9,11,20,592518,9,12,3,641820,9,15,0,0,0];
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