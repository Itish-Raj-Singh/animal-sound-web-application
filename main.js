function startClassifictaion() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/9-hh6ypJQ/model.json',modelReady);
}
function modelReady() {
    classifier.classify(gotResult);
}
function gotResult(error, results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        console.log("Red "+random_number_r);
        console.log("Green "+random_number_g);
        console.log("Blue "+random_number_b);

        document.getElementById("detected_number").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("detected_number").style.fontFamily = 'Courier New'+","+'Courier'+","+'monospace';

        document.getElementById("detected_voice_of").innerHTML = "Detected Voice Is Of - "+results[0].label;
        document.getElementById("detected_voice_of").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("detected_voice_of").style.fontFamily = 'Courier New'+","+'Courier'+","+'monospace';

        img = document.getElementById("image");

        if(results[0].label == "Barking"){
            img.src = "bark.gif";
            dog = dog+1;
            document.getElementById("detected_number").innerHTML = "Detected Dog - "+ dog;
        }
        else if(results[0].label == "Meowing"){
            img.src = "meow.gif";
            cat = cat+1;
            document.getElementById("detected_number").innerHTML = "Detected Cat - "+ cat;
        }
        else if(results[0].label == "Roar"){
            img.src = "lion.gif";
            lion = lion+1;
            document.getElementById("detected_number").innerHTML = "Detected Lion - "+ lion;
        }
        else if(results[0].label == "Mooing"){
            img.src = "moo.gif";
            cow = cow+1;
            document.getElementById("detected_number").innerHTML = "Detected Cow - "+ cow;
        }
        else{
            img.src = "listen.gif";
            background_noise = background_noise+1;
            document.getElementById("detected_number").innerHTML = "Detected Background Noise - "+ background_noise;
        }
    }
}