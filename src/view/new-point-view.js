import AbstractView from '../framework/view/abstract-view';
import { ListEmptyText } from '../const';

function createNewPointViewTemplate(filterType) {

  const listEmptyText = ListEmptyText[filterType];
  return `<p class="trip-events__msg">${listEmptyText}</p>`;
}

export default class NewPointView extends AbstractView {
  #filter = null;

  constructor({ filter }) {
    super();
    this.#filter = filter;
  }

  get template() {
    return createNewPointViewTemplate(this.#filter);
  }
}