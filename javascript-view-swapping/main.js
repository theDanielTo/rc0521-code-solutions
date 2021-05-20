const $tabContainer = document.querySelector('.tab-container');
const $allTabs = document.querySelectorAll('.tab');
const $allViews = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function () {
  if (event.target.matches('.tab')) {
    for (const tab of $allTabs) {
      if (tab === event.target) tab.className = 'tab active';
      else tab.className = 'tab';
    }
    const tabDataViewAttr = event.target.getAttribute('data-view');
    for (const view of $allViews) {
      if (view.getAttribute('data-view') === tabDataViewAttr) view.className = 'view';
      else view.className = 'view hidden';
    }
  }
});
