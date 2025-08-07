let budgetEntries = [];

document.getElementById("button").addEventListener("click", function(){
    const category = document.getElementById("category").value;
    const amount = document.getElementById("amount").value;
    const date = document.getElementById("date").value;
    const description = document.getElementById("description").value;

    if (category === select || !amount || !date || !description){
        alert("Kindly input the requires information");
        return;
    }
    
    const entries = {category, amount, date, description};

    budgetEntries.push(entries);

    renderTable()
});



