import { createCamera } from './components/camera'
import { createCube } from './components/cube'
import { createScene } from './components/scene'

import { createRenderer } from './systems/renderer'
import { Resizer } from './systems/Resizer'

// These variables are module-scoped: we can not access them
// from outside the module
let camera, renderer, scene

class World {
  constructor(container, sizes) {
    camera = createCamera(sizes)
    scene = createScene()
    renderer = createRenderer(container, sizes)

    const cube = createCube()
    scene.add(cube)

    const resizer = new Resizer(camera, renderer, sizes)
    resizer.onResize = () => {
      this.render()
    }
  }

  render() {
    renderer.render(scene, camera)
  }
}

export { World }
