import themeColors from "../../../utils/themeColors.js";

class SeasonFilter extends HTMLElement{

    constructor(){
        super();
        this.#render();
    }

    #render(){

        const shadow = this.attachShadow({ mode: 'open' });
        shadow.append(this.#style());   
        shadow.appendChild(this.#html());
    }

    #style(){
        
        const style = document.createElement('style');
        style.textContent = `
            .seasonFilter{

                position: absolute;
                width: 10%;
                left: 19.5%;
                display: grid;
                place-items: center;
                font-family: 'Roboto', sans-serif;                
                box-shadow: 0 1px 2px 1px rgba(50,50,50,.3);
                margin-top: 2.8rem;
                border-radius: .5rem;
            }

            .seasonFilter__title{

                font-weight: 600;
                padding: .5rem 0;
                width: 100%;
                text-align: center;
                box-shadow: 0 1px 2px 0 rgba(50,50,50,.3);
                color: ${themeColors.secundaryColor};
                background-color: ${themeColors.primaryColor};
                text-transform: uppercase;
                border-radius: .5rem .5rem 0 0;
            }

            .seasonFilter__link{

                width: 100%;
                text-align: center;
                padding: .5rem 0;
                box-shadow: 0 1px 2px 0 rgba(50,50,50,.3);
                cursor: pointer;
            }

            .seasonFilter__link:hover{
                
                background-color: ${themeColors.hoverColor};
            }
        `;

        return style;
    }

    #html(){

        const seasonFilter = document.createElement('div');
        seasonFilter.classList.add('seasonFilter');

        seasonFilter.innerHTML = `

            <div class="seasonFilter__title">Season</div>
            <a class="seasonFilter__link">2018</a>
            <a class="seasonFilter__link">2019</a>
            <a class="seasonFilter__link">2020</a>
            <a class="seasonFilter__link">2021</a>
            <a class="seasonFilter__link">2021</a>
        `;

        return seasonFilter;
    }
}

customElements.define('season-filter', SeasonFilter);

export default SeasonFilter;