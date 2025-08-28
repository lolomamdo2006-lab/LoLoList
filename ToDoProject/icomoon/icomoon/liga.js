/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'heart': '&#xe9da;',
            'like': '&#xe9da;',
            'sad2': '&#xe9e6;',
            'emoticon8': '&#xe9e6;',
            'wink2': '&#xe9e8;',
            'emoticon10': '&#xe9e8;',
            'checkbox-checked': '&#xea52;',
            'checkbox': '&#xea52;',
            'linkedin': '&#xeac9;',
            'brand64': '&#xeac9;',
            'alarm': '&#xe950;',
            'time4': '&#xe950;',
            'mug': '&#xe9a2;',
            'drink3': '&#xe9a2;',
            'bin': '&#xe9ac;',
            'trashcan': '&#xe9ac;',
            'star-full': '&#xe9d9;',
            'rate3': '&#xe9d9;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
