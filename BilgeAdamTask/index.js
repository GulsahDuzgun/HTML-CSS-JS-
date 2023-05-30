const arr = ["Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır",
"Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkâri", "Hatay", "Isparta", "İçel (Mersin)", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya",
"Kütahya", "Malatya","Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", 
"Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan","Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"]
let filterArr = [];

document.querySelector('#searchKey').addEventListener('input', filterFunction)
const reqBtn = document.querySelector('#reqNotification')
const reportBtn = document.querySelector('#reportBtn')
const recordBtn = document.querySelector('#recordBtn')
const myPopup = document.querySelector('#myPopup')
const closePopup = document.querySelector('#closePopup')
const message = document.querySelector('#message')

reqBtn.addEventListener("click", function() {
    message.innerHTML = "İstek bildirme işleminiz yapılıyor"
    myPopup.classList.add("show")
})

reportBtn.addEventListener("click", function() {
    message.innerHTML = "Sorun bildirme işleminiz yapılıyor"
    myPopup.classList.add("show")
})

recordBtn.addEventListener("click", function() {
    message.innerHTML = "Kayıtları gösterme işleminiz yapılıyor"
    myPopup.classList.add("show")
})

closePopup.addEventListener('click', function() {
    myPopup.classList.remove("show")
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
