document.addEventListener("DOMContentLoaded", () => {
  const submitForm = document.querySelector("#create-task-form");
  

  //get input forma nd save to event listener
  submitForm.addEventListener("submit", handleSubmitForm);
  
  //handle submit form, add task typed in to list of MyTodos
  function handleSubmitForm(e){
    event.preventDefault()
    const inputForm = e.target;
    // debugger
    document.querySelector("#list").append(inputForm["new-task-description"].value);
    document.querySelector("#list").append(document.createElement("br"));

  };
});
