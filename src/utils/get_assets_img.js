export const getAssetURL = (iamge) => {
  return new URL(`../../assets/img/${iamge}`, import.meta.url).href
}


export default getAssetURL
