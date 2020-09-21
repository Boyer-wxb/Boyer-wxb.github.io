<template>
    <div class="profile">
        <!-- <van-nav-bar
            title="个人简历"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        /> -->
        <div class="top">
            <div class="name">{{name}}</div>
            <div class="job">求职意向：{{job}}</div>
        </div>
        <div class="info">
            <div class="info-item">
                <van-icon name="star"/><span>年龄：{{age}}</span>
            </div>
            <div class="info-item">
                <van-icon name="phone" /><span>电话：{{phone}}</span>
            </div>
            <div class="info-item">
                <van-icon name="friends"/><span>本科：{{collage}}</span>
            </div>
            <div class="info-item">
                <van-icon name="setting"/><span>专业：{{profess}}</span>
            </div>
            <div class="info-item">
                <van-icon name="service"/><span>邮件：{{mail}}</span>
            </div>
        </div>
        <div class="box">
            <div class="head">
                <div class="title">教育背景</div>
                <div class="title2">Education</div>
            </div>
            <div class="body">
                <p class="point">2010.09 - 2014.06</p>
                <p class="content">就读于长春工业大学-计算机学院-电子信息工程专业</p>
                <p class="point">2014.10 - 2015.04</p>
                <p class="content">长春市四海兴唐学习JAVA WEB开发</p>
            </div>
        </div>
        <div class="box">
            <div class="head">
                <div class="title">工作经历</div>
                <div class="title2">Experience</div>
            </div>
            <div class="body">
                <p class="point">2015.06 - 2016.05</p>
                <p class="content">在珠海市习悦信息技术有限公司任职java开发工程师、拼巴项目负责人。</p>
                <p class="point">2016.06 - 2017.11</p>
                <p class="content">在吉林省领域创意集团任职java开发工程师、饰家服务端负责人。</p>
                <p class="point">2017.12 - 至今</p>
                <p class="content">在吉林省联宇合达科技有限公司任职中级研发工程师、项目经理。</p>
            </div>
        </div>
        <div class="box">
            <div class="head">
                <div class="title">专业能力</div>
                <div class="title2">Competence</div>
            </div>
            <div class="body">
                <p class="point">Java</p>
                <p class="content">SpringBoot、JFinal、SpringMVC、Mybatis Plus、Hibernate</p>
                <p class="point">Database</p>
                <p class="content">Mysql、Oracle、Mongodb、redis、达梦、瀚高</p>
                <p class="point">VUE</p>
                <p class="content">VUE全家桶、Element-UI、Vant、Sass</p>
                <p class="point">Server</p>
                <p class="content">Linux、Windows Server、nginx、openResty、tomcat</p>
                <p class="point">Python</p>
                <p class="content">自动化脚本、网络爬虫</p>
                <p class="point">English</p>
                <p class="content">通过CET-4考试，能够阅读英文开发文档</p>
            </div>
        </div>
        <div class="box">
            <div class="head">
                <div class="title">项目经验</div>
                <div class="title2">Project</div>
            </div>
            <div class="body">
                <p class="point">公主岭检察院项目</p>
                <p class="content">
                    在项目中担任项目经理及主程序。
                    项目分为三个子项目：大屏、微信公众号、App，三个项目功能各不相同。
                    <br><strong>大屏：</strong>前后端分离，后端使用JFinal+MySQL，前端使用VUE。项目用于分析统计一些指标，在大屏幕上展示图表。
                    <br><strong>微信：</strong>未分离，使用JFinal+MySQL+WeUI。项目用于公益诉讼、未成年人检察、刑事检察，展示一些宣传用资料以及收集群众举报等功能。
                    <br><strong>App：</strong>服务端：JFinal+MySQL+Mongodb，客户端：安卓+SPA(VUE)。项目用于检察官办案辅助、法律法规查询。
                </p>
                <p class="content">
                    功能概述：CMS、微信管理、微信小程序、微信公众号、echarts查询统计、并发处理、redis缓存。
                </p>
                <hr>
                <p class="point">检察院一站式服务大厅</p>
                <p class="content">
                    在项目中担任项目经理及主程序。
                    项目分为三个子项目：控申接待、触控一体机、案件公开。用于检察院门岗、大厅大屏和触控机。
                    三个项目架构相同：采用JFinal+MySQL
                </p>
                <p class="content">
                    功能概述：CMS、读取身份证、滚动展示信息。
                </p>
                <hr>
                <p class="point">检信</p>
                <p class="content">
                    在项目中担任前端工程师。
                    前端使用vue全家桶，多入口spa，spa使用vant，中台使用elementUI。
                    用于检察院内部使用，办案辅助，会议，公车，审批流等。
                </p>
                <p class="content">
                    功能概述：单点登录、自定义动画、多机型适配、即时通讯、消息推送等。
                </p>
                <hr>
                <p class="point">饰家</p>
                <p class="content">
                    在项目中担任后端工程师。
                    项目使用SpringMVC+Mybatis。
                    用于展示室内软硬装修，家居摆饰，样板间。
                </p>
                <p class="content">
                    功能概述：资源压缩、数据统计。
                </p>
                <hr>
                <p class="point">拼巴</p>
                <p class="content">
                    在项目中担任项目负责人。
                    项目使用SpringMVC+Mybatis。
                    用于订购长线客车票。
                </p>
                <p class="content">
                    功能概述：微信支付、支付宝支付、银联支付、抢座、排班。
                </p>
                <hr>
            </div>
        </div>
        <div class="box">
            <div class="head">
                <div class="title">自我评价</div>
                <div class="title2">About me</div>
            </div>
            <div class="body">
                <p class="content">爱国敬业，求实创新。为人谦逊，性格和善。热爱技术，精益求精。</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Profile',
        data(){
            return {
                name:'王向博',
                job:'软件研发',
                age:29,
                location:'卫星路',
                phone:13604318974,
                mail:'270121862@qq.com',
                collage:'长春工业大学',
                profess:'电子信息工程',
            }
        },
        methods:{
            onClickLeft() {
                console.log('返回');
            },
        }
    }
</script>

<style lang="scss" scoped>
$color:rgb(53,61,69);
$gray:rgb(242,242,242);

.profile{
    font-family:"Microsoft YaHei",微软雅黑,"MicrosoftJhengHei",华文细黑,STHeiti,MingLiu;
    // border-left: 10px solid $color;
    // border-right: 10px solid $color;
    height: 100vh;
    overflow-x: hidden;
    .top{
        padding: 20px 30px;
        display: flex;
        align-items: flex-end;
        height: 40px;
        width: 100%;
        .name{
            font-size: 28px;
            font-weight: 600;
        }
        .job{
            margin-left: 15px;
        }
    }
    .info{
        display: flex;
        flex-wrap: wrap;
        background: $gray;
        height: 100px;
        width: 100%;
        padding: 10px 15px;
        .info-item{
            width: 45%;
            margin: 5px;
            font-size: 13px;
            word-break: break-all;
            span{
                margin-left: 5px;
            }
        }
        .info-item:last-child{
            width: 100%;
        }
    }
    .box{
        .head{
            display: flex;
            width: 90%;
            margin: 20px auto;
            height: 30px;
            line-height: 30px;
            .title{
                background: $color;
                width: 120px;
                color: #fff;
                text-align: center;
            }
            .title2{
                background: $gray;
                width: calc(100% - 120px);
                padding-left: 15px;
            }
        }
        .body{
            width: 90%;
            margin: 0 auto;
            .content{
                word-break: break-all;
                text-indent:32px;
            }
            .point{
                font-weight: 600;
            }
            .point::before{
                content:'● ';
                font-size: 12px;
            }
        }
    }
}
</style>