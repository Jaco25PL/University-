
const main = document.getElementById("main")

const cars = [
    {
        chapa: "SCN 1432",
        brand: "Toyota",
        tax: true
    },
    {
        chapa: "SBX 5440",
        brand: "BMW",
        tax: false,
    },
    {
        chapa: "DBE 4570",
        brand: "Porsche",
        tax: true,
    }
]

const show = () => {
    for (const car of cars) {
        const content = document.createElement("span")
        
        if (!car.tax) {
            content.innerHTML = `The car "${car.chapa}" has debt` 
        } else {
            content.innerHTML = `The car "${car.chapa}" is up-to-date with taxes` 
        }

        main.appendChild(content)
    }
}

show()