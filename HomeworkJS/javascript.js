function NextPage() {
    location.href = 'https://habr.com/';
}

function StyleChange() {
    color = window.getComputedStyle(document.body).backgroundColor;
    document.getElementsByTagName("body")[0].style.cssText = "position: absolute; left: 600px; top: 120px;"
    document.getElementById("content").style.cssText = "display: flex; flex-direction: column; justify-content: space-around; width: 300px; height: 500px;  align-items: center; background-color: lightslategrey; border-radius: 50px; box-shadow: 0 0 10px rgba(0,0,0,10)"
    document.getElementById("b1").style.cssText = "background-color: blue; width: 100px; height: 100px; color: white; border-radius: 35px; box-shadow: 0 0 10px rgba(0,0,0,10);"
    document.getElementById("b2").style.cssText = "background-color: red; width: 100px; height: 100px; color: black; border-radius: 35px; box-shadow: 0 0 10px rgba(0,0,0,10)"
    document.getElementById("b3").style.cssText = "background-color: Green; width: 100px; height: 100px; color: yellow; border-radius: 35px; box-shadow: 0 0 10px rgba(0,0,0,10)"
}
function Drawing() {
    var bod = document.getElementById('Iner')
			bod.innerHTML = '';
    location.replace("./3/index.html") 
}