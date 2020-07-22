$(document).ready(function(){
    setTimeout(function() {
        $("#loadingIcon").remove();
        $("#mainContent").show("fade", 500);
    }, 1500);
});

let bingoOptionsObject = new Object();
let bingoWinOptionsObject = new Object();
let countOptions = 0;
let optionIdCount = 0;
let wins = 0;

$("#countAndWins").append(`<div class="row text-center my-4"> <div class="col-4"> <p class="h2" id="winsP"> ${wins} </p> </div> <div class="col-4"> <p class="h2">/</p> </div> <div class="col-4"> <p class="h2" id="countP">${countOptions}</p> </div> </div>`);

function bingoOption(optionName) {
    this.optionId = optionIdCount;
    this.optionName = optionName;
}

$("#buttonAdd").click(function () {
    let optionNameCurrent = $("#addBingoOption").val();
    if (optionNameCurrent != "") {
        if($("#errorText").length) {
            console.log("yeah");
            $("#errorText").remove();
        }
        countOptions++;
        optionIdCount++;
        if (optionIdCount == 1) {
            $("#divShow").addClass("card-columns");
            $("#tableBeginning").remove();
        }
        newBingoOption = new bingoOption(optionNameCurrent);
        bingoOptionsObject[optionIdCount] = newBingoOption;
        $("#countP").html(countOptions);
        console.log(bingoOptionsObject);
        $("#divShow").append(`<div class='card d-inline-block' style="width: 28rem; border-radius: 0px;" id='${newBingoOption.optionId}'><div class='card-body' id='${newBingoOption.optionId}Empty'> <h1 class='card-title h3 text-wrap'>${newBingoOption.optionName}</h5> <div class='card-footer'><button onclick=addWin('${newBingoOption.optionId}') class='btn btn-outline-success w-100' type='button'>BINGO</button> <button onclick=deleteOption('${newBingoOption.optionId}') class='btn btn-outline-danger w-100 mt-3' type='button'>RETIRER</a> </div> </div> </div>`);
        $("#addBingoOption").val("");
    } else {
        if($("#errorText").length) {
            $("#errorText").html("Vous n'avez toujours pas rempli le champ...")
        } else {
            $("#inputGroup").prepend(`<p class="alert alert-danger w-100 text-center" id="errorText">Merci de renseigner une valeur dans le champ.</p>`);
        }
    }
});

$("#addBingoOption").keyup(function (event) {
    if (event.which == 13) {
        $("#buttonAdd").trigger("click");
    }
})

function deleteOption(optionId) {
    let idOption = '#' + optionId;
    delete bingoOptionsObject[optionId];
    countOptions--;
    $("#countP").html(countOptions);
    $(idOption).remove();
}

function addWin(optionId) {
    let idOption = '#' + optionId + 'Empty';
    wins++;
    $("#winsP").html(wins);
    $(idOption).empty();
    $(idOption).append('<img src="assets/pngegg.png" class="w-25">');
}

$("#switchRules").click(function () {
    if ($("#rules").css("display") == "none") {
        $("#rules").show(300);
    } else {
        $("#rules").hide(300);
    }
})

$("#spanCredit").hover(function() {
    $("#spanCredit").animate({
        opacity: 1
    }, 200)
}, function() {
    $("#spanCredit").animate({
        opacity: 0.5
    }, 200)
})
