<template>
  <div class="contact-container">
    <ul>
      <li>
        
        <a href="#">
            <div class="icon">
             <Icon  type="QQ"></Icon>
            <span>2384636535</span>   
            </div>
            
        </a>
        <div class="pop">
          <img src="https://img2.baidu.com/it/u=2743606418,860531633&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500" alt="" />
        </div>
      </li>
      <li>
        
        <a href="#">
            <div class="icon">
             <Icon  type="QQ"></Icon>
            <span>2384636535</span>   
            </div>
            
        </a>
        <div class="pop">
          <img src="https://img2.baidu.com/it/u=2743606418,860531633&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500" alt="" />
        </div>
      </li>
      <li>
        
        <a href="#">
            <div class="icon">
             <Icon  type="QQ"></Icon>
            <span>2384636535</span>   
            </div>
            
        </a>
        <div class="pop">
          <img src="https://img2.baidu.com/it/u=2743606418,860531633&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500" alt="" />
        </div>
      </li>
      <li>
        
        <a href="#">
            <div class="icon">
             <Icon  type="QQ"></Icon>
            <span>2384636535</span>   
            </div>
            
        </a>
        <div class="pop">
          <img src="https://img2.baidu.com/it/u=2743606418,860531633&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500" alt="" />
        </div>
      </li>
      
    </ul>
  </div>
</template>

<script>
import Icon from "@/components/Icon/index.vue";
export default {
  components: {
    Icon,
  },
};
</script>

<style scoped lang='less'>
@import "~@/style/var.less";
@import '~@/style/mine.less';
.contact-container {
  list-style: none;
  margin: 0;
  color: white;
  li {
    height: 30px;
    line-height: 30px;
    margin: 14px 0;
    position: relative;
    list-style-type: none;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
  }
  a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    align-content: space-between;
    p {
      margin-left: 5px;
      margin-bottom: 21px;
    }
    .iocn {
      font-size: 26px;
      width: 36px;
      height: 36px;
    }
  }
  .pop {
    position: absolute;
    left: 0;
    padding: 10px 15px;
    background: white;
    border-radius: 5px;
    width: 115px;
    height: 115px;
    margin: 0 auto;
    bottom: 35px;
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: 0.3s;
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      width: 8px;
      height: 8px;
      background: white;
      bottom: -4px;
    }

    img {
      width: 100px;
      height: 100px;
      position: relative;
      left: 5px;
      top: 5px;
      object-fit: cover;
    }
  }
}
</style>