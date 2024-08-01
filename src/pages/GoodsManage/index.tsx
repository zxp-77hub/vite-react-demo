import { useEffect, useState } from 'react'
import styles from './index.module.scss'
import { Table,Input, Button } from 'antd'
import {PlusOutlined} from '@ant-design/icons'
interface CategoryInfo {
  id: string,
  name: string,
  description?: string,
}

interface GoodsInfo {
  id: string,
  name: string,
  image: string,
  price: number,
  description?: string,
  count?: number,
  category?: CategoryInfo
}

const columns = [
  {
    title:'商品分类',
    dataIndex:'category',
    key: 'category',
    // fiexd:'left',
    render:(text:CategoryInfo) =><span>{text?.name}</span>
  },
  {
    title:'商品名称',
    dataIndex:'name',
    key: 'name',
    // fiexd:'left',
    render:(text:string) =><span>{text}</span>
  },
  {
    title:'商品图片',
    dataIndex:'image',
    key: 'image',
    render:(text:string) =><span>{text}</span>
  },
  {
    title:'商品价格',
    dataIndex:'price',
    key: 'price',
    render:(text:number) =><span>{text} 元</span>
  },
  {
    title:'商品存量',
    dataIndex:'count',
    key: 'count',
    render:(text:number) =>text
  },
  {
    title:'操作',
    key: 'id',
    // fixed:'right',
    width:180,
    render:()=><>
      <Button key='3323' className={styles.mr10}>修改</Button>
      <Button key='2www' type='link'>删除</Button>
    </>
  }

]
export default function GoodsManage() {
  const [data,setData] = useState<GoodsInfo[]>([]);
  const [category, setCategory] = useState<CategoryInfo|undefined>(undefined);
  const [searchText, setSearchText] = useState('');
  const onSearch = ()=>{
      console.log('value', searchText);
      
  }
  const onReset = ()=>{
    console.log('value',"重置");
    setSearchText('')
    
  }
  // TODO 模拟分类树
  const categoryList = Array.from({length:20}).map((_,i)=> ({id:'category'+i,name:'分类'+i}));

  const onChooseCategory = (e)=>{
    if (e.target.tagName === 'SPAN'&& e.target.id !== "button") {
      const categoryId =e.target.attributes['data-id'].value;
      const category =categoryId? categoryList.find(c=>c.id === categoryId): undefined;
      setCategory(category)
      console.log('3434');
      
    }
    
  }

  const handleAddCategory = ()=>{
    console.log(2222);
    
  }

  useEffect(() => {
    let data = Array.from({length:30}).map<GoodsInfo>((_,i)=>({
      id: i+"aa",
      name: '蛋炒饭'+i,
      category: {id:'category'+i,name:'分类'+i},
      image: './xxxxx/xxx/'+i,
      price: i
    }))
    setData(data)
  },[])
  return(
  <div className={styles.goodsBox}>
  <div className={styles.categoryBox} onClick={onChooseCategory}>
    <span key="category" data-id=""  className={[(!category ? styles.activeCategory : '' ), styles.category].join(' ')} >全部</span>
    {
      categoryList.map((cg)=><span key={cg.id} data-id={cg?.id} className={[(category?.id == cg?.id ? styles.activeCategory:''), styles.category].join(' ') }>{cg?.name}</span>)
    }
    <span id='button' className={styles.category} onClick={handleAddCategory}>
      <PlusOutlined/>
    </span>
  </div>
  <div className={styles.goodsListBox}>
    <div className={styles.searchBox}>
          <Input value={searchText} onChange={e=>setSearchText(e.target.value)} className={styles.search} placeholder="搜索分类或商品"/>
          <Button type='primary' onClick={onSearch} className={styles.mr10}>搜索</Button>
          <Button onClick={onReset} className={styles.mr10}>重置</Button> 
          <Button>添加新商品</Button>
    </div>
    <div className={styles.table}>
      <Table columns={columns} dataSource={data}/>

    </div>
  </div>
  
  </div>)
}