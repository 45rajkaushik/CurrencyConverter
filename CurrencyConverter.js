let selectOne=document.querySelector("#from");
let selectTwo=document.querySelector("#to");
let btn=document.querySelector("#btn");
let AmountValue=document.querySelector("#AmountValue");
let flag1=document.querySelector("#flag1");
let flag2=document.querySelector("#flag2");
let currencyName1="USD",currencyName2="INR";
let result=document.querySelector("#result");
window.addEventListener("load",()=>{
    AmountValue.value=1;
})
for(i in countryList){
    let newElement1=document.createElement("option");
    let newElement2=document.createElement("option");
    newElement1.value=countryList[i];
    newElement1.innerText=i;
    newElement2.value=countryList[i];
    newElement2.innerText=i;
    if(newElement1.innerText=="USD"){
        newElement1.selected="selected";
    }
    if(newElement2.innerText=="INR"){
        newElement2.selected="selected";
    }
    selectOne.append(newElement1);
    selectTwo.append(newElement2);
}
selectOne.addEventListener("click",(e)=>{
        let countryName1=e.target.value;
        currencyName1=selectOne.options[selectOne.selectedIndex].text;
        console.log(selectOne.value);
        flag1.src=`https://flagsapi.com/${countryName1}/shiny/64.png`;
})
selectTwo.addEventListener("click",(e)=>{
        let countryName2=e.target.value;
        currencyName2=selectTwo.options[selectTwo.selectedIndex].text;
        flag2.src=`https://flagsapi.com/${countryName2}/shiny/64.png`
})
btn.addEventListener("click",async(e)=>{
    e.preventDefault();
    let amount=AmountValue.value;
    if(AmountValue.value<1 || AmountValue.value==""){
        AmountValue.value=1;
        amount=1;
    }
    let response1=await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_K12I5M6XHQtHb6cQo7AtmjM76AihIWF49ihDlY83&currencies=${currencyName1}`);
    let response2=await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_K12I5M6XHQtHb6cQo7AtmjM76AihIWF49ihDlY83&currencies=${currencyName2}`);
    let data1=await response1.json();
    let data2=await response2.json();
    let num1=data1.data[currencyName1];
    let num2=data2.data[currencyName2]
    result.innerText=`Result:${amount} ${currencyName1}=${amount*num2/num1} ${currencyName2}`;
})