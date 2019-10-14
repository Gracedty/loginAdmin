<template>
  <div class="dashboard-container">
    <div class="dashboard-text" style="color:#409EFF">欢迎你， {{ name }}</div>
    <div class="un-handle-layout">
      <div class="layout-title">快捷链接</div>
      <div class="un-handle-content">
        <el-row :gutter="20">
          <el-col :span="8">
            <router-link :to="{ path: '/form/index' }">
              <div class="un-handle-item">
                <span class="font-medium">公众号用户管理</span>
                <span style="float: right" class="color-danger"></span>
              </div>
            </router-link>
          </el-col>
          <el-col :span="8">
            <router-link :to="{ path: '/cutPrice/cutPrice' }">
              <div class="un-handle-item">
                <span class="font-medium">商品管理</span>
              </div>
            </router-link>
          </el-col>
          <el-col :span="8">
            <router-link :to="{ path: '/order/order' }">
              <div class="un-handle-item">
                <span class="font-medium">平台订单管理</span>
              </div>
            </router-link>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <router-link :to="{ path: '/order/zyborder' }">
              <div class="un-handle-item">
                <span class="font-medium">智游宝订单管理</span>
              </div>
            </router-link>
          </el-col>
          <el-col :span="8">
            <router-link :to="{ path: '/order/payorder' }">
              <div class="un-handle-item">
                <span class="font-medium">支付订单管理</span>
              </div>
            </router-link>
          </el-col>
          <el-col :span="8">
            <router-link :to="{ path: '/alioss/alioss' }">
              <div class="un-handle-item">
                <span class="font-medium">阿里云上传图片</span>
              </div>
            </router-link>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
         
          </el-col>
          <el-col :span="8">
          
          </el-col>
          <el-col :span="8">
            
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.app-container {
  margin-top: 40px;
  margin-left: 120px;
  margin-right: 120px;
}
.total-layout {
  margin-top: 20px;
}

.total-frame {
  border: 1px solid #DCDFE6;
  padding: 20px;
  height: 100px;
}

.total-icon {
  color: #409EFF;
  width: 60px;
  height: 60px;
}

.total-title {
  position: relative;
  font-size: 16px;
  color: #909399;
  left: 70px;
  top: -50px;
}

.total-value {
  position: relative;
  font-size: 18px;
  color: #606266;
  left: 70px;
  top: -40px;
}

.un-handle-layout {
  margin-top: 20px;
  border: 1px solid #DCDFE6;
}

.layout-title {
  color: #606266;
  padding: 15px 20px;
  background: #F2F6FC;
  font-weight: bold;
}

.un-handle-content {
  padding: 20px 40px;
}

.un-handle-item {
  border-bottom: 1px solid #EBEEF5;
  padding: 10px;
}

.overview-layout {
  margin-top: 20px;
}

.overview-item-value {
  font-size: 24px;
  text-align: center;
}

.overview-item-title {
  margin-top: 10px;
  text-align: center;
}

.out-border {
  border: 1px solid #DCDFE6;
}

.statistics-layout {
  margin-top: 20px;
  border: 1px solid #DCDFE6;
}
.mine-layout {
  position: absolute;
  right: 140px;
  top: 107px;
  width: 250px;
  height: 235px;
}
.address-content{
  padding: 20px;
  font-size: 18px
}

.color-danger {
  color: #F56C6C;
}

</style>
