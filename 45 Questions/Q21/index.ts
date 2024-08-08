//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
interface Country {
    name:string,
    capital:string,
    population:number,
    languages:string[]
}

let country:Country = {
    name: "Pakistan",
    capital: "Islamabad",
    population: 220568000,
    languages: ["Urdu", "English", "Punjabi", "Sindhi", "Pashto", "Balochi"]
};

console.log(country);
