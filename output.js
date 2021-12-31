fetch('https://s3.amazonaws.com/open-to-cors/assignment.json')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    let output = '';
    console.log(data.products);
    shallowIterator(data.products);
})
.catch((err)=>{
    console.log(err);
})


function shallowIterator (target) 
{
    for (const key in target) 
    {
        if (typeof target[key] === 'object') 
        {
            document.getElementById("tData").innerHTML +=
            `<tr>
                <td class="text-center">${target[key]["title"]}</td>
                <td class="text-center">${target[key]["price"]}</td>
                <td class="text-center">${target[key]["popularity"]}</td>
            </tr>`
            // console.log(target[key][nestedKey]);
        } 
        else 
        {
            console.log(target[key]);
        }
    }
}