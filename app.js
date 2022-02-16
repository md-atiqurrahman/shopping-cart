function updateProductNumber(product,price,isIncreasing){
    // debugger;
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
   

    if(isIncreasing == true){
         productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
         productNumber = parseInt(productNumber) -1;
    }
    productInput.value = productNumber;

    //update product price
    const totallElement = document.getElementById(product + '-total');

    totallElement.innerText = productNumber * price;
     
    //update totall price
    calculateTotall();
}

function getInputNumber(product){
    const productInput = document.getElementById(product+'-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotall(){
    const phoneTotall = getInputNumber('phone') * 1219;
    const caseTotall = getInputNumber('case') * 59;
    const subTotall = phoneTotall + caseTotall;
    const tax = subTotall / 10;
    const totallPrice = subTotall + tax;
    
    document.getElementById('sub-total').innerText = subTotall;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totallPrice;
}

//increase decrease phone number and price
document.getElementById('phone-plus').addEventListener('click',function(){
    updateProductNumber('phone',1219,true);
})
document.getElementById('phone-minus').addEventListener('click',function(){
    updateProductNumber('phone',1219,false);
})

//increase decrease case number and price
document.getElementById('case-plus').addEventListener('click',function(){
    updateProductNumber('case',59,true);
});

document.getElementById('case-minus').addEventListener('click',function(){
    updateProductNumber('case',59,false);
})
