/*function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Change code below this line
    numbers.forEach(number => {
        if (number > value) {
            filteredNumbers.push(number);
        }
    
    }); 

  // Change code above this line
  return filteredNumbers;
}
filterArray([1, 2, 3, 4, 5], 3);

*/
/*function changeEven = (numbers, value) => {
    // Change code below this line
    const newArray = [];
    forEach(element)
    if (element % 2 === 0) {
        element = element + value;
        newArray.push(element)
    }
    
    else if (newArray.push(element)) {
        return newArray;
    }
} 

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
  },
];
// Change code below this line
const allGenres = books.map(book => book.genres);
const uniqueGenres = allGenres.filter(genres, index, array)=> (array.indexOf(genres) === index );

        
  
  // Change code above this line*/
 

class Car {
  // Change code below this line

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }
getBrand() {
  return this.#brand;
}
  changeBrand(newBrand){
    this.#brand = newBrand;
  }
  // Change code above this line
}