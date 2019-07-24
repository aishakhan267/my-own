// let restuarant = {
//     name: "Mc donalds",
//     year: 1996,
//     staff: [
//         {
//             name: "Hafsa",
//             post: "waiter",
//             age: 56,
//             salary: 50000
//         },
//         {
//             name: "Aisha",
//             post: "waiter",
//             age: 56,
//             salary: 50000
//         },
//         {
//             name: "Sehrish",
//             post: "waiter",
//             age: 56,
//             salary: 50000
//         },
//         {
//             name: "Lubna",
//             post: "waiter",
//             age: 56,
//             salary: 50000,
//         },
//         {
//             name: "Farooq",
//             post: "waiter",
//             age: 56,
//             salary: 50000
//         }
//     ],
//     menu: [
//         {
//             name: "Choco Cone",
//             description: "sdksdkfdge",
//             price: 100,
//             ingredients: ["chocolate", "milk", "biscuits", "cream"]
//         },
//         {
//             name: "Chicken Nuggets",
//             description: "ndsfsrejf.mjl",
//             price: 500,
//             ingredients: ["chicken", "oil", "black pepper"]
//         },
//         {
//             name: "Zinger burger",
//             description: "nmhukasjqw",
//             price: 200,
//             ingredients: ["chicken", "bun", "crums", "oil", "ketchup", "Lettuce"]
//         }
//     ],
// };
// for (let i = 0; i < restuarant.menu.length; i++) {
//     console.log("Information about" + " " + restuarant.menu[i].name);
//     console.log("Description" + " " + restuarant.menu[i].description);
//     console.log("Price" + " " + restuarant.menu[i].price);
//     console.log("INGREDIENTS");
//     for (let j = 0; j < restuarant.menu[i].ingredients.length; j++) 
//     {
//         console.log(j+1 + " ." + restuarant.menu[i].ingredients[j]);
//     }
//     console.log("#################");
//     console.log("#################");
// };

let students = [
    {
      name: "Amna",
      gender: "f",
      dob: new Date("02-04-1990"),
      address: {
        ilaqa: "Gulistan-e-Johar",
        city: "Karachi",
        country: "Pakistan",
        postalCode: 47114
      },
      phoneNo: "0331-2324243",
      admissionTestScore: 56,
      hasInternet: true,
      hasComputer: false,
      hasJob: true,
      hasSchoolBefore: false
    },
    {
      name: "Hadia",
      gender: "f",
      dob: new Date("05-15-1984"),
      address: {
        ilaqa: "Lyari",
        city: "Karachi",
        country: "Pakistan",
        postalCode: 75660
      },
      phoneNo: "0345-3452953",
      admissionTestScore: 48,
      hasInternet: false,
      hasComputer: false,
      hasJob: false,
      hasSchoolBefore: true
    },
    {
      name: "Ahmed",
      gender: "m",
      dob: new Date("06-27-2002"),
      address: {
        ilaqa: "University Road",
        city: "Quetta",
        country: "Pakistan",
        postalCode: 82215
      },
      phoneNo: "0333-0124325",
      admissionTestScore: 33,
      hasInternet: true,
      hasComputer: false,
      hasJob: false,
      hasSchoolBefore: false
    },
    {
      name: "Fariha",
      gender: "f",
      dob: new Date("09-13-1998"),
      address: {
        ilaqa: "University Road",
        city: "Karachi",
        country: "Pakistan",
        postalCode: 82215
      },
      phoneNo: "0331-9432532",
      admissionTestScore: 33,
      hasInternet: true,
      hasComputer: false,
      hasJob: false,
      hasSchoolBefore: false
    },
    {
      name: "Abdullah",
      gender: "m",
      dob: new Date("01-24-1972"),
      address: {
        ilaqa: "Bazar Colony",
        city: "Lahore",
        country: "Pakistan",
        postalCode: 32212
      },
      phoneNo: "0345-9912121",
      admissionTestScore: 33,
      hasInternet: false,
      hasComputer: false,
      hasJob: true,
      hasSchoolBefore: true
    }
  ];
//   Answer # 1
//   for(let i = 0; i < students[i].name.length;i++){
//     console.log(students[i].name);
//   };
//   Answer 2 
if(gender === f){
    console.log(students.name);
}else{
    console.log("nothing")
};
