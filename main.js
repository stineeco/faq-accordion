const accordion = document.querySelectorAll('.accordion_wrapper .accordion');



accordion.forEach((acco)=>{
   acco.onclick = () =>{
      accordion.forEach((sub_content)=>{
         sub_content.classList.remove("active")
      })
      acco.classList.toggle("active")
   }

})