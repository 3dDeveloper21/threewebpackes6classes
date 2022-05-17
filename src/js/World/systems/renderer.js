import { WebGLRenderer, sRGBEncoding, ACESFilmicToneMapping, PCFShadowMap } from 'three'

function createRenderer(container, sizes) {
  const renderer = new WebGLRenderer({
    canvas: container,
    antialias: true,
  })

  renderer.setSize(sizes.width, sizes.height)

  renderer.physicallyCorrectLights = true
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  // Output encoding
  renderer.outputEncoding = sRGBEncoding

  // Tone mapping
  renderer.toneMapping = ACESFilmicToneMapping
  renderer.toneMappingExposure = 2

  // Shadows
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = PCFShadowMap
  return renderer
}

export { createRenderer }
