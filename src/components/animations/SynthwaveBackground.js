import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const SynthwaveBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // Store the current ref value in a variable inside the effect
    const currentRef = mountRef.current;
    currentRef.appendChild(renderer.domElement);
    
    // Camera positioning
    camera.position.set(0, 6, 9);
    camera.lookAt(0, 0, 0);
    
    // Add a fog effect to the scene
    scene.fog = new THREE.Fog(0x0f0f1b, 5, 25);
    
    // Create the synthwave grid
    const gridSize = 40;
    const gridDivisions = 40;
    const gridGeometry = new THREE.PlaneGeometry(gridSize, gridSize, gridDivisions, gridDivisions);
    
    // Create a custom material for the grid with glowing lines
    const gridMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        topColor: { value: new THREE.Color("#ff2a6d") },
        bottomColor: { value: new THREE.Color("#05d9e8") }
      },
      vertexShader: `
        varying vec2 vUv;
        uniform float time;
        
        void main() {
          vUv = uv;
          // Add subtle vertex animation for wavy effect
          vec3 pos = position;
          pos.z += sin(pos.x * 0.5 + time) * 0.2;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 topColor;
        uniform vec3 bottomColor;
        varying vec2 vUv;
        
        void main() {
          // Create more dynamic grid with pulsing effect
          float gridX = smoothstep(0.95, 0.98, abs(sin(vUv.x * 40.0 - time * 0.2)));
          float gridY = smoothstep(0.95, 0.98, abs(sin(vUv.y * 40.0 - time * 0.1)));
          
          // Combine for grid effect
          float grid = max(gridX, gridY);
          
          // Color gradient from bottom to top
          vec3 color = mix(bottomColor, topColor, vUv.y + sin(time * 0.2) * 0.1);
          
          // Apply grid with glow effect
          if (grid > 0.0) {
            gl_FragColor = vec4(color, grid * (0.8 + sin(time) * 0.2));
          } else {
            discard;
          }
        }
      `,
      transparent: true,
      wireframe: false,
    });
    
    const grid = new THREE.Mesh(gridGeometry, gridMaterial);
    grid.rotation.x = -Math.PI / 2;
    grid.position.y = -0.1;
    scene.add(grid);
    
    // Create the synthwave sun
    const sunGeometry = new THREE.CircleGeometry(5, 64);
    const sunMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        varying vec2 vUv;
        
        void main() {
          vec2 uv = vUv * 2.0 - 1.0;
          float dist = length(uv);
          
          // Create a gradient for the sun
          float alpha = smoothstep(1.0, 0.5, dist);
          
          // Create the sun colors with pulsing effect
          float pulse = sin(time) * 0.05 + 0.95;
          vec3 innerColor = vec3(1.0, 0.4, 0.4) * pulse; // Pink
          vec3 outerColor = vec3(1.0, 0.1, 0.3) * pulse; // Darker pink
          
          vec3 color = mix(innerColor, outerColor, dist);
          
          gl_FragColor = vec4(color, alpha * 0.8);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide
    });
    
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    sun.position.set(0, 2, -15);
    scene.add(sun);
    
    // Add horizontal line for horizon effect
    const horizonGeometry = new THREE.PlaneGeometry(80, 0.1);
    const horizonMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xff2a6d,
      transparent: true,
      opacity: 0.8
    });
    const horizon = new THREE.Mesh(horizonGeometry, horizonMaterial);
    horizon.position.set(0, 0, -15);
    scene.add(horizon);
    
    // Add stars to the background
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 500;
    const starsPositions = new Float32Array(starsCount * 3);
    const starsSizes = new Float32Array(starsCount);
    
    for (let i = 0; i < starsCount; i++) {
      const i3 = i * 3;
      starsPositions[i3] = (Math.random() - 0.5) * 100;
      starsPositions[i3 + 1] = Math.random() * 50 + 5;
      starsPositions[i3 + 2] = (Math.random() - 0.5) * 100 - 10;
      starsSizes[i] = Math.random() * 2 + 0.5;
    }
    
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPositions, 3));
    starsGeometry.setAttribute('size', new THREE.BufferAttribute(starsSizes, 1));
    
    const starsMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        pixelRatio: { value: window.devicePixelRatio }
      },
      vertexShader: `
        attribute float size;
        uniform float time;
        uniform float pixelRatio;
        varying float vSize;
        
        void main() {
          vSize = size;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * pixelRatio * (300.0 / -mvPosition.z) * (sin(time + position.x) * 0.2 + 0.8);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying float vSize;
        
        void main() {
          vec2 xy = gl_PointCoord.xy - vec2(0.5);
          float ll = length(xy);
          if (ll > 0.5) discard;
          
          // Create a pulsing, glowing star
          float strength = 1.0 - ll * 2.0;
          vec3 color = mix(vec3(0.05, 0.8, 1.0), vec3(1.0, 0.2, 0.6), vSize / 2.5);
          gl_FragColor = vec4(color, strength);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);
    
    // Animation loop
    const clock = new THREE.Clock();
    
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      
      // Update uniforms
      gridMaterial.uniforms.time.value = elapsedTime;
      sunMaterial.uniforms.time.value = elapsedTime;
      starsMaterial.uniforms.time.value = elapsedTime;
      
      // Animate grid moving effect
      grid.position.z = (elapsedTime * 0.5) % 1;
      
      // Subtle camera movement
      camera.position.y = 6 + Math.sin(elapsedTime * 0.3) * 0.2;
      camera.position.x = Math.sin(elapsedTime * 0.2) * 0.5;
      camera.lookAt(0, 0, 0);
      
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      gridMaterial.uniforms.resolution.value.set(window.innerWidth, window.innerHeight);
      starsMaterial.uniforms.pixelRatio.value = window.devicePixelRatio;
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up function using the stored ref
    return () => {
      window.removeEventListener('resize', handleResize);
      if (currentRef && renderer.domElement) {
        try {
          currentRef.removeChild(renderer.domElement);
        } catch (e) {
          console.error("Error removing renderer: ", e);
        }
      }
      
      // Dispose of Three.js resources
      grid.geometry.dispose();
      gridMaterial.dispose();
      sunGeometry.dispose();
      sunMaterial.dispose();
      horizonGeometry.dispose();
      horizonMaterial.dispose();
      starsGeometry.dispose();
      starsMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 -z-10" />;
};

export default SynthwaveBackground;