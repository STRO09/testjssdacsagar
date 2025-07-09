function meth1(){
 throw new TypeError;
}

function meth2(){

    meth1();
}

function meth3(){

    try{
meth2();
    }
    catch(e) {
        console.log(e);
    }
}


meth3();
