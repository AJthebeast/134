objectDetecter="";
img = ""; 
status="";
objects=[];
function preload()
{
     img = loadImage('dog_cat.jpg'); 
    } 
    function setup()
     { 
         canvas = createCanvas(640, 420);
          canvas.center();
          objectDetecter=ml5.objectDetecter('cocossd',modelLoaded);
          document.getElementById("status").innerHTML="objects detec";
         } 
         function draw()
          { 
              image(img, 0, 0, 640, 420);
              if (status!="")
              {
                  for(i=0; i<objects.length;i++)
                  {
                      document.getElementById("status").innerHTML="objects detec";
                      fill("#FF0000");
                      percent=floor(objects[i].confidence*100);
                      text(objects[i].label+""+percent+"%",objects[i].x,objects[i].y);
                       noFill();
                        stroke("#FF0000");
                         rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
                         
                  }
                        
              }
            
}
function modelLoaded()
{
    console.log("modelLoaded");
    status="true";
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
objects=results;
}