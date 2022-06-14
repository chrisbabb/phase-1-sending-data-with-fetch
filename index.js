// Add your code here
function submitData(userName, userEmail){
    const postData = {
        name: `${userName}`,
        email: `${userEmail}`,
    }
    const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(postData),
    };

    return fetch('http://localhost:3000/users', configurationObject)
    .then(data => data.json())
    .then(parsed => document.body.append(parsed.id))
    .catch(error => document.body.append(error))
}
