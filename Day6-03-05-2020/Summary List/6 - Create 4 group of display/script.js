var groups = [
    { 'id': 1, 'name': 'Student1', 'confirmed': false },
    { 'id': 2, 'name': 'Student2', 'confirmed': true },
    { 'id': 3, 'name': 'Student3', 'confirmed': false },
    { 'id': 4, 'name': 'Student4', 'confirmed': false },
    { 'id': 5, 'name': 'Student5', 'confirmed': true },
    { 'id': 6, 'name': 'Student6', 'confirmed': true },
    { 'id': 7, 'name': 'Student7', 'confirmed': true },
    { 'id': 8, 'name': 'Student8', 'confirmed': true }
  ];
  for(var i=0;i<groups.length;i++)
  {
      document.getElementById(i).innerHTML = JSON.stringify(groups[i])
  }