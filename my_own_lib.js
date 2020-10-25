function isTouching(funobj1,funobj2)
{
  if(funobj1.x-funobj2.x<funobj1.width/2+funobj2.width/2&&
    funobj2.x-funobj1.x<funobj1.width/2+funobj2.width/2&&

    funobj1.y-funobj2.y<funobj1.height/2+funobj2.height/2&&
    funobj2.y-funobj1.y<funobj1.height/2+funobj2.height/2){
      
      return true;
  }
  else{
    return false;
  }

}
function bounceOff(funobj1, funobj2){
  if(funobj1.x-funobj2.x<funobj1.width/2+funobj2.width/2&&
    funobj2.x-funobj1.x<funobj1.width/2+funobj2.width/2)
{
  funobj1.velocityX=funobj1.velocityX*-1
  funobj2.velocityX=funobj2.velocityX*-1
}
 if(funobj1.y-funobj2.y<funobj1.height/2+funobj2.height/2&&
  funobj2.y-funobj1.y<funobj1.height/2+funobj2.height/2){   
      
  funobj1.velocityY=funobj1.velocityY*-1
  funobj2.velocityY=funobj2.velocityY*-1
    
  }


} 