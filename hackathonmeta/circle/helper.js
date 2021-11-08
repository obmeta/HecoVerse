function transactioncon(obj) {
    console.log(obj);
}



function circle_buy(nft, amount, signature, url) {
    init()
    mySmartContract = new web3.eth.Contract(myabi, window.config1.contract);
    console.log('Contract initialized OK');
    mySmartContract.methods.redeem(window.ethereum.selectedAddress, [nft, url, amount, signature]).send({ "from": window.ethereum.selectedAddress, "value": amount * 10 ** 17 }).on('transactionHash', function (hash) {
   console.log("transaction"+hash) 
}) 
.on('confirmation', function (confirmationNumber, receipt) {
    console.log(confirmationNumber)
})
        .on('receipt', function (receipt) {
            document.getElementsByClassName("hover_bkgr_fricc")[0].style.display = "block"
            document.querySelector('.hover_bkgr_fricc p').textContent = "Your transaction hash is" + receipt.transactionHash
    })
    .on('error', function (error, receipt) { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
    console.log("error occured in contract")
});

    console.log(`i am not called ${nft} ${amount} ${signature} ${url}`)

}

function circle_load_balance(){
    //window.open('https://circlep.b-cdn.net/','popUpWindow','height=800,width=600,left=100,top=100,resizable=no,scrollbars=yes,toolbar=no,menubar=no,location=no,directories=no, status=yes');
}

function circle_payout(){
   //window.open('https://circlep.b-cdn.net/?action=payout','popUpWindow','height=800,width=600,left=100,top=100,resizable=no,scrollbars=yes,toolbar=no,menubar=no,location=no,directories=no, status=yes');
}
