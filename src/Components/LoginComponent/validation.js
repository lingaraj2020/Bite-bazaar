const Validation = (email, password, ) => {
    const emailvalidate =/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const passwordvalidate = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,16}$/.test(password);
    if (!emailvalidate) return "Please enter a correct email address.";
    if (!passwordvalidate) return "Password must meet the criteria.";
     return null;
  };
  
  export default Validation;