var gamingSection = document.querySelector('.gaming-section');
var numberOfClicks = 0;
var counter=0;
var colours = ['blue','red','yellow','green'];
var loc = 0;

var pixels = 52;
for(let y=0 ; y<10 ; y++){
for(let i = 0 ; i < 10 ; i++){
    var temp = document.createElement('img');
    let colour = colours[Math.floor(Math.random() * 4)];
    temp.src = `images/${colour}Lego.PNG`;
    temp.style.position = 'absolute';
    temp.style.left += pixels*i + 'px';
    temp.style.top += pixels*y + 'px';
    temp.name = `${y},${i}`;
    temp.dataset.location= loc++;

    gamingSection.append(temp);

    temp.addEventListener('click', function(e){

          document.querySelector('.number-of-clicks').innerText= `${numberOfClicks++}`;

          const currentLocation = e.srcElement.dataset.location;
           stack = findConnection(e.srcElement , new Set());
          console.log(stack);
          for(let node in stack)
         {
           document.querySelector(`[data-location = "${stack[node]}"]`).remove();
        }
          stack = []

    });
};

};
var stack = []

const findConnection = (sourceNode, visited) => {

  const location = sourceNode.dataset.location
  stack.push(sourceNode.dataset.location)
  visited.add(sourceNode)

   let neighbours = [
    document.querySelector(`[data-location="${location-10}"]`) ? document.querySelector(`[data-location="${location-10}"]`) : null ,
    document.querySelector(`[data-location="${parseInt(location)+10}"]`) ?  document.querySelector(`[data-location="${parseInt(location)+10}"]`) : null,
    document.querySelector(`[data-location="${parseInt(location)+1}"]`)  ? document.querySelector(`[data-location="${parseInt(location)+1}"]`)  : null ,
    document.querySelector(`[data-location="${parseInt(location)-1}"]`)  ? document.querySelector(`[data-location="${parseInt(location)-1}"]`)  : null ,

   ];

   let [top, bottom, right, left] = neighbours;

   if(top && sourceNode.src === top.src && !visited.has(top) ){
     findConnection(top, visited)
   }
   if(bottom && sourceNode.src === bottom.src && !visited.has(bottom) ){
    findConnection(bottom, visited)
  }
  if(right && sourceNode.src === right.src && !visited.has(right) && (parseInt(location) +1) % 10 != 0  ){
    findConnection(right, visited)
  }
  if(left && sourceNode.src === left.src && !visited.has(left) && (parseInt(location) - 1) % 10 != 9 ){
    findConnection(left, visited)
  }
   
  return stack;
 }







