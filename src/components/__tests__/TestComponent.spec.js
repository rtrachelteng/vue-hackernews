import { shallowMount } from '@vue/test-utils'
import TestComponent from '../TestComponent.vue'

describe('Chapter 2 Exercises', () => {
  test('renders Hello, World!', () => {
    // Add test code here
    const wrapper = shallowMount(TestComponent)
    expect(wrapper.text()).toContain('Hello, World!')
  })
})
