console.log("Hello fetch");

function fetchdata(){
    const response=fetch("https://dummyjson.com/recipes"); // fetch returns a promise
    response.then(data=>{
        console.log(data);
        data.json()
        // .then((res)=>{
        //     console.log(res.recipes[0].name);
        //     let output=${res.recipes[0].ingredients};
        //     console.log(output);
        //     document.getElementById("output").innerHTML=output;
            
        .then(res => {
            console.log(res);

            // Create a table to display recipes
            let output = "<table border='1' style='width: 100%; text-align: left;'>";
            output += "<tr><th>ID</th><th>Name</th><th>Ingredients</th><th>Description</th></tr>";

            res.recipes.forEach(recipe => {
                output += `
                    <tr>
                        <td>${recipe.id}</td>
                        <td>${recipe.name}</td>
                        <td>${recipe.ingredients.join(", ")}</td>
                        <td>${recipe.description}</td>
                    </tr>
                `;
            });

            output += "</table>";
            document.getElementById("output").innerHTML = output;
        })
    })
    .catch(error=>console.log(error))
    .finally(()=>console.log("hii, finally closed all the resrources"))
}