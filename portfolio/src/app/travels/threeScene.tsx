"use client"
import React, { useRef, useEffect } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/Addons.js"
import getStarfield from "./getStarfield"

const ThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Set up the scene, camera, and renderer
    const w = window.innerWidth
    const h = window.innerHeight
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(w, h)
    mountRef.current?.appendChild(renderer.domElement)

    const fov = 75
    const aspect = w / h
    const near = 0.1
    const far = 1000

    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    camera.position.z = 5

    const scene = new THREE.Scene()

    const earthGroup = new THREE.Group()
    earthGroup.rotation.z = (-23.4 * Math.PI) / 180
    scene.add(earthGroup)

    // Function to add a marker at specific coordinates
    function latLonToCart(latitude: number, longitude: number, radius: number) {
      const lat = latitude * (Math.PI / 180)
      const lon = longitude * (Math.PI / 180)

      const x = radius * Math.cos(lat) * Math.sin(lon)
      const y = radius * Math.sin(lat)
      const z = radius * Math.cos(lat) * Math.cos(lon)
      return new THREE.Vector3(x, y, z)
    }

    function addMarker(latitude: number, longitude: number, color: number) {
      const radius = 1.0 // Radius of the Earth model
      const markerPosition = latLonToCart(latitude, longitude, radius)

      // Create a sphere geometry for the marker
      const markerGeometry = new THREE.SphereGeometry(0.05, 16, 16)
      const markerMaterial = new THREE.MeshBasicMaterial({ color })

      const marker = new THREE.Mesh(markerGeometry, markerMaterial)
      marker.position.copy(markerPosition)
      earthGroup.add(marker)
    }

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.03

    const loader = new THREE.TextureLoader()
    loader.load(
      "/textures/Earth/8k_earth_daymap.jpg",
      (texture) => {
        texture.wrapS = THREE.RepeatWrapping
        texture.offset.x = 1.5708 / (2 * Math.PI)

        const geo = new THREE.IcosahedronGeometry(1.0, 12)
        const mat = new THREE.MeshStandardMaterial({ map: texture })
        const mesh = new THREE.Mesh(geo, mat)
        earthGroup.add(mesh)

        const parisLatitude = 1.3511663702673362
        const parisLongitude = 103.80704420193868

        const markerColor = 0xff0000 // Red color for the marker
        addMarker(parisLatitude, parisLongitude, markerColor)
      },
      undefined,
      (err) => {
        console.error("An error occurred loading the texture.", err)
      }
    )

    const hemilight = new THREE.HemisphereLight(0xffffff, 0x444444)
    scene.add(hemilight)

    const stars = getStarfield()
    console.log(stars)
    scene.add(stars)

    function animate(t = 0) {
      requestAnimationFrame(animate)
      earthGroup.rotation.y = t * 0.00001
      renderer.render(scene, camera)
      controls.update()
    }
    animate()

    renderer.render(scene, camera)

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      renderer.setSize(width, height)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }
    window.addEventListener("resize", handleResize)

    // Clean up on component unmount
    return () => {
      window.removeEventListener("resize", handleResize)
      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef}></div>
}

export default ThreeScene
