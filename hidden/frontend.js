document.getElementById("sign-in-btn").addEventListener("click", async (e) => {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    try {
        let response = await fetch("/api/signIn", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        let result = await response.json();
        console.log(result);
        alert(result.message);
    } catch (error) {
        console.error("Error:", error);
    }
});


document.getElementById("sign-up-btn").addEventListener("click", async (e) => {
    e.preventDefault();
    const email = document.getElementById("UpEmail").value;
    const username = document.getElementById("UpUsername").value;
    const password = document.getElementById("UpPassword").value;
    const passwordConfirm = document.getElementById("UpPasswordConfirm").value;

    try {
        let response = await fetch("/api/signUp", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, username, password })
        });

        let result = await response.json();
        console.log(result);
        alert(result.message);
    } catch (error) {
        console.error("Error:", error);
    }
});