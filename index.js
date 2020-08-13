window.addEventListener('DOMContentLoaded', function(){
            // get the canvas DOM element
            var canvas = document.getElementById('renderCanvas');

            // load the 3D engine
            var engine = new BABYLON.Engine(canvas, true);

    // createScene function that creates and return the scene
    var createScene = function () {
    // This creates a basic Babylon Scene object (non-mesh)
    var scene = new BABYLON.Scene(engine);
    scene.clearColor = BABYLON.Color3.Blue();

    // This creates and positions a free camera (non-mesh)
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);

    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    // Our built-in 'sphere' shape.
    var sun = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 2, segments: 32}, scene);
    var tower = BABYLON.MeshBuilder.CreateBox("box", {width:2, height:10, segments: 32}, scene);
    // the sphere position
    tower.position.y = 5;
    // the sun position
    sun.position.y = 50;
    sun.position.z = 25;
    sun.position.x = 10;

    sun.overlayColor = BABYLON.Color3.Yellow()
    tower.overlayColor = BABYLON.Color3.Gray()
    scene.getMeshByID("sphere").renderOverlay = true;
    scene.getMeshByID("box").renderOverlay = true;

    // Our built-in 'ground' shape.
    var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 12, height: 12}, scene);
    scene.getMeshByID("ground").renderOverlay = true;
    ground.overlayColor = BABYLON.Color3.Green()
    return scene;

};            // call the createScene function
            var scene = createScene();

            // run the render loop
            engine.runRenderLoop(function(){
                scene.render();
            });

            // the canvas/window resize event handler
            window.addEventListener('resize', function(){
                engine.resize();
            });
        });
