document.getElementById("sign-up-btn").addEventListener("click", async (e) => {
    e.preventDefault();
    console.log('the user is attempting to do it');
    let email = document.getElementById("UpEmail").value;
    let username = document.getElementById("UpUsername").value;
    let password = document.getElementById("UpPassword").value;
    let passwordConfirm = document.getElementById("UpPasswordConfirm").value;

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
