fetch('https://www.youtube.com/watch?v=4c43Z84qZ1k')
.then((res) =>{
  return res.json()
})
.then((json) =>{
  console.log(json)
})