document.getElementById("pBox").innerHTML = "当前已经是最新版本了";


function addUpdateButton(){
	let varButton = document.createElement("button");
	varButton.id = "updataButton";
	varButton.innerHTML = "点我更新 <br> 如果您已更新至1.1，请不用再次理会(查看关于)";
	varButton.setAttribute("onclick","window.location.href = 'https://wwz.lanzouj.com/iDzgW1miym6j'")
	document.getElementById("bottonBox").appendChild(varButton);
}

addUpdateButton();
