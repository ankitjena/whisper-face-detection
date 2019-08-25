import { fetchImage, detectSingleFace, LabeledFaceDescriptors, FaceMatcher, env } from "face-api.js";
import { readFileSync } from "fs";
import fetch from 'node-fetch'

env.monkeyPatch({ fetch: fetch})

const main = async() => {
  const labels = ['aquib', 'shashwat', 'ankit']
  
  // const labeledFaceDescriptors = await Promise.all(
  //   labels.map(async label => {
  //     const imgurl = `/${label}.jpg`
  //     const img = await fetchImage(imgurl)
  
  //     const fullFaceDescription = await detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
  
  //     if(!fullFaceDescription) {
  //       throw new Error(`No faces detected in ${label}.jpg`)
  //     }
  
  //     const faceDescriptors = [fullFaceDescription.descriptor]
  //     return new LabeledFaceDescriptors(label, faceDescriptors)
  //   })
  // )
  
  
  const maxDescriptorDistance = 0.6
  // const faceMatcher = new FaceMatcher(labeledFaceDescriptors, maxDescriptorDistance)
  
  const testImage = await fetchImage('/aquib-test.jpg')
  // const testDescription = await detectSingleFace(testImage).withFaceLandmarks().withFaceDescriptor()
  
  // const result = faceMatcher.findBestMatch(testDescription.descriptor)
  // console.log(testDescription.descriptor)
  
  // console.log(result)
}

main().then(() => console.log("works"))