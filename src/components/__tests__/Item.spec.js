/* eslint-disable no-debugger */
import Item from '../Item.vue'
// import Vue from 'vue'
import { mount, shallowMount } from '@vue/test-utils'

describe('Item.vue', () => {
  test('sanity test', () => {
    console.log(Item)
  })

  test('renders item', () => {
    const wrapper = mount(Item)
    expect(wrapper.vm.$el.textContent).toContain('item') // Using Vue Test Utils to test textContent
  })

  test('renders item', () => {
    const wrapper = mount(Item)
    expect(wrapper.text()).toContain('item') // Using the Vue Test Utils text method
  })

  test('renders item', () => {
    const wrapper = shallowMount(Item)
    expect(wrapper.text()).toContain('item') // Using the shallowMount method
  })

  test('renders item', () => {
    const wrapper = shallowMount(Item)
    debugger
    expect(wrapper.text()).toContain('item')
  })
})
