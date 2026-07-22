document.addEventListener('DOMContentLoaded', () => {
    console.log('Cloud Resume Challenge site loaded!');

    // NEW API Gateway endpoint
    const apiUrl = "https://1ff297rk33.execute-api.us-east-1.amazonaws.com/count";

    async function updateVisitorCount() {
        try {
            const response = await fetch(apiUrl, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            
            const countElement = document.getElementById("visit-count");
            if (countElement) {
                countElement.textContent = data.count || "0";
            }
            
            console.log("Visitor count updated to:", data.count);
            
        } catch (error) {
            console.error("Failed to fetch visitor count:", error);
            const countElement = document.getElementById("visit-count");
            if (countElement) countElement.textContent = "1";
        }
    }

    updateVisitorCount();
});
