var populationArray = [25,250,13,4,9];
var maxPopulation = 20;
var isOverPopulated = true;
var lastThreeCity;

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

for (var i=populationArray.length-1; i>(populationArray.length-4); i--)
{
    lastThreeCity = lastThreeCity + populationArray[i];
}
if ((lastThreeCity < 100000 && maxPopulation  < 100000) || isOverPopulated===false){
    console.log("Small cities!!!");
}
else{
    console.log("Large cities!!!");
}