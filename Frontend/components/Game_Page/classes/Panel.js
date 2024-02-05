export class Panel {
    constructor(x, y, radius, template, eventName, context) {
        this.x = x
        this.y = y
        this.context = context
        this.radius = radius
        this.show = new Event(eventName + '_show')
        this.hide = new Event(eventName + '_hide')
        const div=document.createElement('div')
        div.className='gamePanel'
        div.innerHTML=template.innerHTML
        this.element = div
        this.element.addEventListener(this.show.type, this.#ShowPanel)
    }
    #ShowPanel = (e) => {
        this.element.innerHTML = this.#getMatches(this.element.innerHTML, /{{(.*?)}}/g, this.context)
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