// Messages for rotating text
        let messages = [
            "Fast. Powerful. Stylish!!",
            "Your dream bike is here!!",
            "Feel the speed!!",
            "Ride like never before!!",
        ];

        let index = 0;
        setInterval(function () {
            index = (index + 1) % messages.length;
            document.getElementById("changingText").innerText = messages[index];
        }, 2000);

        // Background color changer
        let colors = ["#f2f2f2", "#e6e6e6", "#fff0f0", "#f0f8ff", "#ffe6cc"];
        let colorIndex = 0;

        function changeBackground() {
            document.body.style.backgroundColor = colors[colorIndex];
            colorIndex = (colorIndex + 1) % colors.length;
        }

        // Count products in special offers
        function countProducts() {
            const count = document.querySelectorAll("#specialOffers .card").length;
            document.getElementById("productCount").innerText = count;
        }
        countProducts();

        // Show/Hide product table
        function toggleTable() {
            const table = document.querySelector("table");
            table.style.display = (table.style.display === "none") ? "table" : "none";
        }