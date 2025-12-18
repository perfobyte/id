
// var domain = new Uint8Array(1);
// hmac_name = "sha256"

export default (id, key, message, hmac, hmac_name, domain, min) => {
    var
        l = id.byteLength,
        i = 0,
        ctr = 0,
        take = 0,
        block = null
    ;

    while (i < l) {
        domain[0] = (ctr++ & 0xff);

        (
            block = (
                hmac(hmac_name, key)
                .update(message)
                .update(domain)
                .digest()
            )
        )
        .copy(id,i,0,(take = min(block.length, (l - i))));

        i += take;
    }

    return id;
}
