class Resizer {
  constructor(camera, renderer, sizes) {
    // Set initial size on load
    this.setSize(camera, renderer, sizes)

    window.addEventListener('resize', () => {
      // Set the size again if a resize  occurs
      this.setSize(camera, renderer, sizes)

      // Perform any custom actions
      this.onResize()
    })
  }
  setSize = (camera, renderer, sizes) => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(window.devicePixelRatio)
  }

  onResize() {}
}

export { Resizer }
