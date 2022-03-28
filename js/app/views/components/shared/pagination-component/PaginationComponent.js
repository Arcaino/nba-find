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
            }

            .pagination-component__pages__button:hover, .pagination-component__left:hover, .pagination-component__right:hover{

                background-color: #d5d5d5;
                cursor: pointer;
            }
            
            .pagination-component__pages__button{

                border: 0;
                padding: .8rem;
                background-color: #f6f6f6;
                box-shadow: 0 1px 2px 0 rgba(50,50,50,.4);
                margin: 0 .1rem;
            }

            .pagination-component__left, .pagination-component__right{

                padding: .8rem;
                border: 0;
                background-color: transparent;
            }

            .pagination-selected{

                background-color: #d5d5d5;
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

        let pageButtons = paginationComponent.querySelectorAll('.pagination-component__pages__button')
        let firstButton = pageButtons[0];
        let previousOfCurrentButton = pageButtons[1];
        let currentButton = pageButtons[2];
        let nextOfCurrentButton = pageButtons[3];

        if(previousOfCurrentButton.innerHTML == 0){

            firstButton.style.background = "#d5d5d5";
            firstButton.innerHTML = 1;
            previousOfCurrentButton.style.display = "none";
            currentButton.setAttribute("data-value", 2);
            currentButton.innerHTML = 2;
            nextOfCurrentButton.setAttribute("data-value", 3);
            nextOfCurrentButton.innerHTML = 3;
        }else if(previousOfCurrentButton.innerHTML == 1){
            
            firstButton.style.display = "none";
            currentButton.style.background = "#d5d5d5";
        }else{

            currentButton.style.background = "#d5d5d5";
        }

    }
}

customElements.define('pagination-component', PaginationComponent);

export default PaginationComponent;