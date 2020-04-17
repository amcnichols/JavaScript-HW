const tableData = data;
const tbody = d3.select("tbody");

// step 1
function buildTable(data){
   console.log(data);
   tbody.html("");

   data.forEach((dataRow) => {
       
       let row = tbody.append("tr");
       // `Object.values` & `forEach` to Iterate Through Values
       Object.values(dataRow).forEach((val) => {
           // Append a Cell to the Row for Each Value
           let cell = row.append("td");
           cell.text(val);
       });
   })
}
// step 2
function handleClick() {
    const date = d3.select("#datetime").property("value")
    let filteredData = tableData
    console.log(date)
    buildTable(filteredData)
}

d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(data);
