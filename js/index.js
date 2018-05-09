function showSameday() {
	var samedayCard = document.getElementById("samedayCard");
	var indexTables = document.getElementById("poTable");
	var itemizedTable = document.getElementById("itemized");
	var pastDueTable = document.getElementById("pastDue");
	var outstandingTable = document.getElementById("afuOutstanding");
	var afuPast = document.getElementById("afuPastDue");
	var dmTable = document.getElementById("dmTable");

	if (samedayCard) {
		itemized.style.display = "none";
		pastDueTable.style.display = "none";
		outstandingTable.style.display = "none";
		afuPast.style.display = "none";
		dmTable.style.display = "none";
		indexTables.style.display = "block";
	} 
}

function showPending() {
	var pendingCard = document.getElementById("pendingCard");
	var indexTables = document.getElementById("poTable");
	var itemizedTable = document.getElementById("itemized");
	var pastDueTable = document.getElementById("pastDue");
	var outstandingTable = document.getElementById("afuOutstanding");
	var afuPast = document.getElementById("afuPastDue");
	var dmTable = document.getElementById("dmTable");

	if (pendingCard) {
		indexTables.style.display = "none";
		pastDueTable.style.display = "none";
		outstandingTable.style.display = "none";
		afuPast.style.display = "none";
		dmTable.style.display = "none";
		itemizedTable.style.display = "block";
	}
}

function showPastDue() {
	var pastdueCard = document.getElementById("pastdueCard");
	var indexTables = document.getElementById("poTable");
	var itemizedTable = document.getElementById("itemized");
	var pastDueTable = document.getElementById("pastDue");
	var outstandingTable = document.getElementById("afuOutstanding");
	var afuPast = document.getElementById("afuPastDue");
	var dmTable = document.getElementById("dmTable");

	if (pastDueCard) {
		indexTables.style.display = "none";
		itemizedTable.style.display = "none";
		outstandingTable.style.display = "none";
		afuPast.style.display = "none";
		dmTable.style.display = "none";
		pastDueTable.style.display = "block";
	}
}

function dmDash() {
	var afuTab = document.getElementById("afuNav");
	var indexTables = document.getElementById("poTable");
	var itemizedTable = document.getElementById("itemized");
	var pastDueTable = document.getElementById("pastDue");
	var outstandingTable = document.getElementById("afuOutstanding");
	var afuPast = document.getElementById("afuPastDue");
	var dmTable = document.getElementById("dmTable");

	if (afuTab) {
		indexTables.style.display = "none";
		itemizedTable.style.display = "none";
		pastDueTable.style.display = "none";
		outstandingTable.style.display = "none";
		afuPast.style.display = "none";
		dmTable.style.display = "block";
	}
}

function afuDash() {
	var afuTab = document.getElementById("afuNav");
	var indexTables = document.getElementById("poTable");
	var itemizedTable = document.getElementById("itemized");
	var pastDueTable = document.getElementById("pastDue");
	var outstandingTable = document.getElementById("afuOutstanding");
	var afuPast = document.getElementById("afuPastDue");
	var dmTable = document.getElementById("dmTable");

	if (afuTab) {
		indexTables.style.display = "none";
		itemizedTable.style.display = "none";
		pastDueTable.style.display = "none";
		afuPast.style.display = "none";
		dmTable.style.display = "none";
		outstandingTable.style.display = "block";
	}
}

function showOutstanding() {
	var outstandingCard = document.getElementById("outstandingCard");
	var indexTables = document.getElementById("poTable");
	var itemizedTable = document.getElementById("itemized");
	var pastDueTable = document.getElementById("pastDue");
	var outstandingTable = document.getElementById("afuOutstanding");
	var afuPast = document.getElementById("afuPastDue");
	var dmTable = document.getElementById("dmTable");

	if (outstandingCard) {
		indexTables.style.display = "none";
		itemizedTable.style.display = "none";
		pastDueTable.style.display = "none";
		afuPast.style.display = "none";
		dmTable.style.display = "none";
		outstandingTable.style.display = "block";
	}
}

function showafuPast() {
	var afuPastCard = document.getElementById("afuPastDueCard");
	var indexTables = document.getElementById("poTable");
	var itemizedTable = document.getElementById("itemized");
	var pastDueTable = document.getElementById("pastDue");
	var outstandingTable = document.getElementById("afuOutstanding");
	var afuPast = document.getElementById("afuPastDue");
	var dmTable = document.getElementById("dmTable");

	if (afuPastCard) {
		indexTables.style.display = "none";
		itemizedTable.style.display = "none";
		pastDueTable.style.display = "none";
		outstandingTable.style.display = "none";
		dmTable.style.display = "none";
		afuPast.style.display = "block";
	}
}