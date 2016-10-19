const ImageType = require('./itkImageType.js')
const Matrix = require('./itkMatrix.js')

const Image = function (imageType = new ImageType()) {
  this.imageType = imageType

  const dimension = imageType.dimension
  this.origin = new Array(dimension)
  this.origin.fill(0.0)

  this.spacing = new Array(dimension)
  this.spacing.fill(1.0)

  this.direction = new Matrix(dimension, dimension)
  this.direction.setIdentity()
}

module.exports = Image
