import AbstractView from '../framework/view/abstract-view';

function createPointListTemplate() {
  return '<ul class="trip-events__list"></ul>';
}

export default class EventsView extends AbstractView{
  get template() {
    return createPointListTemplate();
  }
}
