const input = [
  {
    name: "person 1",
    age: 50,
    childrens: [
      {
        name: "person 3",
        age: 50,
        childrens: [
          {
            name: "person 7",
            age: 50,
            childrens: [],
          },
        ],
      },
      {
        name: "person 4",
        age: 50,
        childrens: [
          {
            name: "person 8",
            age: 50,
            childrens: [
              {
                name: "person 10",
                age: 50,
                childrens: [],
              },
            ],
          },
        ],
      },
      {
        name: "person 5",
        age: 50,
        childrens: [
          {
            name: "person 9",
            age: 50,
            childrens: [],
          },
        ],
      },
    ],
  },
  {
    name: "person 2",
    age: 50,
    childrens: [
      {
        name: "person 6",
        age: 50,
        childrens: [],
      },
    ],
  },
];
output = [];

for (let i = 0; i < input.length; i++) 
{
  output.push({
    name: input[i].name,
    age: input[i].age,
  });

  for (k = 0; k < input[i].childrens.length; k++) 
  {
    output.push({
      name: input[i].childrens[k].name,
      age: input[i].childrens[k].age,
    });

    for (l = 0; l < input[i].childrens[k].childrens.length; l++) 
    {
      output.push({
        name: input[i].childrens[k].childrens[l].name,
        age: input[i].childrens[k].childrens[l].age,
      });

      for (m = 0;m < input[i].childrens[k].childrens[l].childrens.length; m++) {
        output.push({
          name: input[i].childrens[k].childrens[l].childrens[m].name,
          age: input[i].childrens[k].childrens[l].childrens[m].age,
        });
      }
    }
  }
}
console.log(output);