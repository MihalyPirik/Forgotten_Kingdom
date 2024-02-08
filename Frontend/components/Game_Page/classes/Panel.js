export class Panel {
    constructor(x, y, radius, template, eventName, context = null) {
        this.x = x
        this.y = y
        this.context = context
        this.radius = radius
        this.show = new Event(eventName + '_show')
        this.hide = new Event(eventName + '_hide')
        const div = document.createElement('div')
        div.className = 'gamePanel'
        div.append(template.content.cloneNode(true))
        this.element = div
        this.element.addEventListener(this.show.type, this.#ShowPanel)
    }
    #ShowPanel = (e) => {
        this.#processElement(this.element)
        const panel = e.target
        document.querySelector('body').append(panel)
        panel.style.top = this.y - panel.offsetHeight + 'px'
        panel.style.left = this.x + 'px'
        this.element.removeEventListener(this.show.type, this.#ShowPanel)
        this.element.addEventListener(this.hide.type, this.#HidePanel)
    }
    #HidePanel = (e) => {
        const element = e.target
        element.remove()
        this.element.addEventListener(this.show.type, this.#ShowPanel)
        this.element.removeEventListener(this.hide.type, this.#HidePanel)
    }
    #getMatches = (str, regex, context) => {
        if (context) {
            const matches = []
            let match
            while ((match = regex.exec(str)) !== null) {
                matches.push(match[1])
            }
            return str.replace(regex, (match, variable) => {
                return context[variable] || match
            })
        }
    }
    #processElement(element) {
        if(this.context)
        {
        if (element.nodeType === Node.TEXT_NODE) {
            element.nodeValue = this.#getMatches(element.nodeValue, /{{(.*?)}}/g, this.context);
        } else if (element.nodeType === Node.ELEMENT_NODE) {
            for (const attr of element.attributes) {
                const attrValue = this.#getMatches(attr.value, /{{(.*?)}}/g, this.context);
                element.setAttribute(attr.name, attrValue);
            }
            for (const child of element.childNodes) {
                this.#processElement(child);
            }
        }
    }
    }
}