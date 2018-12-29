import {BaseApi} from '@/network/base/baseApi'
import {controller, get, post} from "@/network/base/decorator";

@controller('/webUser')
class UserApi extends BaseApi {
  constructor() {
    super(UserApi);
  }

  before(option) {

  }

  @get('/city')
  async getCity(option) {
    return await this.$ajax(option)
  }

  @get('/userInfo')
  async getUserInfo(option) {
    return await this.$ajax(option)
  }

  @post('/getTableData')
  async getTableData(option) {
    return await this.$ajax(option)
  }
}

export default new UserApi()
