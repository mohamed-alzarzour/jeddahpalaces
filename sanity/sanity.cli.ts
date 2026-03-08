import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'pch9lqf5',
    dataset: 'production'
  },
  deployment: {
    appId: 'pofqlq84v6ma7av84o9fhpg7',
    autoUpdates: true,
  }
})
