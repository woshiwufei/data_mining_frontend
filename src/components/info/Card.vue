<template>
  <el-card class="box-card" v-for="(activity, index) in current_data"
           :key="index"
           style="margin: 8px; min-height: 5%; background-color: transparent; border: none">
    <el-link type="default" :underline="false" style="color: #fff" @click="handleClick(activity)">{{
        activity.title
      }}
    </el-link>
    <div style="float: right; font-size: smaller; color: rgba(255, 255, 255, 0.5);">发布时间：{{
        activity.timestamp
      }}
    </div>
  </el-card>
  <el-pagination layout="total, prev, pager, next," :total="infoData.total" :small="collapse" background
                 :page-size="infoData.pageSize"
                 hide-on-single-page
                 style="display: flex; justify-content: center; margin-bottom: 10px;"
                 @current-change="handleCurrentChange"/>
</template>

<script>
// import {onBeforeMount, reactive, ref, getCurrentInstance, onMounted} from "vue";
//引入router
// import {useRouter, useRoute} from "vue-router";
// const that = this
export default {
  name: 'Card',
  data() {
    return {
      collapse: false,
      activities: [
        {
          id: 1,
          timestamp: '2020-01-01',
          content: "<p style=\"text-align: center;\"><span style=\"color: rgb(0, 0, 0); font-size: 24px;\">硕士研究生答辩公告</span></p><p style=\"text-align: justify;\"><span style=\"color: rgb(64, 169, 255); font-size: 24px;\"> &nbsp; &nbsp;这是一篇公告！</span></p><p style=\"text-indent: 37px; text-align: justify;\"><span style=\"font-size: 19px; font-family: 宋体;\">5月18日，学院举办建院20周年名家讲坛暨创新发展大会。中国科学院院士陈国良教授、华东师范大学副校长周傲英教授应邀作了题为《计算思维：大学计算教育的振兴，科学工程研究的创新》《十年破茧：从大数据到数字化》的专题报告，校党委常委、副校长周如军出席大会并致辞，学院党委书记吕红梅主持大会，院长李斌作学院发展报告。</span></p><p style=\"text-indent: 37px; text-align: justify;\"><span style=\"font-size: 19px; font-family: 宋体;\">陈国良教授介绍了科学与思维的概念、两者的关系，详细讲解了计算思维的定义、实例、特征以及对其他学科的影响，阐述了计算思维是振兴大学计算教育的途径以及计算思维促使科学与工程领域产生革命性的创新成果。周傲英教授结合“谷歌AlphaGo”“共享单车”“微软低代码应用平台”等实际案例，从十年回顾、大数据缘起、解读大数据、数据能、数字化转型等五个方面对主题进行解读。</span></p><p style=\"text-indent: 37px; text-align: justify;\"><span style=\"font-size: 19px; font-family: 宋体;\">创新发展大会上，周如军代表学校向信息工程学院成立20周年表示热烈祝贺，对出席大会的各位嘉宾、校友表示诚挚欢迎，对长期关心和支持学院发展的社会各界人士表示衷心感谢。他高度肯定了学院在学科建设、教学科研、人才培养等方面取得的成绩，希望学院进一步加强与校友和企业的互动与合作，既主动为企业和社会输送高素质人才，又积极借助扬大科研力量强、智库资源好、创新成果多等优势，为校友及企业提供科技服务和决策咨询。</span></p><p style=\"text-indent: 37px; text-align: justify;\"><span style=\"font-size: 19px; font-family: 宋体;\">李斌从艰难起步、攻坚克</span><span style=\"font-size: 19px; font-family: 宋体;\"><strong>难（ 1952-1992），优化组合、快速发展（ 1992-2012），转型化合、勇攀高峰（ 2012-2022）三个阶段回顾了学院办学历史和取得的成绩；指出未来为</strong></span><span style=\"font-size: 19px; font-family: 宋体;\">实现发展目标，必须紧扣“三大发展战略”，更加特色化、地方化、国际化，奋力谱写高水平研究型学院建设新篇章。</span></p><p style=\"text-indent: 37px; text-align: justify;\"><span style=\"font-size: 19px; font-family: 宋体;\">兄弟高校代表南京航空航天大学计算机科学与技术学院/人工智能学院院长陈兵教授、学院荣休教师代表学院原院长陈崚教授发来祝贺视频，兄弟学院代表机械工程学院党委书记刘汉柏致辞，教师代表刘维、在校生代表张天尧发言，校友代表盐城师范学院党委副书记于建江发来致辞视频。</span></p><p style=\"text-indent: 37px; text-align: justify;\"><span style=\"font-size: 19px; font-family: 宋体;\">会上，工作人员宣读了“校企合作创新发展联盟发起单位名单”以及“校企合作创新发展联盟章程”，中国电信扬州分公司党委书记、总经理郭剑先生代表联盟发起单位致辞。学院与联盟中无锡芯享信息科技有限公司、朗坤智慧科技股份有限公司、比昂恒创（上海）科技有限公司、安普科技有限公司等4家企业签订了校企合作协议。与会嘉宾代表和学院党政负责同志共同启动了扬州大学信息工程学院（人工智能学院）发展基金。</span></p><p style=\"text-indent: 37px; text-align: justify;\"><span style=\"font-size: 19px; font-family: 宋体;\">会议通过线上线下相结合的方式进行。曾在学院任职的领导，杰出校友代表，合作企业代表，兄弟高校领导、专家学者，学院师生代表等5000余人参加大会。</span></p><p style=\"text-indent: 37px; text-align: start;\"><span style=\"font-size: 19px; font-family: 宋体;\"><br></span></p><p style=\"text-align: center;\"><img src=\"http://xxgcxy.yzu.edu.cn/__local/D/A4/BB/5F08D101EF7E61ACB3620D95D15_3579E54E_4A3AC3.jpg\" alt=\"\" data-href=\"\" style=\"width: 50%;\"></p><p style=\"text-align: center;\"><img src=\"http://xxgcxy.yzu.edu.cn/__local/4/96/60/1F157C44DE684E341C60ED32670_1DCAE2AA_6AA1DD.jpg\" alt=\"\" data-href=\"\" style=\"width: 50%;\"></p><p style=\"text-align: center;\"><img src=\"http://xxgcxy.yzu.edu.cn/__local/6/78/D0/7FF1D3309CA50674C45662501F7_5E437088_B0CB59.jpg\" alt=\"\" data-href=\"\" style=\"width: 50%;\"></p><p style=\"text-align: center;\"><img src=\"http://xxgcxy.yzu.edu.cn/__local/2/2A/4D/17478C048D133A59AD4CDCB2263_28FC4371_60CFC9.jpg\" alt=\"\" data-href=\"\" style=\"width: 50%;\"></p><p style=\"text-align: center;\"><img src=\"http://xxgcxy.yzu.edu.cn/__local/3/6A/EF/073B918EECA5324E0334E658DE9_29BCA7B6_4BB729.jpg\" alt=\"\" data-href=\"\" style=\"width: 50%;\"></p><p style=\"text-align: center;\"><img src=\"http://xxgcxy.yzu.edu.cn/__local/A/30/0B/4A0F3FB0EF5A48B625F3EAEBD9E_FFA5C3D7_6519B2.jpg\" alt=\"\" data-href=\"\" style=\"width: 50%;\"></p><p style=\"text-align: center;\"><img src=\"http://xxgcxy.yzu.edu.cn/__local/8/DF/79/C1CE666714FC37C2F2A88460027_8842775A_5649D6.jpg\" alt=\"\" data-href=\"\" style=\"width: 50%;\"></p><p style=\"text-align: justify;\"><br></p>",
          title: '<p>欢迎来到学术科研平台</p>',
        },
        {
          id: 2,
          timestamp: '2020-01-02',
          content: '<p>欢迎来到学术科研平台欢迎来到学术科研平台</p>',
          title: '<p>欢迎来到学术科研平台欢迎来到学术科研平台</p>',
        },
        {
          id: 3,
          timestamp: '2020-01-03',
          content: '<p>欢迎来到学术科研平台欢迎来到学术科研平台欢迎来到学术科研平台</p>',
          title: '<p>欢迎来到学术科研平台欢迎来到学术科研平台欢迎来到学术科研平台</p>',
        },
        {
          id: 4,
          timestamp: '2020-01-04',
          content: '<p>欢迎来到学术科研平台欢迎来到学术科研平台欢迎来到学术科研平台欢迎来到学术科研平台</p>',
          title: '<p>欢迎来到学术科研平台欢迎来到学术科研平台欢迎来到学术科研平台欢迎来到学术科研平台</p>',
        },
        {
          id: 5,
          timestamp: '2020-01-05',
          content: '<p>欢迎来到学术科研平台欢迎来到学术科研平台欢迎来到学术科研平台欢迎来到学术科研平台欢迎来到学术科研平台</p>',
          title: '<p>欢迎来到学术科研平台欢迎来到学术科研平台欢迎来到学术科研平台欢迎来到学术科研平台欢迎来到学术科研平台</p>',
        },
        {
          id: 6,
          timestamp: '2020-01-06',
          content: '<p>欢迎来到学术科研平台</p>',
          title: '<p>欢迎来到学术科研平台</p>',
        },
        {
          id: 7,
          timestamp: '2020-01-07',
          content: '<p>欢迎来到学术科研平台</p>',
          title: '<p>欢迎来到学术科研平台</p>',
        },
        {
          id: 8,
          timestamp: '2020-01-08',
          content: '<p>欢迎来到学术科研平台</p>',
          title: '<p>欢迎来到学术科研平台</p>',
        },
        {
          id: 9,
          timestamp: '2020-01-09',
          content: '<p>欢迎来到学术科研平台</p>',
          title: '<p>欢迎来到学术科研平台</p>',
        }
      ],
      infoData: {
        total: 0,
        pageNum: 1,
        pageSize: 7,
        // pageCount: 5,
        // data: activities
      },
      current_data: []
    }
  },
  methods: {
    handleClick: function (info_item) {
      localStorage.removeItem('info_item')
      localStorage.setItem('info_item', JSON.stringify(info_item))
      this.$router.push('/info/detail/' + info_item.id)
//  等待1s
      setTimeout(() => {
        console.log({...this.$route})
      }, 1000)
    },

    handleCurrentChange: function(val){
      //TODO 发起请求获取数据
      this.infoData.pageNum = val
      let length = this.activities.length
      let end = this.infoData.pageSize * val > length ? length : this.infoData.pageSize * val
      this.current_data.splice(0, length, ...this.activities.slice(this.infoData.pageSize * (this.infoData.pageNum - 1), end))
      console.log(this.current_data, this.infoData.pageNum);
    },
  },
  beforeMount() {
    //  获取浏览器窗口宽度
    const width = document.body.clientWidth
    if (width < 480) {
      // console.log(width)
      this.collapse = true
    }
    this.current_data = this.activities.slice(this.infoData.pageSize * (this.infoData.pageNum - 1),
        this.infoData.pageSize * this.infoData.pageNum)
  },
  // mounted() {
  //   console.log('mounted');
  // },
  created() {
    //TODO 发起请求获取数据
    this.infoData.total = this.activities.length
  },
  beforeUnmount() {
    // localStorage.removeItem('info_item')
  },
}

//定义route router
// const router = useRouter();
// const route = useRoute();
// const collapse = ref(false)
//TODO 写个方法根据path得到类别，通过类别id请求数据列表
// const activities = reactive([
//   {
//     id: 1,
//     timestamp: '2020-01-01',
//     content: "<p style=\"text-align: center;\"><span style=\"color: rgb(0, 0, 0); font-size: 24px;\">硕士研究生答辩公告</span></p><p style=\"text-align: justify;\"><span style=\"color: rgb(64, 169, 255); font-size: 24px;\"> &nbsp; &nbsp;这是一篇公告！</span></p><p style=\"text-indent: 37px; text-align: justify;\"><span style=\"font-size: 19px; font-family: 宋体;\">5月18日，学院举办建院20周年名家讲坛暨创新发展大会。中国科学院院士陈国良教授、华东师范大学副校长周傲英教授应邀作了题为《计算思维：大学计算教育的振兴，科学工程研究的创新》《十年破茧：从大数据到数字化》的专题报告，校党委常委、副校长周如军出席大会并致辞，学院党委书记吕红梅主持大会，院长李斌作学院发展报告。</span></p><p style=\"text-indent: 37px; text-align: justify;\"><span style=\"font-size: 19px; font-family: 宋体;\">陈国良教授介绍了科学与思维的概念、两者的关系，详细讲解了计算思维的定义、实例、特征以及对其他学科的影响，阐述了计算思维是振兴大学计算教育的途径以及计算思维促使科学与工程领域产生革命性的创新成果。周傲英教授结合“谷歌AlphaGo”“共享单车”“微软低代码应用平台”等实际案例，从十年回顾、大数据缘起、解读大数据、数据能、数字化转型等五个方面对主题进行解读。</span></p><p style=\"text-indent: 37px; text-align: justify;\"><span style=\"font-size: 19px; font-family: 宋体;\">创新发展大会上，周如军代表学校向信息工程学院成立20周年表示热烈祝贺，对出席大会的各位嘉宾、校友表示诚挚欢迎，对长期关心和支持学院发展的社会各界人士表示衷心感谢。他高度肯定了学院在学科建设、教学科研、人才培养等方面取得的成绩，希望学院进一步加强与校友和企业的互动与合作，既主动为企业和社会输送高素质人才，又积极借助扬大科研力量强、智库资源好、创新成果多等优势，为校友及企业提供科技服务和决策咨询。</span></p><p style=\"text-indent: 37px; text-align: justify;\"><span style=\"font-size: 19px; font-family: 宋体;\">李斌从艰难起步、攻坚克</span><span style=\"font-size: 19px; font-family: 宋体;\"><strong>难（ 1952-1992），优化组合、快速发展（ 1992-2012），转型化合、勇攀高峰（ 2012-2022）三个阶段回顾了学院办学历史和取得的成绩；指出未来为</strong></span><span style=\"font-size: 19px; font-family: 宋体;\">实现发展目标，必须紧扣“三大发展战略”，更加特色化、地方化、国际化，奋力谱写高水平研究型学院建设新篇章。</span></p><p style=\"text-indent: 37px; text-align: justify;\"><span style=\"font-size: 19px; font-family: 宋体;\">兄弟高校代表南京航空航天大学计算机科学与技术学院/人工智能学院院长陈兵教授、学院荣休教师代表学院原院长陈崚教授发来祝贺视频，兄弟学院代表机械工程学院党委书记刘汉柏致辞，教师代表刘维、在校生代表张天尧发言，校友代表盐城师范学院党委副书记于建江发来致辞视频。</span></p><p style=\"text-indent: 37px; text-align: justify;\"><span style=\"font-size: 19px; font-family: 宋体;\">会上，工作人员宣读了“校企合作创新发展联盟发起单位名单”以及“校企合作创新发展联盟章程”，中国电信扬州分公司党委书记、总经理郭剑先生代表联盟发起单位致辞。学院与联盟中无锡芯享信息科技有限公司、朗坤智慧科技股份有限公司、比昂恒创（上海）科技有限公司、安普科技有限公司等4家企业签订了校企合作协议。与会嘉宾代表和学院党政负责同志共同启动了扬州大学信息工程学院（人工智能学院）发展基金。</span></p><p style=\"text-indent: 37px; text-align: justify;\"><span style=\"font-size: 19px; font-family: 宋体;\">会议通过线上线下相结合的方式进行。曾在学院任职的领导，杰出校友代表，合作企业代表，兄弟高校领导、专家学者，学院师生代表等5000余人参加大会。</span></p><p style=\"text-indent: 37px; text-align: start;\"><span style=\"font-size: 19px; font-family: 宋体;\"><br></span></p><p style=\"text-align: center;\"><img src=\"http://xxgcxy.yzu.edu.cn/__local/D/A4/BB/5F08D101EF7E61ACB3620D95D15_3579E54E_4A3AC3.jpg\" alt=\"\" data-href=\"\" style=\"width: 50%;\"></p><p style=\"text-align: center;\"><img src=\"http://xxgcxy.yzu.edu.cn/__local/4/96/60/1F157C44DE684E341C60ED32670_1DCAE2AA_6AA1DD.jpg\" alt=\"\" data-href=\"\" style=\"width: 50%;\"></p><p style=\"text-align: center;\"><img src=\"http://xxgcxy.yzu.edu.cn/__local/6/78/D0/7FF1D3309CA50674C45662501F7_5E437088_B0CB59.jpg\" alt=\"\" data-href=\"\" style=\"width: 50%;\"></p><p style=\"text-align: center;\"><img src=\"http://xxgcxy.yzu.edu.cn/__local/2/2A/4D/17478C048D133A59AD4CDCB2263_28FC4371_60CFC9.jpg\" alt=\"\" data-href=\"\" style=\"width: 50%;\"></p><p style=\"text-align: center;\"><img src=\"http://xxgcxy.yzu.edu.cn/__local/3/6A/EF/073B918EECA5324E0334E658DE9_29BCA7B6_4BB729.jpg\" alt=\"\" data-href=\"\" style=\"width: 50%;\"></p><p style=\"text-align: center;\"><img src=\"http://xxgcxy.yzu.edu.cn/__local/A/30/0B/4A0F3FB0EF5A48B625F3EAEBD9E_FFA5C3D7_6519B2.jpg\" alt=\"\" data-href=\"\" style=\"width: 50%;\"></p><p style=\"text-align: center;\"><img src=\"http://xxgcxy.yzu.edu.cn/__local/8/DF/79/C1CE666714FC37C2F2A88460027_8842775A_5649D6.jpg\" alt=\"\" data-href=\"\" style=\"width: 50%;\"></p><p style=\"text-align: justify;\"><br></p>",
//     title: '<p>欢迎来到学术科研平台</p>',
//   },
//   {
//     id: 2,
//     timestamp: '2020-01-02',
//     content: '<p>欢迎来到学术科研平台欢迎来到学术科研平台</p>',
//     title: '<p>欢迎来到学术科研平台欢迎来到学术科研平台</p>',
//   },
//   {
//     id: 3,
//     timestamp: '2020-01-03',
//     content: '<p>欢迎来到学术科研平台欢迎来到学术科研平台欢迎来到学术科研平台</p>',
//     title: '<p>欢迎来到学术科研平台欢迎来到学术科研平台欢迎来到学术科研平台</p>',
//   },
//   {
//     id: 4,
//     timestamp: '2020-01-04',
//     content: '<p>欢迎来到学术科研平台欢迎来到学术科研平台欢迎来到学术科研平台欢迎来到学术科研平台</p>',
//     title: '<p>欢迎来到学术科研平台欢迎来到学术科研平台欢迎来到学术科研平台欢迎来到学术科研平台</p>',
//   },
//   {
//     id: 5,
//     timestamp: '2020-01-05',
//     content: '<p>欢迎来到学术科研平台欢迎来到学术科研平台欢迎来到学术科研平台欢迎来到学术科研平台欢迎来到学术科研平台</p>',
//     title: '<p>欢迎来到学术科研平台欢迎来到学术科研平台欢迎来到学术科研平台欢迎来到学术科研平台欢迎来到学术科研平台</p>',
//   },
//   {
//     id: 6,
//     timestamp: '2020-01-06',
//     content: '<p>欢迎来到学术科研平台</p>',
//     title: '<p>欢迎来到学术科研平台</p>',
//   },
//   {
//     id: 7,
//     timestamp: '2020-01-07',
//     content: '<p>欢迎来到学术科研平台</p>',
//     title: '<p>欢迎来到学术科研平台</p>',
//   },
//   // {
//   //   id: 8,
//   //   timestamp: '2020-01-08',
//   //   content: '<p>欢迎来到学术科研平台</p>',
//   // },
//   // {
//   //   id: 9,
//   //   timestamp: '2020-01-09',
//   //   content: '<p>欢迎来到学术科研平台</p>',
//   // }
// ])
// let infoData = reactive({
//   total: 50,
//   pageNum: 1,
//   pageSize: 5,
//   // pageCount: 5,
//   data: activities
// })
// let current_data = activities.slice(infoData.pageSize * (infoData.pageNum - 1), infoData.pageSize * infoData.pageNum)


// onBeforeMount(() => {
// //  获取浏览器窗口宽度
//   const width = document.body.clientWidth
//   if (width < 480) {
//     // console.log(width)
//     this.collapse = true
//   }
// })

// onMounted(() => {
// const instance = getCurrentInstance();
// console.log(instance);
// })

// const handleClick = (info_item) => {
//   localStorage.setItem('info_item', JSON.stringify(info_item))
//   router.push('/info/detail/' + info_item.id)
// //  等待1s
//   setTimeout(() => {
//     console.log({...route})
//   }, 1000)
// }
//
// const handleCurrentChange = (val) => {
//   //TODO 发起请求获取数据
//   // infoData.pageNum = val
//   // let length = activities.length
//   // let end = infoData.pageSize * val > length ? length : infoData.pageSize * val
//   // current_data.splice(0, length, ...activities.slice(infoData.pageSize * (infoData.pageNum - 1), end))
//   // console.log(current_data,infoData.pageNum);
// }

</script>

<style scoped>

</style>
