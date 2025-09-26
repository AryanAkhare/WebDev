function init(){
    let name="Mozilla";

    function displayName(){
        
        console.log(name+" DISPLAYED") //displays parent var
    }
    displayName();
}
init();


function init2(){
    let name="Mozilla";

    function displayName(){
        let name="babar"
        console.log(name+" DISPLAYED") //overweites parent varaible
    }
    displayName();
}
init2();