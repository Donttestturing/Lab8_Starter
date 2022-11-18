// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//isPhoneNumber tests
//checks if phone number is of valid form, 'xxx-xxx-xxxx', or '(xxx) xxx-xxxx', or 'xxx-xxxx' - as long as xxx-xxxx exists, will say true, even if area code is misformed
//positive cases
test('valid case xxx-xxx-xxxx', () => {
    expect(functions.isPhoneNumber('243-655-5632')).toBe(true);
  });
test('valid case (xxx) xxx-xxxx', () => {
    expect(functions.isPhoneNumber('(234) 655-5632')).toBe(true);
  });
test('valid case xxx-xxxx', () => {
    expect(functions.isPhoneNumber('455-5632')).toBe(true);
  });
  
//negative cases
test('invalid case xxxx', () => {
    expect(functions.isPhoneNumber('6525')).toBe(false);                    //isPhoneNumber's functionality is very poor, numbers like '2566-366463-345543' pass
  });
test('invalid case xxx xxxx', () => {
    expect(functions.isPhoneNumber('455 5632')).toBe(false);
  });
test('invalid case empty string', () => {
    expect(functions.isPhoneNumber('')).toBe(false);
  });
test('invalid case no punctuation', () => {
    expect(functions.isPhoneNumber('5644564')).toBe(false);
});   
test('invalid case long no punctuation', () => {
    expect(functions.isPhoneNumber('23436555632')).toBe(false);
  }); 
//isEmail tests
//positive cases
test('valid case heyThereGeneralKenobi@lucas.com', () => {
    expect(functions.isEmail('heyThereGeneralKenobi@lucas.com')).toBe(true);
  });
test('valid case 123@abc.org', () => {
    expect(functions.isEmail('123@abc.org')).toBe(true);
  });
test('valid case kjdgfskksdfgjklgsdfjklgdfjslkgsjndkgn@this.io', () => {
    expect(functions.isEmail('kjdgfskksdfgjklgsdfjklgdfjslkgsjndkgn@this.io')).toBe(true);
  });
//negative cases
test('invalid case 123@123.org', () => {
    expect(functions.isEmail('123@123.org')).toBe(false);
  });
test('invalid case no \'@\', 123123.org', () => {
    expect(functions.isEmail('123123.org')).toBe(false);
  });
test('invalid case no \'.\' stuff@frogorg', () => {
    expect(functions.isEmail('stuff@frogorg')).toBe(false);
  });
//isStrongPassword tests
//positive cases
test('valid case sa2358dgf430', () => {
    expect(functions.isStrongPassword('sa2358dgf430')).toBe(true);
  });
test('valid case fgdinhoadf', () => {
    expect(functions.isStrongPassword('fgdinhoadf')).toBe(true);
  });
test('valid case k034590-68*7', () => {
    expect(functions.isStrongPassword('k03450_6847')).toBe(true);                       //says password is a strong password, which is obviously wrong
  });
//negative cases
test('invalid case too short, abc', () => {
    expect(functions.isStrongPassword('abc')).toBe(false);
  });
test('invalid case too long, a592sd954329205202034', () => {
    expect(functions.isStrongPassword('a592sd954329205202034')).toBe(false);
  });
test('invalid case no leading letter', () => {
    expect(functions.isStrongPassword('1a352552dfa')).toBe(false);
});
//isDate tests
//positive cases
test('valid case 02/01/2022', () => {
    expect(functions.isDate('02/01/2022')).toBe(true);
  });
test('valid case 2/8/1923', () => {
    expect(functions.isDate('2/8/1923')).toBe(true);
  });
test('valid case 11/1/1000', () => {
    expect(functions.isDate('11/1/1000')).toBe(true);
  });
//negative cases
test('invalid case wrong punctuation, 02-01-2022', () => {
    expect(functions.isDate('02-01-2022')).toBe(false);
  });  
test('invalid case missing full year, 11/1/199', () => {                            //isDate is incorrect for something like 99/99/1999
    expect(functions.isDate('11/1/199')).toBe(false);
  });  
test('invalid case 11/111/1999', () => {
    expect(functions.isDate('11/111/1999')).toBe(false);
  });  
//isHexColor tests
//positive cases
test('valid case 3 digits, AE2', () => {
    expect(functions.isHexColor('AE2')).toBe(true);
  });
test('valid case 6 digits, A3C12D', () => {
    expect(functions.isHexColor('A3C12D')).toBe(true);
  });
test('valid case 3 digits, only letters in hex, ABC', () => {
    expect(functions.isHexColor('ABC')).toBe(true);
  });
//negative cases
test('invalid case 4 digits, AED2', () => {
    expect(functions.isHexColor('AED2')).toBe(false);
  });
test('invalid case empty string', () => {
    expect(functions.isHexColor('')).toBe(false);
  });
test('invalid case too long, 35ABEDC4A', () => {
    expect(functions.isHexColor('35ABEDC4A')).toBe(false);
  });
