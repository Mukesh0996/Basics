const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
      firstName: 'John',
      lastName: 'Doe'
    }
  };

  function userID({id})
  {
      return id;

  }
  function whois({ displayName, fullName: { firstName:f } })
  {
    return `Display Name is ${displayName} and First Name is ${f}`
  }
  console.log(userID(user));
  console.log(whois(user))
