document.getElementById("sign-up-btn").addEventListener("click", async (e) => {
    e.preventDefault();
    let email = document.getElementById("UpEmail").value;
    let username = document.getElementById("UpUsername").value;
    let password = document.getElementById("UpPassword").value;
    let passwordConfirm = document.getElementById("UpPasswordConfirm").value;
    let signInQ = false;

    if (password === passwordConfirm) {
        try {
            let response = await fetch("/api/signUp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, email, password })
            });

            let result = await response.json();
            console.log(result);
            alert(result.message);
            window.location.href = '/signIn.html';
        } catch (error) {
            console.error("Error:", error);
        };

        signInQ = true;
    } else {
        console.log('user is an idiot!');
        alert('learn to make a password that works idiot!');
        signInQ = false;
    };
});