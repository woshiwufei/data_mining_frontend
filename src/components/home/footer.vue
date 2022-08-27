<script setup>

</script>

<template>
  <div class="footer">
    <p>© 2022 扬州大学信息工程学院（人工智能学院） 版权所有　
      <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32100302010246">
        <img src="src/assets/images/network-safe.png" width="20" height="20"
             title="" alt="" style="vertical-align:text-bottom; margin-right:5px;">
        苏公网安备32100302010246号</a>
      <br>
      地址：江苏省扬州市华扬西路196号　邮编：225127
      <br>
      电话：0514-87993875、87993876　传真：0514-87887937　
      E-mail:fgr@yzu.edu.cn
    </p>
  </div>
</template>


<style scoped>


/* 大屏幕 ：大于等于1200px*/
@media (min-width: 1200px) {

  p {
    text-align: center;
    padding: 10px 0;
    color: white;
    font-size: 0.7rem;
    line-height: 1.2rem
  }
}

/*默认*/
@media (min-width: 980px) {
  p {
    text-align: center;
    padding: 10px 0;
    color: white;
    font-size: 0.7rem;
    line-height: 1.2rem
  }
}

/* 平板电脑和小屏电脑之间的分辨率 */
@media (min-width: 768px) and (max-width: 979px) {
  p {
    text-align: center;
    padding: 10px 0;
    color: white;
    font-size: 0.7rem;
    line-height: 1.2rem
  }
}

/* 横向放置的手机和竖向放置的平板之间的分辨率 */
@media (max-width: 767px) {
  p {
    text-align: center;
    padding: 10px 0;
    color: white;
    font-size: 0.7rem;
    line-height: 1.2rem
  }
}

/* 横向放置的手机及分辨率更小的设备 */
@media (max-width: 480px) {
  p {
    text-align: center;
    padding: 10px 0;
    color: white;
    font-size: 0.5rem;
    line-height: 1.5rem
  }
}

.footer {
  /*background-color: #409eff;*/
}

a{
  text-decoration: none;
  color: white
}

</style>
