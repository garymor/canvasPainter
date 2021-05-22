function create(id,parent,width,height){
    let divWrapper = document.createElement('div');
    let canvasElem = document.createElement('canvas');
    parent.appendChild(divWrapper);
    divWrapper.appendChild(canvasElem);
    divWrapper.id = id;
    canvasElem.width = width;
    canvasElem.height = height;

    let ctx = canvasElem.getContext('2d');
    return {
        ctx,id
    };
}

function createAllColors(ctx){
    for(let i=0;i<6;i++){
        for(let j=0;j<6;j++){
            makeFunctionAsync(i,j,ctx) 
        }
    }
}

async function  makeFunctionAsync(i,j,ctx) {
    await new Promise ( (resolve) => setTimeout( () => {
        ctx.fillStyle = `rgb(
            ${Math.floor(255 - 42.5 * i)},
            ${Math.floor(255 - 42.5 * j)},
            0)`;
            ctx.fillRect(i*55,j*55,55,55);
            resolve('2');
            ctx.getTransform()
        },1000)
            )
    }
    



export {create,createAllColors}