let doTask = (success, failure) => {
    //insert data into database and get the result is boolean value
    let flag = false;
    if (flag == true) {
        success("Data Inserted Successfully!");
    }
    else {
        failure("Not Sucessfull!");
    }
}
doTask((msg) => {
    console.log(msg)
}, (err) => {
    console.log(err)
});