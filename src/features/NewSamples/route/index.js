const load = (view) => () => import(`features/NewSamples/ui/${view}.vue`)

const samp = {
  path: '',
  name: 'vue-advanced-cropper',
  meta: {
    title: 'Vue Advanced Cropper Sample'
  },
  component: load('AdvanceCropper')
}

export default {
  path: '/new-samples',
  component: () => import('layouts/MyLayout.vue'),
  children: [samp]
}
