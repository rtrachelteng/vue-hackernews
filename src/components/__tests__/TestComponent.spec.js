import { shallowMount } from '@vue/test-utils'
import TestComponent from '../TestComponent.vue'
// import Child from '../Child.vue'

// describe('Chapter 2', () => {
//   test('renders Hello, World!', () => {
//     // Add test code here
//     const wrapper = shallowMount(TestComponent)
//     expect(wrapper.text()).toContain('Hello, World!')
//   })
// })

describe('Chapter 3', () => {
  test('check <a> tag and href', () => {
    const url = 'https://google.com'
    const wrapper = shallowMount(TestComponent)
    const a = wrapper.find('a')
    expect(a.attributes().href).toBe(url)
  })

  // Still cant solve
  // test('renders Child', () => {
  //   const wrapper = shallowMount(TestComponent)
  //   expect(wrapper.find(Child).props().testProp).toBe('some-value')
  // })

  test('p tag is styled color red', () => {
    const wrapper = shallowMount(TestComponent)
    expect(wrapper.find('p').element.style.color).toBe('red')
  })
})
