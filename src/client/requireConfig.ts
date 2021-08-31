requirejs.config({
    baseUrl: "js",
    paths: {
        "cannon": "https://cdnjs.cloudflare.com/ajax/libs/cannon.js/0.6.2/cannon.min",
    }
});

requirejs(["main"], () => { });
