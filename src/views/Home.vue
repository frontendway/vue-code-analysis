<template>
  <div class="home">
    
    <ul class="list">
      <li>
        <h3>标题</h3>
        <div>
          <dl>
            <dt>业务类型</dt>
            <dd>
              业务类型：智慧社区 建设以大数据智能应用为核心的“智能安防社区系统”, 形成了公安测试的
            </dd>
            <dd class="tag">
              <em>上传时间：2020-06-15</em>
              <span>162</span>
            </dd>
          </dl>
          <img src="" alt="">
        </div>
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="less">
*{
  padding: 0px;
  margin: 0px;
}

.list{
  padding: 0px 10px;
  >li{
    margin-bottom: 10px;
    list-style: none;
    box-sizing: border-box;
    padding: 0.18rem;
    box-shadow:0px 0px 6px rgba(0,0,0,0.08);
    border-radius: 0.36rem;
    h3{
      font-size: 0.4rem;
      padding: 0.17rem 0px;
    }
    >div{
      display: grid;
      grid-template-columns: 1fr 2.3rem;
    }
    dl{
      font-size: 14px;
      color: #999999;
    }
    dt,dd{
      line-height: 0.4rem;
    }
    dd{
      overflow : hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .tag{
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      em{
        font-style: normal;
      }
    }
  }
}
</style>
