class CustomException extends Error{

    CustomException(){
        console.log(super.message("Custom Exception"));
    }
}


function ThrowExample(id) {
    if(id===1){
        throw new CustomException();
    }
    else {
        console.log("NO error");
    }
}

ThrowExample(5);
ThrowExample(1);
