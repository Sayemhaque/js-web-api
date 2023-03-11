const getValueFromInput = (element) => {
    const field = document.getElementById(element);
    const value = field.value;
    return value;
}

const addData = () => {
    const userName = getValueFromInput("name")
    const email = getValueFromInput("email")

    if (userName) localStorage.setItem("username", userName)
    if (email) localStorage.setItem("email", email)
    window.location.reload();
}


const removeData = () => {
    const userName = getValueFromInput("name")
    const email = getValueFromInput("email");

    document.getElementById("removeName").addEventListener("click", () => {
        localStorage.removeItem("username", userName)
        window.location.reload();
    })

    document.getElementById("removeEmail").addEventListener("click", () => {
        localStorage.removeItem("email", email)
        window.location.reload();
    })
}


removeData()


const removeAll = () => {
   localStorage.clear();
   window.location.reload();
}

const displayData = () => {
    const parentDiv = document.getElementById("parentDiv");
    const userName = localStorage.getItem("username")
    const email = localStorage.getItem("email");
    console.log(userName)
    parentDiv.innerHTML = `${userName ? `<li>Name : ${userName}</li>` : ""}
    ${email ? `<li>Email : ${email}</li>` : ""}
    `
}

displayData()
