let goToMovie = (success, failure) => {
    let amount = 300;
    if (amount > 500) {
        success("Got Tickets , Buy Samosa , Caramel!Enjoy")
    }
    else {
        failure("Go to PG!")
    }
}
//goToMovie(1,2);
goToMovie((tickets) => {
    console.log(tickets)
}, (err) => {
    console.log(err)
})
