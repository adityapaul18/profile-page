// function to validate form

function validate(){
    var form = document.getElementById('ratingForm');
    var rating = document.getElementById('rating');
    var comment = document.getElementById('comment');
    var error = document.getElementById('error');
    var errorMsg = "";
    var ratingValue = rating.value;
    var commentValue = comment.value;
    
    if(ratingValue == ""){
        errorMsg += "Please enter a rating.\n";
    }
    
    if(commentValue == ""){
        errorMsg += "Please enter a comment.\n";
    }
    
    if(errorMsg != ""){
        error.innerHTML = errorMsg;
        return false;
    }else{
        form.submit();
        return true;
    }
}