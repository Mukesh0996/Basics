var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 5}

function assertObjectsEqual(actual, expected, testName){
  

    if(expected == actual)
    {
        console.log("Passed")
    }
    else
    {
        console.log('FAILED', testName, 'Expected',expected,', but got',actual)
    }
}

assertObjectsEqual(actual, expected, 'detects that two objects are equal')

