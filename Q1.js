class CustomException extends Error{

    CustomException(){
        console.log(super.message("Custom Exception"));
    }
}