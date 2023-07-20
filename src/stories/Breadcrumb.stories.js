import MyBreadcrumb from './Breadcrumb.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Example/Breadcrumb',
  component: MyBreadcrumb,
  tags: ['autodocs'],
  argTypes: {
    itens:[]
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default = {
  args: {
    itens:[
      {
        name: "Home",
        link: "#"
      },
      {
        name: "Produtos",
        link: "#"
      },
      {
        name: "Produto",
        link: "#"
      }
    ]
  },
};

