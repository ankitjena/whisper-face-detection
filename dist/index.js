"use strict";

var _faceApi = require("face-api.js");

var _fs = require("fs");

var _nodeFetch = require("node-fetch");

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_faceApi.env.monkeyPatch({ fetch: _nodeFetch2.default });

var main = async function main() {
  var labels = ['aquib', 'shashwat', 'ankit'];

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


  var maxDescriptorDistance = 0.6;
  // const faceMatcher = new FaceMatcher(labeledFaceDescriptors, maxDescriptorDistance)

  var testImage = await (0, _faceApi.fetchImage)('/aquib-test.jpg');
  // const testDescription = await detectSingleFace(testImage).withFaceLandmarks().withFaceDescriptor()

  // const result = faceMatcher.findBestMatch(testDescription.descriptor)
  // console.log(testDescription.descriptor)

  // console.log(result)
};

main().then(function () {
  return console.log("works");
});