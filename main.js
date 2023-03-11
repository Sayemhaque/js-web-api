const getValueFromInput = () => {
   const userNameField  = document.getElementById("name");
   const userName = userNameField.value;
   return userName;
}

const addData = () => {
  const userName =   getValueFromInput()
  localStorage.setItem("username" , userName)
  window.location.reload();
}
const removeData = () => {
    const userName = getValueFromInput()
    localStorage.removeItem("username" , userName)
    window.location.reload();

}


const displayData = () => {
    const parentDiv = document.getElementById("parentDiv");
  const userName =  localStorage.getItem("username")
  const email = localStorage.getItem("email");
  console.log(userName)
    parentDiv.innerHTML = `${userName ? `<li>Name : ${userName}</li>` : ""}`
}

displayData()
