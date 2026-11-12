(function () {
  'use strict';

  const SELECTOR = 'a[href*="dashboard.twitch.tv"][href*="/stream"]';

  function removeTargetElement() {
    const targetLink = document.querySelector(SELECTOR);
    if (!targetLink) return;

    const wrapper = targetLink.closest('div');
    if (wrapper && wrapper.parentElement && wrapper.children.length === 1) {
      wrapper.remove();
    } else {
      targetLink.remove();
    }
  }

  removeTargetElement();

  const observer = new MutationObserver(() => {
    removeTargetElement();
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
})();