import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store(
  {
    state:{


      friends:[
        {id:1,name:'lisa',gender:'female'},
        {id:2,name:'jack',gender:'male'},
        {id:3,name:'tom',gender:'male'},
        {id:4,name:'shiry',gender:'female'}
      ],

      tableData: [
        {
          order:'0',
        sole:'10',
        id:'1',
          type:'华为',
          pi:'华为',
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          names:'华为 HUAWEI P20 品牌：华为',
          price:'价格：￥97\n' +
            '\n' +
            '货号：HNTBJ2E080A',
          huohao:'HNTBJ2E080B',
          s:1,
          t:1,
          u:1,
        }, {
          order:'0',
        sole:'10',
        id:'2',
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          names:'小米8 全面屏游戏智能手机 6GB+64GB 黑色 全网通4G 双卡双待\n' +
       '\n' +
       '品牌：小米',
          price:'价格：￥98\n' +
            '\n' +
            '货号：HNTBJ2E080A',
          huohao:'HNTBJ2E080B',
          type:'小米',
          s:0,
          t:0,
          u:0,
      }, {
          order:'0',
        sole:'10',
        id:'3',
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          names:'小米 红米5A 全网通版 3GB+32GB 香槟金 移动联通电信4G手机 双卡双待\n' +
            '\n' +
            '品牌：小米',
          price:'价格：￥95\n' +
            '\n' +
            '货号：HNTBJ2E080A',
          huohao:'HNTBJ2E080C',
          type:'小米',
          s:1,
          t:1,
          u:1,

      }, {
          order:'0',
        sole:'10',
        id:'4',
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        names:'Apple iPhone 8 Plus 64GB 红色特别版 移动联通电信4G手机\n' +
          '\n' +
          '品牌：苹果',
          price:'价格：￥98\n' +
            '\n' +
            '货号：HNTBJ2E080B',
          huohao:'HNTBJ2E080B',
          type:'三星',
          s:0,
          t:0,
          u:0,
        },
        {
          order:'0',
          sole:'10',
          id:'5',
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          names:'小米 红米5A 全网通版 3GB+32GB 香槟金 移动联通电信4G手机 双卡双待\n' +
            '\n' +
            '品牌：小米',
          price:'价格：￥98\n' +
            '\n' +
            '货号：HNTBJ2E080A',
          huohao:'HNTBJ2E080B',
          type:'小米',
          s:1,
          t:1,
          u:1,

        },
        {
          order:'0',
          sole:'10',
          id:'6',
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          names:'小米 红米5A 全网通版 3GB+32GB 香槟金 移动联通电信4G手机 双卡双待\n' +
            '\n' +
            '品牌：小米',
          price:'价格：￥98\n' +
            '\n' +
            '货号：HNTBJ2E080A',
          huohao:'HNTBJ2E080B',
          type:'三星',
          s:0,
          t:0,
          u:0,

        },{
          order:'0',
        sole:'10',
        id:'7',
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        names:'HLA海澜之家简约动物印花短袖T恤\n' +
          '\n' +
          '品牌：海澜之家',
          price:'价格：￥98\n' +
            '\n' +
            '货号：HNTBJ2E080A',
          huohao:'HNTBJ2E080B',
          type:'苹果',
          s:1,
          t:1,
          u:1,
        }, {
          order:'0',
        sole:'10',
        id:'8',
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          names:'HLA海澜之家蓝灰花纹圆领针织布短袖T恤\n' +
            '\n' +
            '品牌：海澜之家',
          price:'价格：￥98\n' +
            '\n' +
            '货号：HNTBJ2E080A',
          huohao:'HNTBJ2E080B',
          type:'三星',
          s:0,
          t:0,
          u:0,
      }, , {
          order:'10',
          sole:'10',
          id:'9',
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          names:'HLA海澜之家短袖T恤男基础款\n' +
            '\n' +
            '品牌：海澜之家',
          price:'价格：￥98\n' +
            '\n' +
            '货号：HNTBJ2E080A',
          huohao:'HNTBJ2E080B',
          type:'OPPO',
          s:1,
          t:1,
          u:1,
        }, {
          order:'0',
          sole:'10',
          id:'10',
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          names:'HLA海澜之家蓝灰花纹圆领针织布短袖T恤\n' +
            '\n' +
            '品牌：海澜之家',
          price:'价格：￥98\n' +
            '\n' +
            '货号：HNTBJ2E080A',
          huohao:'HNTBJ2E080B',
          type:'海澜之家',
          s:0,
          t:0,
          u:0,
        }, {
          order:'10',
        sole:'10',
        id:'11',
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        names:'HLA海澜之家短袖T恤男基础款\n' +
          '\n' +
          '品牌：海澜之家',
          price:'价格：￥98\n' +
            '\n' +
            '货号：HNTBJ2E080A',
          huohao:'HNTBJ2E080B',
          type:'海澜之家',
          s:1,
          t:1,
          u:1,
        }],

      tableData1: [
        {
          order:'0',
          kinds:'服装',
          id:'1',
          level:"一级",
          count:'0',
         min:'0',
          t:1,
          u:1,
        }, {
          order:'0',
          kinds:'手机数码',
          id:'2',
          level:"一级",
          count:'0',
          min:'0',
          t:0,
          u:0,
        }, {
          order:'0',
          kinds:'家用电器',
          id:'3',
          level:"一级",
          count:'0',
          min:'0',
          t:1,
          u:1,

        }, {
          order:'0',
          kinds:'家具家装',
          id:'4',
          level:"一级",
          count:'0',
          min:'0',
          t:0,
          u:0,
        },
        {
          order:'0',
          kinds:'汽车用品',
          id:'5',
          level:"一级",
          count:'0',
          min:'0',
          t:1,
          u:1,
        }],
      tableDatas1: [
        { order:'0',
          level:"二级",
          count:'0',
          min:'件',
          t:1,
          u:1,
            id:'1',
            value: 'waitao',
            label: '外套'},
            {
              order:'0',
              level:"二级",
              count:'0',
              min:'件',
              t:1,
              u:1,
              value: 'Txu',
              label: 'T恤',
              id:'3',
            }, {
          order:'0',
          level:"二级",
          count:'0',
          min:'件',
          t:1,
          u:1,
              value: 'xiuxianku',
              label: '休闲裤',
              id:'4',
            }, {
          order:'0',
          level:"二级",
          count:'0',
          min:'件',
          t:1,
          u:1,
              value: 'niuzaiku',
              label: '牛仔裤',
              id:'5',
            }, {
          order:'0',
          level:"二级",
          count:'0',
          min:'件',
          t:1,
          u:1,
              value: 'chenshan',
              label: '衬衫',
              id:'6'
            }, {
          order:'0',
          level:"二级",
          count:'0',
          min:'件',
          t:1,
          u:1,
              value: 'nanxie',
              label: '男鞋',
            }],
      tableDatas2:[
        {
            value: 'shoujitong',
            label: '手机通讯',
            id:'9'
          },{
            value: 'shoujipei',
            label: '手机配件',
            id:'10'
          }, {
            value: 'sheying',
            label: '摄影',
            id:'11'
          }, {
            value: 'yinying',
            label: '音影',
            id:'12'
          }, {
            value: 'shuma',
            label: '数码配件',
            id:"13"
          }, {
            value: 'zhineng',
            label: '智能设备',
            id:'14'
          }
          ],
      tableDatas3:[
            {
              value: 'dianshi',
              label: '电视',
              id:'16'
            }, {
              value: 'kongtiao',
              label: '空调',
              id:'17'
            },
            {
              value: 'xiyiji',
              label: '洗衣机',
              id:'18'
            }, {
              value: 'bingxing',
              label: '冰箱',
              id:'19'
            }, {
              value: 'chuweidadian',
              label: '厨卫大电',
              id:'20'
            }, {
              value: 'chuweixiaodian',
              label: '厨卫小电',
              id:'21'
            }],
      tableDatas4:[
        {
            value: 'chufang',
            label: '厨房卫浴',
            id:'23'
          }, {
            value: 'dengshi',
            label: '灯饰照明',
            id:'24'
          }, {
            value: 'wujin',
            label: '五金工具'
          }, {
            value: 'wushi',
            label: '卧室家具',
            id:'25'
          }, {
            value: 'keting',
            label: '客厅家具',
            id:'26'
          }],
      tableDatas5:[
            {
              value:'quanxin',
              label:'全新整车',
              id:'28'
            },
            {
              value: 'chezai',
              label: '车载电器',
              id:'29'
            }, {
              value: 'weixiu',
              label: '维修保养',
              id:'30'
            },{
              value: 'zhaungshi',
              label: '汽车装饰',
              id:'31'
            }],

      tableData2: [
        {
          order:'0',
          kinds:'服装-T恤',
          id:'1',
          count:'0',
          min:'0',
          t:1,
          u:1,
        }, {
          order:'0',
          kinds:'服装-裤装',
          id:'2',
          count:'0',
          min:'0',
          t:0,
          u:0,
        }, {
          order:'0',
          kinds:'手机数码-手机通讯',
          id:'3',
          count:'0',
          min:'0',
          t:1,
          u:1,

        }, {
          order:'0',
          kinds:'配件',
          id:'4',
          count:'0',
          min:'0',
          t:0,
          u:0,
        },
        {
          order:'0',
          kinds:'居家',
          id:'5',
          count:'0',
          min:'0',
          t:1,
          u:1,
        }, {
  order:'0',
    kinds:'洗护',
    id:'6',
    count:'0',
    min:'0',
    t:0,
    u:0,
},,
        {
          order:'0',
          kinds:'测试分类',
          id:'7',
          count:'0',
          min:'0',
          t:1,
          u:1,
        }],
      tableData3: [
        {
          order:'100',
          kinds:'颜色',
          id:'1',
          type:'服装-T恤',
          choice:'多选',
         method:'从列表中选取',
         list:'黑色,红色,白色,粉色',
        }, {
          order:'0',
          kinds:'尺寸',
          id:'2',
          type:'服装-裤装',
          choice:'多选',
          method:'从列表中选取',
         list:'M,X,XL,2XL,3XL,4XL',
        }],
      tableData4: [
        {
          order:'0',
         name:'小米',
          id:'1',
         first:'M',
          min:'0',
connect:'商品:100 评价:100'
        }, {
          order:'0',
          name:'七匹狼',
          id:'2',
         first:'S',
          min:'0',
          connect:'商品:100 评价:100'
        }, {
          order:'0',
          name:'海澜之家',
          id:'3',
          first:'H',
          min:'0',

          connect:'商品:100 评价:100'
        }, {
          order:'0',
          name:'苹果',
          id:'4',
          first:'P',
          min:'0',
          connect:'商品:100 评价:100'
        }, {
          order:'0',
          name:'三星',
          id:'5',
          first:'S',
          min:'0',
          connect:'商品:100 评价:100'
        },
        {
          order:'0',
          name:'华为',
          id:'6',
          count:'0',
          min:'0',
          connect:'商品:100 评价:100'
        },{
          order:'0',
          name:'\t\n' +
            '格力',
          id:'7',
          first:'G',
          min:'0',
          connect:'商品:100 评价:100'
        },
        {
          order:'0',
          name:'方太',
          id:'8',
          first:'F',
          min:'0',
          connect:'商品:100 评价:100'
        },
        {
          order:'0',
          name:'万和',
          id:'9',
          first:'W',
          min:'0',
          connect:'商品:100 评价:100'
        }
        ,{
          order:'0',
          name:'\t\n' +
            'OPPO',
          id:'11',
          first:'O',
          min:'0',
          connect:'商品:100 评价:100'
        }],
      tableData5: [
        {
         method:'未支付',
          name:'201809150101000001',
          id:'1',
          time:'2018-09-15 12:24:27',
         number:'test',
          yuan:'￥18732',
          connect:'APP订单',
          station:'已关闭',
          do:'编辑'
        }, {
          method:'支付宝',
          name:'201809150101000001',
          id:'2',
          time:'2018-09-15 12:24:27',
          number:'test',
          yuan:'￥18732',
          connect:'APP订单',
          station:'待发货'
        }, {
          method:'微信',
          name:'201809150101000001',
          id:'3',
          time:'2018-09-15 12:24:27',
          number:'test',
          connect:'APP订单',
          yuan:'￥18732',
          station:'已发货'
        }, {
         method:'微信',
          name:'201809150101000001',
          id:'4',
          time:'2018-09-15 12:24:27',
          number:'test',
          connect:'APP订单',
          yuan:'￥18732',
          station:'已完成'
        }, {
          method:'未支付',
          name:'201809150101000001',
          id:'6',
          time:'2018-09-15 12:24:27',
          number:'test',
          yuan:'￥18732',
          connect:'APP订单',
          station:'已关闭'
        },
        {
          method:'支付宝',
          name:'201809150101000001',
          id:'7',
          count:'0',
          time:'2018-09-15 12:24:27',
          number:'test',
          yuan:'￥18732',
          connect:'APP订单',
          station:'已关闭'
        },{
          method:'微信',
          name:'201809150101000001',
          id:'8',
          time:'2018-09-15 12:24:27',
          number:'test',
          yuan:'￥18732',
          connect:'APP订单',
          station:'待发货'
        },
        {
          method:'未支付',
          name:'201809150101000001',
          id:'9',
          time:'2018-09-15 12:24:27',
          number:'test',
          yuan:'￥18732',
          connect:'APP订单',
          station:'已发货'
        },
        {
          method:'支付宝',
          name:'201809150101000001',
          id:'10',
          time:'2018-09-15 12:24:27',
          number:'test',
          yuan:'￥18732',
          connect:'APP订单',
          station:'已关闭'
        }
        ,{
          method:'微信',
          name:'201809150101000001',
          id:'11',
         time:'2018-09-15 12:24:27',
          number:'test',
         yuan:'￥18732',
          connect:'APP订单',
          station:'已完成'
        }],
      tableData6: [
        {
          method:'未支付',
          name:'2018-10-17 14:34:57',
          id:'1',
          time:'2018-09-15 12:24:27',
          number:'test',
          yuan:'￥18732',
          connect:'APP订单',
          station:'已关闭',
          do:'编辑'
        }, {
          method:'支付宝',
          name:'2018-10-17 14:40:21',
          id:'2',
          time:'2018-09-15 12:24:27',
          number:'test',
          yuan:'￥18732',
          connect:'APP订单',
          station:'待发货'
        }, {
          method:'微信',
          name:'2018-10-17 14:40:21',
          id:'3',
          time:'2018-09-15 12:24:27',
          number:'test',
          connect:'APP订单',
          yuan:'￥18732',
          station:'已发货'
        }, {
          method:'微信',
          name:'2018-10-17 14:40:21',
          id:'4',
          time:'2018-09-15 12:24:27',
          number:'test',
          connect:'APP订单',
          yuan:'￥18732',
          station:'已完成'
        }, {
          method:'未支付',
          name:'2018-10-17 14:40:21',
          id:'6',
          time:'2018-09-15 12:24:27',
          number:'test',
          yuan:'￥18732',
          connect:'APP订单',
          station:'已关闭'
        },
        {
          method:'支付宝',
          name:'2018-10-17 14:40:21',
          id:'7',
          count:'0',
          time:'2018-09-15 12:24:27',
          number:'test',
          yuan:'￥18732',
          connect:'APP订单',
          station:'已关闭'
        },{
          method:'微信',
          name:'2018-10-17 14:40:21',
          id:'8',
          time:'2018-09-15 12:24:27',
          number:'test',
          yuan:'￥18732',
          connect:'APP订单',
          station:'待发货'
        },
        {
          method:'未支付',
          name:'2018-10-17 14:40:21',
          id:'9',
          time:'2018-09-15 12:24:27',
          number:'test',
          yuan:'￥18732',
          connect:'APP订单',
          station:'已发货'
        },
        {
          method:'支付宝',
          name:'2018-10-17 14:40:21',
          id:'10',
          time:'2018-09-15 12:24:27',
          number:'test',
          yuan:'￥18732',
          connect:'APP订单',
          station:'已关闭'
        }
        ,{
          method:'微信',
          name:'2018-10-17 14:40:21',
          id:'11',
          time:'2018-09-15 12:24:27',
          number:'test',
          yuan:'￥18732',
          connect:'APP订单',
          station:'已完成'
        }],
      tableData7: [
        {
          order:'0',
          name:'小米',
          id:'1',
          first:'M',
          min:'0',
          connect:'商品:100 评价:100'
        }, {
          order:'0',
          name:'七匹狼',
          id:'2',
          first:'S',
          min:'0',
          connect:'商品:100 评价:100'
        }, {
          order:'0',
          name:'海澜之家',
          id:'3',
          first:'H',
          min:'0',

          connect:'商品:100 评价:100'
        }, {
          order:'0',
          name:'苹果',
          id:'4',
          first:'P',
          min:'0',
          connect:'商品:100 评价:100'
        }, {
          order:'0',
          name:'三星',
          id:'5',
          first:'S',
          min:'0',
          connect:'商品:100 评价:100'
        },
        {
          order:'0',
          name:'华为',
          id:'6',
          count:'0',
          min:'0',
          connect:'商品:100 评价:100'
        },{
          order:'0',
          name:'\t\n' +
            '格力',
          id:'7',
          first:'G',
          min:'0',
          connect:'商品:100 评价:100'
        },
        {
          order:'0',
          name:'方太',
          id:'8',
          first:'F',
          min:'0',
          connect:'商品:100 评价:100'
        },
        {
          order:'0',
          name:'万和',
          id:'9',
          first:'W',
          min:'0',
          connect:'商品:100 评价:100'
        }
        ,{
          order:'0',
          name:'\t\n' +
            'OPPO',
          id:'11',
          first:'O',
          min:'0',
          connect:'商品:100 评价:100'
        }],
      tableData8: [
        {
          order:'0',
          name:'春季家电家具疯狂秒杀1',
          id:'1',
          timeBefore:'2019-01-28',
          timeEnd:'2019-01-28',
          station:'活动未开始',
          first:'M',
          min:'0',
          connect:'商品:100 评价:100'
        }, {
          order:'0',
          name:'前端测试专用活动',
          id:'2',
          timeBefore:'2019-01-28',
          timeEnd:'2019-01-28',
          station:'活动未开始',
          first:'S',
          min:'0',
          connect:'商品:100 评价:100'
        }, {
          order:'0',
          name:'海澜之家',
          id:'3',
          timeBefore:'2019-01-28',
          timeEnd:'2019-01-28',
          station:'活动未开始',
          first:'H',
          min:'0',

          connect:'商品:100 评价:100'
        }, {
          order:'0',
          name:'春季家电家具疯狂秒杀3',
          id:'4',
          timeBefore:'2019-01-28',
          timeEnd:'2019-01-28',
          station:'活动未开始',
          first:'P',
          min:'0',
          connect:'商品:100 评价:100'
        }, {
          order:'0',
          name:'春季家电家具疯狂秒杀4',
          id:'5',
          station:'活动未开始',
          first:'S',
          timeBefore:'2019-01-28',
          timeEnd:'2019-01-28',
          min:'0',
          connect:'商品:100 评价:100'
        },
        {
          order:'0',
          name:'春季家电家具疯狂秒杀4',
          id:'6',
          timeBefore:'2019-01-28',
          timeEnd:'2019-01-28',
          station:'活动未开始',
          count:'0',
          min:'0',
          connect:'商品:100 评价:100'
        },{
          order:'0',
          name:'春季家电家具疯狂秒杀4',
          id:'7',
          station:'活动未开始',
          first:'G',
          timeBefore:'2019-01-28',
          timeEnd:'2019-01-28',
          min:'0',
          connect:'商品:100 评价:100'
        },
        {
          order:'0',
          name:'春季家电家具疯狂秒杀4',
          id:'8',
          station:'活动未开始',
          first:'F',
          timeBefore:'2019-01-28',
          timeEnd:'2019-01-28',
          min:'0',
          connect:'商品:100 评价:100'
        },
        {
          order:'0',
          name:'春季家电家具疯狂秒杀4',
          id:'9',
          station:'活动未开始',
          first:'W',
          timeBefore:'2019-01-28',
          timeEnd:'2019-01-28',
          min:'0',
          connect:'商品:100 评价:100'
        }
        ,{
          order:'0',
          name:'春季家电家具疯狂秒杀4',
          id:'11',
          station:'活动未开始',
          first:'O',
          timeBefore:'2019-01-28',
          timeEnd:'2019-01-28',
          min:'0',
          connect:'商品:100 评价:100'
        }],
      tableData9: [
        {
          order:'0',
          name:'小米',
          id:'1',
          timeBefore:'2019-01-28',
          timeEnd:'2019-01-28',
          station:'推荐中',
          first:'M',
          min:'0',
          connect:'商品:100 评价:100'
        }, {
          order:'0',
          name:'方太',
          id:'2',
          timeBefore:'2019-01-28',
          timeEnd:'2019-01-28',
          station:'推荐中',
          first:'S',
          min:'0',
          connect:'商品:100 评价:100'
        }, {
          order:'0',
          name:'三星',
          id:'3',
          timeBefore:'2019-01-28',
          timeEnd:'2019-01-28',
          station:'推荐中',
          first:'H',
          min:'0',

          connect:'商品:100 评价:100'
        }, {
          order:'0',
          name:'华为',
          id:'4',
          timeBefore:'2019-01-28',
          timeEnd:'2019-01-28',
          station:'推荐中',
          first:'P',
          min:'0',
          connect:'商品:100 评价:100'
        }, {
          order:'0',
          name:'oppo',
          id:'5',
          station:'推荐中',
          first:'S',
          timeBefore:'2019-01-28',
          timeEnd:'2019-01-28',
          min:'0',
          connect:'商品:100 评价:100'
        },
        {
          order:'0',
          name:'vivo',
          id:'6',
          timeBefore:'2019-01-28',
          timeEnd:'2019-01-28',
          station:'推荐中',
          count:'0',
          min:'0',
          connect:'商品:100 评价:100'
        },{
          order:'0',
          name:'海澜之家',
          id:'7',
          station:'推荐中',
          first:'G',
          timeBefore:'2019-01-28',
          timeEnd:'2019-01-28',
          min:'0',
          connect:'商品:100 评价:100'
        },
        {
          order:'0',
          name:'魅可',
          id:'8',
          station:'推荐中',
          first:'F',
          timeBefore:'2019-01-28',
          timeEnd:'2019-01-28',
          min:'0',
          connect:'商品:100 评价:100'
        },
        {
          order:'0',
          name:'迪奥',
          id:'9',
          station:'推荐中',
          first:'W',
          timeBefore:'2019-01-28',
          timeEnd:'2019-01-28',
          min:'0',
          connect:'商品:100 评价:100'
        }
        ,{
          order:'0',
          name:'阿玛尼',
          id:'11',
          station:'推荐中',
          first:'O',
          timeBefore:'2019-01-28',
          timeEnd:'2019-01-28',
          min:'0',
          connect:'商品:100 评价:100'
        }],
      tableData10: [
        {
          order:'0',
          name:'小米8 全面屏游戏智能手机 6GB+64GB 黑色 全网通4G 双卡双待',
          id:'1',
          timeBefore:'2019-01-28',
          timeEnd:'2019-01-28',
          station:'推荐中',
          first:'M',
          min:'0',
          connect:'商品:100 评价:100'
        }, {
          order:'0',
          name:'华为 HUAWEI P20',
          id:'2',
          timeBefore:'2019-01-28',
          timeEnd:'2019-01-28',
          station:'推荐中',
          first:'S',
          min:'0',
          connect:'商品:100 评价:100'
        }, {
          order:'0',
          name:'小米8 全面屏游戏智能手机 6GB+64GB 黑色 全网通4G 双卡双待',
          id:'3',
          timeBefore:'2019-01-28',
          timeEnd:'2019-01-28',
          station:'推荐中',
          first:'H',
          min:'0',

          connect:'商品:100 评价:100'
        }, {
          order:'0',
          name:'小米 红米5A 全网通版 3GB+32GB 香槟金 移动联通电信4G手机 双卡双待',
          id:'4',
          timeBefore:'2019-01-28',
          timeEnd:'2019-01-28',
          station:'推荐中',
          first:'P',
          min:'0',
          connect:'商品:100 评价:100'
        }, {
          order:'0',
          name:'Apple iPhone 8 Plus 64GB 红色特别版 移动联通电信4G手机',
          id:'5',
          station:'推荐中',
          first:'S',
          timeBefore:'2019-01-28',
          timeEnd:'2019-01-28',
          min:'0',
          connect:'商品:100 评价:100'
        },
        {
          order:'0',
          name:'Apple iPhone 8 Plus 64GB 红色特别版 移动联通电信4G手机',
          id:'6',
          timeBefore:'2019-01-28',
          timeEnd:'2019-01-28',
          station:'推荐中',
          count:'0',
          min:'0',
          connect:'商品:100 评价:100'
        },{
          order:'0',
          name:'Apple iPhone 8 Plus 64GB 红色特别版 移动联通电信4G手机',
          id:'7',
          station:'推荐中',
          first:'G',
          timeBefore:'2019-01-28',
          timeEnd:'2019-01-28',
          min:'0',
          connect:'商品:100 评价:100'
        },
        {
          order:'0',
          name:'Apple iPhone 8 Plus 64GB 红色特别版 移动联通电信4G手机',
          id:'8',
          station:'推荐中',
          first:'F',
          timeBefore:'2019-01-28',
          timeEnd:'2019-01-28',
          min:'0',
          connect:'商品:100 评价:100'
        },
        {
          order:'0',
          name:'Apple iPhone 8 Plus 64GB 红色特别版 移动联通电信4G手机',
          id:'9',
          station:'推荐中',
          first:'W',
          timeBefore:'2019-01-28',
          timeEnd:'2019-01-28',
          min:'0',
          connect:'商品:100 评价:100'
        }
        ,{
          order:'0',
          name:'阿玛尼',
          id:'11',
          station:'推荐中',
          first:'O',
          timeBefore:'2019-01-28',
          timeEnd:'2019-01-28',
          min:'0',
          connect:'商品:100 评价:100'
        }],
      tableData11: [
        {
          position:'APP首页轮播',
          name:'电影推荐广告',
          id:'1',
          times:'0',
          time:'开始时间：2018-11-01 00:00:00\n' +
            '\n' +
            '到期时间：2018-11-24 00:00:00',
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          first:'M',
          min:'0',
          connect:'商品:100 评价:100'
        }, {
          position:'APP首页轮播',
          name:'汽车促销广告',
          id:'2',
          url:'data:image/jpeg;base64,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',
          time:'开始时间：2018-11-01 00:00:00\n' +
            '\n' +
            '到期时间：2018-11-24 00:00:00',
          first:'S',
          times:'0',
          min:'0',
          connect:'商品:100 评价:100'
        }, {
          position:'APP首页轮播',
          name:'汽车促销广告',
          id:'3',
          times:'0',
          url:'data:image/jpeg;base64,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',
          time:'开始时间：2018-11-01 00:00:00\n' +
            '\n' +
            '到期时间：2018-11-24 00:00:00',
          first:'H',
          min:'0',

          connect:'商品:100 评价:100'
        }, {
          position:'APP首页轮播',
          name:'夏季大热促销',
          id:'4',
          times:'0',
          url:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3737849425,2072720307&fm=26&gp=0.jpg',
          time:'开始时间：2018-11-01 00:00:00\n' +
            '\n' +
            '到期时间：2018-11-24 00:00:00',
          station:'推荐中',
          first:'P',
          min:'0',
          connect:'商品:100 评价:100'
        }, {
          position:'APP首页轮播',
          name:'夏季大热促销\n',
          id:'5',
          times:'0',
          url:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2730727509,990428732&fm=26&gp=0.jpg',
          station:'推荐中',
          first:'S',
          time:'开始时间：2018-11-01 00:00:00\n' +
            '\n' +
            '到期时间：2018-11-24 00:00:00',
          min:'0',
          connect:'商品:100 评价:100'
        },
        {
          position:'APP首页轮播',
          name:'汽车推荐广告',
          times:'0',
          url:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=930449681,678945716&fm=26&gp=0.jpg',
          id:'6',
          time:'开始时间：2018-11-01 00:00:00\n' +
            '\n' +
            '到期时间：2018-11-24 00:00:00',
          station:'推荐中',
          count:'0',
          min:'0',
          connect:'商品:100 评价:100'
        },{
          position:'APP首页轮播',
          name:'汽车推荐广告',
          id:'7',
          times:'0',
          url:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=930449681,678945716&fm=26&gp=0.jpg',

          station:'推荐中',
          first:'G',
          time:'开始时间：2018-11-01 00:00:00\n' +
            '\n' +
            '到期时间：2018-11-24 00:00:00',
          min:'0',
          connect:'商品:100 评价:100'
        },
        {
          position:'APP首页轮播',
          name:'汽车推荐广告',
          id:'8',
          times:'0',
          url:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=930449681,678945716&fm=26&gp=0.jpg',

          station:'推荐中',
          first:'F',
          time:'开始时间：2018-11-01 00:00:00\n' +
            '\n' +
            '到期时间：2018-11-24 00:00:00',
          min:'0',
          connect:'商品:100 评价:100'
        },
        {
          position:'APP首页轮播',
          name:'汽车推荐广告',
          id:'9',
          times:'0',
          station:'推荐中',
          url:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=930449681,678945716&fm=26&gp=0.jpg',

          first:'W',
          time:'开始时间：2018-11-01 00:00:00\n' +
            '\n' +
            '到期时间：2018-11-24 00:00:00',
          min:'0',
          connect:'商品:100 评价:100'
        }
        ,{
          position:'APP首页轮播',
          name:'汽车推荐广告',
          id:'11',
          times:'0',
          url:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=930449681,678945716&fm=26&gp=0.jpg',

          station:'推荐中',
          first:'O',
          time:'开始时间：2018-11-01 00:00:00\n' +
            '\n' +
            '到期时间：2018-11-24 00:00:00',
          min:'0',
          connect:'商品:100 评价:100'
        }],
      tableData12:[
  {number:'2132132',
  color:'金色',
  accept:'16G',
  price:'3413',
  have:'344',
  size:''},
  {number:'2132132',
    color:'金色',
    accept:'32G',
    price:'3413',
    have:'344',
    size:''},
  {number:'2132132',
    color:'银色',
    accept:'64G',
    price:'3413',
    have:'344',
    size:''},
  {number:'2132132',
    color:'金色',
    accept:'128G',
    price:'3413',
    have:'344',
    size:''},

],
      options: [
               {
                 id:'1',
                 value: 'fuzhaung',
                 label: '服装',
                 children: [{
                   id:'2',
                   value: 'waitao',
                   label: '外套'},
                   {
                     value: 'Txu',
                     label: 'T恤',
                     id:'3',
                   }, {
                     value: 'xiuxianku',
                     label: '休闲裤',
                     id:'4',
                   }, {
                     value: 'niuzaiku',
                     label: '牛仔裤',
                     id:'5',
                   }, {
                     value: 'chenshan',
                     label: '衬衫',
                     id:'6'
                   }, {
                     value: 'nanxie',
                     label: '男鞋',
                     id:'7'

                   }]
               },
               {
                 id:'8',
                 value: 'shouji',
                 label: '手机数码',
                 children: [{
                   value: 'shoujitong',
                   label: '手机通讯',
                   id:'9'
                 },{
                   value: 'shoujipei',
                   label: '手机配件',
                   id:'10'
                 }, {
                   value: 'sheying',
                   label: '摄影',
                   id:'11'
                 }, {
                   value: 'yinying',
                   label: '音影',
                   id:'12'
                 }, {
                   value: 'shuma',
                   label: '数码配件',
                   id:"13"
                 }, {
                   value: 'zhineng',
                   label: '智能设备',
                   id:'14'
                 }
                 ]
               },
               {
                 value: 'jiayong',
                 label: '家用电器',
                 id:"15",
                 children: [
                   {
                     value: 'dianshi',
                     label: '电视',
                     id:'16'
                   }, {
                     value: 'kongtiao',
                     label: '空调',
                     id:'17'
                   },
                   {
                     value: 'xiyiji',
                     label: '洗衣机',
                     id:'18'
                   }, {
                     value: 'bingxing',
                     label: '冰箱',
                     id:'19'
                   }, {
                     value: 'chuweidadian',
                     label: '厨卫大电',
                     id:'20'
                   }, {
                     value: 'chuweixiaodian',
                     label: '厨卫小电',
                     id:'21'
                   }]
               },
        {
          value: 'jiaju',
          label: '家具家装',
          id:'22',
          children: [{
            value: 'chufang',
            label: '厨房卫浴',
            id:'23'
          }, {
            value: 'dengshi',
            label: '灯饰照明',
            id:'24'
          }, {
            value: 'wujin',
            label: '五金工具'
          }, {
            value: 'wushi',
            label: '卧室家具',
            id:'25'
          }, {
            value: 'keting',
            label: '客厅家具',
            id:'26'
          }]
        },
        {value:'qiche',
          label:'汽车用品',
          id:'27',
          children:[
            {
              value:'quanxin',
              label:'全新整车',
              id:'28'
            },
            {
              value: 'chezai',
              label: '车载电器',
              id:'29'
            }, {
              value: 'weixiu',
              label: '维修保养',
              id:'30'
            },{
              value: 'zhaungshi',
              label: '汽车装饰',
              id:'31'
            }]
        }],
      huohao:[
  {number:'HNTBJ2E080A',
}, {number:'HNTBJ2E080B',
  },  {number:'HNTBJ2E080C',
  },  {number:'HNTBJ2E080D',
  },  {number:'HNTBJ2E080E',
  },  {number:'HNTBJ2E080F',
  },
],
      FormData:[
           {id:'1',name:'华为 HUAWEI P20'
        }, {id:'2',name:'小米8 全面屏游戏智能手机 6GB+64GB 黑色 全网通4G 双卡双待'
        }, {id:'3',name:'小米 红米5A 全网通版 3GB+32GB 香槟金 移动联通电信4G手机 双卡双待'
        }, {id:'4',name:'华为 HUAWEI P20'
        }, {id:'5',name:'华为 HUAWEI P20'
        },
      ],
      option: [
        {
          value: '1',
          label: '三星',
          id:'1',
        }, {
          value: '2',
          label: '华为',
          id:'2',
        },  {
          value: '3',
          label: '七匹狼',
          id:'3',
        }, {
          value: '4',
          label: '苹果',
          id:'4'
        },{
          value: '5',
          label: '格力',
          id:'5'
        }, {
          value: '6',
          label: '方太',
          id:'6'
        }, {
          value: '7',
          label: '万和',
          id:'7'
        }, {
          value: '8',
          label: 'OPPO',
          id:'8'
        }, {
          value: '9',
          label: 'NIKE',
          id:'9'
        }],
      station:[
  {id:'1',
    value:'上架',
    sta:'上架'},
  {id:'2',
    value:'下架',
    sta:'下架'}
],
      check:[
        {id:'1',
        che:'审核通过',
        value:'审核通过'},
        {
          id:'2',
          che:'未审核',
          value:'未审核'
        }
      ],
      number1:[
        {number:'231231'},
        {number:'24344'},
        {number:'34322'}
      ],
header:[
  { accept:'3000',
    size:'5.0',
    number:'6946605',
    price:'3788',
    sprice:'4288',
    kucun:'1000',
    danwei:'件',
    weight:'0',
    order:'0',
    jifen:'2344',
    chengzhang:'2144',
    xianzhi:'0',
    station:true,
    label:'AI智慧全面屏 6GB +64GB 亮黑色 全网通版 移动联通电信4G手机 双卡双待手机 双卡双待'},
  {accept:'2500',
    size:'5.5',
    number:'6946805',
    price:'3780',
    sprice:'4888',
    kucun:'1000',
    danwei:'件',
    weight:'0',
    order:'0',
    jifen:'2344',
    chengzhang:'2144',
    xianzhi:'0',
    station:true,
    label:'AI智慧全面屏 6GB +64GB 亮黑色 全网通版 移动联通电信4G手机 双卡双待手机 双卡双待'},
  {accept:'4500',
    size:'6.0',
    number:'6946609',
    price:'3778',
    sprice:'4588',
    kucun:'1000',
    danwei:'件',
    weight:'0',
    jifen:'2344',
    chengzhang:'2144',
    xianzhi:'0',
    order:'0',
    station:true,
    label:'AI智慧全面屏 6GB +64GB 亮黑色 全网通版 移动联通电信4G手机 双卡双待手机 双卡双待'},
  {accept:'4800',
    size:'5.0',
    number:'6976605',
    price:'3788',
    sprice:'4248',
    kucun:'1000',
    danwei:'件',
    weight:'0',
    jifen:'2344',
    chengzhang:'2144',
    xianzhi:'0',
    order:'0',
    station:true,
    label:'AI智慧全面屏 6GB +64GB 亮黑色 全网通版 移动联通电信4G手机 双卡双待手机 双卡双待'}
  ],
type:[
  {label:'服装-T恤',

  value:'fuzhuang'},
  {label:'服装-裤装',

  value:'kuzhaung'},
  {label:'手机数码-手机通讯',

  value:'shouji'},
  {label:'配件',

  value:'peijian'},
  {label:'居家',
  value:'jujia'},
  {label:'洗护',
  value:'xihu'},
  {label:'测试分类',
  value:'测试'}
],
      network:[
        {value:'3G',
        label:'3G',
        xitong:'Android'},
        {
          value:'4G',
          label:'4G',
          xitong:'IOS'
        }
      ],
      suitable:[
        {
          danwei:'',
          order:'0',
          label:'无上下级分类',
          value:'wu'
      },{
          label:'服装',
          value:'fu'
      },{
          danwei:'',
          order:'0',
         label:'手机数码',
          value:'shou'
      }, {
          danwei:'',
          order:'0',
          label:'家用电器',
          value:'jia'
        },{
          danwei:'',
          order:'0',
        label:'家具家装',
          value:'ju'
        },{
          danwei:'',
          order:'0',
        label:'汽车用品',
          value:'qi'
        }],
toshow:[
  {
    input:'0',
    value1:'shi',
    label1:'是',
    value2:'shi1',
    label2:'是',
    value3:'shi3',
    label3:'普通',
    value4:'shi4',
    label4:'是',
value7:'shi7',
    label7:'手工录入',
    value8:'shi8',
    label8:'是',
    value9:'shi9',
    label9:'是',
    value10:'shi9',
    label10:'是',
    inputs:'海澜之家',
  },{input:'0',
        value1:'fou',
        label1:'否',
    value2:'fou1',
    label2:'否',
    value3:'fou3',
    label3:'颜色',
    value4:'fou4',
    label4:'否',
value7:'fou7',
label7:'从下面列表中选择',
    value8:'fou8',
    label8:'否',
    value9:'fou9',
    label9:'否',
    value10:'fou9',
    label10:'否',
    inputs:'海澜之家',

  },

],
      addType:[
        { value5:'fou5',
          label5:'关键字检索',
          value6:"shi11",
        label6:'唯一'},
        {value5:'shi5',
          label5:'不需要检索',
          value6:'bu',
          label6:'单选'},
        {
          value5:'shifou',
          label5:'范围检索',
          value6:'fan',
          label6:'复选'
      }],
      numberList:[
        {
        id:'1',
        name:'商品编号',
        type:'服装-T恤',
        check:'单选',
        method:'手工录入',
        list:'',
        order:'0'
      },
        {
        id:'2',
        name:'适用季节',
        type:'服装-T恤',
        check:'单选',
        method:'手工录入',
        list:'春季,夏季,秋季,冬季',
        order:'0'
      },{input:'0',
        id:'3',
        name:'适用人群',
        type:'服装-T恤',
        check:'从列表中选取',
        method:'手工录入',
        list:'儿童,青年,中年,老年',
        order:'0'
      },{input:'0',
        id:'4',
        name:'上市时间',
        type:'服装-T恤',
        check:'单选',
        method:'从列表中选取',
        list:'2017年秋,2017年冬,2017年春,2017年夏,',
        order:'0'
      },
        {id:'5',
  name:'袖长',
  type:'服装-T恤',
  check:'单选',
  method:'从列表中选取',
  list:'短袖,长袖,中袖',
  order:'0'}],
      token:'abcd',

      login:false,
menu:{
  users:'200',
 words:'￥5000.00',
  month1:'10000',
  week1:'1000',
  month2:'100000',
  week2:'50000',
  add1:'+10%',
  reduce1:'-10%',
  add2:'+10%',
  reduce2:'-10%'
},
event:{
     order:'(10)'
},
      data:{
        first:'0',
        second:'400',

        third:'50',
        forth:'500'
      },
      user:{
        username:'admin',
        password:'123456',
        code:'',
        rememberMe:false,
        now:'0',
        used:'200',
        month:'1000',
        count:'5000'
      },

      count: 100,
      number:1000
    },

    mutations:{

      addNumber(state){
        console.log("调仓库的 mutation: addNumber")
        state.number++;
      },


      addCount(state){
        //执行一些附加的代码......
        //alert("你在修改count,小心引起登录失败!!!")
        state.count++
      },

      modifyCount(state, n){
        state.count = n;
      }
    },

    actions:{
      addNumber(context){
        console.log("调仓库的action:addNumber,commit到了mutation去了...")
        context.commit('addNumber'); //同步事件
      }
    },

    getters:{
      girlFriends(state){
        return state.friends.filter((p)=>p.gender=='female');
      },

      freeConditionFriends:(state)=>{
        return (genderCondition)=>{
            return state.friends.filter((p)=>p.gender==genderCondition);
        }
      },
idLists(state){
        return state.tableData.id;
}
    }
  }
)

export default store;
