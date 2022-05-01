

function createMessage(type = "success", message = "No message") {

    const html = `<div class="message ${type}">${message}</div>`;

    return html;

}  