import { AppConfig } from "./types";

var frameId = AppConfig.frameId;
var iframe = document.getElementById(frameId) as HTMLIFrameElement;

/**
 * Open/close popup
 */
function toggle() {
    if (iframe) {
        iframe.style.height = iframe.style.height === "0px" ? "100%" : "0px";
    }
}

// Run each time user click on the icon
toggle();