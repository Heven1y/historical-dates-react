import { makeAutoObservable } from "mobx";

class CircleSliderStore {
  private _activeSlideIndex = 0;

  private _totalSlides;

  constructor(initialTotalSlides: number) {
    makeAutoObservable(this);
    this._totalSlides = initialTotalSlides;
  }

  get activeSlideIndex() {
    return this._activeSlideIndex;
  }

  get totalSlides() {
    return this._totalSlides;
  }

  get isStartSlide() {
    return this._activeSlideIndex === 0;
  }

  get isEndSlide() {
    return this._activeSlideIndex === this._totalSlides - 1;
  }

  public toNextSlide = () => {
    if (!this.isEndSlide) {
      this._activeSlideIndex += 1;
    }
  };

  public toPrevSlide = () => {
    if (!this.isStartSlide) {
      this._activeSlideIndex -= 1;
    }
  };

  public toSlide = (newIndex: number) => {
    if (newIndex >= 0 && newIndex < this._totalSlides) {
      this._activeSlideIndex = newIndex;
    }
  };
}

export default CircleSliderStore;
