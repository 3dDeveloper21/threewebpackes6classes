import { PerspectiveCamera } from 'three'

function createCamera(sizes) {
  const camera = new PerspectiveCamera(
    75, // fov = Field Of View
    sizes.width / sizes.height, // aspect ratio
    0.1, // near clipping plane
    1000 // far clipping plane
  )

  // move the camera back so we can view the scene
  camera.position.set(0, 0, 5)

  return camera
}

export { createCamera }
