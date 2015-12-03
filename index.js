/**
 * Creates files at specified path with their metadata
 *
 * @param file {Array} array of files to be created, each item of
 * the array should be an object containing a `path` entry (String)
 * an optional `content` entry (String) and an optional `metadata` entry (Object)
 *
 * @return {Function}
 */
module.exports = function (generated_files) {
    var generated_files = generated_files || [];

    return function (files, metalsmith, done) {

        generated_files.forEach(function (generated_file) {
            var path = generated_file.path;
            if (!files[path]) files[path] = {}
            if (generated_file.contents) {
                files[path].contents = new Buffer(generated_file.contents);
            } else {
                files[path].contents = new Buffer("");
            }
            if (generated_file.metadata) {
                console.log(files[path])
                console.log(generated_file.metadata)
                Object.assign(files[path], generated_file.metadata)
                console.log(files[path])
            }
        });

        console.log(files)

        done();
    };
};
