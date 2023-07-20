document.querySelector('#btnNum7').addEventListener('click', (e)=> {
    console.log(e.target);
    console.log(e)
    return e.value
})

const selectBtn = id => {
    console.log(id);
    console.log(typeof id)
}