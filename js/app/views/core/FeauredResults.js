class FeaturedResults extends HTMLElement{

    constructor(){

        super();
        this.render();
    }

    render(){

        const shadow = this.attachShadow({ mode: 'open' })
        shadow.appendChild(this.style());
        shadow.appendChild(this.html());        
    }

    style(){

        const style = document.createElement('style');
        style.textContent = `
            .featured-results{
                width: 50%;
                margin: 0 auto;
            }
        `;
        return style;
    }

    html(){

        const featuredResults = document.createElement('div');
        featuredResults.classList.add('featured-results');
        featuredResults.innerHTML = `
            <games-results></games-results>
        `
        return featuredResults;
    }
}

customElements.define('featured-results', FeaturedResults);

export default FeaturedResults;