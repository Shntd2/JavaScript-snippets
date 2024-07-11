function Person (name, email) {
    this.name = name;
    this.email = email;

    if (!validateEmail(email)) {
        throw new Error('Invalid email address');
    }
}


function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}


try {
    const person1 = new Person("John Doe", "john.doe@example.com");
    console.log(person1); // { name: "John Doe", email: "john.doe@example.com" }
  } catch (error) {
    console.error(error.message);
  }

  // Create an object with invalid email (error will be thrown)
  try {
    const person2 = new Person("Jane Doe", "dsda");
  } catch (error) {
    console.error(error.message); // Invalid email format
  }
