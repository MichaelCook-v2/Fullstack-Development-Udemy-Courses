document.getElementById('button2').addEventListener('click', loadCustomer);

function loadCustomer(e){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true);

    xhr.onload = function(){
        if(this.status=== 200){
            // console.log(this.responseText);

            const customers = JSON.parse(this.responseText);

            let output = '';

            customers.forEach(function(customer){
             output += `
                <ul>
                <li>ID: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li>Name: ${customer.company}</li>
                <li>Name: ${customer.phone}</li>
                </ul>`;
            });



        document.getElementById('customer').innerHTML = output;
        }
    }

    xhr.send();
}