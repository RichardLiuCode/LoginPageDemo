auth.onAuthStateChanged(function (user) {
    if (!user) {
        window.location.replace("login.html")
    }
})