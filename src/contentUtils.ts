import { AppConfig } from "./types";
import {CSSProperties} from "react";
/**
 * Create iframe to display popup.html
 */
export function createFrame() {
    var frameId = AppConfig.frameId;
    var iframe = document.getElementById(frameId) as HTMLIFrameElement;
    if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.frameBorder = "none";
        iframe.id = frameId;
        iframe.src = chrome.extension.getURL("/popup.html");

        setStyle(iframe, {
            height: `0px`,
            width: `400px`,
            position: `fixed`,
            top: `0px`,
            right: `0px`,
            zIndex: 999999
        })

        document.body.appendChild(iframe);//(document.body.firstElementChild, iframe);
    }
}


function setStyle(target: HTMLElement, styles: CSSProperties) {
    Object.entries(styles).forEach(e => {
        target.style[e[0]] = e[1];
    })
}
