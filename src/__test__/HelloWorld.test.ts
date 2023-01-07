import { mount } from "@vue/test-utils";
import HelloWorld from "../components/HelloWorld.vue";

describe("HelloWorld", () => {
  test("hello test", async () => {
    console.log(HelloWorld.__name)
    expect("HelloWorld").toBe(HelloWorld.__name)
  })
  

  test('mount component', async () => {
    expect(HelloWorld).toBeTruthy();

    const wrapper = mount(HelloWorld, {
      props: {
        msg: "hello test"
      }
    })

    expect(wrapper.text()).toContain('hello test')
    expect(wrapper.html()).toMatchSnapshot()

    await wrapper.get('button').trigger('click')
    expect(wrapper.text()).toContain('count is 1')

    await wrapper.get('button').trigger('click')
    expect(wrapper.text()).toContain('count is 2')
    
  })
})