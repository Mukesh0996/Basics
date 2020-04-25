var ee = {
    "Actors": [
      {
        "name": "Tom Cruise",
        "age": 56,
        "Born At": "Syracuse, NY",
        "Birthdate": "July 3, 1962",
        "photo": "https://jsonformatter.org/img/tom-cruise.jpg",
        "wife": null,
        "weight": 67.5,
        "hasChildren": true,
        "hasGreyHair": false,
        "children": [
          "Suri",
          "Isabella Jane",
          "Connor"
        ]
      },
      {
        "name": "Robert Downey Jr.",
        "age": 53,
        "Born At": "New York City, NY",
        "Birthdate": "April 4, 1965",
        "photo": "https://jsonformatter.org/img/Robert-Downey-Jr.jpg",
        "wife": "Susan Downey",
        "weight": 77.1,
        "hasChildren": true,
        "hasGreyHair": false,
        "children": [
          "Indio Falconer",
          "Avri Roel",
          "Exton Elias"
        ]
      }
    ]
  }
  function getChild(ee)
  { 
      var child = [];

      for(var i =0;i<ee["Actors"].length;i++)
      {
        child.push(ee.Actors[i].children)
      }  
   console.log(child)
   
  }
  getChild(ee)