let img = ['https://yerevanmobile.am/media/catalog/product/cache/bde2025943c04e5ffb3abdc25d03729d/i/m/img_0_77_3550_0_1.jpg', 'https://yerevanmobile.am/media/catalog/product/cache/bde2025943c04e5ffb3abdc25d03729d/i/m/img_0_77_3545_0_1.jpg', 'https://yerevanmobile.am/media/catalog/product/cache/bde2025943c04e5ffb3abdc25d03729d/s/a/samsung-galaxy-a73-5.jpg', 'https://yerevanmobile.am/media/catalog/product/cache/bde2025943c04e5ffb3abdc25d03729d/s/m/sm-s901_galaxys22_front_phantomblack_211122_result_2_1.jpg', 'https://yerevanmobile.am/media/catalog/product/cache/bde2025943c04e5ffb3abdc25d03729d/s/m/sm-s901_galaxys22_front_pinkgold_211122.jpg', 'https://yerevanmobile.am/media/catalog/product/cache/bde2025943c04e5ffb3abdc25d03729d/p/m/pms_1648782872.32459166.jpg', 'https://yerevanmobile.am/media/catalog/product/cache/bde2025943c04e5ffb3abdc25d03729d/6/d/6d003f8419d7313b0d0210a08971e073417095f0_s200741422_1.jpg', 'https://yerevanmobile.am/media/catalog/product/cache/bde2025943c04e5ffb3abdc25d03729d/i/m/img_0_77_3528_7_1.jpg', 'https://yerevanmobile.am/media/catalog/product/cache/bde2025943c04e5ffb3abdc25d03729d/i/m/img_0_77_3509_8_6.png', 'https://yerevanmobile.am/media/catalog/product/cache/bde2025943c04e5ffb3abdc25d03729d/i/m/img_0_77_2929_8_1.jpg', 'https://yerevanmobile.am/media/catalog/product/cache/bde2025943c04e5ffb3abdc25d03729d/i/m/img_0_77_3036_0_6.png', 'https://yerevanmobile.am/media/catalog/product/cache/bde2025943c04e5ffb3abdc25d03729d/i/m/img_0_77_2927_0_1.jpg']
let price = ['֏ 539 000', '֏ 459 000', '֏ 219 000', '֏ 440 000', '֏ 369 000', '֏ 273 000', '֏ 139 000', '֏ 93 000', '֏ 75 000', '֏ 165 000', '֏ 125 000','200000']
let names = ['Xiaomi 12 Pro', 'Xiaomi 12', 'Samsung Galaxy A73 5G', 'Samsung Galaxy S22 Plus/Snapdragon', 'Samsung Galaxy S22/Snapdragon', 'Xiaomi 12X 5G', 'Samsung Galaxy A33 5G', 'Samsung Galaxy A23', 'Samsung Galaxy A13', 'Oppo Reno 5', 'Oppo A74', 'Oppo Reno 5 Lite']

let data = img.map((item,index) =>({src:item,price:price[index],name:names[index]}) )
console.log(data);


const mainList = document.querySelector('main')
const tBody = document.querySelector('tbody')

let input = document.querySelector('input')
let container = document.querySelector('.container')
let cartList = document.querySelector('.cartList')
let span = document.querySelector('span')
let amount = document.querySelector('b')
let amountArr = []
let counter = 0
let sum = 0




cartList.addEventListener('click',(e)=>{
    mainList.classList.toggle('main1');
})


data.forEach(e=>{
    let cart = document.createElement('div')
    let img = document.createElement('img')
    let name = document.createElement('p')
    let price = document.createElement('p')
    let icon = document.createElement('img')

    cart.className = 'cart'
    icon.className = 'icon'
    img.setAttribute('src',e.src)
    name.innerText = e.name
    price.innerText = e.price
    
    cart.append(img,name,price,icon)
    container.append(cart)

    
    input.addEventListener('input',(event)=>{
    	let searchInput = input.value;
            if(searchInput){
                data.map(e=>{
                    if(!name.innerText.toLowerCase().includes(searchInput.toLowerCase())){
                        name.parentElement.style.display = 'none'
                    }else{
                        name.parentElement.style.display = 'block'
                    }
                })
            }else{
                data.map(e=>cart.style.display = 'block')
            }
    })


    
    img.addEventListener('click',()=>{
        let c = 1
        span.innerText =  ++counter
        let tr = document.createElement('tr')
        let tdImg = document.createElement('td') 
        let img1 = document.createElement('img')
        let tdName = document.createElement('td') 
        let tdPrice = document.createElement('td') 
        let count = document.createElement('td') 
        let tdAdd = document.createElement('td') 
        let tdMinus = document.createElement('td') 

        img1.setAttribute('src',e.src)
        img1.className = 'img'
        tdImg.appendChild(img1)
        tdName.innerText = e.name;
        tdPrice.innerText = e.price;
        count.innerText = c
        let priceElem = +e.price.slice(1).split(' ').join('')
        amountArr.push(priceElem)
        
        sum = amountArr.reduce((a,b)=>+a+ +b)
        amount.innerText = sum

        let addButton = document.createElement('button')
        addButton.innerText = '+'
        addButton.addEventListener('click',()=>{
            count.innerText = ++c
            amountArr.push(priceElem)
            sum+= priceElem
            console.log(amountArr);

            amount.innerText = sum
        })

        let minusButton = document.createElement('button')
        minusButton.innerText = '-'
        minusButton.addEventListener('click',()=>{
            count.innerText = --c
            sum-=priceElem
            amountArr.splice(amountArr.indexOf(priceElem),1)
            amount.innerText = sum
            if(!c){
                minusButton.parentElement.parentElement.style.display = 'none'
                counter--
                span.innerText = counter
            }
        })

        tdAdd.appendChild(addButton)
        tdMinus.appendChild(minusButton)
        tr.append(tdImg,tdName,tdPrice,count,tdAdd,tdMinus,);
        tBody.appendChild(tr)
    
  
    })

    icon.addEventListener('click',(e)=>{
        e.target.classList.toggle('icon1')
    })
    
})

