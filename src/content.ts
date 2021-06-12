import { createFrame } from "./contentUtils";
import { Events } from "./types";


chrome.runtime.onMessage.addListener(function (request, sender, response) {

    switch (request.type) {
        case Events.SayHello:
            response({
                message: `Halo`
            })
            return true;
    }
});

createFrame();