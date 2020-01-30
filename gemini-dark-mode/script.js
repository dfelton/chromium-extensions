
function getClassForHeaderLinks()
{
	let anchors = document.getElementsByTagName("a");
	let className = "";
	for (let i = 0; i < anchors.length; i++) {
		let el = anchors[i];
		if (el.getAttribute("data-testid") == "header-transfer-link") {
	        className = el.getAttribute("class");
	        break;
		}
	}
	return className;
}

function appendBalancesLinkToHeader() 
{
	let divs = document.getElementsByTagName("div");
	for (let i = 0; i < divs.length; i++) {
		let el = divs[i];
		if (el.getAttribute("data-testid") == "HeaderLeftNav") {
			el.innerHTML += "<a href=\"/balances\" class=\"" + getClassForHeaderLinks() + "\">Balances & History</a>";
		}
	}
}

appendBalancesLinkToHeader();