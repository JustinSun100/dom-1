console.log('hi');
const div = dom.create("    <div><span>ssss</span></div>")
console.log(div);

dom.after(test, div);

const div3 = dom.create('<div id="parent"></div>')
dom.wrap(test, div3)


dom.attr(test, 'title', 'Hi,I am sun')
const title = dom.attr(test, 'title')
console.log(`title:${title}`)

dom.text(test, '你好，这是新的内容')
console.log(dom.text(test))


dom.style(test, { border: '1px solid red', color: 'blue' })
console.log(dom.style(test, 'border'))
dom.style(test, 'border', '1px solid black')

dom.class.add(test, 'red')
dom.class.add(test, 'blue')
dom.class.remove(test, 'blue')
console.log(dom.class.has(test, 'blue'))


const fn = () => {
    console.log('点击一下')
}
dom.on(test, 'click', fn)


dom.append(test, div)

const div1 = dom.find('#test>div')[0] // 获取对应的元素
console.log(div1)
dom.style(div, 'color', 'blue') // 设置 div.style.color

const divList = dom.find('.red') // 获取多个 div.red 元素
dom.each(divList, (n) => console.log(n)) // 遍历 divList 里的所有元素
