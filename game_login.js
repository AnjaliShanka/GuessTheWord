function addUser(){
    player1=document.getElementById("Player1").value;
    player2=document.getElementById("Player2").value;
    localStorage.setItem("player1 name",player1);
    localStorage.setItem("player2 name",player2);
    window.location="game_page.html";
}
