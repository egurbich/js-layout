import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('#page')

const header = createHeader()

const IMG = '/img/community__banner.png'

const CONTENT_TITLE = 'Що таке База знань?'

const CONTENT_TEXT =
  'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач.'

const BUTTON_TEXT = "Перейти до ком'юніті у Телеграм"

page.append(header)

const title = createElement('h1', 'title', 'Комьюніті')

page.append(title)

const TABS = [
  {
    text: 'База знань',
    line: 'thin',
  },
  {
    text: 'Інформація',
    line: 'bold',
  },
]

const createTabs = () => {
  const tabs = createElement('div', 'tabs')

  TABS.forEach((tabData) => {
    const tab = createElement('div', 'tab')

    const tabName = createElement(
      'span',
      tabData.line === 'thin'
        ? 'tab__name name__disabled'
        : 'tab__name',
    )

    tabName.innerHTML = tabData.text

    const line = createElement('hr', tabData.line)

    tab.append(tabName, line)

    tabs.append(tab)
  })

  return tabs
}

const tabsList = createTabs()
page.append(tabsList)

const createBanner = () => {
  const main = createElement('main', 'main')

  const banner = createElement('div', 'banner')

  const img = createElement('img', 'banner')
  img.src = IMG

  banner.append(img)

  main.append(banner)

  return main
}

const banner = createBanner()
page.append(banner)

const createContent = () => {
  const content = createElement('div', 'content')

  const contentTitle = createElement('h2', 'content__title')
  contentTitle.innerHTML = CONTENT_TITLE

  const contentText = createElement('p', 'content__text')
  contentText.innerHTML = CONTENT_TEXT

  content.append(contentTitle)
  content.append(contentText)

  return content
}

const content = createContent()
page.append(content)

const createButton = () => {
  const link = createElement('a', 'tg__link')
  link.href = '#'

  const container = createElement(
    'div',
    'community__button',
  )

  const button = createElement('span', 'button__text')
  button.innerHTML = BUTTON_TEXT

  container.append(button)
  link.append(container)

  return link
}

const button = createButton()
page.append(button)
