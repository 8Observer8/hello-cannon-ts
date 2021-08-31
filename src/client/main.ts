// import * as CANNON from "cannon";
import "cannon";

function main()
{
    const physicsWorld = new CANNON.World();
    physicsWorld.gravity.set(0, -9.82, 0);

    console.log("gravity = ", physicsWorld.gravity);
    const outputElement = document.getElementById("output");
    outputElement.innerHTML = `gravity = (${physicsWorld.gravity})`;
}

// Debug
main();

// Release
// window.onload = () => main();
