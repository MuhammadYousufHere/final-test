$.ajax({
    url:`https://techkaro-test.herokuapp.com/api/v1/getdata`,
    success: function(data){
       console.log(data)
       
       document.querySelector(".card-one").innerHTML += `
       <img class="card-img-top" src="${data[].imageURL}" alt="Card image cap">
      
    }
       
    

});