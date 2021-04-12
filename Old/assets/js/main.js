function copyID() {
    let clipboard = document.getElementById("clipboard");
    let notification = document.getElementById("notification");

    clipboard.value = "239381059551100931";

    clipboard.select();
    clipboard.setSelectionRange(0, 99999);
    document.execCommand("copy");

    notification.style.opacity = 100;
    setTimeout(() => notification.style.opacity = 0, 2000);
}