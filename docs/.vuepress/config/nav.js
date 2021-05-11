module.exports = [
  {text: '首页', link: '/'},
  {
      text: '技术',
      link: '/technology/',
      items: [
          {text: 'SQL', link: '/pages/8309a5b876fc95e3/'},
          {text: 'md语法', link: '/pages/799406/'},
      ]
  },
  {
    text: '小窝',
    link: '/family/',  //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {text: 'my', items: [
        {text: 'test1', link: '/pages/c8f128/'}, // 这些link是在相应md文件定义的永久链接。另外，注意结尾是有斜杠的
      ]},
      {text: 'mmq', items:[
        {text: 'test2', link: '/pages/9f15c1a281d8bedb/'},

      ]}
    ]
  },
  {
    text: '收藏',
    link: '/pages/beb6c0bd8a66cea6/',
    // items: [
    //   {text: '网站', link: '/pages/beb6c0bd8a66cea6/'},
    // ]
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      {text: '分类', link: '/categories/'},
      {text: '标签', link: '/tags/'},
      {text: '归档', link: '/archives/'},
    ]
  }
]
