/* eslint-disable no-debugger */
import Item from '../Item.vue'
// import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
// import { mount } from '@vue/test-utils'

// describe('Chapter 2', () => {
//   test('sanity test', () => {
//     console.log(Item)
//   })

//   test('renders item', () => {
//     const wrapper = mount(Item)
//     expect(wrapper.vm.$el.textContent).toContain('item') // Using Vue Test Utils to test textContent
//   })

//   test('renders item', () => {
//     const wrapper = mount(Item)
//     expect(wrapper.text()).toContain('item') // Using the Vue Test Utils text method
//   })

//   test('renders item', () => {
//     const wrapper = shallowMount(Item)
//     expect(wrapper.text()).toContain('item') // Using the shallowMount method
//   })

//   test('renders item', () => {
//     const wrapper = shallowMount(Item)
//     debugger
//     expect(wrapper.text()).toContain('item')
//   })
// })

describe('Chapter 3', () => {
  test('renders item.url', () => {
    // Passing props to components in a test
    const item = {
      url: 10
    }
    const wrapper = shallowMount(Item, {
      propsData: { item }
    })
    expect(wrapper.text()).toContain(item.url)
  })

  test('renders item.author', () => {
    // Passing props to components in a test
    const item = {
      by: 'Rachel'
    }
    const wrapper = shallowMount(Item, {
      propsData: { item }
    })
    expect(wrapper.text()).toContain(item.by)
  })

  test('renders item.score', () => {
    // Passing props to components in a test
    const item = {
      score: 26
    }
    const wrapper = shallowMount(Item, {
      propsData: { item }
    })
    expect(wrapper.text()).toContain(item.score)
  })

  test('renders a link to the item.url with item.title as text', () => {
    const item = {
      title: 'some title'
    }
    const wrapper = shallowMount(Item, {
      propsData: { item }
    })
    expect(wrapper.find('a').text()).toBe(item.title) // Testing component text
  })

  test('renders a link to the item.url with item.title as text', () => {
    const item = {
      url: 'http://some-url.com',
      title: 'some-title'
    }
    const wrapper = shallowMount(Item, {
      propsData: { item }
    })
    const a = wrapper.find('a')
    expect(a.text()).toBe(item.title)
    expect(a.attributes().href).toBe(item.url) // Testing DOM attributes
  })
})
