function display_data_1b(event) {
    event.preventDefault();

    const form = document.getElementById('email_form');
    const formData = new FormData(form);
    const entries = formData.entries();

    let result = '<br>Submitted following info:<br>';
    for (const [key, value] of entries) {
        console.log(`${key}: ${value}`);
        result += `${key}: ${value}<br>`;
    }
    document.getElementById('result').innerHTML = result;
}