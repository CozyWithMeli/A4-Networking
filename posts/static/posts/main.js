console.log('hello world')

const helloWolrdBox = document.getElementById('hello-world')


$.ajax({
    type: 'GET',
    url: '/hello-world/',
    success: function(response){
        console.log('success', response.text)
        helloWolrdBox.textContent=response.text
    },
    error: function(error){
    console.log('error', error)
    }
})

$.ajax({
    type: 'GET',
    url:'/data/',
    success: function (response){
        console.log(response)
        const data = JSON.parse(response.data)
        console.log(data)
    },
    error: function(){
        console.log(error)
    }
})