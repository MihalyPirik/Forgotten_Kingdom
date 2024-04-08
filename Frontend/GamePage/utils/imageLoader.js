export async function GetSprite(name)
{
    const image = new Image()
    image.src='./assets/maincharacters/'+name+'.png'
    await image.decode()
    return image
}
export async function GetPortrait(name)
{
    const image = new Image()
    image.src='./assets/portaits/'+name+'.png'
    await image.decode()
    return image
}