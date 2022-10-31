
function char_occure(){
    console.log("this is car_occure");
    ss = 202; //this will be store in global scope not a local, as it is not declaire with any variable declaration
    var s3 = "local scope" // this will store in local scope memory
    function a(){
        s2 = 1000;
    }
    a();
}
char_occure();
console.log(s2);
console.log(ss);