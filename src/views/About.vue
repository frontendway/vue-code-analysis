<template>
    <ul class="history">
      <li>
        <h3 class="title">标题</h3>
        <ul>
          <li>
            <h4>业务类型</h4>
            智慧社区
          </li>
          <li>
            <h4>业务类型</h4>
            智慧社区
          </li>
          <li>
            <h4>业务类型</h4>
            智慧社区
          </li>
          <li>
            <h4>业务类型</h4>
            智慧社区
          </li>
        </ul>
        <section>
          <h4>概述</h4>
          <p>建设以大数据智能应用为核心的“智能安防社区系统”, 形成了公安、综治、街道、物业</p>
        </section>
      </li>
    </ul>
</template>

<style lang="less">
*{
  margin: 0px;
  padding: 0px;
}

.history{
  padding: 0px 10px;
  >li{
    box-sizing: border-box;
    padding: 10px;
    background:rgba(250,250,250,1);
    border-radius: 0.36rem;
    display: flex;
    flex-direction: column;
    .title{
      font-size: 0.4rem;
      line-height: 0.4rem;
    }
    ul{
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 0.36rem 0.36rem;
      font-size: 14px;
      >li{
        display: flex;
      }
    }
    section{
      display: flex;
      font-size: 14px;
      h4{
        width: 2rem;
      }
      p{
        color: #999999;
        line-height: 24px;
        flex-grow: 1;
      }
    }
  }
}
</style>
