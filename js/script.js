var populationArray = [25,250,13,4,9];
var maxPopulation = 20;
var isOverPopulated = true;

for(var i=0; i<populationArray.length; i++){
    if (populationArray[i] > maxPopulation)
    {
        console.log("larger");
    }
    else if (populationArray[i] < maxPopulation){
        console.log("smaller");
    }
    else{
        console.log("equal");
    }
}

var lastThreeCity = populationArray[2] + populationArray[3] + populationArray[4];
if (lastThreeCity < 100,000 && maxPopulation  < 100,000 || isOverPopulated===false){
    console.log("Small cities!!!");
}
else{
    console.log("Large cities!!!");
}