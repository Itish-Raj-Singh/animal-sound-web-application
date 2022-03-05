function startClassification(){
   navigator.mediaDevices.getUserMedia({audio:true});
   classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/9-hh6ypJQ/model.json')
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(results , error){
    if(error){
        console.error(error);
    }
}