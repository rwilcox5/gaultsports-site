var allpitches = [100,36,1,-3.0877410434298005,5.936003425612014,92.1,200,89,13,5.785885894173493,-7.067741290063502,77.3,100,24,0,-2.444890235386689,5.721370831007621,90.8,110,61,65,-4.483286213121479,10.353262801321764,93.5,100,14,0,-1.2269768393476557,4.430200006125281,90.5,100,0,13,-0.9578899281272613,4.563690951604854,90.1,111,68,57,-0.982784540534573,9.775375316016001,92.2,100,67,84,-3.348011357149349,11.210543129248158,93.2,111,41,62,-5.790245040697137,9.214067153519604,92.7,200,100,100,4.2073089434954545,-5.854842608462182,81.7,111,57,32,-1.3512411906495678,8.66712829347027,92.6,110,18,43,-1.0410642683190443,7.241030364130513,92.5,100,19,20,-1.28194729542935,6.884142507496067,93.0,111,39,14,-5.2104695629591475,10.337695136350472,93.8,111,39,43,-1.7836021369560995,8.94227375918101,93.5,110,40,54,-3.276539280970244,12.27556871468936,92.6,200,91,100,4.42922138021715,-6.2311454344054695,79.8,111,65,52,-1.3951032650308464,7.21944533670076,92.7,100,90,96,-3.0401315486370413,10.576959074176823,94.3,111,72,18,-4.7066687486171315,8.890378676192631,93.8,111,50,29,-1.116617004267467,7.392252332864889,93.0,111,60,33,-0.8011492192962055,6.264816141948663,92.6,100,95,94,-1.7463632821005026,8.90822049014292,93.5,111,17,27,1.375541843294882,5.816239758679273,91.6,111,48,36,-0.5848514403631628,6.213262200703166,93.4,200,93,100,6.4789914537900355,-5.39237203465146,80.9,111,67,59,-3.4818330799344985,9.560254110240349,94.1];
var allabs = [0,14,594824,8,5,20,608348,8,11,18,642423,8,15,3,657557,8,20,2,591971,8,22,2,622270,8,27,0,0,0];
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