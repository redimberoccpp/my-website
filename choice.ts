// Define the structure of the data we expect
interface UserData {
    name: string | null;
    grade: string | null;
}

const displayData = (): void => {
    // Retrieve data from localStorage
    const name: string | null = localStorage.getItem("name");
    const grade: string | null = localStorage.getItem("grade");

    // Get the HTML elements
    const nameElement = document.getElementById("display-name") as HTMLElement;
    const gradeElement = document.getElementById("display-grade") as HTMLElement;

    // Display the data or redirect back if empty
    if (name && grade) {
        nameElement.innerText = name;
        // Clean up the grade string (remove underscores for display)
        gradeElement.innerText = grade.replace(/_/g, " ");
    } else {
        // If no data is found, send them back to the login (index.html)
        window.location.href = "index.html";
    }
};

// Run the function when the page loads
window.onload = displayData;
