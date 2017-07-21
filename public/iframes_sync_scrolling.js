window.addEventListener("message", receiveMessage, false);
function receiveMessage(event)
{
    frame1_window = document.getElementById('frame1').contentWindow;
    frame2_window = document.getElementById('frame2').contentWindow;

    if (event.source === frame1_window) {
        frame2_window.postMessage(event.data, "*");
    } else {
        frame1_window.postMessage(event.data, "*");
    }
}
