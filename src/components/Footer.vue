<template>
  <div class="footer-container">
    <div class="footer-main">
      <div class="footer-left">
        <h1>香格里拉<strong class="strong">红酿酿</strong>不有限公司</h1>
        <p>联系地址：福建省厦门市双子塔</p>
        <p>联系电话：1008611</p>
        <p>hongliangliang Co. Ltd.</p>
      </div>
      <el-divider direction="vertical" class="vertical"></el-divider>
      <div class="footer-right">
        <dl class="right-dl">
          <dt> > 友情链接</dt>
          <dd>hs</dd>
          <dd>l</dd>
        </dl>
        <dl class="right-dl">
          <dt> > 关于我们</dt>
          <dd>团队</dd>
          <dd>经历</dd>
        </dl>
        <dl class="right-dl">
          <dt> > 官方渠道</dt>
          <dd>微博</dd>
          <dd>微信</dd>
          <dd>小红书</dd>
        </dl>

      </div>
    </div>
    <el-divider class="horizontal"><img src="http://0.ss.faisys.com/image/footer/public_security_icon.png" alt=""></el-divider>
    <div class="footer-other">
      © 云南省香格里拉市红亮亮商贸有限公司 Company 2021-2021
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="less">
@media screen and( min-width: 1000px) {
  .footer-container {
    height: 45vh;
    width: 70vw;
    padding: 0 15vw;
    background: #151616;
    border-top: 6px solid #03864d;
    border-bottom: 6px solid #151616;
    color: rgb(102, 102, 102);
    z-index: 99;
    overflow: hidden;
    .footer-main {
      height: 80%;
      display: flex;
      .footer-left {
        flex: 1;
        font-size: 14px;
        h1 {
          font-family: 'FangSong';
          color: rgb(216, 27, 67);
          padding: 40px 0 0 0;
          font-size: 32px;
          .strong {
            color: white;
          }
        }
        p {
          padding: 5px 0;
        }
      }
      .vertical {
        margin: 7vh 20px 5vh 0px;
        height: 60%;
        opacity: 0.5;
      }
      .footer-right {
        flex: 2;
        display: flex;
        justify-content: space-around;
        margin-top: 5vh;
        .right-dl {
          dt {
            font-size: 16px;
            color: rgb(178, 178, 178);
            padding: 20px 0;
          }
          dd {
            padding: 10px 0;
            margin-left: 20px;
          }
        }
      }
    }
    .horizontal {
      margin: 16px 0;
      width: 100vw;
      transform: translateX(-15vw);
      opacity: 0.5;
      & > .is-center {
        margin-top: 10px;
        background: none;
      }
    }
    .footer-other {
      text-align: center;
      padding: 10px 0;
    }
  }
}
@media screen and( max-width: 1000px) {
  .footer-container {
    height: 45vh;
    width: 80vw;
    padding: 0 10vw;
    background: #151616;
    border-top: 6px solid #03864d;
    border-bottom: 6px solid #151616;
    color: rgb(102, 102, 102);
    z-index: 99;
    overflow: hidden;
    .footer-main {
      height: 80%;
      display: flex;
      .footer-left {
        flex: 1;
        font-size: 14px;
        h1 {
          font-family: 'FangSong';
          color: rgb(216, 27, 67);
          padding: 40px 0 0 0;
          font-size: 32px;
          .strong {
            color: white;
          }
        }
        p {
          padding: 5px 0;
        }
      }
      .vertical {
        margin: 8vh -7px 6vh 18px;
        height: 60%;
        opacity: 0.5;
      }
      .footer-right {
        flex: 2;
        display: flex;
        justify-content: space-around;
        margin-top: 5vh;
        .right-dl {
          dt {
            font-size: 16px;
            color: rgb(178, 178, 178);
            padding: 20px 0;
          }
          dd {
            padding: 10px 0;
            margin-left: 20px;
          }
        }
      }
    }
    .horizontal {
      margin: 16px 0;
      width: 100vw;
      transform: translateX(-15vw);
      opacity: 0.5;
      & > .is-center {
        margin-top: 10px;
        background: none;
      }
    }
    .footer-other {
      text-align: center;
      padding: 10px 0;
    }
  }
}
</style>