var app = app || {}
app = (()=>{
    let init =()=>{
        onCreate()
    }
    let onCreate =()=>{

        setContentView()

    }
    let setContentView =()=>{
        alert(`테스트 `)
        const vue = `<img id="myImage" onclick="changeImage()"
        src="https://www.w3schools.com/js/pic_bulboff.gif" width="100" height="180">
        <p>Click the light bulb to turn on/off the light.</p>`
        const body = document.querySelector('body')
        body.innerHTML= vue
    }

    return {init}
})();
function changeImage() {
  const image = document.getElementById('myImage');
  if (image.src.match("bulbon")) {
    image.src = "https://www.w3schools.com/js/pic_bulboff.gif";
  } else {
    image.src = "https://www.w3schools.com/js/pic_bulbon.gif";
  }
}