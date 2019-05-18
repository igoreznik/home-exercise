import url from './sass/style.css';
import './sass/simplejoys.woff';
import './sass/Proxima Nova Alt Regular-webfont.woff';
(function() {
  const searchBtn = document.querySelector('.func-btn.search');
  const closeBtn = document.querySelector('.closeBtn');
  const closeBtnPopUp = document.querySelector('.closeBtn-popUp');
  const FindBtn = document.querySelector('.submitSerachBtn');
  const searchFieldJob = document.querySelector('.search-field-job');
  const suggestItem = document.querySelectorAll('.suggestion-item');
  const errorText = document.querySelector('.error-text');
  const numRegex = new RegExp("^[0-9]+$");
  //const checkBoxList = document.querySelectorAll('.accordion-select');

  searchBtn.addEventListener('click',() => {
    document.querySelector('.search-field-container').classList.toggle('showField');
    document.querySelector('.suggestion-list-wrapper').classList.remove('showSuggestionList');
    searchFieldJob.value = '';
  });

  FindBtn.addEventListener('click', () => {
    //let numResult = numRegex.match(searchFieldJob.value);
    if (searchFieldJob.value == "" || searchFieldJob.value == null)
    {
      searchFieldJob.classList.add('errorStyle');
      return false;

    }
    //if (numResult)
    if (searchFieldJob.value.match(numRegex))
    {
      searchFieldJob.classList.add('errorStyle');
      errorText.classList.add('showError');
      errorText.innerText = 'You must enter only letters A-Z';
    }

    else{
      document.querySelector('.search-field-container').classList.remove('showField');
      document.querySelector('.suggestion-list-wrapper').classList.remove('showSuggestionList');
      document.querySelector('.loader-wrapper').classList.add('showLoader');
      searchFieldJob.classList.remove('errorStyle');
      errorText.classList.remove('showError');
      setTimeout(() => {
        document.querySelector('.loader-wrapper').classList.remove('showLoader');
        document.querySelector('.fadeBg').classList.add('showFadeBg');
        document.querySelector('.results-popup-wrapper').classList.add('showPopUp');
        document.querySelector('.results-text').innerText = `The value ${searchFieldJob.value} found 10 results`;
      },1000);
    }

  });
  closeBtnPopUp.addEventListener('click', () => {
    document.querySelector('.results-popup-wrapper').classList.remove('showPopUp');
    document.querySelector('.fadeBg').classList.remove('showFadeBg');
  });
  closeBtn.addEventListener('click', () => {
    document.querySelector('.search-field-container').classList.remove('showField');
    document.querySelector('.suggestion-list-wrapper').classList.remove('showSuggestionList');
    document.querySelector('.fadeBg').classList.remove('showFadeBg');
    searchFieldJob.value = '';
  });

  searchFieldJob.addEventListener('focus', () => {
    document.querySelector('.fadeBg').classList.add('showFadeBg');
    document.querySelector('.suggestion-list-wrapper').classList.add('showSuggestionList');
    searchFieldJob.classList.remove('errorStyle');
    errorText.classList.remove('showError');
  });

  searchFieldJob.addEventListener('input', () => {
    document.querySelector('.suggestion-list-wrapper').classList.remove('showSuggestionList');
  });

  suggestItem.forEach((item) => {
    item.addEventListener("click", chooseSuggestion);
  });


  function chooseSuggestion(e) {
    searchFieldJob.value = '';
    searchFieldJob.value = e.target.innerText;
    console.log("event",e.target.innerText);
    document.querySelector('.suggestion-list-wrapper').classList.remove('showSuggestionList');
  }
})();
