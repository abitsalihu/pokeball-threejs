import * as THREE from "three";

let instance = null;
export default class Experience {
  constructor(canvas) {
    this.canvas = canvas;

    if (instance) return instance;
    instance = this;

    window.experience = this;

    //? UTILS

    this.scene = new THREE.Scene();
  }

  resize() {}

  update() {}
}
