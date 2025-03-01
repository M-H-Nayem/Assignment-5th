
        function updateDate() {
            let now = new Date();
            let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            document.getElementById("date").innerText = now.toLocaleDateString("en-US", options);
        }

        updateDate(); // Initial call
        setInterval(updateDate, 1000); // Update every second
    