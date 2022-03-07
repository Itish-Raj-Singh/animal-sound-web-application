function startClassifictaion() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/9-hh6ypJQ/model.json',modelReady);
}
function modelReady() {
    classifier.classify(gotResult);
}
