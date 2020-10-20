
function validateForm() {
    const invoiceNumber = document.querySelector("#invoice-number").value;
    const invoiceDescription = document.querySelector("#invoice-description").value;
    const invoiceDate = document.querySelector("#invoice-date").value;
    const deliveryDate = document.querySelector("#delivery-date").value;
    const settleDate = document.querySelector("#settle-date").value;
    const invoiceAmount = document.querySelector("#invoice-amount").value;
    const currency = document.querySelector("#currency").value;
    const exchangeRate = document.querySelector("#exchange-rate").value;
    const invoiceVAT = document.querySelector("#invoice-vat").value;
    const client = document.querySelector("#client").value;
    const orderNumber = document.querySelector("#order-number").value;
    const salesAgent = document.querySelector("#sales-agent").value;

    const invoiceNumberData = document.querySelector("#invoice-number-data")
    invoiceNumberData.innerHTML = invoiceNumber;

    const invoiceDescriptionData = document.querySelector("#invoice-description-data")
    invoiceDescriptionData.innerHTML = invoiceDescription;

    const invoiceDateData = document.querySelector("#invoice-date-data")
    invoiceDateData.innerHTML = invoiceDate
               
    const deliveryDateData = document.querySelector("#delivery-date-data")
    deliveryDateData.innerHTML = deliveryDate;

    const settleDateData = document.querySelector("#settle-date-data")
    settleDateData.innerHTML = settleDate;

    const invoiceAmountData = document.querySelector("#invoice-amount-data")
    invoiceAmountData.innerHTML = invoiceAmount;

    const currencyData = document.querySelector("#currency-data")
    currencyData.innerHTML = currency;

    const exchangeRateData = document.querySelector("#exchange-rate-data")
    exchangeRateData.innerHTML = exchangeRate;

    const invoiceVatData = document.querySelector("#invoice-vat-data")
    invoiceVatData.innerHTML = invoiceVAT;

    const clientData = document.querySelector("#client-data")
    clientData.innerHTML = client;

    const orderNumberData = document.querySelector("#order-number-data")
    orderNumberData.innerHTML = orderNumber;

    const salesAgentData = document.querySelector("#sales-agent-data")
    salesAgentData.innerHTML = salesAgent;

    const modal = document.querySelector("#modal")
    modal.style.opacity="1";
    modal.style.visibility="visible";

    return false;
}

const modal = document.querySelector(".modal");

modal.addEventListener('click', function(e){
    if(e.target == modal) {
        modal.style.opacity="0";
        modal.style.visibility="hidden";
    } 
})

const closeModal = document.querySelector(".modal--close");

closeModal.addEventListener('click', function(e){
    modal.style.opacity="0";
    modal.style.visibility="hidden";

})

