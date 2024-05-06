//função responsável para rodar um código
function setup() { 
  createCanvas(400,200);//responsável pada criar a tela
  background("blue");//cor  de fundo 
}

//responsável por desenhar na tela
function draw() {
  stroke("#red");
 //alterar cor da borda do desenhor
  fill("green");//cor e preenchimento do desenho
         
 if(mouseIsPressed){
   rect(mouseX, mouseY, 40, 40);
   }
}  
         
         
         
         
         
         