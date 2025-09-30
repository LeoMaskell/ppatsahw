document.getElementById("sign-in-btn").addEventListener("click", async (e) => {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let signInQ = false;

    try {
        let response = await fetch("/api/signIn", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        let result = await response.json();
        console.log(result);

        if (result.success) {
            window.location.href = '/home.html';
        } else {
            alert(result.message);
        }
    } catch (error) {
        console.error("Error:", error);
    };

    signInQ = true;
});