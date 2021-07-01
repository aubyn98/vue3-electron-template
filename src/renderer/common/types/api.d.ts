import { createApp } from 'vue'
import type { ElMessage } from 'element-plus'
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $api: () => {}
    $message: typeof ElMessage
  }
}
