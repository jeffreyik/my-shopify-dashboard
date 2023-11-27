const setupGuideDropDownBtn = document.querySelector('.setupGuide__btn')
const setupGuide = document.querySelector('.setupGuide')
const selectPlan = document.querySelector('.selectPlan')
const selectPlanCloseBtn = document.querySelector('.selectPlan__closeBtn')
const setupGuideOptionsContainer = document.querySelector('.setupGuide__options')
const setupGuideProgressText = document.querySelector('.setupGuide__progress h3')
const setupGuideProgressBar = document.querySelector('.progress__bar')

const notificationMenu = document.querySelector('.notification__dropdown')
const storenameMenu = document.querySelector('.store__name__dropdown')

const notificationTag = document.querySelector('.notification__tag')
const storeNameTag = document.querySelector('.store__name')

setupGuideDropDownBtn.addEventListener('keypress', (event) => {
    if(event.key === "Enter") {
        event.preventDefault()
        openSetupGuideDropDown()
    }
})

selectPlanCloseBtn.addEventListener('keypress', (event) => {
    if(event.key === "Enter") {
        event.preventDefault()
        closeSelectPlan()
    }
})

notificationTag.addEventListener('keypress', (event) => {
    if(event.key === "Enter") {
        event.preventDefault()
        openNotificationMenu()
    }
})

storeNameTag.addEventListener('keypress', (event) => {
    if(event.key === "Enter") {
        event.preventDefault()
        openStoreNameMenu()
    }
})

const openNotificationMenu = () => {
    if (!storenameMenu.classList.contains('store__name__dropdown--open')) {
        notificationMenu.classList.toggle('notification__dropdown--open')
    } else {
        storenameMenu.classList.remove('store__name__dropdown--open')
        notificationMenu.classList.toggle('notification__dropdown--open')
    }
}

const openStoreNameMenu = () => {
    if (!notificationMenu.classList.contains('notification__dropdown--open')) {
        storenameMenu.classList.toggle('store__name__dropdown--open')
    } else {
        notificationMenu.classList.remove('notification__dropdown--open')
        storenameMenu.classList.toggle('store__name__dropdown--open')
    }
}

const openSetupGuideDropDown = () => {
    setupGuide.classList.toggle('setupGuide--close')
}

const closeSelectPlan = () => {
    selectPlan.style.display = "none"
}

let currentOption = 1

const setupGuideOptions = [
    {
        id: 1,
        completed: false,
        title: 'Customize your online store',
        description: 'Choose a theme and add your logo, colors, and images to reflect your brand.',
        imgURL: 'https://crushingit.tech/hackathon-assets/customise-store.png',
        imgAlt: "Illustration image of a brush Customizing a website",
        btnOne: "Customize theme",
    },
    {
        id: 2,
        completed: false,
        title: 'Add your first product',
        description: 'Write a description, add photos, and set pricing for the products you plan to sell.',
        imgURL: 'https://crushingit.tech/hackathon-assets/product.png',
        imgAlt: "Illustration of products like a shirt, shoe, and glass",
        btnOne: "Add product",
        btnTwo: "Import product"
    },
    {
        id: 3,
        completed: false,
        title: 'Add a custom domain',
        description: 'Your current domain is 222219.myshopify.com but you can add a custom domain to help customers find your online store.',
        imgURL: 'https://crushingit.tech/hackathon-assets/website.png',
        imgAlt: "Illustration of the world wide web (www) mark and domain portal",
        btnOne: "Add domain",
    },
    {
        id: 4,
        completed: false,
        title: 'Name your store',
        description: 'Your temporary store name is currently Davii collections. The store name appears in your admin and your online store.',
        imgURL: 'https://crushingit.tech/hackathon-assets/name-store.png',
        imgAlt: "Illustration of a personalized ecommerce store",
        btnOne: "Name store",
    },
    {
        id: 5,
        completed: false,
        title: 'Set up a payment provider',
        description: 'Choose a payment provider to start accepting payments. You’ll need to create an account with the payment provider and set it up with your Shopify store.',
        imgURL: 'https://crushingit.tech/hackathon-assets/payment.png',
        imgAlt: "Illustration of a payment portal or dashboard",
        btnOne: "Set up payment",
    },
]

const createSetupGuideOptionElements = () => {
    const completedOptions = setupGuideOptions.filter(option => option.completed).length
    setupGuideProgressText.textContent = `${completedOptions}/${setupGuideOptions.length} completed`
    setupGuideProgressBar.style.width = `${completedOptions / setupGuideOptions.length * 100}%`
    
    setupGuideOptions.forEach(option => {
        const setupGuideOptionElement = document.createElement('div')
        setupGuideOptionElement.classList.add('setupGuide__option')
        setupGuideOptionElement.setAttribute("tabindex", "0")
        option.id === currentOption ? setupGuideOptionElement.classList.add('setupGuide__option--open') : setupGuideOptionElement.classList.add('setupGuide__option--close')

        const optionContentElement = document.createElement("div")
        optionContentElement.classList.add("option__content")

        const optionCheckboxElement = document.createElement('div')
        optionCheckboxElement.classList.add("option__checkbox")
        optionCheckboxElement.setAttribute("tabindex", "0")
        optionCheckboxElement.innerHTML = `${option.completed ? 
            `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#303030"></circle>
            <path
              d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
              fill="#fff"
            ></path>
          </svg>` : 
            `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32" fill="none">
                 <circle cx="16" cy="16" r="12" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 6" />
            </svg>`}
        `

        const optionDescriptionElement = document.createElement('div')
        optionDescriptionElement.classList.add('option__description')

        const optionTitleTextElement = document.createElement('h2')
        optionTitleTextElement.classList.add('text--semiBold')
        optionTitleTextElement.innerText = option.title

        const optionDescriptionTextElement = document.createElement('h2')
        optionDescriptionTextElement.classList.add('text--medium')
        optionDescriptionTextElement.innerHTML = `${option.description} <a href="#" class="option__link">Learn more</a>`

        const optionButtonsContainer = document.createElement('div')
        optionButtonsContainer.classList.add('option__buttons')

        const optionButtonElement = document.createElement('button')
        optionButtonElement.classList.add('btn')
        optionButtonElement.classList.add('primary__btn')
        optionButtonElement.innerText = option.btnOne

        const optionSecondaryButtonElement = document.createElement('button')
        optionSecondaryButtonElement.classList.add('btn')
        optionSecondaryButtonElement.classList.add('secondary__btn--light')
        optionSecondaryButtonElement.innerText = option.btnTwo

        const optionImageElement = document.createElement("img")
        optionImageElement.src = option.imgURL
        optionImageElement.alt = option.imgAlt

        optionButtonsContainer.appendChild(optionButtonElement)
        option.btnTwo && optionButtonsContainer.appendChild(optionSecondaryButtonElement)

        optionDescriptionElement.appendChild(optionTitleTextElement)
        optionDescriptionElement.appendChild(optionDescriptionTextElement)
        optionDescriptionElement.appendChild(optionButtonsContainer)

        optionContentElement.appendChild(optionCheckboxElement)
        option.id !== currentOption && optionContentElement.appendChild(optionTitleTextElement)
        optionContentElement.appendChild(optionDescriptionElement)

        setupGuideOptionElement.appendChild(optionContentElement)
        setupGuideOptionElement.appendChild(optionImageElement)

        optionCheckboxElement.addEventListener('click', () => {
            if (!option.completed) {
                option.completed = true
            } else {
                option.completed = false
            }
            setupGuideOptionsContainer.innerHTML = ""
            createSetupGuideOptionElements()
        })
        // Keyboard press
        optionCheckboxElement.addEventListener('keypress', (event) => {
            if(event.key === "Enter") {
                event.preventDefault()
                if (!option.completed) {
                    option.completed = true
                } else {
                    option.completed = false
                }
                setupGuideOptionsContainer.innerHTML = ""
                createSetupGuideOptionElements()
            }
        })

        setupGuideOptionElement.addEventListener('click', () => {
            if (currentOption !== option.id){
                currentOption = option.id
                setupGuideOptionsContainer.innerHTML = ""
                createSetupGuideOptionElements()
            }
            return
        })
        // Keyboard press
        setupGuideOptionElement.addEventListener('keypress', (event) => {
            if(event.key === "Enter") {
                event.preventDefault()
                if (currentOption !== option.id){
                    currentOption = option.id
                    setupGuideOptionsContainer.innerHTML = ""
                    createSetupGuideOptionElements()
                }
                return
            }
        })

        setupGuideOptionsContainer.appendChild(setupGuideOptionElement)
    })
}

createSetupGuideOptionElements()