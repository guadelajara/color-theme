
/* Requirements:
    - Choose "seed color" with an <input type="color"/>
    - Choose color scheme mode in a <select> box 
    - Clicking button makes request to The Color API to get a color scheme
    - Display the scheme colors and hex values on the page

    Stretch Goal:
    - CLick hex values or color to copy to clipboard

*/

document.getElementById("btn").addEventListener('click', function() {

    const color = document.getElementById("color-picker").value.replace('#', '')
    const mode = document.getElementById("mode").value

    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5`)
        .then(res => res.json())
        .then(data => {
            const colors = data.colors
            let html = ""

            for (let color of colors) {
                html += `
                    <div class="color-box">
                        <div style="background-color:${color.hex.value}"></div>
                        <p>${color.hex.value}</p>
                    </div>
                `
            }
            document.getElementById("result").innerHTML = html
    })
    .catch(error => console.error('Fehler:', error));
})

