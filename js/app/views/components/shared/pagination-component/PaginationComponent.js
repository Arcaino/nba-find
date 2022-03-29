import themeColors from "../../../utils/themeColors.js";

class PaginationComponent extends HTMLElement{

    #apiPages;

    constructor(apiPages){
        super();

        this.#apiPages = apiPages;        
        this.render();
    }

    render(){

        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(this.style());
        shadow.appendChild(this.html(this.#apiPages));
    }

    style(){

        const style = document.createElement('style');
        style.textContent = `
            .pagination-component{

                display: flex;
                justify-content: end;
                margin: .5rem 0;
            }

            .pagination-component__pages__button:hover, .pagination-component__left:hover, .pagination-component__right:hover{

                background-color: ${themeColors.hoverColor};
                cursor: pointer;
            }
            
            .pagination-component__pages__button{

                border: 0;
                padding: .8rem;
                background-color: ${themeColors.secundaryColor};
                box-shadow: 0 1px 2px 0 rgba(50,50,50,.4);
                margin: 0 .1rem;
            }

            .pagination-component__left, .pagination-component__right{

                padding: .8rem;
                border: 0;
                background-color: transparent;
            }

            .pagination-component__pages > * {

                border-radius: .2rem;
            }
        `;
        return style;
    }

    html(apiPages){

        const paginationComponent = document.createElement('div');
        paginationComponent.classList.add('pagination-component');

        paginationComponent.innerHTML = `
            <button class="pagination-component__left pg-btn" data-value="${apiPages.current_page-1}"><</button>
            <div class="pagination-component__pages">
                <button class="pagination-component__pages__button pg-btn" data-value="1">First</button>
                <button class="pagination-component__pages__button pg-btn" data-value="${apiPages.current_page-1}">${apiPages.current_page-1}</button>
                <button class="pagination-component__pages__button pg-btn" data-value="${apiPages.current_page}">${apiPages.current_page}</button>
                <button class="pagination-component__pages__button pg-btn" data-value="${apiPages.next_page}">${apiPages.next_page}</button>
                <button class="pagination-component__pages__button pg-btn" data-value="${apiPages.total_pages}">Last</button>
            </div>
            <button class="pagination-component__right pg-btn" data-value="${apiPages.next_page}">></button>
        `;

        this.setNumbersOnPaginationNavigation(paginationComponent);

        return paginationComponent;
    }

    setNumbersOnPaginationNavigation(paginationComponent){

        let pageButtons = paginationComponent.querySelectorAll('.pagination-component__pages__button');
        
        const paginationButtons = {
            firstButton: pageButtons[0],
            previousOfCurrentButton: pageButtons[1],
            currentButton: pageButtons[2],
            nextOfCurrentButton: pageButtons[3],
            lastButton: pageButtons[4]
        }

        if(this.#isOnFirstPage(paginationButtons)){

            paginationButtons.firstButton.style.background = themeColors.primaryColor;
            paginationButtons.firstButton.style.color = themeColors.secundaryColor;
            paginationButtons.firstButton.innerHTML = 1;
            paginationButtons.previousOfCurrentButton.style.display = "none";
            paginationButtons.currentButton.setAttribute("data-value", 2);
            paginationButtons.currentButton.innerHTML = 2;
            paginationButtons.nextOfCurrentButton.setAttribute("data-value", 3);
            paginationButtons.nextOfCurrentButton.innerHTML = 3;
        }else if(this.#isOnSecondPage(paginationButtons)){
            
            paginationButtons.firstButton.style.display = "none";
            paginationButtons.currentButton.style.background = themeColors.primaryColor;
            paginationButtons.currentButton.style.color = themeColors.secundaryColor;
        }else if(this.#isOnLastPage(paginationButtons)){

            paginationButtons.nextOfCurrentButton.style.display = "none";
            paginationButtons.currentButton.style.background = themeColors.primaryColor;
            paginationButtons.currentButton.style.color = themeColors.secundaryColor;
            paginationButtons.lastButton.style.display = "none";
        }else{

            paginationButtons.currentButton.style.background = themeColors.primaryColor;
            paginationButtons.currentButton.style.color = themeColors.secundaryColor;
        }

    }

    #isOnFirstPage(paginationButtons){

        return paginationButtons.previousOfCurrentButton.innerHTML == 0;
    }

    #isOnSecondPage(paginationButtons){

        return paginationButtons.previousOfCurrentButton.innerHTML == 1;
    }

    #isOnLastPage(paginationButtons){

        return paginationButtons.nextOfCurrentButton.innerHTML == 'null';
    }
}

customElements.define('pagination-component', PaginationComponent);

export default PaginationComponent;