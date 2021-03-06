# Cube Map - Reflection
In computer graphics, cube mapping is a method of environment mapping that uses the six faces of a cube as the map shape. The environment is projected onto the sides of a cube and stored as six square textures, or unfolded into six regions of a single texture. The cube map is generated by first rendering the scene six times from a viewpoint, with the views defined by a 90 degree view frustum representing each cube face.[1]

In the majority of cases, cube mapping is preferred over the older method of sphere mapping because it eliminates many of the problems that are inherent in sphere mapping such as image distortion, viewpoint dependency, and computational inefficiency. Also, cube mapping provides a much larger capacity to support real-time rendering of reflections relative to sphere mapping because the combination of inefficiency and viewpoint dependency severely limit the ability of sphere mapping to be applied when there is a consistently changing viewpoint. (https://en.wikipedia.org/wiki/Cube_mapping)

* Programmable and Non Programmable Renderer Versions
* Environment drawing, not working with Programmable Renderer

#### Dependencies:

* ofxCubeMap: https://github.com/andreasmuller/ofxCubeMap

#### Sources:
* https://forum.openframeworks.cc/t/cubemapping-in-glsl/5567/5
* https://github.com/McNopper/OpenGL/tree/master/Example


![alt tag](cubeMap.png)
