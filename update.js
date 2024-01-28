document.getElementById("pBox").innerHTML = "当前已经是最新版本了";


function addUpdateButton(){
	let varButton = document.createElement("button");
	document.getElementById("pBox").innerHTML = "提取码：tpup<br>如果您已更新至1.1，请不用再次理会(查看关于)";
	varButton.id = "updataButton";
	varButton.innerHTML = "点我更新 <br>;
	varButton.setAttribute("onclick","window.location.href = 'https://pan.baidu.com/s/1srKojd276ebtlempbfi9Hw?pwd=tpup'")
	document.getElementById("bottonBox").appendChild(varButton);
}

addUpdateButton();
