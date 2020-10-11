// gloabal config
// vue package injections
// loaded once.
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: '@import "@/styles/base.scss";'
            }
        }
    }
}