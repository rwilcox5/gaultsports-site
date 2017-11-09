var allpitches = [111,64,49,1.2454476138824826,3.631053516519051,93.2,100,96,71,0.8993753670983233,7.981894334591312,94.6,110,31,66,3.1945020390548233,9.357016530977946,93.0,210,82,45,5.8810150757275705,-2.2685231343926366,80.2,300,100,100,4.279675431206032,0.09167706407420488,82.3,311,91,78,2.6350136408227773,1.4995372520980026,81.7,200,58,74,3.999096498247674,-1.46592241143,78.1,111,44,61,0.21729728961666495,8.3417600720473,92.9,300,95,100,2.607974242307256,0.3679473812945203,82.7,110,55,22,1.4378035815337482,7.611659390979867,94.1,311,59,34,4.287126475751092,-1.380782900269204,81.0,310,66,58,4.938647311257103,1.1701062824503732,81.8,100,39,0,-2.1541397313396193,5.338439401558282,93.1,111,61,49,-1.1748026005825576,5.448829465914541,93.7,300,91,62,3.6731228648472647,-2.30187724440456,82.6,211,37,73,5.993761024408014,-1.5596113028648286,80.0,300,100,60,7.275482158477351,0.7848965896475584,83.0,300,78,92,3.7729151160828405,-1.668760483477445,81.8,110,60,52,1.384549668418311,9.73779819552141,95.5,111,77,54,1.3083028385971682,9.894461476873898,94.7,111,85,13,0.2624950647549855,11.11965605102258,95.7];
var allabs = [0,2,523253,7,1,20,605131,7,6,21,592626,7,8,3,572204,7,12,14,518586,7,18,2,571657,7,21,0,0,0];
var num_abs = 6;
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