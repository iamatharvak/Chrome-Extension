let myLeeds=[]
const savebtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deletebtn = document.getElementById("delete-btn")
const tabbtn = document.getElementById("tab-btn")


const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeeds") )
console.log(leadsFromLocalStorage)

// 1. Check if leadsFromLocalStorage is truthy
// 2. If so, set myLeads to its value and call renderLeads()

if(leadsFromLocalStorage){
    myLeeds = leadsFromLocalStorage
    render(myLeeds)
}
// Refector the function so that it takes a parameter, leads, that it uses
// instead of the global myLeads variable. Remember to update all invocations 
// of the function as well.

function render(leeds){
    let listItems = ""
for (i = 0; i < leeds.length; i++){
    // listItems += "<li><a target ='_blank' href ='" + myLeeds[i] + "'> " + myLeeds[i] + "</a></li>"
    // we are going to use the template instead of this. 
    listItems += `
    <li>
    <a target ='_blank' href ='${leeds[i]}'>
    ${leeds[i]} 
    </a>
    </li>
    ` 
// console.log(listItems)    
//it shows use of append:
// const li = document.createElement("li")
// li.textContent = myLeeds[i]
// ulEl.append(li)
// console.log(myLeeds[i])
}
ulEl.innerHTML = listItems
}

//const can't be reassigned.
deletebtn.addEventListener("dblclick", function(){ 
    // myLeeds.push("www.awesomelead.com","1")
    localStorage.clear()
    myLeeds=[]
    render(myLeeds)
    
console.log(localStorage)
//  console.log(myLeeds)
//  console.log(ulEl)
//  console.log("User is alive from event listener")  
}
)


tabbtn.addEventListener("click",function(){

    chrome.tabs.query({active:true, currentWindow:true},function(tabs){
        myLeeds.push(tabs[0].url)
    // tabs.value = "";
    localStorage.setItem("myLeeds",JSON.stringify(myLeeds))
    render(myLeeds)
    })
    

})


savebtn.addEventListener("click",function(){ 
    // myLeeds.push("www.awesomelead.com","1")
    myLeeds.push(inputEl.value)
    inputEl.value = "";
    localStorage.setItem("myLeeds",JSON.stringify(myLeeds))
    render(myLeeds)
   
console.log(localStorage)
//  console.log(myLeeds)
//  console.log(ulEl)
//  console.log("User is alive from event listener")
}
)




   

//  ulEl.innerHTML += "<li>" + myLeeds[i] + (inputEl) +  " </li>" 


// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings

// Push the value "www.awesomelead.com" to myArray when the input button is clicked
// Push the value from the inputEl into the myLeads array 
// instead of the hard-coded "www.awesomeleads.com" value
// Google -> "get value from input field javascript"
// Log out the items in the myLeads array using a for loop 
// Render the leads in the unordered list using ulEl.textContent
// create element
// set text content
// append to ul
// 1. Create a variable, listItems, to hold all the HTML for the list items
// 2. Add the item to the listItems variable instead of the ulEl.innerHTML
// 3. Render the listItems inside the unordered list using ulEl.innerHTML
// 1. Wrap the code below in a renderLeads() function
// 1. Turn the myLeads string into an array
// 2. Push a new value to the array
// 3. Turn the array into a string again
// 4. Console.log the string using typeof to verify that it's a string