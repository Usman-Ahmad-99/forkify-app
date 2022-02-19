import View from './View';
import icons from '../../img/icons.svg';

class resultsView extends View {
  _parentEl = document.querySelector('.results');
  _message = '';
  _errorMessage = `No recipes found for your query! Please try again.`;

  _generateMarkup() {
    const id = window.location.hash.slice(1);
    return this._data
      .map(result => {
        return `
        <li class="preview">
            <a class="preview__link ${
              result.id === id ? 'preview__link--active' : ''
            }" href="#${result.id}">
                <figure class="preview__fig">
                <img src="${result.image}" alt="Test" />
                </figure>
                <div class="preview__data">
                    <h4 class="preview__title">${result.title}</h4>
                    <p class="preview__publisher">${result.publisher}</p>
                    <div class="preview__user-generated${
                      this._data.key ? '' : ' hidden'
                    }">
            <svg>
              <use href="${icons}#icon-user"></use>
            </svg>
          </div>
                </div>
            </a>
        </li>
      `;
      })
      .join('');
  }
}

export default new resultsView();
