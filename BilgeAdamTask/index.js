const arr = ["Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır",
"Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkâri", "Hatay", "Isparta", "İçel (Mersin)", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya",
"Kütahya", "Malatya","Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", 
"Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan","Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"]
let filterArr = [];

document.querySelector('#searchKey').addEventListener('input', filterFunction)
const reqBtn = document.querySelector('#reqNotification')
const reportBtn = document.querySelector('#reportBtn')
const recordBtn = document.querySelector('#recordBtn')
const formTemplate = document.getElementById("myPopup") 

const form = document.createElement('div')
form.innerHTML = `
    <div class="popup-content" id="popup-content">
        <div>
            <button id="closePopup">&#x2715</button>
        </div>
        <div class="formClass">
            <form action="" id="formHtml" >
                    <h2 id="headerText"></h2>
                    <div class="containerInput">
                        <label for="name">
                            <span>Full Name</span><span class="required">*</span>
                            <input type="text" class="nameInput" id="name" name="full_name">
                        </label>
                        <label for="email"><span>Email</span><span class="required">*</span>
                            <input type="email" class="email" id="email" name="email">
                        </label>
                        <label for="telNo"><span>Telefon Numaranız</span><span class="required">*</span>
                            <input type="text" class="telNumber" id="telNo" name="phone" maxlength="12"/>
                        </label>
                        <label for="message">
                            <span id="messageTitle"></span>
                            <span class="required">*</span>
                            <textarea type="text" class="message" id="message" name="message" placeholder=" Mesajınız..."></textarea>
                        </label>
                    </div>
                    <input type="number" class="messageType" id="messageType" name="message_type">
                    <div class="btnContainer"><input class="btn btnSubmit" type="submit" value="Submit" onClick="recordData()"/></div>
                </form>
        </div>
    </div>
        
`

reqBtn.addEventListener("click", function() {
    formTemplate.appendChild(form)
    formTemplate.classList.add("show")
    const message = document.querySelector('#messageTitle')
    const headerText = document.querySelector('#headerText')
    const closePopup = document.querySelector('#closePopup')
    const submitBtn = document.querySelector(".btnSubmit")
    const formElement = document.querySelector("form")
    const messageType = document.querySelector("#messageType")

    message.innerHTML = "İstek Mesajınız"
    headerText.innerHTML= "İstek Bildiriniz"
    messageType.value = 0

    closePopup.addEventListener('click', function() {
        formTemplate.classList.remove("show")
    })

    submitBtn.addEventListener("click",() => {
        formElement.method = "POST"
        var formData = Array.from(document.querySelectorAll("#formHtml input")).reduce((acc, input) => 
        ({...acc,[input.name] : input.value}), {});
        console.log(formData)

        fetch("http://127.0.0.1:5500/message",{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              method: "POST",
              body:formData
        })

        formElement.onsubmit()
        formTemplate.classList.remove("show")
    })
})

reportBtn.addEventListener("click", function() {
    formTemplate.appendChild(form)
    formTemplate.classList.add("show")
    const message = document.querySelector('#messageTitle')
    const headerText = document.querySelector('#headerText')
    const closePopup = document.querySelector('#closePopup')

    message.innerHTML = "Sorun Bildir"
    headerText.innerHTML = "Sorununuzu Açıklayınız"

    closePopup.addEventListener('click', function() {
        formTemplate.classList.remove("show")

    })
})

function filterFunction() {
    const input = document.getElementById("searchKey")
    const text = input.value.toLocaleLowerCase().trim();
    const list = document.querySelector("#filterList")
    list.innerHTML=""
    console.log(text)

    if(!!text) {
        filterArr = arr.filter(i => i.toLocaleLowerCase().substring(0,text.length) === text.toLowerCase() )
        console.log(filterArr)
        list.setAttribute("style", "display:inline-block;")

        for( let i= 0 ; i < filterArr.length ; i++) {
                const li = document.createElement("li");
                li.innerText = filterArr[i];
                li.addEventListener("click", () => {
                    input.value = li.innerHTML.toString()
                    list.innerHTML="";
                })
                list.appendChild(li)
            }
    }  
    else {
        list.setAttribute("style", "display:none")
    }
}