import Mock from 'mockjs';

const Random = Mock.Random
const index = Mock.mock('http://mockapi.com/indexPage',{//方法二
	'swiper|4':[
	    {
	      'imgPath':Random.image('800x400', '#88a1f7', '#FFF', 'banner'),
	      'id':'@id'
	    }
	],
	'section1':{	    
	    'listImg|4': [{
	      'imgPath': Random.image('400x400', '#b7ddf2', '#333', 'product'),
	      'id':'@id'
	    }],
	    'banner':Random.image('400x100', '#ffcc33', '#333', 's1-banner')
	},
	'section2':{	    
	    'listImg|10': [{
	      'imgPath': Random.image('400x400', '#2ca1f7', '#fff', 'product'),
	      'price|99-1000':100,
	      'title|1':['Dior','娇兰','黛珂','iPSA'],
	      'id':'@id'
	    }],
	    'banner':Random.image('400x100', '#22a1f7', '#fff', 's2-banner')
	},
	'section3':{	    
	    'listImg|4': [{
	      'imgPath': Random.image('320x200', '#f5f2a5', '#fff', 'product'),
	      'price|99-1000':100,
	      'title|1':['Dior','娇兰','黛珂','iPSA'],
	      'time|1':['2018/02/07 02:16:32','2018/03/20 08:20:00','2018/09/23 17:45:19','2018/07/23 12:00:50'],
	      'id':'@id'
	    }],
	    'banner':Random.image('400x100', '#f5f2a5', '#333', 's3-banner')
	},
	'section4':{	    
	    'listImg|4': [{
	      'imgPath': Random.image('400x400', '#05f2a5', '#fff', 'product'),
	      'price|99-1000':100,
	      'title|1':['伊丽莎白雅顿','兰蔻','gucci','iPSA'],
	      'detail|1':['我心里一直有个梦，想去嵩山少林学武功','regvfd这是哪里','天哪还有这种操作','快乐的池塘里有只小青蛙'],
	      'id':'@id'
	    }],
	    'banner':Random.image('400x100', '#05f2a5', '#fff', 's4-banner')
	}
})

const detail = Mock.mock('http://mockapi.com/detailPage',{
	'swiper|3':[
	    {
	      'imgPath':Random.image('400x400', '#f5a2a5', '#FFF', 'product-detail'),	      
	    }
	],
	'info':{
		'title|1':['帝皇蜂姿修复蜜润柔肤水臻选套装','金致眼部胶囊精华液','SK-II 护肤精华露（神仙水®）','女子  originals NMD_R'],
		'price':388,
		'intro':Random.cparagraph(2),
		'types':['5ml','30ml','50ml','100ml'],
		'chooseType':'5ml',
		'id':'@id'
	},
	'detail|3':[
		{
	      'imgPath':Random.image('400x400', '#d5d2f5', '#000', 'detail 600x600'),
	    }
	]
})

const classify = Mock.mock('http://mockapi.com/classifyPage',{
	'products|15':[
		{
			'title':'@ctitle(2,3)',//(min,max)
			'list|40':[
				{
					'title':'@cword(2,3)',
					'imgPath':Random.image('200x200', '#f5a2a5', '#FFF', 'product')
				}
			]
		}
	]
})
export {index,detail,classify}

