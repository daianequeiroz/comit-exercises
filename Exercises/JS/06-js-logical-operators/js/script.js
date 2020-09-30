let hour = Number(prompt ("Enter the current hour (out of 0-23):"));

if (hour < 0 || hour > 23){
    alert("Input is incorrect!");
}else if (hour < 8 || hour >= 18){
    alert("Outside of office hours!");
}else if (hour >= 8 && hour < 18){
    alert("We are open!");
}
