let startX = 0;

let setStartX = function(){
  startX = event.clientX;
}

let mousemovetemplate = function(event){
  let delta = handleDrag(event);
  rotateX(delta / 500);
  setStartX();
};

let mouseuptemplate = function(event){
  $('body')[0].removeEventListener('mousemove', mousemovetemplate);

};

let handleDrag = function(event){
  return event.clientX - startX;
};

$('#threeCanvas').on('mousedown', function(event){
  if (event.ctrlKey){
    setStartX();
    $('body')[0].addEventListener('mousemove', mousemovetemplate);
    $('body')[0].addEventListener('mouseup', mouseuptemplate);
  } else if (event.altKey){
  }

});