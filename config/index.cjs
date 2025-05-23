/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxf2f3600e4d0b0ceb',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'ca29da8b90f425cd098ea07f3b2ff48c',

  PROVINCE: '陕西省',
  CITY: '西安市',

  USERS: [
    {
      // 想要发送的人的名字
      name: '浩',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'opEaE6uv6Lq_fOlFLqIrxlLK05s0',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'MfFPh24ngOa2BHDEIMasJbxCJx1n5wIO2AwR-_XIV4E',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '08-02',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '浩', year: '1998', date: '08-02',
        },
        // // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        // {
        //   type: '生日', name: '李四', year: '1996', date: '09-31',
        // },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '03-14',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-11-11' },
        // 结婚纪念日
        //{ keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
     {
      // 想要发送的人的名字
      name: '婵',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'opEaE6hfJsw4hVJ16VdBws09t7xE',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'LO-0Qi1C1zrBTebz1etL4NvHsyMPk6qT-eefOWdYTCU',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-30',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '婵', year: '1997', date: '10-30',
        },
        // // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        // {
        //   type: '生日', name: '李四', year: '1996', date: '09-31',
        // },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '03-14',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-11-11' },
        // 结婚纪念日
        //{ keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'uhuM3gRJcGWqIrjsuAfEHsLxIT8nMa1wPGQvWVFdEU4',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'opEaE6hfJsw4hVJ16VdBws09t7xE',
    }
  ],

}

module.exports = USER_CONFIG

