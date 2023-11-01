/* Promises and Fetch: nạp - xem của f8 và luyện sẽ hiểu hơn */
const promiseObject = fetch('data.json')
// response: phản hồi
const promiseObjectAgain =  promiseObject.then(response => {
    const promiseObject2 = response.json()
    promiseObject2.then(data => {
        console.log(data)

        return undefined
    })

    return 2002
}).then(finalData => {
    console.log('Final data is', finalData)
})