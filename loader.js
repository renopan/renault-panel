(function () {
    var loadScript = function (url, loadHandler) {
        if (url === void 0) { url = null; }
        if (!url) {
            return false;
        }
        var scriptDom = document.createElement('script');
        scriptDom.setAttribute('async', '');
        scriptDom.type = 'text/javascript';
        scriptDom.onload = loadHandler;
        scriptDom.src = url;
        document.body.appendChild(scriptDom);
        return scriptDom;
    };
    if (!window.renaultButton) {
        loadScript('https://renault.7rlines.com/script.js?ver=4.1.32');
    }
    if (!window.RenaultShowroom || typeof (window.RenaultShowroom) == 'undefined') {
        window.RenaultShowroom = window.RenaultShowroom || []; // renault-showroom
        //window['Lx_model'] = 'duster'; // renault-showroom model
        //supported params: kaptur, koleos, logan, sandero, sandero-stepway, duster, megane
        loadScript('https://showroom.renault.ru/vitrines/static/js/embed.js');
    }
})();
