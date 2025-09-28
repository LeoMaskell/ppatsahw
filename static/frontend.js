document.getElementById("sign-in-btn").addEventListener("click", async () => {
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            try {
                const response = await fetch("/signIn", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ username, password })
                });

                const result = await response.json();
                console.log(result);
                alert(result.message);
            } catch (error) {
                console.error("Error:", error);
            }
        });