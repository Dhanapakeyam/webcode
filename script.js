var firstDiv = document.createElement("div");
firstDiv.setAttribute("class","main1");


var mainHeading = document.createElement("h1");
mainHeading.innerHTML="MAKEUP API"

var buttonPanel = document.createElement("div");
buttonPanel.setAttribute("id","buttonPanel");

var button1 = document.createElement("button");
button1.setAttribute("id","button1");
button1.innerHTML="1";
button1.addEventListener("click",foo(0,5));

var button2 = document.createElement("button");
button2.setAttribute("id","button2");
button2.innerHTML="2";
button2.addEventListener("click",foo(5,10));

var button3 = document.createElement("button");
button3.setAttribute("id","button1");
button3.innerHTML="3";
button3.addEventListener("click",foo(10,15));

var button4 = document.createElement("button");
button4.setAttribute("id","button2");
button4.innerHTML="4";
button4.addEventListener("click",foo(15,20));

var button5 = document.createElement("button");
button5.setAttribute("id","button1");
button5.innerHTML="5";
button5.addEventListener("click",foo(20,25));

var button6 = document.createElement("button");
button6.setAttribute("id","button2");
button6.innerHTML="6";
button6.addEventListener("click",foo(25,30));

buttonPanel.append(button1,button2,button3,button4,button5,button6);

firstDiv.append(mainHeading,buttonPanel);

var table1 = document.createElement("table");
table1.setAttribute("id","table1");

var thead = document.createElement("thead");
var tbody = document.createElement("tbody");

var th1 = document.createElement("th");
th1.innerHTML="Brand";
var th2 = document.createElement("th");
th2.innerHTML="Product Name";
var th3 = document.createElement("th");
th3.innerHTML="Price";
var th4 = document.createElement("th");
th4.innerHTML="Image";
var th5 = document.createElement("th");
th5.innerHTML="Product Link";
var th6 = document.createElement("th");
th6.innerHTML="Description";
thead.append(th1,th2,th3,th4,th5,th6);


async function foo(a,b){
    try {
    
    let res=await fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
    let res1= await res.json();
    console.log(res1);
    console.log(res1.length);
    
    var index=res1.length-1;
    
    
   for(var i=a; i<b; i++)
   {

        var tr = document.createElement("tr");
        tr.setAttribute("id","content");
        var brand = document.createElement("td");
        brand.setAttribute("id","tabledata");
        brand.innerHTML=`${res1[i].brand}`;
        
        var name = document.createElement("td");
        name.setAttribute("id","tabledata");
        name.innerHTML=`${res1[i].name}`;
        
        var price = document.createElement("td");
        price.setAttribute("id","tabledata");
        price.innerHTML=`${res1[i].price}`;

        var images = document.createElement("td");
        images.setAttribute("id","tabledata");
        images.innerHTML=`<img src="${res1[i].image_link}" id ="prdImg">`;

        var prdlink = document.createElement("td");
        prdlink.setAttribute("id","tabledata");
        prdlink.innerHTML = `${res1[i].product_link}`;
        
        var desc = document.createElement("td");
        desc.setAttribute("id","tabledata");
        var desc1 = `${res1[i].description}`;
        desc.innerHTML = desc1.slice(0,30);

        tr.append(brand,name,price,images,prdlink,desc);
        tbody.append(tr);
    }
    
    } catch (error) {
      console.log(error);
    }
}

table1.append(thead,tbody);
firstDiv.append(table1);
document.body.append(firstDiv);