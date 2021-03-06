
#version 330

#pragma include "lights.glsl"
#pragma include "material.glsl"


uniform mat4 modelViewProjectionMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 normalMatrix;

uniform int lightsNumber;

in vec4 v_eye;
in vec3 v_normal;
in vec4 v_color;

out vec4 fragColor;

void main() {
    
    fragColor = v_color;
    
}
