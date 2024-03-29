const tabs = document.querySelectorAll('[data-tab-target]')
const tabsContent = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabsContent.forEach(tab => {
      tab.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    target.classList.add('active')
    tab.classList.add('active')
  })
})
