// fn for changing textbox according to button selected by the user
function codeboxhandler(buttontype) {
    // firstly we hide all the textbox
    document.getElementById("htmlbox").style.display="none";
    document.getElementById("cssbox").style.display="none";
    document.getElementById("jsbox").style.display="none";
    document.getElementById("htmlbutton").style.backgroundColor="white";
    document.getElementById("cssbutton").style.backgroundColor="white";
    document.getElementById("jsbutton").style.backgroundColor="white";
// now changing the textbox based on condition as selected by the user
    if (buttontype=="htmlbutton") {
        document.getElementById("htmlbox").style.display="block";
        document.getElementById("htmlbutton").style.backgroundColor="yellow";
    }
    else if (buttontype=="cssbutton") {
        document.getElementById("cssbox").style.display="block";
        document.getElementById("cssbutton").style.backgroundColor="blue";
    }
    else {
        document.getElementById("jsbox").style.display="block";
        document.getElementById("jsbutton").style.backgroundColor="red";
    }
}
// fn that executes the code every time user input in textbox
function runcode() {
    const htmlcode=document.getElementById('htmlcode').value;
    const csscode=document.getElementById('csscode').value;
    const jscode=document.getElementById('jscode').value;

    const fullcode=htmlcode+"<style>"+csscode+"</style>"+"<script>"+jscode+"</script>"; // putting all html css js reference in a variable
    document.getElementById('outputbox').srcdoc=fullcode; // now giving the fullcode in refernce of iframe for output
}
