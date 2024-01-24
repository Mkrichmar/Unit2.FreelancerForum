const freelancers = [
    { name: "Peter", price: 30, occupation: "Gardener" },
    { name: "Joan", price: 50, occupation: "Programmer" },
  ];

const randomNames = ["Charlie", "Vicky", "Melissa", "Harry", "Dorothy", "John"];

const randomPrices = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const randomOccupations = ["Lawyer", "Publicist", "Real Estate Agent", "Teacher", "Writer", "Influencer"];

const maxFreelancers = 8;

const averagePrice = () => {
    const total = freelancers.reduce(
        (sum, freelancer) => sum + freelancer.price, 0
    );
    return freelancers.length === 0 ? 0 : total/freelancers.length
};

const addFreelancerIntervalId = setInterval(addFreelancer, 2000);

render ();

function render() {
    const freelancerList = document.querySelector("#list");

    freelancerList.innerHTML = 
    `<tr>
        <th>Name</th>
        <th>Price</th>
        <th>Occupation</th>
    </tr>
    `
    freelancers.forEach ((freelancer) => {
        const freelancerRow = document.createElement("tr");
        const rowName = document.createElement("td");
        rowName.textContent = freelancer.name;

        const rowPrice = document.createElement("td");
        rowPrice.classList.add("price")
        rowPrice.textContent = `$${freelancer.price}`;

        const rowOccupation = document.createElement("td");
        rowOccupation.textContent = freelancer.occupation;

        freelancerRow.appendChild(rowName);
        freelancerRow.appendChild(rowPrice);
        freelancerRow.appendChild(rowOccupation);

        freelancerList.appendChild(freelancerRow);

        const average = document.querySelector("#average");
        average.innerHTML = `The average starting price is: $${averagePrice().toFixed(2)}`;
    })
    
}


function addFreelancer() {
    
    const name = randomNames[Math.floor(Math.random() * randomNames.length)];
    const price = randomPrices[Math.floor(Math.random() * randomPrices.length)];
    const occupation = randomOccupations[Math.floor(Math.random() * randomOccupations.length)];
  
    freelancers.push({name, price, occupation});

    

    if (freelancers.length >= maxFreelancers) {
        clearInterval(addFreelancerIntervalId);
        alert('Reach out for more freelancers!')
    }

    render();
}

 



  
    