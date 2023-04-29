<h1>Team Project - Wallet</h1>

<h2>Live page  https://dsimonaits.github.io/wallet-team-project-client-side/login</h2>

<h3>Technical tasks</h3>

<h4>RegistrationForm</h4>

1. Mobile, tablet, desktop layout.
2. Validate form fields using either formik and yup library or indicative.
   - Password and email are mandatory fields.
   - Email should be validated for validity.
   - Password should have 6 or more characters but no more than 12.
   - Passwords should match.
   - Name should have at least 1 character but no more than 12 characters.
3. Class or functional component storing input state in its own state.
4. Write an operation for registration that triggers on form submit.
5. If the response from the server is successful:
   - Save the token and user object in the redux store.
   - Change the key in session.isAuth to true.
6. If an error occurs in the server response:
   - Define the error in the redux store session.error.
   - Display the error message.
7. The "Login" link is a Link component from react-router-dom and should redirect to "/login".

<h4>RegistrationPage</h4>

- Implements responsive design for mobile, tablet, and desktop screens.
- Ensures proper placement and alignment of elements on the page.
- Includes the RegistrationForm component.
- Wraps the page in the withAuthRedirect higher-order component to redirect unauthenticated users to the login page.
