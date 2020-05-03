//Get input from user
let filterInput = document.getElementById('filter-input')

//Add event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames(){
    //Get value of input
    let filterValue = document.getElementById('filter-input').value.toUpperCase();
    
    //Get names from ul
    let ul = document.getElementById('names');
    
    //Get lis from ul
    let li = ul.querySelectorAll('li.collection-item');

    //Loop throught collection-item lis
    for(let i = 0; i < li.length; i++){
        let a = li[i].getElementsByTagName('a')[0];
        //If matches. The indexOf() method returns the position of the first occurrence of a specified value in a string. This method returns -1 if the value to search for never occurs.
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            li[i].style.display = '';
        }else {
            li[i].style.display = 'none';
        }
    }

}