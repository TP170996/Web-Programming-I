function volumeOfRectanglarPrism(length,width,height)
{
    if(isNaN(length)||isNaN(width)||isNaN(height))
    {
        throw " Error:Enter a valid Number"
    }
    else if(length<1||width<1||height<1)
    {
        throw "Error:Enter valid number"
    }
    else
    {
        let volume=length*width*height;
        return volume;
    }
}

function surfaceAreaOfRectanglarPrism(length,width,height)
{
    if(isNaN(length)||isNaN(width)||isNaN(height))
    {
        throw "Error:Enter a valid Number"
    }
    else if(length<1||width<1||height<1)
    {
        throw "Error:Enter valid number"
    }
    else
    {
        let surfaceArea=length*width*height;
        return surfaceArea;
    }
}

function volumeOfSphere(radius)
{
    if(isNaN(radius))
    {
        throw "Error:Enter a valid Number"
    }
    else if(radius<1)
    {
        throw "Error:Enter valid number"
    }
    else
    {
        let volume=(4/3)*Math.PI*radius*radius*radius;
        return volume;
    }
}

function surfaceAreaOfSphere(radius)
{
    if(isNaN(radius))
    {
        throw "Error:Enter a valid Number"
    }
    else if(radius<1)
    {
        throw "Error:Enter valid number"
    }
    else
    {
        let surfaceArea=4*Math.PI*radius*radius;
        return surfaceArea;
    }
}

module.exports={volumeOfRectanglarPrism,surfaceAreaOfRectanglarPrism,volumeOfSphere,surfaceAreaOfSphere}