img = ""
status_n = ""
objects = [];
o_n =""

function preload() {
    img = loadImage("home.webp")
}

function setup() {
    canvas = createCanvas(640, 420)
    canvas.center()
    cocossd_model = ml5.objectDetector('cocossd', model_loaded)
    document.getElementById("result").innerHTML = "Status: Object detection in progress 🔃"
}

function back() {
    window.location.assign("index.html")
}

function model_loaded() {
    console.log("Model Loaded successfully")
    status_n = true;
    cocossd_model.detect(img, got_results)
}

function got_results(error, results) {
    if (error) {
        console.error(error)
    } else {
        console.log(results)
        objects = results;
    }

}

function draw() {
    image(img, 0, 0, 640, 420)

    if (status_n != "") {

        for (i = 0; i < objects.length; i++) {
            document.getElementById("result").innerHTML = "Status: Object detected ✅"
            document.getElementById("o_n").innerHTML = "Number of objects identified is " + objects.length;

            object_name = objects[i].label
            object_acc = floor(objects[i].confidence * 100)
            object_w = objects[i].width
            object_h = objects[i].height
            object_x = objects[i].x
            object_y = objects[i].y
        

            fill("red")
            stroke("red")
            textSize(20)
            text(object_name + " " + object_acc + "%", object_x + 50, object_y + 50)
            noFill()
            rect(object_x, object_y, object_w, object_h)

        }
    }


}