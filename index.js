var Matcher = require('minimatch').Minimatch;

/**
 * Creates files at specified path with their metadata
 *
 * @param file {Array} array of files to be created, each item of
 * the array should be an object containing a `path` entry (String)
 * an optional `content` entry (String) and an optional `metadata` entry (Object)
 *
 * @return {Function}
 */
module.exports = function (rule) {
    var rule = rule || [];

    return function (files, metalsmith, done) {

        var separator = rule.separator || "<!--more-->";
        var key = rule.key || "children";
        var trim = rule.trim || false;
        var json = rule.json || false;
        var matcher = new Matcher(rule.pattern);

        Object.keys(files).forEach(function(file) {
            if (matcher.match(file)) {
                f = files[file].contents.toString()
                files[file][key] = f.split(separator);
                if (trim) files[file][key].forEach(function (v,k) { files[file][key][k] = v.replace(/^\s+|\s+$/g, ''); })
                if (json) files[file][key].forEach(function (v,k) { 
                    files[file][key][k] = v ? JSON.stringify(v) : v; 
                })
            }
        });
        done();
    };
};
