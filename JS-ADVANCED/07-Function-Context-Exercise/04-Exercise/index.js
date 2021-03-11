function solve() {

   let tBody = document.querySelector('table tbody');

   tBody.addEventListener('click', (e) => {



      if (e.target.tagName.toLowerCase() == 'td') {

         if (e.target.parentElement.style.backgroundColor) {

            e.target.parentElement.style.backgroundColor = '';

         } else {

            let allTr = tBody.querySelectorAll('tr');
            [...allTr].map(tr => {
               tr.style.backgroundColor = '';
            })

            e.target.parentElement.style.backgroundColor = 'rgb(65,63,94)';

         }
      }
   });
}
