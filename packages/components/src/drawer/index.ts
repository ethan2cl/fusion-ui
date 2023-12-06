import { withInstall } from '@fusion-ui-vue/utils'
import Drawer from './src/index.vue'

export const FnDrawer = withInstall(Drawer, 'FnDrawer')
FnDrawer.name = 'FnDrawer'
export default FnDrawer
export * from './src/drawer'
export type DrawerInstance = InstanceType<typeof Drawer>
