document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".Myform");
    const inputs = form.querySelectorAll("input");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Formani to'xtatib turish

        let hasError = false;

        // Barcha inputlarni tekshiramiz
        inputs.forEach(input => {
            const value = input.value.trim();
            
            // Agar input bo'sh bo'lsa - xatolik
            if (value === "") {
                hasError = true;
                input.style.borderColor = "red";
                if (!input.nextElementSibling || !input.nextElementSibling.classList.contains("error-msg")) {
                    const errorMsg = document.createElement("small");
                    errorMsg.classList.add("error-msg");
                    errorMsg.style.color = "red";
                    errorMsg.textContent = `${input.placeholder} is required`;
                    input.after(errorMsg);
                }
            } else {
                input.style.borderColor = "gray";
                if (input.nextElementSibling && input.nextElementSibling.classList.contains("error-msg")) {
                    input.nextElementSibling.remove();
                }
            }
        });

        if (!hasError) {
            // Ma'lumotlarni chiqarish (yoki serverga yuborish mumkin)
            const data = {};
            inputs.forEach(input => {
                data[input.placeholder] = input.value.trim();
            });

            console.log("Form submitted successfully!", data);

            alert("Form successfully submitted!");

            form.reset(); // formani tozalash
        }
    });
});
