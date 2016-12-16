var util = function (game) {

};

util.prototype = {

    putCookie: function (name, value, expiry) {
        expiry = expiry || 'Thu, 01 Jan 1970 00:00:00 GMT';
        document.cookie = name + '=' + value + '; expires=' + expiry;
    },

    getCookie: function (name) {
        var b = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
        return b ? b.pop() : undefined;
    }
};
