# ValidationForm-HW08
This is a JavaScript code that defines a form validation function using event listeners and input validation functions.

Validation prototype contains several methods:

- Input Validation: The tool should be able to validate different types of form inputs such as text, email, password and more. It should check input formats and patterns to ensure they are valid.
- Required Field Validation: The tool must ensure that all required fields are filled in before allowing the form to be submitted. This includes checking for empty fields or invalid entries.
- Error message: If an error occurs during validation, the tool should provide clear error messages to the user indicating which fields need to be corrected.
- Real-time validation: The tool should provide real-time validation when the user enters data in the form. This means that validation happens as the user types instead of waiting for the form to be submitted.
- Customizable options: The tool should allow users to customize validation options based on their specific needs. For example, they may want to set different criteria for password strength depending on the level of security required.

## Description
The code begins by getting references to the form and its input elements using the document.getElementById() method. It then adds an 'input' event listener to the form using the form.addEventListener() method. This listener will execute the validateInput() function whenever an input element changes.

The validateInput() function takes an input element as a parameter and validates its value based on its id. It uses a switch statement to determine which input field is being validated and then performs specific validation based on the input field.

For example, if the input field is the username field, it checks whether the input value is empty or not. If it's empty, the setError() function is called, which displays an error message below the input field and adds the 'error' class to the input's parent container. If it's not empty, the setSuccess() function is called, which removes the error message and adds the 'success' class to the input's parent container.

The isValidEmail() function checks if the email entered is valid using a regular expression.

Finally, the setError() and setSuccess() functions are responsible for updating the display of the input field based on whether or not it's valid. If there's an error, the error message is displayed below the input field and the 'error' class is added to the input's parent container. If the input value is valid, the error message is removed and the 'success' class is added to the input's parent container.

Overall, this code provides a simple form validation mechanism for a registration form.
