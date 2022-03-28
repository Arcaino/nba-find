class PaginationComponent extends HTMLElement{

    #apiPages;

    constructor(apiPages){
        super();

        this.#apiPages = apiPages;
        this.render();
    }

    render(){

        const shadow = this.attachShadow({ mode: 'open' })
        shadow.appendChild(this.html(this.#apiPages));
    }

    style(){

    }

    html(apiPages){

        const paginationComponent = document.createElement('div');
        paginationComponent.classList.add('pagination-component');

        paginationComponent.innerHTML = `
            <button class="pagination-component__left"><</button>
            <div class="pagination-component__pages">
                <button class="pagination-component__pages__button">${apiPages.current_page}</button>
                <button class="pagination-component__pages__button">${apiPages.next_page}</button>
                <button class="pagination-component__pages__button">${apiPages.next_page+1}</button>
                <span class="pagination-component__pages__reference">...</span>
                <button class="pagination-component__pages__button">${apiPages.total_pages}</button>
            </div>
            <button class="pagination-component__right">></button>
        `;

        return paginationComponent;
    }
}

customElements.define('pagination-component', PaginationComponent);

export default PaginationComponent;