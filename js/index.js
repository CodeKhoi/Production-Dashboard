function showSameday() {
	var samedayCard = document.getElementById("samedayCard");
	var indexTables = document.getElementById("poTable");
	var itemizedTable = document.getElementById("itemized");
	var pastdueTable = document.getElementById("pastDue");
	var outstandingTable = document.getElementById("afuOutstanding");
	var afuPast = document.getElementById("afuPastdue");
	var dmTable = document.getElementById("dmTable");

	if (samedayCard) {
		itemized.style.display = "none";
		pastdueTable.style.display = "none";
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
	var pastdueTable = document.getElementById("pastDue");
	var outstandingTable = document.getElementById("afuOutstanding");
	var afuPast = document.getElementById("afuPastdue");
	var dmTable = document.getElementById("dmTable");

	if (pendingCard) {
		indexTables.style.display = "none";
		pastdueTable.style.display = "none";
		outstandingTable.style.display = "none";
		afuPast.style.display = "none";
		dmTable.style.display = "none";
		itemizedTable.style.display = "block";
	}
}

function showPastdue() {
	var pastdueCard = document.getElementById("pastdueCard");
	var indexTables = document.getElementById("poTable");
	var itemizedTable = document.getElementById("itemized");
	var pastdueTable = document.getElementById("pastDue");
	var outstandingTable = document.getElementById("afuOutstanding");
	var afuPast = document.getElementById("afuPastdue");
	var dmTable = document.getElementById("dmTable");

	if (pastdueCard) {
		indexTables.style.display = "none";
		itemizedTable.style.display = "none";
		outstandingTable.style.display = "none";
		afuPast.style.display = "none";
		dmTable.style.display = "none";
		pastdueTable.style.display = "block";
	}
}

function afuDash() {
	var afuTab = document.getElementById("afuNav");
	var indexTables = document.getElementById("poTable");
	var itemizedTable = document.getElementById("itemized");
	var pastdueTable = document.getElementById("pastDue");
	var outstandingTable = document.getElementById("afuOutstanding");
	var afuPast = document.getElementById("afuPastdue");
	var dmTable = document.getElementById("dmTable");

	if (afuTab) {
		indexTables.style.display = "none";
		itemizedTable.style.display = "none";
		pastdueTable.style.display = "none";
		outstandingTable.style.display = "none";
		afuPast.style.display = "none";
		dmTable.style.display = "block";
	}
}

function showOutstanding() {
	var outstandingCard = document.getElementById("outstandingCard");
	var indexTables = document.getElementById("poTable");
	var itemizedTable = document.getElementById("itemized");
	var pastdueTable = document.getElementById("pastDue");
	var outstandingTable = document.getElementById("afuOutstanding");
	var afuPast = document.getElementById("afuPastdue");
	var dmTable = document.getElementById("dmTable");

	if (outstandingCard) {
		indexTables.style.display = "none";
		itemizedTable.style.display = "none";
		pastdueTable.style.display = "none";
		afuPast.style.display = "none";
		dmTable.style.display = "none";
		outstandingTable.style.display = "block";
	}
}

function showafuPast() {
	var afupastCard = document.getElementById("afupastdueCard");
	var indexTables = document.getElementById("poTable");
	var itemizedTable = document.getElementById("itemized");
	var pastdueTable = document.getElementById("pastDue");
	var outstandingTable = document.getElementById("afuOutstanding");
	var afuPast = document.getElementById("afuPastdue");
	var dmTable = document.getElementById("dmTable");

	if (afupastCard) {
		indexTables.style.display = "none";
		itemizedTable.style.display = "none";
		pastdueTable.style.display = "none";
		outstandingTable.style.display = "none";
		dmTable.style.display = "none";
		afuPast.style.display = "block";
	}
}