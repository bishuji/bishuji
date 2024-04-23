// input element selection 
    let filterInput=document.getElementById('filterInput');
    filterInput.addEventListener('keyup', filterName);

    function filterName(){
        //get input value 
        let filterValue=document.getElementById('filterInput').value.toUpperCase();
 
        console.log(filterValue);
        //get name ul
        let ul=document.getElementById('names');

        let li=ul.querySelectorAll('li.collection-item');

        //loop through collection item li
        for (let i=0; i<li.length;i++){
            let a=li[i].getElementsByTagName('a')[0];
            //if matched
            if(a.innerHTML.toLocaleUpperCase().indexOf(filterValue)>-1){
                li[i].style.display='';
            }
            else{
                li[i].style.display='none';
            }
        }
    }