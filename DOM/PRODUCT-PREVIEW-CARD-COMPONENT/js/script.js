let body = document.querySelector("body")

body.style.background = "#F2EAE2"

let main = document.createElement("main")

main.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100vh;
`

body.append(main)

let product = document.createElement("div")

product.style.cssText = `
    display: flex;

    width: 600px;
    height: 450px;

    border-radius: 10px;
    background: #fff;
`

main.append(product)

let productImg = document.createElement("div")

product.append(productImg)

let img = document.createElement("img")

img.setAttribute("src", "img/img-product.jpg")
img.setAttribute("alt", "product image")
img.style.borderRadius = "10px 0 0 10px"

productImg.append(img)

let productInfo = document.createElement("div")

productInfo.style.margin = "32px 31.5px 32px"

product.append(productInfo)

let subtitle = document.createElement("p")

subtitle.innerText = "perfume"
subtitle.style.cssText = `
    font-size: 12px;
    font-family: Montserrat;
    font-weight: 500;
    letter-spacing: 5px;
    text-transform: uppercase;

    color: #6C7289;

    margin-bottom: 20px;
`

productInfo.append(subtitle)

let header = document.createElement("h1")

header.innerText = "Gabrielle Essence Eau De Parfum"
header.style.cssText = `
    font-size: 32px;
    font-family: Fraunces;
    font-weight: 700;
    line-height: 32px;

    color: #1C232B;

    margin-bottom: 24px;
`

productInfo.append(header)

let paragraph = document.createElement("p")

paragraph.innerText = "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL."
paragraph.style.cssText = `
    font-size: 14px;
    font-family: Montserrat;
    font-weight: 500;
    line-height: 23px;

    color: #6C7289;

    margin-bottom: 29px;
`

productInfo.append(paragraph)

let price = document.createElement("div")

price.style.cssText = `
    display: flex;
    align-items: center;
    gap: 19px;
 
    margin-bottom: 30px;
`

productInfo.append(price)

let newPrice = document.createElement("p")

newPrice.innerText = "$149.99"
newPrice.style.cssText = `
    font-size: 32px;
    font-family: Fraunces;
    font-weight: 700;
    line-height: 32px;

    color: #3D8168;
`

price.append(newPrice)

let oldPrice = document.createElement("p")

oldPrice.innerText = "$169.99"
oldPrice.style.cssText = `
    font-size: 13px;
    font-family: Montserrat;
    font-weight: 500;
    line-height: 23px;
    text-decoration: line-through;

    color: #6C7289;
`

price.append(oldPrice)

let button = document.createElement("a")

button.innerHTML = `
<svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Cart">
<path id="Shape" fill-rule="evenodd" clip-rule="evenodd" d="M12.8649 8.1664C13.7779 8.52626 14.3794 9.40635 14.3831 10.3878C14.381 11.2088 13.9589 11.9716 13.2644 12.4094C13.4723 12.7661 13.5825 13.1712 13.584 13.584C13.5914 14.5429 13.0268 15.4139 12.1485 15.7985C11.2701 16.1831 10.2471 16.0073 9.54753 15.3516C8.84795 14.6959 8.60643 13.6863 8.93348 12.785H7.0477C7.40887 13.78 7.07458 14.8942 6.22528 15.5261C5.37597 16.158 4.21274 16.158 3.36344 15.5261C2.51413 14.8942 2.17985 13.78 2.54101 12.785H1.59812C1.15681 12.785 0.799059 12.4272 0.799059 11.9859C0.799059 11.5446 1.15681 11.1868 1.59812 11.1868H11.9859C12.4272 11.1868 12.785 10.8291 12.785 10.3878C12.785 9.94648 12.4272 9.58873 11.9859 9.58873H3.76357C3.39211 9.60145 3.06093 9.35638 2.96451 8.99742L0.982843 1.59813H0V1.548e-05H1.59812C1.96072 -0.00157591 2.27893 0.241186 2.37321 0.591319L2.6369 1.59813H13.584C13.8259 1.59095 14.0581 1.69379 14.2153 1.87781C14.3692 2.07435 14.4224 2.33151 14.3591 2.57299L12.8649 8.1664ZM4.39483 7.99061H11.2587L12.5452 3.19625H3.06839L4.39483 7.99061ZM4.79436 14.3831C4.35305 14.3831 3.9953 14.0253 3.9953 13.584C3.9953 13.1427 4.35305 12.785 4.79436 12.785C5.23566 12.785 5.59342 13.1427 5.59342 13.584C5.59342 14.0253 5.23566 14.3831 4.79436 14.3831ZM10.3878 13.584C10.3878 14.0253 10.7455 14.3831 11.1868 14.3831C11.6281 14.3831 11.9859 14.0253 11.9859 13.584C11.9859 13.1427 11.6281 12.785 11.1868 12.785C10.7455 12.785 10.3878 13.1427 10.3878 13.584Z" fill="white"/>
</g>
</svg>
add to cart
`
button.style.cssText = `
    display: flex;
    justify-content: center;
    gap: 11.6px;

    font-size: 14px;
    font-family: Montserrat;
    font-weight: 700;
    color: #fff;

    border-radius: 8px;
    background: #3D8168;

    padding: 15px 0 16px;
`

button.addEventListener("mouseover", () => {
    button.style.background = "#1A4032"
})
button.addEventListener("mouseout", () => {
    button.style.background = "#3D8168"
})

productInfo.append(button)