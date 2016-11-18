/**
 * Created by el on 13.11.2016 г..
 */
class Data {
    constructor(method, uri, version, message) {
        this.method = method
        this.uri = uri
        this.version = version
        this.message = message
        this.response = undefined;
        this.fulfilled = false;
    }
}