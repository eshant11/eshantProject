// Logic for printing X and O
let bCount = 0;
function func1(e) {
   if (e.innerText == "") {
      bCount += 1
      if (bCount % 2 === 0) {
         e.innerText = "o";

      }
      else {
         e.innerText = "x";
      }
   };
};

//Logic for winning game
function func2(e) {
   let block_a = document.getElementById('block_a').innerText;
   let block_b = document.getElementById('block_b').innerText;
   let block_c = document.getElementById('block_c').innerText;
   let block_d = document.getElementById('block_d').innerText;
   let block_e = document.getElementById('block_e').innerText;
   let block_f = document.getElementById('block_f').innerText;
   let block_g = document.getElementById('block_g').innerText;
   let block_h = document.getElementById('block_h').innerText;
   let block_i = document.getElementById('block_i').innerText;
   if (block_a && block_b && block_c && block_a == block_b && block_b == block_c && block_c == block_a) {
      
      if(block_a=="x" && block_b=="x" && block_c=="x"){alert("you have won");}
      else{
         alert("O has")
      }
   }
   else if (block_a && block_d && block_g && block_a == block_d && block_d == block_g && block_g == block_a) {
      alert("You have won");
   }
   else if (block_g && block_h && block_i && block_g == block_h && block_h == block_i && block_i == block_g) {
      alert("You have won");
   }
   else if (block_d && block_e && block_f && block_d == block_e && block_e == block_f && block_f == block_d) {
      alert("you have won");
   }
   else if (block_b && block_e && block_h && block_b == block_e && block_e == block_h && block_h == block_b) {
      alert("You have won");
   }
   else if (block_i && block_f && block_c && block_i == block_f && block_f == block_c && block_c == block_i) {
      alert("You have won");
   }
   else if (block_a && block_e && block_i && block_a == block_e && block_e == block_i && block_i == block_a) {
      alert("You have won");
   }
   else if (block_c && block_e && block_g && block_c == block_e && block_e == block_g && block_g == block_c) {
      alert("You have won");
   }

}

