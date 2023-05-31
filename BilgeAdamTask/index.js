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
            <form action="">
                    <h2 id="headerText"></h2>
                    <label for="name">
                        <span>Full Name</span><span class="required">*</span>
                        <input type="text" class="nameInput" id="name" name="name">
                    </label>
                    <label for="lastName"><span>Lastname</span><span class="required">*</span>
                        <input type="text" class="lastNameInput" id="lastName" name="lastName">
                    </label>
                    <label for="email"><span>Email</span><span class="required">*</span>
                        <input type="email" class="email" id="email" name="email">
                    </label>
                    <label for="telNo"><span>Telefon Numaranız</span><span class="required">*</span>
                        <input type="text" class="telNumber" id="telNo" name="telNo" maxlength="12"/>
                    </label>
                    <label for="message">
                        <span id="messageTitle"></span>
                        <span class="required">*</span>
                        <textarea type="text" class="message" id="message" name="message"></textarea>
                    </label>
                    <label><input class="btn" type="submit" value="Submit" /></label>
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

    message.innerHTML = "İstek Mesajınız"
    headerText.innerHTML= "İstek Bildiriniz"

    closePopup.addEventListener('click', function() {
        formTemplate.style.display = "none"
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
        formTemplate.style.display = "none"
    })
})

recordBtn.addEventListener("click", function() {
    message.innerHTML = "Kayıtları gösterme işleminiz yapılıyor"
    myPopup.classList.add("show")
})


function filterFunction() {

    const input = document.getElementById("searchKey")
    const text = input.value.toLocaleLowerCase().trim();
    const list = document.querySelector("#filterList")
    list.innerHTML=""
    console.log(text)

    if(!!text) {
        filterArr = arr.filter(i => i.toLocaleLowerCase().includes(text) !== false )
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

